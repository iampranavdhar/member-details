import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Nav from "./Nav";
import Contact from './Contact';
import Fielddetails from './Fielddetails';
import Memberdetails from './Memberdetails';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/contact'>
          <Contact/>
        </Route>
        {/* Here we are using those :id for dynamic values this is called Routing Parameter
        (useParams Hook).And we have declare it in that respective component so that when we give that id in
        url we get that respective component like if we give like http://localhost:3000/fielddetails/1 then
        seems like we had given id=1 and by that hook it is used in the Fielddetails page and there by as 
        I had got the members by id we get members of that page by that id. */}
        <Route exact path='/fielddetails/:id'>                                                                           
          <Fielddetails/>
        </Route>
        <Route exact path='/members/:id'>
          <Memberdetails/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;



// name='Pranav'
//           image='https://www.w3schools.com/w3css/img_avatar3.png'
//           description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//           githubusername='iampranavdhar'
//           discordusername='pranav#3148'
//           email='sai@gamil.com'
//           phone='555555555'