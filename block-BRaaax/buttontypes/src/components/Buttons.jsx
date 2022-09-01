function Button( { title, onClickHandeler, disabled, size, type }  ){
    console.log(size)
    function style( size, type ) {

        console.log(`btn ${size} ${type}`)
        
        return `btn ${size} ${type}`
    }
    return <button className={style( size, type )} onClick={ onClickHandeler} disabled={ disabled} > { title || "Button" } </button>
}

export default Button;
