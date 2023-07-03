import React, { useEffect } from 'react'
import useCanvas from '../hooks/useCanvas';

export default function Main() {

  const { canvas } = useCanvas({ width: 4096, height: 4096, className: "absolute left-0 top-12 bg-white" });

  return (
    <section className="text-black body-font overflow-hidden">
      {canvas}
    </section>
  );
}
