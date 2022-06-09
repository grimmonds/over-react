// import logo from './logo.svg';
import karl from './karl.png';
import './App.css';
import Card from './components/card';


function App() {

  return (
    <div className="space-bg">
      <header className="App-header">
        <div className="row">
            
            <div className="quote">
              <Card></Card>
            </div>

            <div className="karl-container">
              <img src ={karl} className="karl" id="hvr-glow" alt="havoc" />
            </div>
        </div>

        </header>
    </div>
  );
}

export default App;
