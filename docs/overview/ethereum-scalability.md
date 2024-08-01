---
title: "Ethereum scalability"
slug: "/ethereum-scalability"
excerpt: "Immutable X's solution for Ethereum scalability issues"
sidebar_position: 3
---
Scalability refers to a blockchain network's ability to support high transactional throughput and future growth. It’s critical because it represents the only way for a blockchain network to reasonably compete with the rapid settlement times of centralized platforms. 

Everyone who uses, mints or trades NFTs on Ethereum knows that it is slow. The main contributing factor is the need for every node to process each and every transaction on the network. Unless resolved, transaction congestion will continue to rise and lead to long wait times for all users.

High network demand can also affect gas fee consistency. Currently, gas prices are set by demand for the network which means that fees can fluctuate significantly depending on the time of day and the volume of transactions passing over the network. It makes it nearly impossible to predict how much each transaction will cost.

With high gas fees, there is a likelihood of very low liquidity in the NFT market, as a single transaction can cost more than the value of the NFT. This is a serious blocker for growth in the NFT market.

# Layer 1 versus layer 2 

Layer 1 (L1) refers to a blockchain, while layer 2 (L2) refers to a network or technology that operates in conjunction with L1 to improve its scalability and efficiency. Ethereum is a layer 1 blockchain.

Layer 1 scaling solutions augment the base layer of the blockchain protocol itself in order to afford scalability. Layer 1 solutions change the rules of the protocol in order to increase transaction capacity and speed, while managing more users and data. Layer 1 scaling solutions can, for example, increase the amount of data contained in each block, or accelerate the rate at which blocks are confirmed, to increase overall network throughput.

Layer 2 refers to a network or technology that operates on top of an underlying blockchain protocol. This category of scaling solutions requires shifting a portion of a blockchain protocol’s transactional burden to an adjacent system architecture, which then handles the brunt of the network’s processing and only subsequently reports back to the main blockchain to finalize its results, improving its scalability and efficiency. 

By abstracting the majority of data processing to auxiliary architecture, the base layer blockchain becomes less congested and ultimately more scalable.

## Existing layer 1 solutions 
While the solutions do address the scalability issue to some degree and offer some improvements, they do not completely solve the scalability issues raised and experienced. Existing solutions include: 

## Sharding
Sharding involves dividing a chain state into smaller partitions called shards. Nodes within a shard must process all transactions that originate in that shard. By reducing the number of nodes that must process each transaction, overall network throughput can be improved. However the issues that can arise with sharding are the ‘single point of failure’, which means corruption of shard due to network/hardware/system problems causes failure of the entire table. 
 
## Side chains
Side chains have their own consensus mechanism meaning they don't inherit security from mainnet, and are therefore far less secure, meaning valuable assets can be stolen. Side chains are also not **truly** scalable; they are heavily constrained at the upper limits as security and censorship risks continue to increase with volume. They also offer poor liquidity, lacking interoperability with layer 1. 

## Ethereum PoS Merge
The Ethereum Merge to Proof of Stake (Pos), previously known as Eth2.0, is a signficant consensus mechanism update scheduled to take place in Q3 2022. The move to Proof of Stake will see significant reduction in energy usage, uniform block time, more resilient network and build the foundation for sharding to be implemented (https://ethereum.org/en/upgrades/merge/). However the Merge itself does not scale the network in terms of transaction processing capabilities, this will be addressed in the sharding update scheduled for much later (2023 and beyond).

Even after the Merge and Sharding are implemented on Ethereum, layer 2 will still be the solution to provide real scale, read the Ethereum foundation's vision on layer 2s here (https://ethereum.org/en/layer-2/).

# Existing layer 2 solutions

## State channels
State channels are a general-purpose scaling solution that are useful in interactions between a defined number of users in a closed system. State channels require an opening and closing transaction on-chain, but all the intermediate states are sent directly between the parties. Only a proof is submitted to the main chain after the transactions are processed as off-chain. 

The key issue with state channels is that they require of all participants involved in order to complete the final on-chain transaction. The participants can use someone to represent them if they go offline, but this third-party could be bribed or attacked (particularly if one entity is fulfilling this function for the entire ecosystem). This limits both the security and scalability of state channels. 

## Plasma
Plasma is another off-chain scaling technique that relies on off-chain transactions (in the child chains) with minimal interactions with the main chain. However, withdrawals from the plasma chain can take up to 2 weeks, as there is a requirement for a challenge period (‘exit game’) where users can report fraud. This presents a significant disadvantage and dramatically impacts the user experience of the system.

## Rollups
Rollups, like the name suggests, “roll up” large numbers of transactions into a big batch, then generate a “proof” for that batch. This proof, rather than each individual transaction, is then posted on mainnet. Rollups are the latest of the scaling technologies and are the subject of significant excitement for everyone involved in Ethereum. 

Rollups perform transaction executions outside the main Ethereum chain (layer 1), but post transaction data on layer 1. As transaction data is included on a layer 1 block, this allows rollups to be secured by layer 1, inheriting Ethereum's security properties. Performing execution outside of layer 1, is a defining characteristic of rollups.

### Optimistic rollups
Optimistic rollups are “optimistic” because they assume that the proof provided for each transaction batch is valid. 

During a pre-defined challenge period (usually 1-2 weeks), anyone can challenge the submitted proof and assert fraud. These are therefore called ‘fraud proofs'. The advantage of optimistic rollups is that they easily support general computation: you will be able to copy/paste your mainnet Solidity code. However, they have significant limitations for scaling NFTs. 

Firstly, there is no possibility for fast NFT withdrawals. Taking your NFT out of the system can require a 1-2 week wait. Secondly, if an optimistic rollup is very successful and contains a significant amount of value, it can become a target for attacks, as the cost of stealing funds from the optimistic rollup is unrelated to the size of the potential theft; a penalty for the growth that we and others expect in the NFT ecosystem.

### Zero knowledge rollups
Zero knowledge rollups, also known as ZK-rollups, bundle or "roll up" hundreds of transfers off-chain and generate a cryptographic proof, known as a SNARK (Succinct Non-interactive ARgument of Knowledge) or STARK (Scalable Transparent ARgument of Knowledge).

ZK-rollups use “validity proofs” rather than the fraud proofs described above, using either SNARKs or STARKs and plenty of complex mathematics to prove the validity of the transactions in the rollup. Using validity proofs means that once a proof has been accepted on-chain, users have immediate confirmation that those transactions were valid and are now immutable. 

In an NFT context, this solves both the problems identified with optimistic rollups above: users can withdraw immediately and no-one is able to attack the system. In terms of scale, ZK-rollups have been able to reach speeds of thousands of transactions per second and can reach even higher limits in future. 

The current disadvantage of ZK-rollups is general computation. This is because it is more challenging to port smart contract logic directly into the rollup, meaning there is only limited functionality available e.g. transfers and trades. This challenge is rapidly being addressed. 

# The Immutable X solution 
The NFT ecosystem desperately needs liquidity and scalability. With Immutable X, we’re offering that scalability to everyone without forcing applications or users to compromise on the security of their assets. When comparing scaling solutions, the key things we wanted were:
* Unlimited scalability
* Instant transaction confirmation and mainstream-quality UX
* No compromise on user security
* Retaining access to Ethereum’s ecosystem and network effects

This is why Immutable X is built as a ZK-rollup in partnership with [StarkWare](https://starkware.co/). We chose the ZK-rollups because it is the only solution capable of scale without compromise. This means whenever you mint or trade an NFT on Immutable X, you pay zero gas, and the validity of all transactions are directly enforced by Ethereum’s security using zero-knowledge proofs -- the first “layer 2” for NFTs on Ethereum. 


**References**
1. ZK & Optimistic Rollup - https://ethereum.org/en/developers/docs/scaling/layer-2-rollups/#zk-rollups
2. Layer 1, Layer 2 and Layer 2 Scaling - https://www.gemini.com/cryptopedia/blockchain-layer-2-network-layer-1-network#section-layer-1-scaling-solutions
