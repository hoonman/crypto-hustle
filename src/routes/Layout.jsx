import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="home-link" key="home-button">
            <Link style={{color: "white" }} to="/"> Home </Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet> 
      {/* all of the other components we will render will be placed at that location */}
      {/* for all other later pages, the home button will be at the top of every page */}
    </div>
  )
}

export default Layout;