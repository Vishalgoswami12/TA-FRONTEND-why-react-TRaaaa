
import PropTypes from "prop-types"
function Header(){
    return(
        <>
        <header className="flex">
            <h1>Article Page</h1>
            <nav>
                <ul className="flex">
                    <li><a className="anchor" href="#">Home</a></li>
                    <li><a className="anchor" href="#">About</a></li>
                    <li><a className="anchor" href="#">Service</a></li>
                    <li><a className="anchor" href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

Header.prototypes={
    url:PropTypes.string.isRequired,
}
export default Header;