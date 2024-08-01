---
title: 'Personal inventory'
slug: '/personal-inventory'
excerpt: 'View account balances and manage assets'
sidebar_position: 3
---

Monitoring and interacting with a user’s account will require both the IMX client and the Components. Additional imports of type constants may also be needed for inventory requests.

```javascript title="Constants required for inventory requests"
import { ERC721TokenType, ETHTokenType } from '@imtbl/imx-sdk'
```

## ERC20 and IMX balances

Immutable X’s base token is Ethereum. Once deposited onto the platform it exists in three different states:

- **imx** - ETH deposited on Immutable X and is ready to be used to fill orders, trade, etc.
- **Preparing withdrawal** - ETH that has started the withdrawal process from Immutable X. It must wait until the next published signature to the main chain before moving to the withdrawable state.
- **Withdrawable** - ETH that is now withdrawable to another address on the main chain.

To retrieve a user’s balances use the following IMX client function:

```javascript
const balances = await client.getBalances({ user: address })
```

The _balances_ object will contain the amounts of all three states: imx, preparing_withdrawal, and withdrawable. Each value is returned as a BigNumber, a structure used to hold the many decimal places an ETH amount needs for display. The value is denominated in Wei, so a conversion may be necessary if trying to display the value as ETH. 1 ETH = 10^18 Wei.

:::info Ether to Wei
1 Ether = 1,000,000,000,000,000,000 Wei
:::

If using the ethers package, you can format the Wei value into ETH through a utilities call:

```javascript title="Wei to ETH"
import { ethers } from 'ethers'

// ...

let amountInEth = ethers.utils.formatEther(amountInWei)
```

## Deposits

In order to deposit into Immutable X, a user sends ETH from their wallet to the Immutable X contract. This ETH is now on the Layer 2 (L2) solution built by Immutable and stays in the contract until later withdrawn by the user. A Components call provides an easy interface for the deposit process:

```javascript
// Deposit ETH into IMX
components.deposit({
  type: ETHTokenType.ETH,
  amount: '0.01',
})
```

## Withdrawals

Withdrawing ETH from Immutable X is a two step process. As noted before, the ETH on the mainchain technically resides in the Immutable X contract.

A signed transaction needs to be sent on the L2 (Immutable X), preparing the ETH to be withdrawn from the contract. To prepare the withdraw, use the following Components function:

```javascript
components.prepareWithdrawal({
  type: ETHTokenType.ETH,
  amount: '0.01', //The amount of the token to withdraw
})
```

:::caution Avoiding gas price complaints
Withdrawing from Immutable X will cost the user a gas fee, so encouraging users to wait and group their withdrawals with larger amounts is recommended to avoid gas price complaints.
:::

There will be a time period between preparing the withdrawal, and the user being able to complete the withdrawal into their mainchain (L1) account. A simple way to monitor the withdrawal process is monitoring the user’s different account balances as shown in [Balances](#erc20imx-balances).

Once the ETH has moved into the _withdrawable_ state, the user can create the mainchain transaction to withdraw the ETH into their wallet. This is the part of the process requiring a gas fee, as the transaction is being published to the mainchain. To complete the withdrawal use the following Components function to guide the user through the process:

```javascript
components.completeWithdrawal({
  type: ETHTokenType.ETH,
})
```

## Transaction history

The Components provides a very simple way of showing a user’s history. Use the following call to display their history in the popup:

```javascript
// View transaction history
components.history({})
```

## User NFT assets

Displaying user assets is a common requirement for games and marketplaces using Immutable X. The IMX Client provides a quick way to get all the user’s assets:
[block:code]

```javascript
const assetsRequest = await client.getAssets({ user: address })
```

This request will retrieve all the user’s assets tracked by Immutable X limited only by the result set page size. If a user has more assets then the current request’s page size limit (currently 100), additional requests can be made with the cursor property to navigate through all the user’s assets.

```javascript
let assetCursor
let assets = []
do {
  let assetRequest = await client.getAssets({ user: address, cursor: assetCursor })
  assets = assets.concat(assetRequest.result)
  assetCursor = assetRequest.cursor
} while (assetCursor)
```

This technique will get you all the user’s assets at one time, but could be slow depending on the amount of assets the user owns. It is best to dynamically load the other results using a paging or unlimited scrolling technique to maximize performance.

## Filter owned assets

Most applications will want to filter the user’s assets in some way. Oftentimes only one collection’s assets are needed, or maybe only the assets on Immutable X (L2) are required to be shown. There are many ways the assets request can be filtered to minimize the data returned. Here is an example filtering on collection and layer 2 assets only:

```javascript
let assetsRequest = await client.getAssets({
  user: address,
  cursor: assetCursor,
  status: 'imx',
  collection: collectionAddress,
})
```

When displaying user assets, it is often necessary to show which ones are already listed. In order to return the sell orders along with the assets, set the _sell_orders_ flag in the request. Each asset will contain an orders object containing any orders explicitly for that asset. The example below shows how to add a property _isListed_ to the assets retrieved.

```javascript
let assetCursor
let assets = []
do {
  let assetRequest = await client.getAssets({
    user: address,
    cursor: assetCursor,
    status: 'imx',
    collection: collectionAddress,
    sell_orders: true,
  })
  assets = assets.concat(assetRequest.result)
  assetCursor = assetRequest.cursor
} while (assetCursor)

for (let asset of assets) {
  asset.isListed = false
  if (asset.orders?.sell_orders?.length > 0) {
    asset.isListed = true
  }
}
```

## Create a sell order

Once you have a user’s assets, use the Components to guide the user through selling an asset:

```javascript
async function sellAsset(asset, priceInEth) {
  let sellParams = {
    amount: priceInEth,
    tokenId: asset.id,
    tokenAddress: asset.token_address,
  }
  //Throws an error if not successful
  await components.sell(sellParams)
}
```

## Transfer assets

Another common use case, user transfers, is available through the Components. If a user wants to send a token to another Immutable X address, an order is not required. Instead, use the following code:

```javascript
async function transferERC721(asset) {
  await components.transfer({
    type: ERC721TokenType.ERC721,
    tokenId: asset.id,
    tokenAddress: asset.token_address,
    to: addressToSendTo,
  })
}
```
