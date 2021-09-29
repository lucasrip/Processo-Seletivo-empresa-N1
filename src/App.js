
import { AuthProvider } from "./Context/Auth";
import { GlobalStyle } from "./GlobalStyle";
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import Footer from "./components/Footer";
import Modal from '../src/components/Modal/index';
import Carrinho from '../src/components/Carrinho';

function App() {
  return (
    <AuthProvider>
     <BrowserRouter>
        <Routes/>
       <Footer/>
       <Modal/>
       <Carrinho/>
      <GlobalStyle/>
     </BrowserRouter>
    </AuthProvider>
   
  );
}

export default App;
