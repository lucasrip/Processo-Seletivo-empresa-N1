import React,{useState,createContext} from 'react';

export const Context = createContext({});

export const AuthProvider =(props)=>
{
  const [controlaModal,setControlaModal] = useState(false);
  const [controlaCarrinho,setControlaCarrinho] = useState(false);


  const [textoModal,setTextoModal] = useState();
  const [qtdJogosCarrinho,setQtdJogosCarrinho] = useState(0);
  const [itemsCarrinho,setItemsCarrinho] =useState([]);
  const [itemsDetalhes,setItemsDetalhes] =useState(null);


    return(
        <Context.Provider
         value={{
            controlaModal,
            setControlaModal,
            textoModal,
            setTextoModal,
            qtdJogosCarrinho,
            setQtdJogosCarrinho,
            itemsCarrinho,
            setItemsCarrinho,
            controlaCarrinho,
            setControlaCarrinho,
            itemsDetalhes,
            setItemsDetalhes,
        }}

        >
            
        {props.children}
        </Context.Provider>
    )
}