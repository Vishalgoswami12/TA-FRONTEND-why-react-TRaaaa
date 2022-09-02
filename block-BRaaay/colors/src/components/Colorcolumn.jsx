

function Colorcolumn(props){
    return (
        <>
            {
                props.arr.map(item => {
                    return (
                        <div className="box" style={{backgroundColor: item}}></div>
                    )
                })
            }
        </>
    )
}

export default  Colorcolumn;