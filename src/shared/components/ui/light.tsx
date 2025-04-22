import { cn } from '@/lib/utils';
import React from 'react';

const Light: React.FC<{ size?: number; className?: string }> = ({
  size = 64,
  className,
}) => {
  return (
    <div
      className={cn(`pointer-events-none rounded-full blur-xl opacity-50`, className)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default Light;
