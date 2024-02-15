import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ProtectedRoute from './protectedRoute/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';

function App() {
  
  
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Header/>
        <Routes>
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
