import React,{useContext,useState,useEffect} from "react";
import HeaderContainer from "../../components/Header";
import { CapaJogoDetalhes, ContainerDetalhes,Description, Price} from "./style";
import { Context } from "../../Context/Auth";
import { BtnCompra } from "../../components/CardJogo/style";

export default function Detalhes()
{
 const {
         itemsDetalhes,
        setControlaModal,
        itemsCarrinho,
        setItemsCarrinho,
        setTextoModal,
        setQtdJogosCarrinho,
} = useContext(Context);

const [textoBtn,setTextoBtn] = useState("Adicionar ao carrinho")
const [jogoNoCarrinho,setJogoNoCarrinho] = useState(false)
const [backgroundBtn,setBackgroundBtn] = useState(false)


useEffect(()=>{
const jogoEstaNoCarrinho = itemsCarrinho.filter(item=>item.nomeJogo===itemsDetalhes.nomeJogo);

if(jogoEstaNoCarrinho.length ===0)
{
setBackgroundBtn(false)
setTextoBtn('Adicionar ao carrinho')
setJogoNoCarrinho(false)

}

},[itemsCarrinho,itemsDetalhes.nomeJogo,jogoNoCarrinho])


function infoModal()
{
  
    if(jogoNoCarrinho)
    {
        setTextoModal('jogo ja esta no Carrinho')
        setControlaModal(true)
        
    }
    else
    {
     setTextoModal('jogo adicionado ao Carrinho')
     setTextoBtn('Ja esta no carrinho')
     setControlaModal(true)
     setBackgroundBtn(true)
     setJogoNoCarrinho(true)
     setQtdJogosCarrinho(previous=>previous+1);
     setItemsCarrinho([...itemsCarrinho,
        {
            nomeJogo:itemsDetalhes.nomeJogo,
            price:itemsDetalhes.price,
        }]);
     
    }
}


    return(
        <ContainerDetalhes  background={itemsDetalhes.background}>
            <HeaderContainer background={true}/>
            <CapaJogoDetalhes img={itemsDetalhes.img} >
               <h1>
                   {itemsDetalhes.nomeJogo}
               </h1>
            </CapaJogoDetalhes>
            <iframe src={itemsDetalhes.linkTrailer}
                 frameBorder='0'
                 allow='autoplay; encrypted-media'
                 allowFullScreen
                 title='video'
            />
            <Description>
                {itemsDetalhes.description}
            </Description>
             <Price>
                R${itemsDetalhes.price}
             </Price>

             <BtnCompra onClick={()=>infoModal()} background={backgroundBtn}>
                 {textoBtn}
             </BtnCompra>
        </ContainerDetalhes>
    )
}
