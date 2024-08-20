---
title: 'Label'
slug: '/label'
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JNLabelDemo from '../../../src/Demo/JNLabelDemo.tsx'

`JNLabel`는 애플리케이션에서 label을 표현한 클래스입니다.


<JNLabelDemo />

<Tabs>
    <TabItem value="ios" label="iOS (Swift)" default>
        ### iOS (Swift) 사용 방법

먼저 Swift 파일에 `JNLabel` 클래스를 가져옵니다.

```swift
private let testLabel = JNLabel(text: "test",
                                font: UIFont.Pretendard.bodyMedium,
                                textColor: .gray,
                                isCenter: false,
                                numberOfLineCount: 1)
```
    </TabItem>
        <TabItem value="fe" label="FE (React)">

    ### FE (React) 사용 방법
```jsx
const App = () => {
  return (
    <div>
      <JNLabel
        text="Hello, World!"
        font="Arial, sans-serif"
        textColor="#FF6347"
        isCenter={true}
        numberOfLineCount={2}
      />
    </div>
  );
}
```
  </TabItem>
</Tabs>