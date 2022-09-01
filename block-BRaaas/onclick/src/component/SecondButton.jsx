
function handleClick(){
    alert(`To learn React use https://reactjs.org`)
    alert(`React and ReactDOM works together`)
    alert(`Babel helps in writing JSX`)
}

function SecondBurrton(){
    return(
        <>
        <button onClick={handleClick}>How can I help You</button>
        </>
    )
}

export default SecondBurrton