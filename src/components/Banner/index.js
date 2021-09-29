import React,{useContext} from 'react';
import {BannerImg,BtnVerMais,TextoContainer} from '../Banner/style';
import { Context } from '../../Context/Auth';

export default function Banner({img,imgMenor,nomeJogo,price,description,linkTrailer,background})
{
 const {setItemsDetalhes} = useContext(Context);

  function guardaValoresJogo()
  {
    setItemsDetalhes({img,imgMenor,nomeJogo,price,description,linkTrailer,background})
  }


    return(
        <BannerImg BackgroundImg={img} BackgroundMenor={imgMenor}>
         <TextoContainer>

             <p>{nomeJogo}</p>
             <p>R${price}</p>
             <p>{description}</p>
             <BtnVerMais to="detalhes" onClick={()=>guardaValoresJogo()} >
               Ver Mais
             </BtnVerMais>
         </TextoContainer>
       </BannerImg>
    )
}
