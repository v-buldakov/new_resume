import './App.css';
import ResumeMainComponent from './components/ResumeComponent';
import * as user from './data.json';

function App() {
  return (
    <div className="App">
      <ResumeMainComponent data={user}/>
    </div>
  );
}

export default App;
