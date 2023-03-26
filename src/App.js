import { Routes, Route } from 'react-router-dom';
import { Catalog } from './components/Catalog/Catalog';

import { Error } from "./components/Error/Error";
import { Header } from './components/Header/Header';
import { Home } from "./components/Home/Home";
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { Register } from './components/Register/Register';
import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <AuthProvider>

      <div className="App">

        <header className="App-header">

          <Header />

          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Logout' element={<Logout />} />
            <Route path='/Register' element={<Register />} />
            {/* <Route path='/Create' element={<Create />} /> */}
            <Route path='/Catalog' element={<Catalog />} />
            {/* <Route path='/Catalog/:cactusId' element={<Details />} /> */}
            {/* <Route path='/Edit/:cactusId' element={<Edit />} /> */}
          </Routes>

        </header>

      </div>

    </AuthProvider>
  );
}

export default App;
