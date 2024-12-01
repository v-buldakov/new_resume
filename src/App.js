import './App.css';
import ResumeMainComponent from './components/ResumeComponent';
import * as data from './data.json';

function App() {
  const user = data;
  return (
    <div className="App">
      <ResumeMainComponent data={user}/>
    </div>
  );
}

export default App;
