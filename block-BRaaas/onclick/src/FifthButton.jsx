import React, { Component } from "react";
import { fruits } from "./../src/Data/data"

function handle1(btn){
    alert(btn)
}

class FifthButton extends Component{
render() {
    return(
        <>
        {
            fruits.map((ele) => 
            <button key={ele.id} onClick={() => handle1(ele.value)}>{ele.value}</button>
            )
        }
        </>
    )
}
}

export default FifthButton