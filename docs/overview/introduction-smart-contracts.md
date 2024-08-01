---
title: "Smart contracts"
slug: "/introduction-smart-contracts"
excerpt: "An introduction to smart contracts"
sidebar_position: 4
---
If you're new to smart contract development, this is the place to start. We have smart contract templates on GitHub and this article covers the basics, as well as smart contract requirements for integrating with Immutable X. 

If you are planning to mint assets or launch a collection of NFTs on Immutable X Marketplace, you need a smart contract. You don’t need a smart contract for building a marketplace or block explorer. 

# The basics
A smart contract is simply a program that runs on the Ethereum blockchain. It’s a collection of code (its *functions*) and data (its *state*) that resides at a specific address on the blockchain. It’s similar to a mobile application that runs on iOS or Android, but unlike most of the apps on your smartphone, a smart contract has an address that can easily be looked up on a block explorer such as etherscan.

Currently, the most popular language for writing smart contracts on Ethereum is Solidity, which was created by the [Ethereum Foundation](https://ethereum.org/en/). If you have experience with Javascript, C++, Python, or other object-oriented scripting languages, you should find Solidity easy enough to understand. 

Here's an annotated, Hello World example of a smart contract:
```solidity title="HelloWorld.sol"
// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity ^0.5.10;
​
// Defines a contract named `HelloWorld`.
// A contract is a collection of functions and data (its state).
// Once deployed, a contract resides at a specific address on the Ethereum blockchain.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/structure-of-a-contract.html
contract HelloWorld {
​
    // Declares a state variable `message` of type `string`.
    // State variables are variables whose values are permanently stored in contract storage.
    // The keyword `public` makes variables accessible from outside a contract
    // and creates a function that other contracts or clients can call to access the value.
    string public message;
​
    // Similar to many class-based object-oriented languages, a constructor is
    // a special function that is only executed upon contract creation.
    // Constructors are used to initialize the contract's data.
    // Learn more: https://solidity.readthedocs.io/en/v0.5.10/contracts.html#constructors
    constructor(string memory initMessage) public {
        // Accepts a string argument `initMessage` and sets the value
        // into the contract's `message` storage variable).
        message = initMessage;
    }
​
    // A public function that accepts a string argument
    // and updates the `message` storage variable.
    function update(string memory newMessage) public {
        message = newMessage;
    }
}

```
## ERC-721 standard
The information on this page is specific to smart contracts for ERC-721 tokens, commonly known as [non-fungible tokens](./core-concepts.md#non-fungible-tokens) (NFTs). NFTs allow you to tokenize ownership of any arbitrary data and represent a unique digital asset on the blockchain. The ERC-721 standard outlines a set of common rules that all tokens can follow on the Ethereum network to produce expected results.

[Token standards](./core-concepts.md#token-standards) primarily stipulate the following characteristics about a token:
* How is ownership decided?
* How are tokens created?
* How are tokens transferred?
* How are tokens burned?

The ERC-721 standard is provided to you as an interface that your NFT contract can inherit functions from, or override for custom implementations.

Below we’ve defined a very simple NFT. The constructor initializes the contract name as **Doggo** and the token symbol as **DOG**. Although *very* basic, this is a perfectly valid NFT inheriting all the functions from the ERC-721 base contract, sourced from [OpenZeppelin](https://docs.openzeppelin.com/openzeppelin/).
```solidity title="Doggo.sol"
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
​
contract Doggo is ERC721 {
  constructor() public ERC721("Doggo", "DOG") {}
}

```
## Metadata
Now that we have an NFT, we can define some on-chain metadata, which refers to properties or characteristics that you want to set for your NFT and store within the smart contract itself.
```solidity title="MyNFT.sol"
contract MyNFT is ERC721 {
  mapping(uint256 => string) public idToName;
​
  function setName(uint256 tokenId, string _name) public {
    idToName[tokenId] = _name
  }
}
```
The `idToName` mapping is stored on-chain and is available for anyone to read from the smart contract. You can set on-chain metadata properties like this through a public function, which means that the name for any token can be changed by anyone sending a transaction calling the `setName` function. 

You can set immutable properties for your NFT if you don't expose a way to change it, for example, setting the name at the time of minting. However, there are costs associated with storing data on the blockchain. Operations that involve writing to the blockchain, like the `setName` example above, are relatively expensive for the sender of the transaction. 

Read more about on-chain versus off-chain metadata, and data storage, in our [minting guide](doc:minting-on-immutable-x#on-chain-versus-off-chain).

# Integration requirements
A crucial part of building on Immutable X is having a Layer 1 (L1) Ethereum smart contract, which is required for minting assets that can be withdrawn from Immutable X on Layer 2 (L2). 

For a smart contract to work with Immutable X, we need an implementation of a `mintFor` function, which is what our Stark contract calls at the time of withdrawing a minted token from L2 to L1. StarkEx is the L2 scalability solution used by Immutable X. 

**[Read a high-level overview of the StarkEx service](https://docs.starkware.co/starkex-v3/overview)**

There is no smart contract interaction at the time of minting on L2, although the minted token will have a L1 representation, token ID, and immutable metadata. When minting on Immutable X, you will give us the token ID, which is the L1 token ID representing the token in your smart contract. You also have to provide a [blueprint for each token](doc:minting-on-immutable-x#metadata-blueprint). The blueprint represents the immutable, [on-chain metadata](doc:minting-on-immutable-x#on-chain-versus-off-chain) of the NFT that will be passed (along with the token ID) to your `mintFor` function. 

## Example contracts
In our smart contract templates on Github (visit [imx-contracts](https://github.com/immutable/imx-contracts)) you can find a simple implementation of an ERC-721 token with the `mintFor` function implemented correctly to work with Immutable X.

### Asset contract
The Asset.sol contract in our repo inherits from the ERC-721 standard, as well as our custom Mintable contract, explained further down. 

This contract implements the `_mintFor` function which is called by a function in Mintable.sol when the asset is minted to L1, mainnet Ethereum at the time of withdrawal from Immutable X on L2. 
```solidity title="Asset.sol"
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
​
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./Mintable.sol";
​
contract Asset is ERC721, Mintable {
    constructor(
        address _owner,
        string memory _name,
        string memory _symbol,
        address _imx
    ) ERC721(_name, _symbol) Mintable(_owner, _imx) {}
​
    function _mintFor(
        address user,
        uint256 id,
        bytes memory
    ) internal override {
        _safeMint(user, id);
    }
}
```
In the `_mintFor` function we call `_safeMint` which is an inherited function from the ERC-721 contract that mints the NFT [in a safe way](https://docs.openzeppelin.com/contracts/2.x/api/token/erc721#ERC721-_safeMint-address-uint256-). You can use this contract for your NFT as is. The name, symbol, owner, and Immutable X contract address is passed in the constructor.
:::info Solidity naming standard
The use of an underscore before a function name or variable (e.g. `_mintFor`) is a naming standard in Solidity to indicate that it is an internal function or variable.
:::
### Mintable contract
In the Mintable.sol contract below, you can see the asset will be initialized in the constructor with an owner and an imx address. More details on these below.
```solidity title="Mintable.sol"
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
​
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IMintable.sol";
import "./utils/Minting.sol";
​
abstract contract Mintable is Ownable, IMintable {
    address public imx;
    mapping(uint256 => bytes) public blueprints;
​
    event AssetMinted(address to, uint256 id, bytes blueprint);
​
    constructor(address _owner, address _imx) {
        imx = _imx;
        require(_owner != address(0), "Owner must not be empty");
        transferOwnership(_owner);
    }
​
    modifier onlyIMX() {
        require(msg.sender == imx, "Function can only be called by IMX");
        _;
    }
​
    function mintFor(
        address user,
        uint256 quantity,
        bytes calldata mintingBlob
    ) external override onlyIMX {
        require(quantity == 1, "Mintable: invalid quantity");
        (uint256 id, bytes memory blueprint) = Minting.split(mintingBlob);
        _mintFor(user, id, blueprint);
        blueprints[id] = blueprint;
        emit AssetMinted(user, id, blueprint);
    }
​
    function _mintFor(
        address to,
        uint256 id,
        bytes memory blueprint
    ) internal virtual;
}
```
More information about these smart contract examples:
- Owner is the wallet address you choose to be the minter of the contract, so it should be a very safe, secure wallet. 
- `transferOwnership(_owner)` does exactly as described, and transfers the ownership of the contract from the contract deployer to the specific wallet address.
- The imx address refers to the Immutable X contract address that is interacting with your smart contract to perform minting operations. You can find this address for each environment in the readme of the imx-contracts repository (see the table at the top). This address is used in the `onlyIMX` modifier, which checks if the sender of the transaction is our contract or not. This is a way of whitelisting our contract and ensuring that no one else can mint assets through your smart contract.
- The `mintFor` function is called by the Immutable X smart contract at the time of withdrawing the NFT to mainnet. The function has the `onlyIMX` modifier, explained above. Because you’re minting NFTs, which are unique, ensure that quantity = 1. 
- The [blueprint](doc:minting-on-immutable-x#metadata-blueprint) is saved as on-chain, immutable metadata in the mapping blueprints. For custom blueprint decoding, you can override the mintFor function in Asset.sol to save it in something like tokenURI, or split the string into different components.
- The function emits an event `AssetMinted` when the mintFor completes successfully, and this can be listened on by applications.

## General advice
Here are some extra tips and guidance related to smart contract development:

## Development and testing
Smart contracts are immutable once deployed, which is good for trust but also means that bugs in the code will be much more difficult to deal with. This is why it’s crucial to ensure that your smart contract is bug-free and works as expected before deploying it to mainnet Ethereum. Even small bugs can have devastating consequences when you are handling tokens with market value.

A general tip is to keep your smart contract simple and make use of open source libraries like OpenZeppelin. These contracts have been battle-tested so there’s a much lower chance of bugs, but that’s still not a 100% guarantee.

### Tools and test environments
You can use tools like [Remix IDE](https://remix.ethereum.org/) to quickly experiment and iterate your code, and set up local testing environments by using local blockchains like [Ganache](https://trufflesuite.com/ganache/). There’s also Ethereum testnets like Ropsten, Kovan, etc. to use as staging environments, allowing you to test contract deployment and make sure everything works as intended. 

The Immutable X test environment uses Ropsten, so you should be deploying your contract there first to integrate and play around with the functions on-chain, and test the integration with Immutable X. It’s also important to write unit tests and integration tests for your smart contracts. We have some [example unit tests in Gitbhub](https://github.com/immutable/imx-contracts/blob/main/test/Asset.test.ts) to give you an idea of what these can look like.

## Gas fees and metadata
A gas fee is required to successfully conduct a transaction or execute a smart contract on a blockchain platform. The fee is determined by the gas used, multiplied by the gas price. While Immutable X is completely gas free within the L2 ecosystem, it’s still useful to know about the implications of fees for smart contract development.

Reading data from the blockchain is free, unless executed in a transaction, but writing data to the blockchain costs gas and can be quite expensive, especially when minting tokens because all of the information about that token is being written to the blockchain and verified by nodes all across the network. This is why you’ll see some very large gas costs for minting certain NFTs on L1.

Your code should therefore try to be as efficient as possible with fewer operations and writes to the blockchain, without compromising security. Where possible, most computations required in the minting process should be moved off-chain. While minting on Immutable X is gas-free, withdrawing the token to mainnet will incur a gas fee which has to be paid by the user to mint the token.

### Usage example
Let’s look at [Gods Unchained](https://godsunchained.com/) (GU) as an example: 

GU cards pass only the proto (the card ID) and the quality in the blueprint to save on-chain, and these two properties alone can uniquely determine the value of the card. All other properties for the cards — such as attack, defense, image_url, etc. — are stored in the off-chain metadata API. This makes it cheaper for a user (player) to withdraw a card from Immutable X as they are writing less data to the blockchain. 

The is also useful for the Gods Unchained engineering team to be able to make changes to metadata, for example, increasing the attack of a particular card as part of a balance patch.