import { Link } from "react-router-dom"

export default function NavList(){
    return(
      <nav>
        <ul>
            <li><Link to= "/" >Home </Link></li>
            <li><Link to= "/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="https://github.com" target="blank" rel="noreferrer">Github</a></li>
        </ul>
      </nav>
    )
}