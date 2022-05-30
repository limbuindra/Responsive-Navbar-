import React ,{ useState }from 'react'
import { MenuList } from './MenuList';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

const [clicked, setClicked] = useState(false);
    const menuList = MenuList.map(({url, title }, index)=>{
        return(
            <li key={index}>
                <NavLink to={url}>{title}</NavLink>
            </li>
        );
    });

    const handleClick=()=>{
        setClicked(!clicked);
    }
  return (
      <>
    <nav>
        <div className='logo'>
            Web<font>Site</font>
        </div>
        <div className='menu-icon' onClick={handleClick}>
            <i className={clicked ? "fa fa-times fa-2x": 'fa fa-bars fa-2x'}></i>
        </div>
        <ul className={clicked ?'menu-list': "menu-list close"}>
             {menuList}
        </ul>
        </nav>
      </>
  )
}

export default Navbar;