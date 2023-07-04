import React from 'react'
import useCanvas from '../../hooks/useCanvas';
import NavBar from '../navbar/NavBar';

const Canvas = () => {

  const { canvas } = useCanvas({ width: 4096, height: 4096, className: "absolute bg-white" });

  return (
    <section className="text-black body-font h-full min-h-screen">
      {canvas}
      <NavBar />
    </section>
  );
}

export default Canvas;
