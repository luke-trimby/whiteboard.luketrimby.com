import { CircleIconSvg } from '../svg/CircleIconSvg';
import { PaintBrushIconSvg } from '../svg/PaintBrushIconSvg';
import { RectangleIconSvg } from '../svg/RectangleIconSvg';
import NavButton from './NavButton';

const NavBar = () => {

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
    return false;
  };

  const svgs = [<PaintBrushIconSvg />, <RectangleIconSvg />, <CircleIconSvg />];
  const buttons = svgs.map((svg, i) => {
    return (
      <NavButton key={i} onClick={onNavButtonClick} top={i === 0} btm={i === svgs.length - 1}>
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