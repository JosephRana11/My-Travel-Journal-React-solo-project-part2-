import './App.css';
import Navbar from './componenets/navbar';
import Place from './componenets/place';
import pointer from './images/placeholder.png'

function App(){
  return (
    <div className='app-container'>
    <Navbar/>
    <Place point={pointer}/>
    </div>
  )
}

export default App;
