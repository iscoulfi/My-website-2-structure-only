import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const onButtonClick = () => setMenuActive(menuActive ? false : 'open');
  return (
    <header>
      <div></div>
      <nav className={menuActive}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="aboutme">About me</NavLink>
        <NavLink to="skills">Skills</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
      </nav>
      <AiOutlineMenu className="icon" onClick={onButtonClick} />
    </header>
  );
};

export default Navbar;
