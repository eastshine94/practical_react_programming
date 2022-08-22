import React from 'react';
import useWindowWidth from './custom-hook/useWindowWidth';

export default function WidthPrinter() {
  const width = useWindowWidth();
  return <div>{`width is ${width}`}</div>;
}
