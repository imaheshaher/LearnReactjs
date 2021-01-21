import logo from './logo.svg';
import './App.css';
import Profile from './component/Profile';
import FProfile from './component/fProfile';
import StateDemo from './component/State';
import Componentcycle from './component/Componentcycle';
import Statecolor from './component/Statecolor';
import IndexApp from './reduxpractice/index';

function App() {
  return (
    <div className="App">
      {/* <Profile text ={{"name":"mahesh"}} data={"profile dataa"}/>
      <FProfile text ={{"name":"mahesh"}} data={"profile dataa"} />
      <StateDemo />
      <Componentcycle /> */}
      {/* <Statecolor /> */}
      <IndexApp />
    </div>
  );
}
 
export default App;
