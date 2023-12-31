import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Header.css';
import { Navbar, Nav } from 'react-bootstrap';
import {  Routes , Route,Link} from 'react-router-dom';
import Home from './Home';
import PlacesToVisit from './pages/PlacesToVisit';
import './App.css';
import TimeToVisit from './pages/TimeToVisit';
import Food from './pages/Food';
import Packages from './pages/Packages';

function App() {
  return (
    <>
    <Navbar  expand="lg">
      <Navbar.Brand href="#">tamilnadu tourism</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link  > <Link to={'/'} className='text-white text-decoration-none fw-bold'>Home</Link> </Nav.Link>
            <Nav.Link  > <Link to={'/Places'} className='text-white text-decoration-none fw-bold'>Places To Visit</Link> </Nav.Link>
            <Nav.Link  > <Link to={'/Timetovisit'} className='text-white text-decoration-none fw-bold'>Best Time To Visit</Link> </Nav.Link>
            <Nav.Link  > <Link  to ={'/Packages'} className='text-white text-decoration-none fw-bold'>Packages</Link> </Nav.Link>
            <Nav.Link  > <Link to={'./Food'} className='text-white text-decoration-none fw-bold'>Food</Link> </Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Places' element={<PlacesToVisit />}/>
      <Route path='/Timetovisit' element={<TimeToVisit/>}/>
      <Route path='/Packages' element={<Packages/>}/>
      <Route path='/Food' element={<Food/>} />

    </Routes>   
    </>
  );
}

export default App;
