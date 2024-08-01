---
title: 'Components'
slug: '/components'
---

For context, read our [overview of the Immutable X SDK](doc:immutable-x-sdk).

## Components usage

The Components is used for frontend, user-facing interactions.

```typescript
import { Components, ETHTokenType } from '@imtbl/imx-sdk'

async function sdkExample() {
  const components = new Components('https://components.ropsten.x.immutable.com')

  // Register user, you can persist address to local storage etc.
  const { address } = await components.setup({})
  localStorage.setItem('address', address)

  // Deposit ETH into IMX
  components.deposit({
    type: ETHTokenType.ETH,
    amount: '0.01',
  })

  // View transaction history
  components.history({})

  // Create a sell order for token id 123 for 0.01 ETH
  components.sell({
    amount: '0.01',
    tokenId: '123',
    tokenAddress: '0x2ca7e3fa937cae708c32bc2713c20740f3c4fc3b',
  })

  // Cancel a sell order
  components.cancel({
    orderId: '1',
  })

  // Create a buy flow:
  components.buy({
    orderIds: ['1', '2', '3'],
  })

  // Prepare withdrawal, you will need to wait some time before completing the withdrawal
  components.prepareWithdrawal({
    type: ETHTokenType.ETH,
    amount: '0.01',
  })

  // Complete withdrawal
  components.completeWithdrawal({
    type: ETHTokenType.ETH,
  })
}
```

## API client usage

The API client is a direct mapping to the REST methods documented here: https://docs.x.immutable.com/reference

```typescript
import { ImmutableXClient } from '@imtbl/imx-sdk'

async function libExample() {
  const client = await ImmutableXClient.build({
    publicApiUrl: 'https://api.ropsten.x.immutable.com/v1',
  })
  const address = localStorage.getItem('address')

  if (address) {
    const balances = await client.getBalances({ user: address })
    const orders = await client.getOrders()
    const order = await client.getOrder({ orderId: 1 })
    const assets = await client.getAssets({
      user: address,
    })
  }
}
```
