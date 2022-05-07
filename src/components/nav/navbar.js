import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <div class="area"></div>
 <nav class="main-menu">
         <ul>
         <li>
                 <Link to="/">

                     <span class="nav-text">
                         Main
                     </span>
                 </Link>

             </li>
             <li>
                 <Link to="/Bisection">

                     <span class="nav-text">
                         Bisection
                     </span>
                 </Link>

             </li>
             <li class="has-subnav">
                 <Link to="/False-Position">

                     <span class="nav-text">
                       False-Position
                     </span>
                 </Link>

             </li>
             <li class="has-subnav">
                 <Link to="/One-Point Iteration">

                     <span class="nav-text">
                         One-Point Iteration
                     </span>
                 </Link>

             </li>
             <li class="has-subnav">
                 <Link to="#">

                     <span class="Newton Raphson">
                         Newton Raphson
                     </span>
                 </Link>

             </li>
             <li>
                 <Link to="#">

                     <span class="Secant">
                         Secant
                     </span>
                 </Link>
             </li>
             

         </ul>
         </nav>
         
    </div>
  )
}

export default Navbar