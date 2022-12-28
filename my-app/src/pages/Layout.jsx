import { Outlet,Link } from "react-router-dom"

export default function Layout(){


    return (
       <> 
        <nav>
        <logo>
            <h2>Airbnb</h2>
        </logo>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="#" disabled>About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
        
     </>
    )
}
