import PropTypes from "prop-types"


import logo from "./../logo.svg"

function Hero(){
    return (
        <>
        <img className="img"src={logo} alt="article"/>
        </>
    )
}
 
Hero. propTypes ={
url:PropTypes.string.isRequired
}
export default Hero;