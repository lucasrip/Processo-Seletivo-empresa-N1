import React,{useState,useContext} from "react";
import { Header, MenuImg,MenuItem,MenuItemContainer,BolinhaQtd, MenuCategoriasContainer, Categorias, MenuHamburguer } from "./style";
import { Link } from "react-router-dom";

import { Context } from "../../Context/Auth";

import Logo from '../../assets/img/logo.png';
import MenuIcon from '../../assets/svgs/icon_hamburguer.svg';
import PlaneIcon from '../../assets/svgs/paper-plane.svg';
import BuscaIcon from '../../assets/svgs/search-solid.svg';
import BagIcon from '../../assets/svgs/shopping-bag-solid.svg';
import FecharMenuIcone from '../../assets/svgs/fecharMenuIcone.svg';

import Categoria from "../Categoria";


export default function HeaderContainer()
{
   
  const {qtdJogosCarrinho,setControlaCarrinho} = useContext(Context);

  const [displayMenu,setDisplayMenu] = useState('none');
  const [fecharMenu,setFecharMenu] = useState(false);
  

  
   function controlaMenu()
   {
     if(displayMenu === 'none')
     {
       setDisplayMenu('block');
       setFecharMenu(true)
     }
     else
     {
       setDisplayMenu('none');
       setFecharMenu(false);
      }
   }

     function alteraSrc()
    {
       const janela = window.innerWidth;

       if(janela <= 680 && fecharMenu === true)
       {
         return FecharMenuIcone
       }
     
      return MenuIcon
    }

    return(
        <Header>
              <MenuItemContainer>

              <MenuHamburguer 
               src={alteraSrc()}
               alt="icone de menu hamburguer" 
               width={25} height={40} 
               onClick={controlaMenu}
                id="menuHamburguer"
               MenuIconHover={true} />

                <MenuCategoriasContainer display={displayMenu}>
                   <span/>
                   <Categorias>
                      <Categoria nomeCategoria={'Luta'} listaJogos={['Mortal Kombat','Smash Bros','Killer Instict','DBZ Kakarot']}/>
                      <Categoria nomeCategoria={'Ação / Aventura'} listaJogos={['GTA V','Tomb Raider','Halo','Call of Duty']}/>
                      <Categoria nomeCategoria={'Corrida'} listaJogos={['NEED For SPEED','Forza Horizon']}/>
                   </Categorias>
                </MenuCategoriasContainer>

              <Link to="/">
                <MenuImg src={Logo} alt="logo do projeto" width={163} height={35} marginLeft={50} />
              </Link>

              </MenuItemContainer>

              <MenuItemContainer>
                <MenuItem>
                  <MenuImg src={PlaneIcon} alt="icone de contato" width={30} height={30} />
                  <p>CONTATO</p>
                </MenuItem>
                <MenuItem>
                  <MenuImg src={BuscaIcon} alt="icone de buscar" width={25} height={25} border={5} />
                  <p>BUSCA</p>                
                </MenuItem>
                <MenuItem>
                  <MenuImg src={BagIcon} alt="icone de mochila"   width={22} height={26} onClick={()=>setControlaCarrinho(true)} />
                  <BolinhaQtd>
                      {qtdJogosCarrinho}
                  </BolinhaQtd>
                </MenuItem>              
              </MenuItemContainer>
        </Header>
    )
}