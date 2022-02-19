import './Message.modules.css';

function App(props) {
 return (
   <div className="App">
     <header className="App-header">
       <p>My First React App</p>
       <h3>Hello, {props.name}</h3>
     </header>
   </div>
 );
}

export default App;