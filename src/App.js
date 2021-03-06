import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { UserList } from './UserList'
import { EditUser } from './EditUser'
import { UserReg } from './UserReg'

function App() {
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Users</Link>
          </li>
          <li className="navbar-item">
            <Link to="/register" className="nav-link">Register User</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route exact path="/register" component={UserReg} />
      </Switch>
    </div>
  );
}

export default App;