---
title: "Historical Data"
slug: "historical-data"
sidebar_position: 8
---
Immutable X allows you to get a complete history of user actions on the exchange, including their deposits, withdrawals and trades. This is useful for displaying user history, calculating your application's volume and estimating asset prices. In future, we may allow users to designate certain actions as private, but we currently do not support this.

There are 5 historical endpoints, for each of the major events which occur on the exchange:

- [Get a list of deposits](ref:get_v1-deposits-1)
- [Get a list of withdrawals](ref:get_v1-withdrawals-1)
- [Get a list of transfers](ref:get_v1-transfers-1)
- [Get a list of trades](ref:get_v1-trades-1)
- [Get a list of mints](ref:get_v1-mints-1)

If you're just looking to visualise a user's recent history on Immutable X, feel free to use the Immutable Components's `Components.history()` function to summon up a quick view.