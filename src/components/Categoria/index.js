import { CategoriaContainer } from "./style";



export default function Categoria({nomeCategoria,listaJogos})
{
 return(
     <CategoriaContainer>
         <li>{nomeCategoria}</li>
         {
             listaJogos.map(nomeJogo=><li key={nomeJogo}>{nomeJogo}</li>)
         }
     </CategoriaContainer>
 )
}