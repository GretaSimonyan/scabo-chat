import { CSSProperties } from 'react';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = (props: SkeletonProps) => {
  const {
    width,
    height,
    border,
  } = props;
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };
  return (
    <div
      className={cls.Skeleton}
      style={styles}
    />
  );
};
