import Colorcolumn from './components/Colorcolumn';
import { data } from './Data/dat';

function App() {
  // for(let item in data) {
  //   return (
  //       <div className='flex-box'>
  //         <h4>{item.toUpperCase()}</h4>
  //         <div className='grid-box'>
  //           <Colorcolumn arr={data[item]} /> 
  //         </div>
  //       </div>
  //   )
  // }
  return (
    <div className="App">
      <h1>Colors Chart</h1>
      <div className='flex-box mt-top'>
        <div>
        <h4>Gray</h4>
        <p>Colors.Gray</p>
        </div>
        <div className='grid-box'>
          <Colorcolumn arr={data.gray}/> 
        </div>
      </div>
      <div className='flex-box mt-top'>
        <div>
        <h4>Red</h4>
        <p>colors.red</p>
        </div>
        <div className='grid-box'>
          <Colorcolumn arr={data.red}/> 
        </div>
      </div>
      <div className='flex-box mt-top'>
        <div>
        <h4>Pink</h4>
        <p>colors.pink</p>
        </div>
        <div className='grid-box'>
          <Colorcolumn arr={data.pink}/> 
        </div>
      </div>
      <div className='flex-box mt-top'>
        <div>
        <h4>Grape</h4>
        <p>colors.grape</p>
        </div>
        <div className='grid-box'>
          <Colorcolumn arr={data.grape}/> 
        </div>
      </div>
      <div className='flex-box mt-top'>
        <div>
        <h4>Violet</h4>
        <p>colors.violet</p>
        </div>
        <div className='grid-box'>
          <Colorcolumn arr={data.violet}/> 
        </div>
      </div>
      <div className='flex-box mt-top'>
        <div>
        <h4>Indigo</h4>
        <p>colors.indigo</p>
        </div>
        <div className='grid-box'>
          <Colorcolumn arr={data.indigo}/> 
        </div>
      </div>
      <div className='flex-box mt-top'>
        <div>
        <h4>Blue</h4>
        <p>colors.blue</p>
        </div>
        <div className='grid-box'>
          <Colorcolumn arr={data.blue}/> 
        </div>
      </div>
      <div className='flex-box mt-top'>
        <div>
        <h4>Cyan</h4>
        <p>colors.cyan</p>
        </div>
        <div className='grid-box'>
          <Colorcolumn arr={data.cyan}/> 
        </div>
      </div>
      <div className='flex-box mt-top'>
        <div>
        <h4>Teal</h4>
        <p>colors.teal</p>
        </div>
        <div className='grid-box'>
          <Colorcolumn arr={data.teal}/> 
        </div>
      </div>
      <div className='flex-box mt-top'>
        <div>
        <h4>Green</h4>
        <p>colors.teal</p>
        </div>
        <div className='grid-box'>
          <Colorcolumn arr={data.green}/> 
        </div>
      </div>
      <div className='flex-box mt-top'>
        <div>
        <h4>Lime</h4>
        <p>colors.lime</p>
        </div>
        <div className='grid-box'>
          <Colorcolumn arr={data.lime}/> 
        </div>
      </div>
      <div className='flex-box mt-top'>
        <div>
        <h4>Yelow</h4>
        <p>colors.yellow</p>
        </div>
        <div className='grid-box'>
          <Colorcolumn arr={data.yellow}/> 
        </div>
      </div>
      <div className='flex-box mt-top'>
        <div>
        <h4>Orange</h4>
        <p>colors.orange</p>
        </div>
        <div className='grid-box'>
          <Colorcolumn arr={data.orange}/> 
        </div>
      </div>
      <div className='flex-box mt-top'>
        <div>
        <h4>Yellow</h4>
        <p>colors.yellow</p>
        </div>
        <div className='grid-box'>
          <Colorcolumn arr={data.yellow}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
