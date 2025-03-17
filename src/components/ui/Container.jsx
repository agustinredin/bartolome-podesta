import React from 'react'
import { cn } from '../../lib/utils';

const Container = ({className, children, ...props}) => {
  return (
    <section
      className={cn("w-[85vw] max-w-screen-2xl mx-auto my-16", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export default Container