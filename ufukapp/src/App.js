 
import { Switch } from 'react-router-dom';
import './App.css';
import Topbar from "./components/Topbar/Topbar"
import Works from "./pages/Works/Works"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import {  Route} from 'react-router-dom';
 

function App() {

  

  return (
    <>
   <Topbar />
   <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/works" component={Works} />
          <Route path="/about" component={About} />
   </Switch>
   
   </>
 


  );
}

export default App;
