(function( ){
    let movieList = [
    {title:"Bahuballi", isWatched: true},
    {title:"Ghost Rider", isWatched: false},
    {title:"Baby", isWatched: false},
    {title:"Jaibheem", isWatched: false},
]

let root = document.querySelector('.root');
let input = document.querySelector('input');
input.addEventListener('keyup', handelInput);

function handelInput(event){
    let value = event.target.value;
    if(event.keyCode === 13 && value !== ''){
        movieList.push({title:value, isWatched:false});
        event.target.value = '';
        createUI(root, movieList);
    }
}

function handleClick(event){
  movieList[event.target.id].isWatched = !movieList[event.target.id].isWatched;
  createUI(root, movieList);
}

function elm( type, attr={}, ...children ){
    let element = document.createElement(type);
    for ( let key in attr ){
        if ( key.startsWith("data-") ){
            element.setAttribute( key, attr[key] );
        } else if ( key.startsWith("on") ){
            let eventType = key.replace( 'on', '' ).toLowerCase();
            element.addEventListener( eventType, attr[key] );
        } 
        else {
            element[ key ] = attr[ key ];
        }
    }

    children.forEach( ( child ) =>{
        if ( typeof child === "object" ){
            element.append( child );
        } 
        if ( typeof child === "string" ) {
            let node = document.createTextNode( child );
            element.append( node );
        }
    } )
    return element;
}

function createUI(root, movieList){
    root.innerHTML = ''
    movieList.forEach((movie, index) => {
        let li = createElement(
        'li',
        {classList: 'each-movie'},
        createElement('span', {classList: 'movie'}, movie.title),
        createElement('button', {id:index, function: addEventListener('click', handleClick)}, movie.isWatched ? 'Watched' : 'TO Watch')
         )
        root.append(li);
    })
    }
    createUI(root, movieList);

})();