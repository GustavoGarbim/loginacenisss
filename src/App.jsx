import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginAcenis from './assetsEntrar/componentes/LoginAcenis';
import PerfilCadastro from './assetsEntrar/componentes/PerfilCadastro';
import CadastroMae from './assetsEntrar/componentes/CadastroMae';
import CadastroProfissional from './assetsEntrar/componentes/CadastroProfissional';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginAcenis />} />
        
        <Route path="/perfil" element={<PerfilCadastro />} />
        <Route path="/cadastro/mae" element={<CadastroMae />} />
        <Route path="/cadastro/profissional" element={<CadastroProfissional />} />
        
        <Route path="*" element={<LoginAcenis />} />
      </Routes>
    </Router>
  );
}

export default App;