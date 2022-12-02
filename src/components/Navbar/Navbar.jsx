import logo from "../../assets/dota2_logo.png";
import "./navbar.scss";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ active, setActive }) => {
  const activeHandler = () => {
    setActive(!active);
  };
  let toggleActive = active ? " active" : "";

  let activeStyle = {
    borderBottomWidth: '2px',
    borderColor: '#ff6046',
    opacity: 1

  }

  return (
    <div className="navbar w-full flex items-center gap-x-10 pt-5 px-20 absolute left-0 z-50">
      <Link to="/" className="logo-container">
        <img
          className="logo w-full opacity-80 hover:opacity-100 cursor-pointer select-none"
          src={logo}
          alt="Dota2 Logo"
        />
      </Link>
      <div className={`nav-link-container${toggleActive}`}>
        <div className="nav-link flex justify-between gap-x-10">
          <NavLink
            className="link opacity-80 hover:opacity-100 uppercase hover:text-white select-none"
            to="heroes"
            style={({isActive})=> isActive ? activeStyle : undefined }
          >
            heroes
          </NavLink>

          <NavLink
            className="link opacity-80 hover:opacity-100 uppercase hover:text-white select-none"
            to="teams"
            style={({isActive})=> isActive ? activeStyle : undefined }
          >
            teams
          </NavLink>
          <NavLink
            className="link opacity-80 hover:opacity-100 uppercase hover:text-white select-none"
            to="dotaplus"
            style={({isActive})=> isActive ? activeStyle : undefined }
          >
            dota+
          </NavLink>
          
          <a
            className="link opacity-80 hover:opacity-100 uppercase hover:text-white select-none"
            href="https://www.dota2.com"
          >
            more
          </a>
        </div>
      </div>
      <div
        onClick={activeHandler}
        className="burger opacity-80 hover:opacity-100 cursor-pointer hidden"
      >
        <div className="burger-line w-8 h-[2px] my-2 bg-white "></div>
        <div className="burger-line w-8 h-[2px] my-2 bg-white "></div>
        <div className="burger-line w-8 h-[2px] my-2 bg-white "></div>
      </div>
    </div>
  );
};

export default Navbar;
