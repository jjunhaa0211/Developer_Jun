---
title: "Showing orders from other marketplaces"
slug: "/showing-orders-from-other-marketplaces"
sidebar_position: 2
---
Immutable X has a shared orderbook. This means the response returned from `client.getOrders()` or the  `/v1/orders` [API](https://docs.x.immutable.com/reference#get_orders-1) can come from any marketplace on the Immutable X protocol. This helps promote liquidity. 

For backwards compatibility, the amount in `buy.data.quantity` is now fee-inclusive for orders with fees. 

**Note:** Fees breakdown is not included by default in older versions of the Components for backwards compatibility. If you require the fee breakdown, please upgrade to version `1.1.0` or higher. This also applies for the API which will omit the `fees` array in the result unless it exists for that order and the `include_fees` flag is appended as a query param. See the [API docs](https://docs.x.immutable.com/reference#get_orders-1) for more info.
```json
{
  "result": [
    {
      "order_id": 488,
      "status": "active",
      "user": "",
      "sell": {
        "type": "ERC721",
        "data": {
          "id": "",
          "token_address": "",
          "quantity": "1",
          "properties": {
            "name": "",
            "image_url": "",
            "collection": {
              "name": "Gods Unchained",
              "icon_url": null
            }
          }
        }
      },
      "buy": {
        "type": "ETH",
        "data": {
          "decimals": 18,
          "quantity": "1200000000000000"
        }
      },
      "fees": [
        {
          "type": "royalty",
          "address": "",
          "amount": "200000000000000",
          "token": {
            "type": "ETH/ERC20",
            "data": {
              "decimals": 18,
              "contract_address": ""
            }
          }
        }
      ],
      "amount_sold": null,
      "expiration_timestamp": "2120-08-25T04:00:00Z",
      "timestamp": "2021-08-25T04:33:19.85441Z",
      "updated_timestamp": "2021-08-25T04:33:19.85441Z"
    }
  ],
  "cursor": "...",
  "remaining": 0
}
```
*Note: Values are only used for indicating format*