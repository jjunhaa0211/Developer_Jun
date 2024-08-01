---
title: "Core Concepts"
slug: "/core-concepts"
excerpt: "Ethereum blockchain and Immutable X key concepts"
sidebar_position: 2
---
This page is a work-in-progress overview of some key concepts related to the Ethereum blockchain and Immutable X. 

We’re actively working on new explanations to help newcomers understand the technology. If there’s something you’re wondering about that we haven’t covered yet, scroll to the bottom of this page where you can submit feedback on the helpfulness of this article. 
:::info Rate the docs
Got a spare 3 minutes? Take the *Dev Docs Experience Survey* to provide feedback on what it's been like using this site. Your input will help us fix what matters most first.

**[Take the survey](https://forms.gle/zYbUhjNWsVvt6G4v7)**

:::
## Ethereum
The Ethereum blockchain, launched in 2015, builds on the decentralized and distributed architecture of the Bitcoin blockchain, with one key difference: smart contracts. Ethereum is an open-source software platform, designed to enable developers to build and deploy [dApps](#dapps). The Ethereum network’s cryptocurrency, Ether, is required to run dApps. 

## Ether
Ether (ETH) is the main token of the Ethereum blockchain. As Ethereum’s native currency, ETH is used as gas for transactions on the network. A certain amount of ETH must be spent for every transaction that occurs on the Ethereum network.  

## Gas
In cryptography, gas refers to the computational effort required to execute operations on the blockchain. A gas fee is required to successfully conduct a transaction or execute a smart contract on a blockchain platform.

Priced in small fractions of ETH, gas is used to allocate resources of the Ethereum Virtual Machine (EVM) so that smart contracts can self-execute in a secure, yet decentralized, way.

## Smart contracts
A smart contract is basically a program that runs on the Ethereum blockchain. These self-executing contracts facilitate, verify, and enforce specific functions on the network, and they do it with transparency and immutability; contracts cannot be edited once deployed. 

Smart contracts also allow for the creation of digital assets (NFTs) that are programmable and capable of executing unique and specific functions according to the contract’s code.

## dApps
dApp is the abbreviated term for decentralized application. DApps are programs that perform different activities via smart contracts, independent of any central network or platform. Just like the apps on your smart device, there are dApps for many different uses, for example: decentralized cryptocurrency exchanges; social media networks; marketplaces for digital artwork, and much more.

## Non-fungible tokens
Non-fungible tokens (NFTs) use the ERC-721 [token standard](#token-standards), designed to help developers tokenize the ownership of any type of arbitrary data. While NFTs can be linked with physical items, NFTs as they relate to Immutable X can be thought of as a certificate of ownership of a digital asset that is identifiably unique and limited in quantity. 

The true value of an NFT is it allows the buyer to own the original item, with a smart contract transaction serving as proof-of-ownership. In recent years, non-fungible tokens have spawned new types of collectible, digital assets associated with blockchain-based games. A fascinating, early example of this is [CryptoKitties](https://www.cryptokitties.co/), launched on Ethereum in 2017. 

A second example is [Axie Infinity](https://axieinfinity.com/), another Ethereum-based, play-to-earn game launched in 2018. In it, players can earn one of two ERC-20 tokens by battling other players and completing quests, but they can also breed Axies to generate new, unique Axies which are owned and managed through the use of ERC-721 tokens. These Axie NFTs can then be bought and sold on the [Axie Infinity marketplace](https://marketplace.axieinfinity.com/).

## Ethereum wallets
A cryptocurrency wallet enables the storage of public and private keys. The use of these keys allows people to send, receive and also monitor their blockchain-based assets. Wallets can be user-controlled or deployed as smart contracts. Ethereum wallets are applications that let you interact with your Ethereum account. [Learn more](https://ethereum.org/en/wallets/). 

## Token standards
Tokens on the blockchain are very similar to tokens in the physical world. Travel tickets, membership cards, gift vouchers and paper money or coins are all examples of tokens. On the Ethereum blockchain, a token that represents currency is created by writing a smart contract that complies with the ERC-20 token standard. 

ERC stands for *Ethereum Request for Comment* and is an official protocol for proposing improvements to the Ethereum network. The two Ethereum token standards applicable to Immutable X are ERC-20 and ERC-721:

**ERC-20**
- ERC-20 tokens are fungible (interchangeable). A good example is to think of two one-dollar bills. Each dollar bill is different but their value is exactly the same, so it doesn’t matter which one you have ownership of.
- The ERC-20 token standard allows developers to create any number of tokens within one smart contract.

**ERC-721**
- ERC-721 tokens are non-fungible. The unique properties of the assets that they represent mean that they have different values. 
- The ERC-721 token standard focuses on critical aspects for deciding ownership and approaches for the creation, destruction, and transfer of tokens. 

Visit Ethereum.org to learn more about:
- [ERC-20 token standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
- [ERC-721 token standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/)