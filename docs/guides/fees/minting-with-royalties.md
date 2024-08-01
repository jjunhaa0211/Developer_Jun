---
title: "Minting with royalties"
slug: "/minting-with-royalties"
sidebar_position: 1
---
Royalties for a given asset are defined at the point of minting a new asset to the Immutable X protocol. Please ensure your [recipients are registered](doc:user-registration) before minting.

## Royalty fees for newly minted assets
Minting with royalties requires `@imtbl/imx-sdk` version that is `>= 1.1.3`.

To set up your `minter`, refer to this [minting example](https://docs.x.immutable.com/docs/minting-assets-1#minting-example).

The main difference between the example above and the one below is the object structure of the `mints`. The previous example does not support fees and will be deprecated and replaced with the example below.
```typescript
const result = await minter.mintV2([
  {
      "contractAddress": "0xc6185055ea9891d5d9020c927ff65229baebdef2",
      "royalties": [ // global fees
          {
              "recipient": "0xA91E927148548992f13163B98be47Cf4c8Cb3B16",
              "percentage": 2.5
          }
      ],
      "users": [
          {
              "etherKey": "0xc3ec7590d5970867ebd17bbe8397500b6ae5f690",
              "tokens": [
                  {
                      // ERC-721
                      "id": "1",
                      "blueprint": "my-on-chain-metadata",
                      "royalties": [ // override global fees on a per-token basis
                          {
                              "recipient": "0xc3ec7590d5970867ebd17bbe8397500b6ae5f690",
                              "percentage": 2.5
                          }
                      ],
                  }
              ]
          },
          {
              "etherKey": "0xA91E927148548992f13163B98be47Cf4c8Cb3B16",
              "tokens": [
                  {
                      // ERC-721
                      "id": "",
                      "blueprint": ""
                  }
              ]
          },
          ...
      ]
  }
]);
```
Response:
```json
// Returns
{
  [
    {
      "contract_address": string;
      "token_id": string;
      "tx_id": number;
    },
    {
      "contract_address": string;
      "token_id": string;
      "tx_id": number;
    },
  ....
   ]
}
```
*Note: Values are only used for indicating format*

## Important notes
`users.etherKey` represents a valid ethereum wallet address that the token will be minted to.

`id` The id for the asset on your system. This id is used in conjunction with the metadata endpoint provided during contract registration to fetch metadata associated with that asset.

`blueprint` is on chain metadata that will be included as part of the Layer 1 mint if the minted ERC-721 token is withdrawn from Immutable X onto Layer 1 Ethereum. Right now this can be any string as long as it is not empty.

You can specify the percentage up to 2 decimal places. Anything beyond that will be truncated to 2 d.p. This is to ensure that rounding up doesn't cause the sum of all constituent percentages to exceed 100%.

## Viewing the asset royalty fees

You can view the royalty information for a given asset via the [assets api](https://docs.x.immutable.com/reference/get_v1-assets-1). This will return the royalty recipient and fee percentage for each royalty associated with an asset.

If you require the fee breakdown, please upgrade to version `1.1.0` or higher. This also applies for the API which will omit the `fees` array in the result unless it exists for that order and the `include_fees` flag is appended as a query param. See the [API docs](https://docs.x.immutable.com/reference/get_v1-assets-1) for more info.