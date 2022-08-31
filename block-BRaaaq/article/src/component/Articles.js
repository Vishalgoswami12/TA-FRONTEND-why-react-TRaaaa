import {data} from "./../Data/data";
import PropTypes from "prop-types"


function Articles(){
    return(
        <>
        <div>
            <h2>Articles</h2>
            <div className="grid">
            {
                data.map((ele)=>{
                    const { urlToImage, title } = ele;
                    return(
                        <div>
                        <img src={urlToImage} alt={title} width="100%" height="300" />
                        <h4>{title}</h4>
                    </div>
                    )
                })
            }
            </div>
        </div>
        </>
    )
}

Articles.prototype={
    urlToImage:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}
export default Articles;