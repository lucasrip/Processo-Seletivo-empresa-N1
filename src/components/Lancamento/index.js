import { CapaVerMais, DetalheLancamento, JogoLancamento } from "./style";

import React,{useContext} from "react";
import { Context } from "../../Context/Auth";

export default function Lancamento({img,nomeJogo,linkTrailer,background,price,description})
{
   const {setItemsDetalhes}= useContext(Context);

    function guardaInfoJogo()
    {
       setItemsDetalhes({img,nomeJogo,linkTrailer,background,price,description});
       document.body.scrollTop = 0;
       document.documentElement.scrollTop = 0;
    }
    return(
            <JogoLancamento>
                <CapaVerMais to="/detalhes" onClick={()=> guardaInfoJogo()}/>
             <img src={img} alt={`capa do jogo Lancamento ${nomeJogo}`} />
             <DetalheLancamento>
                 <p> 
                     {nomeJogo} 
                 </p>
                 <span/>
             </DetalheLancamento>
            </JogoLancamento>
    )
}