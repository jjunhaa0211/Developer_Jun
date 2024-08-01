---
title: "Collection sample"
slug: "/collection-sample"
excerpt: "Code example of a sample collection"
sidebar_position: 5
---
## Code samples to work with a sample Collection
```javascript
//ImmutableXConnection.js
//Sample Immutable X functions for collection interaction

import { ImmutableXClient, Components, ERC721TokenType, ETHTokenType } from '@imtbl/imx-sdk';

const linkAddress = 'https://link.x.immutable.com';
const apiAddress = 'https://api.x.immutable.com/v1';
// Ropsten Testnet
//const linkAddress = 'https://link.ropsten.x.immutable.com';
//const apiAddress = 'https://api.ropsten.x.immutable.com/v1';

//The token address for the collection to be monitored. Currently set to Gods Unchained
const COLLECTION_ADDRESS = '0x0e3a2a1f2146d86a604adc220b4967a898d7fe07';

const components = new Components(linkAddress);
const client = await ImmutableXClient.build({ publicApiUrl: apiAddress });

const WALLET_ADDRESS = 'WALLET_ADDRESS';
const STARK_PUBLIC_KEY = 'STARK_PUBLIC_KEY';

//////////////////////////////////////////////////////////////////////////////
//////////////////////// User Account Management /////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//Creates or logs a user into their Immutable X account via web3 wallet
export async function setupAndLogin() {
   const { address, starkPublicKey } = await components.setup({});
   localStorage.setItem(WALLET_ADDRESS, address);
   localStorage.setItem(STARK_PUBLIC_KEY, starkPublicKey);
}

//Remove the local storage wallet address
export function logout() {
   localStorage.removeItem('WALLET_ADDRESS');
}

//Get the user balances
export async function getUserBalances() {
   const address = localStorage.getItem('WALLET_ADDRESS');
   return await client.getBalances({ user: address });
}

//Deposits ETH into Immutable X
export async function depositEth(amountInEth) {
   await components.deposit({
      type: ETHTokenType.ETH,
      amount: amountInEth
   });
}

//Starts the withdrawal process from Immutable X
export async function prepareWithdrawal(amountInEth) {
   await components.prepareWithdrawal({
      type: ETHTokenType.ETH,
      amount: amountInEth
   });
}

//Finishes the withdrawal process from Immutable X
//Must wait for user balance to have ETH in the withdrawable state 
export async function completeWithdrawal() {
   await components.prepareWithdrawal({
      type: ETHTokenType.ETH
   });
}

//Show user history
export async function showUserHistory() {
   components.history({});
}

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////// Asset Management /////////////////////////////
//////////////////////////////////////////////////////////////////////////////

/**
 * Get the user's assets
 * @param {string} assetCursor - optional cursor parameter 
 * @returns Object containing the assets and a cursor if more assets remain to be retrieved
 */
export async function getUserAssets(assetCursor) {
   const address = localStorage.getItem('WALLET_ADDRESS');
   const assetsRequest = await client.getAssets({ user: address, cursor: assetCursor, status: 'imx', collection: COLLECTION_ADDRESS });
   return { assets: assetsRequest.result, cursor: assetsRequest.cursor };
}

//Opens the Components popup to sell an asset as the specified price
export async function sellAsset(asset, priceInEth) {
   let sellParams = { amount: priceInEth, tokenId: asset.id, tokenAddress: asset.token_address };
   //Throws an error if not successful
   await components.sell(sellParams);
}

//Transfers an asset to another address
export async function transferERC721(asset, addressToSendTo) {
   await components.transfer({
      type: ERC721TokenType.ERC721,
      tokenId: asset.id,
      tokenAddress: asset.token_address,
      to: addressToSendTo
   });
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////// Marketplace Management /////////////////////////////
//////////////////////////////////////////////////////////////////////////////

/**
 * Get the cheapest active orders for the collection
 * @param {*} ordersCursor - optional cursor parameter 
 * @param {*} metadata - optional JSON string metadata to filter on 
 * @returns Object containing the cheapest orders and a cursor if more orders remain
 */
export async function getCheapestSellOrders(ordersCursor, metadata) {
   const ordersRequest = await client.getOrders({
      cursor: ordersCursor,
      status: 'active',
      sell_token_address: COLLECTION_ADDRESS,
      sell_metadata: metadata,
      order_by: 'buy_quantity',
      direction: 'asc'
   });
   return { orders: ordersRequest.result, cursor: ordersRequest.cursor };
}

//Opens the Components popup to complete an order
export async function fillOrder(order) {
   await components.buy({ orderId: order.order_id });
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
```