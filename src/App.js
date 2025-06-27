
import './App.css';
import { NavBar } from './Component/NavBar.js';
import { Home } from './Component/Home1.js';
import { Test } from './Component/Test.js';

function App() {
  return (
    <div className="App bg-black text-whit z-10">
       <NavBar />
      <Home /> 
      {/*<Test /> */}
    </div>
  );
}

export default App;
