import { Link } from "react-router-dom";
import logo from './logo2.png'
import "./navbar.css"

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="130px" height="40" className="d-inline-block align-top" />

                </Link>
            </nav>
        </>
    )
}

export const Navbar2 = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="130px" height="40" className="d-inline-block align-top" />
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" />
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        <li className="nav-item">
                            <Link className="nav-link" to="/Profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home">Home</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}