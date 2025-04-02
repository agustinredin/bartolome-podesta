import React from 'react'
import { cn } from '../../lib/utils';

const Container = ({className, children, ...props}) => {
  return (
    <section
        /*Modifiqué el w-[85vw] y max-w-screen-lg para que las cards no tengan 
        el w limitado y las imagenes puedan verse mejor */
      className={cn("w-[85vw] max-w-screen-lg mx-auto my-16", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export default Container