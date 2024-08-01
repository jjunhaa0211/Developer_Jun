---
title: 'Calendar'
slug: '/calendar'
sidebar_position: 8
---

**SDK v1.3.30+** used with Link UI supports different ways to deposit ETH and whitelisted ERC20 tokens, for example, USDC, GODS or IMX tokens.
:::info Currency support
Right now, Immutable X _only_ supports ETH and whitelisted ERC20 tokens."
:::

Immutable X is not prescriptive in how marketplaces handle the deposit process. There are several optional parameters you can use for your marketplace, to influence the user journey for the deposit.

Available parameters:

```typescript
{
  type: ETH,
  amount?: PositiveNumberStringC
}

{
  amount: PositiveNumberStringC
}

{
  type: ERC20,
  tokenAddress: EthAddress,
  symbol: string,
  amount?: PositiveNumberStringC
}
```

## Usage

If a marketplace provides only amount, or ETH type with amount, the system will deposit in ETH. This can be used when a marketplace only wants to allow deposits in ETH and / or wants to style the deposit form with their own branding.

```typescript
link.deposit({
  amount: '0.1',
})

// or

link.deposit({
  type: 'ETH',
  amount: '0.1',
})
```

![Deposit ETH Amount](../../../static/img/link-deposit/deposit-eth-amount.png 'Deposit ETH Amount')

If a marketplace provides token information and amount, users will be asked to confirm the deposit. This can be used when users are provided with a shortcut like "deposit 1 GODS token", or if the marketplace wants to style the deposit form for branding purposes.

```typescript
link.deposit({
  amount: '10',
  type: 'ERC20',
  symbol: 'USDC',
  tokenAddress: '0x07865c6e87b9f70255377e024ace6630c1eaa37f',
})
```

![Deposit USDC Amount](../../../static/img/link-deposit/deposit-usdc-amount.png 'Deposit USDC Amount')

If a marketplace provides only token information, users will be asked to provide an amount and confirm the deposit. This can be used when users are provided with a shortcut like "deposit GODS" or, again, to add brand-specific styling to the form.

```typescript
link.deposit({
  type: 'ERC20',
  symbol: 'GODS',
  tokenAddress: '0x4c04c39fb6d2b356ae8b06c47843576e32a1963e',
})
```

![Deposit Token Provided](../../../static/img/link-deposit/deposit-token-provided.png 'Deposit Token Provided')

If a marketplace provides no parameters, users will be asked to select a currency and the amount before confirming the deposit. This can be used if marketplaces prefer to rely on currencies and forms with Immutable branding.

```typescript
link.deposit()
```

![Deposit Without Params](../../../static/img/link-deposit/deposit-without-params.png 'Deposit Without Params')
