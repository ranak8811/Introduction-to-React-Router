import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <span>My Website</span>
        <Link to="/">Home</Link>
        <NavLink to="/users">Users </NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        {/* <Link to="/users">Users</Link> */}
        {/* <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link> */}
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a> */}
      </nav>
    </div>
  );
};

export default Header;
