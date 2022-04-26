
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Users from './modules/users/components/Users'
// import Albums from './modules/albums/components/Albums'
import Errorpage from './modules/common/components/Errorpage'
import UsersList from './modules/main_info/UsersList'
import UsersModule from './modules/users/UsersModule'


function App() {
  return (
    <div className='container'> 
      <Router>
        <Routes>
          <Route path='' element={<UsersList />}/>
          <Route path='/:userId/*' element={<UsersModule />}/>
          <Route path='*' element={<Errorpage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
