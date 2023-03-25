import { Routes, Route } from 'react-router-dom';
import { Catalog } from './components/Catalog/Catalog';

import { Error } from "./components/Error/Error";
import { Header } from './components/Header/Header';
import { Home } from "./components/Home/Home";


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Header />

        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/Catalog" element={<Catalog />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;
