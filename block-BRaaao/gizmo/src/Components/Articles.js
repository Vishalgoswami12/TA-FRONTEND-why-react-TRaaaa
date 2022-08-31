import {data} from "./../Data/data"
function Article(props) {
    const { url, title } = props;
    return (
        <div>
            <img src={url} alt={title} width="100%" height="300" />
            <h4>{title}</h4>
        </div>
    )
}

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
                       <Article 
                        url={urlToImage}
                        title={title}
                       /> 
                    )
                })
            }
            </div>
        </div>
        </>
    )
}


// function Articles(){
//     return(
//         <>
//         <div>
//             <h2>Articles</h2>
//             <div className="grid">
//             {
//                 data.map((ele)=>{
//                     const { urlToImage, title } = ele;
//                     return(
//                         <div>
//                         <img src={urlToImage} alt={title} width="100%" height="300" />
//                         <h4>{title}</h4>
//                     </div>
//                     )
//                 })
//             }
//             </div>
//         </div>
//         </>
//     )
// }

export default Articles;