
import React,{useContext,useState,useEffect} from "react"
import { CardJogoContainer, CapaJogo,DetalhesJogo , BtnCompra,CapaMais } from "./style"
import { Context } from "../../Context/Auth"


export default function CardJogo({img,nomeJogo,price,linkTrailer,background,description})
{
    const {
        setControlaModal,
        itemsCarrinho,
        setItemsCarrinho,
        setTextoModal,
        setQtdJogosCarrinho,
        setItemsDetalhes,
    } = useContext(Context);

    const [textoBtn,setTextoBtn] = useState("Adicionar ao carrinho")
    const [jogoNoCarrinho,setJogoNoCarrinho] = useState(false)
    const [backgroundBtn,setBackgroundBtn] = useState(false)


  useEffect(()=>{
   const jogoEstaNoCarrinho = itemsCarrinho.filter(item=>item.nomeJogo===nomeJogo);
    
  if(jogoEstaNoCarrinho.length ===0)
  {
    setBackgroundBtn(false)
    setTextoBtn('Adicionar ao carrinho')
    setJogoNoCarrinho(false)

  }

  },[itemsCarrinho,nomeJogo,jogoNoCarrinho])

  
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
         setItemsCarrinho([...itemsCarrinho,{nomeJogo,price}]);
         
        }
    }

    function guardaInfoJogo()
    {
        setItemsDetalhes({img,nomeJogo,price,linkTrailer,description})
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return(
        <CardJogoContainer>
            <CapaMais to="/detalhes" onClick={()=>guardaInfoJogo()}/>
            <CapaJogo src={background}/>
            <DetalhesJogo>
              <p>
                  {nomeJogo}
              </p>
              <strong>
                 R$ {price}
              </strong>
               <BtnCompra onClick={()=>infoModal()} background={backgroundBtn}>
                  {textoBtn}
              </BtnCompra>
            </DetalhesJogo>
        </CardJogoContainer>
    )
}