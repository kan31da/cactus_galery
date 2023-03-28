import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CactusProvider } from './contexts/CactusContext';
import { Error } from "./components/Error/Error";
import { Header } from './components/Header/Header';
import { Home } from "./components/Home/Home";
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { Register } from './components/Register/Register';
import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';
import { Profile } from './components/Profile/Profile';


function App() {
  return (
    <AuthProvider>

      <div className="App">

        <header className="App-header">

          <Header />

          <CactusProvider>

            <Routes>
              <Route path="*" element={<Error />} />
              <Route path='/' element={<Home />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Logout' element={<Logout />} />
              <Route path='/Register' element={<Register />} />
              <Route path='/Catalog' element={<Catalog />} />
              <Route path='/Create' element={<Create />} />
              <Route path='/Catalog/:cactusId' element={<Details />} />
              <Route path='/Edit/:cactusId' element={<Edit />} />
              <Route path='/Profile' element={<Profile />} />
            </Routes>
          </CactusProvider>

        </header>

      </div>

    </AuthProvider >
  );
}

export default App;
