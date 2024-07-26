import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/layout/Header';
import { Navbar } from './components/layout/MenuPrincipal';
import { MenuLateral } from './components/layout/MenuLateral';
import { Footer } from './components/layout/Footer';
import { Login } from './components/pages/Login';
import { Perfil } from './components/pages/perfil';
import { CadastroDeAluno } from './components/pages/Cadastro-De-Aluno';

import './index.css';

const App = () => {
  return (
    <Router>
      <React.StrictMode>
        <Routes>
          <Route 
            path="/login" 
            element={<Login />} 
          />
          <Route 
            path="/perfil" 
            element={<Perfil />} 
          />
          <Route 
            path="/cadastrodealuno" 
            element={<CadastroDeAluno />} 
          />
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <Navbar />
                <Footer />
              </>
            } 
          />
          
          <Route
            path="*"
            element={
              <>
                <Header />
                <MenuLateral />
              </>
            }
          />
        </Routes>
      </React.StrictMode>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
