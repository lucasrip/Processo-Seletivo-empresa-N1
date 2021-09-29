import React,{useState,useContext,useEffect} from "react";
import { CalculoFinal, CarrinhoContainer, CarrinhoHeader, CarrinhoStore, ItemCarrinho } from "./style";
import CloseCarrinho from '../../assets/svgs/close_btn.svg';
import { Context } from "../../Context/Auth";
import RemoverIcon from '../../assets/svgs/delete-bin-7-line.svg';
import { BtnCompra } from "../CardJogo/style";

export default function Carrinho()
{
 const 
 {
    setQtdJogosCarrinho,
    itemsCarrinho,
    setItemsCarrinho,
    controlaCarrinho,
    setControlaCarrinho,
    setControlaModal,
    setTextoModal,
    } = useContext(Context);
 
    const [valorSubTotal,setValorSubTotal] = useState(0);
    const [valorTotal,setValorTotal] = useState(0);
    const [valorFrete,setValorFrete] = useState(0);


   useEffect(()=>{

    function CalculoFinal()
    {
         const valoresJogosCarrinho = itemsCarrinho.map(item=>item.price)

         const subTotal = valoresJogosCarrinho.reduce((item,acc)=> acc+=item);

         setValorSubTotal(subTotal);
        
         setValorFrete((valorSubTotal * (15/100)));
         setValorTotal(subTotal+valorFrete)

    }
    itemsCarrinho.length >= 1&&CalculoFinal();

   },[itemsCarrinho,valorSubTotal,valorFrete])
 

  function removeJogo(tirarJogo)
  {
      const itemsCarrinhoAtualizado = itemsCarrinho.filter(({nomeJogo})=> nomeJogo !== tirarJogo )
      setItemsCarrinho([...itemsCarrinhoAtualizado])
      setQtdJogosCarrinho(previous=>previous-1);
    }

   function finalizaCompra()
   {
       setControlaCarrinho(false);
       setControlaModal(true);
       setTextoModal('Jogos Comprados Com Sucesso');
       setItemsCarrinho([]);
       setQtdJogosCarrinho(0);

   }   



    return(
        <CarrinhoContainer display={controlaCarrinho}>
            <CarrinhoStore>
                <CarrinhoHeader>
                 <strong>
                  Jogos que estao no Carrinho
                 </strong>
                   <img src={CloseCarrinho} alt="fechar o carrinho" onClick={()=>setControlaCarrinho(false)} />
                </CarrinhoHeader>
                <div>
               {
                 itemsCarrinho.length>0?
                 
                 itemsCarrinho.map( item =>{
                     return(
                      <ItemCarrinho key={item.nomeJogo}>
                       <strong>{item.nomeJogo}</strong>

                       <span>
                        <p>R$ {item.price}</p>
                        <img src={RemoverIcon} alt="icone de Remover Jogo" onClick={()=>removeJogo(item.nomeJogo)} />
                       </span>
                      </ItemCarrinho>
                     )
                 }):<strong> Não ha jogos no Carrinho</strong>   
               }
               </div>

               {
                 itemsCarrinho.length>0&&
              <CalculoFinal>
                  <span>
                      <strong>
                          SubTotal
                      </strong>
                      <p>
                       R$ {valorSubTotal}
                      </p>
                  </span>
                  <span>
                      <strong>
                          Frete
                      </strong>
                      <p>
                          R$ {valorFrete}
                      </p>
                  </span>
                  <span>
                      <strong>
                          Total
                      </strong>
                      <p>
                      R$ {valorTotal}
                      </p>
                  </span>
                  <div>
                       <BtnCompra onClick={()=>finalizaCompra()}>
                        Comprar 
                       </BtnCompra>
                  </div>
                 </CalculoFinal>
                }
                    
            </CarrinhoStore>
        </CarrinhoContainer>
    )
}