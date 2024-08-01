---
title: "Immutable X SDK"
slug: "/immutable-x-sdk"
excerpt: "Install and configure the SDK"
sidebar_position: 1
---
The Immutable X SDK is a Javascript package created by Immutable to allow simple interfacing with Immutable X’s API. The primarily used packages are Components and the Immutable X Client.

The Immutable X Client is used for most backend operations, and the [Components](doc:components) is used for frontend, user-facing interactions.

The IMX Client ('ImmutableXClient') is a module wrapping the REST requests in a method call. Using this package, developers can make sure their calls are up to date with the latest API standards.

The Components provides a clean popup and UI to help users navigate through the final signing process with their wallets. While information about current market state and assets can be derived with web requests, the Components handles the more complicated stark signature signing most developers should not need to code. Using the Components Components also maintains a unified view for users, allowing them to be more comfortable during signing when using marketplaces powered by Immutable X.

Applications monitoring the status of the assets will use the IMX Client to retrieve data. Marketplace and applications relying on user interaction will use both packages.

## Setting up the SDK
For this tutorial we will assume Yarn is being used as the package manager. The following node modules need to be added to the project:
```bash
yarn add @imtbl/imx-sdk
```
## Importing the packages
The following imports are needed for the Components and IMX Client packages:
```javascript
import { ImmutableXClient, Components } from '@imtbl/imx-sdk';
```

## Setting the connection urls
Immutable X provides connection addresses for both the mainnet and testnet.
Here we will default to the mainnet for the examples, but show the testnet connection strings as well.
```javascript
const linkAddress = 'https://components.x.immutable.com';
const apiAddress = 'https://api.x.immutable.com/v1';

```
## Creating the Components objects
Once the Components and IMX Client are imported, they can be initialized. Note that the client library initialization is asynchronous.
```javascript
const components = new Components(linkAddress);

// IMX Client
const client = await ImmutableXClient.build({ publicApiUrl: apiAddress });
```
For more details, see the [Components](doc:components) docs and the [package on NPM](https://www.npmjs.com/package/@imtbl/imx-sdk).