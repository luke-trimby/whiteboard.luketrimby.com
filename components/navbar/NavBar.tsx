import { useContext, useState } from 'react';
import BaseCanvasTool from '../canvas/tools/BaseCanvasTool';
import { CircleIconSvg } from '../svg/CircleIconSvg';
import { PaintBrushIconSvg } from '../svg/PaintBrushIconSvg';
import { RectangleIconSvg } from '../svg/RectangleIconSvg';
import NavButton from './NavButton';
import { LineTool } from '../canvas/tools/LineTool';
import { RectangleTool } from '../canvas/tools/RectangleTool';

const NavBar = () => {

  const toolClasses: BaseCanvasTool[] = [
    new LineTool(),
    new RectangleTool(),
  ];

  const clearButtons = () => {
    const navBtns = document.getElementsByClassName("navBtn");
    for (let i = 0; i < navBtns.length; i++) {
      navBtns[i].classList.replace("bg-gray-200", "bg-white");
    };
  };

  const onNavButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    clearButtons();
    const button = event.target as HTMLButtonElement;
    const classList = button.classList;
    classList.replace("bg-white", "bg-gray-200");

    const toolIndex = button.getAttribute("data-tool-index");
    // TODO
    console.log(`Lukas - toolIndex`, toolIndex);
    console.log(`Lukas - tool`, toolClasses[toolIndex]);
  };

  const svgs = [<PaintBrushIconSvg />, <RectangleIconSvg />, <CircleIconSvg />];
  const buttons = svgs.map((svg, i) => {
    return (
      <NavButton key={i} toolIndex={i} onClick={onNavButtonClick} top={i === 0} btm={i === svgs.length - 1}>
        {svg}
      </NavButton>
    );
  });

  return (
    <div className="fixed flex flex-col rounded-md shadow-sm ml-5 mt-5">
      {buttons}
    </div>
  );
}

export default NavBar;