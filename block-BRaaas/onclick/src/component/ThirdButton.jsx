function handle(name){
    alert(`Hello ${name}`)
}


function ThirdButton(){
    return(
        <>
        <button onClick={() => handle("Arya")}>Arya</button>
        <button onClick={()=> handle("John")}>John</button>
        <button onClick={()=>handle("Bran")}>Bran</button>
        </>
    )
}
export default ThirdButton;