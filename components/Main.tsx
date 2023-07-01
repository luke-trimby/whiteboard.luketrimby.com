import React, { useEffect } from 'react'
import useCanvas from '../hooks/useCanvas';

export default function Main() {

  const { canvas } = useCanvas({ width: 1200, height: 1200, className: "sticky top-12 left-0 bg-white" });

  return (
    <section className="text-black body-font">
      {canvas}
    </section>
  );
}
