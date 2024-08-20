import React from 'react';

type Props = {
  className?: string;
  color?: string;
};

const SdkLightIcon = ({ className }: Props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    className={className}
  >
    <path
      d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
      fill="#131313"
    />
    <path
      d="M20 22.3333L17.6667 20L20 17.6667L22.3333 20L20 22.3333ZM18.1111 15.8L16.2667 13.9556L20 10.2222L23.7333 13.9556L21.8889 15.8L20 13.9111L18.1111 15.8ZM13.9556 23.7333L10.2222 20L13.9556 16.2667L15.8 18.1111L13.9111 20L15.8 21.8889L13.9556 23.7333ZM26.0444 23.7333L24.2 21.8889L26.0889 20L24.2 18.1111L26.0444 16.2667L29.7778 20L26.0444 23.7333ZM20 29.7778L16.2667 26.0444L18.1111 24.2L20 26.0889L21.8889 24.2L23.7333 26.0444L20 29.7778Z"
      fill="white"
    />
  </svg>
);

export default SdkLightIcon;
