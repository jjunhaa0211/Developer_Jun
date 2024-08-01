---
title: 'Label'
slug: '/label'
sidebar_position: 6
---

Here's how you can complete the withdrawal of ETH:

The response can be obtained by saving the results of the Promise returned by `completeWithdrawal`:

```typescript
const response = await link.completeWithdrawal({
  type: ETHTokenType.ETH,
})

console.log(response)
// returns { transactionId: '0x...' }
```
