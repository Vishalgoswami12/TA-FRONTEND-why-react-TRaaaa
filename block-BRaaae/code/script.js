const input=document.querySelector("input")
const root=document.querySelector("ul");

var movieList=[];


// watched or unwatched
function handleToggle(event){
    let id=event.target.dataset.id;
    movieList[id].isWached=!movieList[id].isWached;
    displayMovie(movieList)
}

///delete movie

function handleDelete(event){
    let id=event.target.dataset.id;
    movieList.splice(id,1);
    displayMovie(movieList);
}

//Display Movie

function displayMovie(movieArr=[]){
    let ui=movieArr.map((elm,index)=>{
        var li=React.createElement("li",
        {
            className:"flex",
        },
        React.createElement(
            "p",
            {
                className:"name",
            },
            elm.name
        ),
        React.createElement('p',
        {},
        React.createElement(
            'span',
            {
                'data-id':index,
                onClick:handleToggle
            },
            elm.isWached?'Watched' :'To Watched'
        ),
        React.createElement(
            'span',
            {
                'data-id':index,
                onClick:handleDelete,
            },
           " Remove"
        )
        )
        );
        return li;
    });
    ReactDOM.render(ui,root)
}


// Handling Input
input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && event.target.value) {
      movieList.push({
        name: event.target.value,
        isWached: false,
      });
      event.target.value = '';
      displayMovie(movieList);
    }
  });
  
  // Call Movies to display
  displayMovie(movieList);