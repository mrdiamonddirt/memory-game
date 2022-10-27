import './App.css';

function App() {
  //tiles
 const cards = ["","","","","","","","","","","","","","","",""]

  return (
    <div className="App">
      <div className='displaydiv'>
    <Cards array={cards}/>
    </div>
    </div>
  );
}

function Cards(props) {
  return(
<>
{props.array.map(() => {
  return(
    <div  className='cards' >A</div>
  )

})}
</>
  )}

export default App;
