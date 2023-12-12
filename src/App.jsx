import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Pages/Login'
import Painel from './Pages/painel'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  const auth = localStorage.getItem("key") === "token" || false
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Login/>}/>
        {auth ? <Route path="/painel" element={<Painel/>}/> : ""}

      </Routes>
    </BrowserRouter>

  );




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/painel" element={<Painel />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
