import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { ImageOptimizationContext } from './image-optimization-provider';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ImageProps extends NextImageProps {}

export const Image = (props: ImageProps) => {
  const { unoptimized } = React.useContext(ImageOptimizationContext);
  return <NextImage {...props} unoptimized={unoptimized} />;
};

export default Image;
