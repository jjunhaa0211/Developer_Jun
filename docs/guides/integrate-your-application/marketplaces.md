---
title: 'Marketplaces'
slug: '/marketplaces'
excerpt: 'Manage buy and sell orders'
sidebar_position: 4
---

As an exchange platform, Immutable X provides all the features needed to create a marketplace for the assets created and stored on the platform. Once listings are created from user accounts, it is often common to have a separate marketplace section to show all the current orders.

## Orders

Orders on Immutable X all include a buy and sell side. To fill or partially fill an order, an order with the opposite buy and sell tokens is created and sent to Immutable X. It is important to note there are different _statuses_ an Immutable X order can have:

- **Active** - Order is valid and can be filled or partial filled.
- **Filled** - Order is completed and the asset(s) have been transferred.
- **Cancelled** - Order has been cancelled and no longer available to fill.
- **Inactive** - Order is rejected, and is in that state while the system waits to receive a corrective transaction(s) to the original one. This can occur if either side no longer has the tokens available to trade.

## Listing orders

Showing orders, like assets, is best accessed by IMX Client. Usually when making a request for orders you filter on status. The following call will retrieve all the active orders for assets from a specific collection (paged):

```javascript
const ordersRequest = await client.getOrders({
  status: 'active',
  sell_token_address: collectionAddress,
})
```

:::info Order sides
Orders have a buy and a sell side. When sorting and filtering, remember that each side has its own filtering parameters.
:::

## Sort orders

Most likely the orders retrieved should be shown in a specific order. Either by token name, price, date created, etc. Adding a sort and direction to the orders request is simple:

```javascript
//Sort by price, lowest to highest
const ordersRequest = await client.getOrders({
  status: 'active',
  sell_token_address: collectionAddress,
  order_by: 'buy_quantity',
  direction: 'asc',
})
```

## Filter orders

Orders can be filtered on multiple properties, but the most common use cases are filtering on asset name and asset metadata. The following shows asset name filtering for orders, often used by a search bar component:

```javascript
const ordersRequest = await client.getOrders({
  status: 'active',
  sell_token_address: collectionAddress,
  sell_token_name: tokenName,
})
```

Filtering by metadata is more complicated. The metadata filter accepts a JSON string defining an object containing the property filters. Each filter property is an array containing the value of the property to filter on. Each property name must match exactly.

The following example shows how to filter Gods Unchained Card orders for a Boost Walker card (proto 55) with a quality of Shadow or Gold:

```javascript
const ordersRequest = await client.getOrders({
  status: 'active',
  sell_token_address: '0xacb3c6a43d15b907e8433077b6d38ae40936fe2c',
  sell_metadata: '{"proto":["55"],"quality":["Shadow","Gold"]}',
})
```

**Note:** For calls to the API, metadata filters need to be encoded:

```bash
GET https://api.x.immutable.com/v1/assets?collection='0xacb3c6a43d15b907e8433077b6d38ae40936fe2c'&metadata=%7B%22proto%22%3A%5B%2255%22%5D%2C%22quality%22%3A%5B%22Shadow%22%2C%22Gold%22%5D%7D
```

:::info Metadata Notes
Depending on how the asset metadata is configured, it may include the name as well. However, by default, every asset has a name property outside of the metadata and is the safer choice for filtering. Combining both the name and metadata filters together works as well
:::

## Pagination

Orders requests also return a cursor, the same as assets. Look at the assets cursor example in [User NFT Assets](./personal-inventory.md#user-nft-assets) for an example of pagination with a cursor.

## Fill an order

To fill an existing order, use the Components to guide the user through the signing process. Just call buy with the order's ID:

```javascript
await components.buy({ orderIds: [order.order_id] })
```
