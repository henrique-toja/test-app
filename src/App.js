import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Alimentacao from './pages/alimentacao';
import Comunicacao from './pages/comunicacao';
import Dashboard from './pages/dashboard';
import Faq from './pages/faq';
import Funcionamento from './pages/funcionamento';
import ComoParticipar from './pages/comoParticipar';
import Login from './pages/login';
import Mentalidade from './pages/mentalidade';
import MetasObjetivos from './pages/metasObjetivos';
import Movimentacao from './pages/movimentacao';
import Pilares from './pages/pilares';
import PoliticaDePrivacidade from './pages/politicaDePrivacidade';
import ProvaDedicacao from './pages/provaDedicacao';
import Slim from './pages/slim';
import Suplementacao from './pages/suplementacao';
import TarefasDiarias from './pages/tarefasDiarias';
import TermosDeUso from './pages/termosDeUso';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rota inicial - Home */}
        <Route path="/" element={<Home />} />
        
        {/* Outras Rotas */}
        <Route path="/alimentacao" element={<Alimentacao />} />
        <Route path="/comunicacao" element={<Comunicacao />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/funcionamento" element={<Funcionamento />} />
        <Route path="/como-participar" element={<ComoParticipar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mentalidade" element={<Mentalidade />} />
        <Route path="/metas-objetivos" element={<MetasObjetivos />} />
        <Route path="/movimentacao" element={<Movimentacao />} />
        <Route path="/pilares" element={<Pilares />} />
        <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
        <Route path="/prova-dedicacao" element={<ProvaDedicacao />} />
        <Route path="/slim" element={<Slim />} />
        <Route path="/suplementacao" element={<Suplementacao />} />
        <Route path="/tarefas-diarias" element={<TarefasDiarias />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
      </Routes>
    </Router>
  );
};

export default App;