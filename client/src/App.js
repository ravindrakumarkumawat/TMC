import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Suspense, lazy, useContext } from "react";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/SignUp";
const ProtectedRoute = lazy(() => import('./ProtectedRoute'))

function App() {
  return (
    <div className="App">
      <Router>
       <header>
          <nav className="">
            <div className="b-flex b-jcsb b-aic nav-items">
              <div>
                <Link to="/dashboard" className="navbar-brand">Home</Link>
              </div>
              <div className="">
                <ul className="b-flex">
                  <li className="nav-item">
                    <Link to="/signin" className="nav-link" aria-current="signin">Sigin</Link>
                  </li>
                  <li className="nav-item ml-3">
                    <Link to="/signup" className="nav-link" aria-current="signup">Signup</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <Suspense fallback={<div className='ErrorMessage'>Loading...</div>}>
        <Switch>
          <ProtectedRoute path='/dashboard' component={Dashboard} exact />
          <Route path='/signin' component={SignIn} exact />
          <Route path='/signup' component={SignUp} exact />
        </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
