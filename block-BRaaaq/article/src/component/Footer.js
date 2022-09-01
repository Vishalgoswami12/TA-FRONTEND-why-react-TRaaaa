import PropTypes from "prop-types"

function Footer(){
    return (
        <>
        <div className="flex footer">
            <p>2020 All Right Reserved</p>
            <ul className="flex">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
        </div>
        </>
    )
}

Footer.prototypes={
    url:PropTypes.string.isRequired,
}

export default Footer