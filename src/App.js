import { BrowserRouter as Router, Routes, 
  Route, Redirect,} from "react-router-dom";

import  {Signin}  from './components/signin/signin';
import  {Reset}   from "./components/reset/reset";
import { Signup } from "./components/signup/signup";

import './App.css';

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route exact path="/" element={<Signin/>}/>
        <Route exact path="/reset" element={<Reset/>}/>
        <Route exact path="/signup" element={<Signup/>}/>

        {/* <Redirect to="/" /> */}
      </Routes>
    </Router>
  </>
  );
}

export default App;
