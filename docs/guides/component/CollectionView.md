---
title: 'CollectionView'
slug: '/collectionView'
sidebar_position: 3
---

## How to trigger components inside an iframe

# 안녕하세요
:::caution Action Required
This functionality requires your application to be whitelisted. Immutable X Customer Success will whitelist your application at the same time they register your minting contract.
:::

The components supports iframe embedding.

Simply supply an additional options object when you construct Components:

```typescript
type IframePositionKeys = 'left' | 'right' | 'top' | 'bottom'

type IframePositionOptions = {
  [key in IframePositionKeys]?: string
}

type IframeSizeOptions = {
  width: number
  height: number
}

type ConfigurableIframeOptions = null | {
  position?: IframePositionOptions
  className?: string
  containerElement?: HTMLElement
  protectAgainstGlobalStyleBleed?: boolean
}
const linkIframeOptions: ConfigurableIframeOptions = { className: 'my-components-iframe' }
const components = new Components('https://link.dev.x.immutable.com', linkIframeOptions)
```