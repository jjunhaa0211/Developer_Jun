---
title: "환영합니다."
slug: "/welcome"
excerpt: "The who, why and how of Immutable X"
sidebar_position: 1
---
안녕하세요.

[Immutable](https://immutable.com/#build-on-immutable) and [StarkWare](https://starkware.co/about-us/) partnered to create **Immutable X**, combining StarkWare's world-class layer-2 scaling knowledge with Immutable's deep understanding of the NFT space.

## Why Immutable X?
Currently, trading on the Ethereum network is broken. The network currently supports approximately 150,000 non-fungible token transactions per day at 30% network usage. 

Trades can fail on occasion, returning assets to owners instead of trading, and the time they take to process is inconsistent, sometimes taking upwards of an hour. This is not only annoying for users who are attempting to trade, it can also cause problems for developers building on the network. 

Additionally, developers are unable to mint NFTs sustainably, making it impossible for projects to properly fundraise to continue expansion and create more content for their users.

**[Learn more about Ethereum scalability](./ethereum-scalability.md)**

Our plan is for Immutable X to support **more than 200 million trades** per day while consuming **less than 30%** of Ethereum’s capacity.

Our goal is to make building games, applications and exchanges on Ethereum viable. Our goal is to make minting and trading Ethereum NFTs even easier than trading traditional digital assets.

## Why Ethereum? {#why-ethereum}
Immutable chose to build on Ethereum because it is the largest and most secure blockchain, with the greatest network effects.

Choosing Ethereum enables the deployment of [smart contracts](./introduction-smart-contracts.md) and decentralized applications (dApps) to be built and run without any downtime, fraud, control or interference from a third party.

**[Learn more about Ethereum](./core-concepts.md#ethereum)**

## How it works {#how-it-works}
Immutable X uses a ZK rollup: we take thousands of off-chain trades, generate a proof that these trades were all valid (i.e. the users who owned the assets signed the trades), and then publish that proof on-chain, where it is verified by a smart contract.

During this process, the on-chain user assets are held in the smart contract, and can only be released after a valid proof, including them, has been published in a batch.

**[Learn more about ZK rollups](./architecture-overview.md#zk-rollups)**