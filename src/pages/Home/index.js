
import React  from 'react';
import {Container} from '../../GlobalStyle/index';
import SlideBanner from '../../components/SlideBanner';
import CardJogo from '../../components/CardJogo';
import { Destaques,IconeDestaquesImg,JogosContainer, LancamentosContainer} from './style';
import Lancamento from '../../components/Lancamento';
import HeaderContainer from '../../components/Header';

import CapaCyberpunk from '../../assets/img/cyberpank.png'
import CapaOutriders from '../../assets/img/outriders.png';
import CapaDonkeyKong from '../../assets/img/donkey-kong.png';
import CapaLancamentoSekiro from '../../assets/img/sekiro_banner.jpg';
import CapaLancamentoZelda from '../../assets/img/zelda_banner.jpg';

import CapaJogoCyberpunk from '../../assets/img/capaCyberpunk.jpg';
import CapaJogoOutriders from '../../assets/img/capaOutriders.jpg';
import CapaJogoDonkeyKong from '../../assets/img/capaDonkeyKong.jpg';


import IconeDestaques from '../../assets/svgs/iconeDestaques.svg';
import SlideJogos from '../../components/SlideJogos';


export default function Home()
{

    return(
        <Container>
          <HeaderContainer />
         <SlideBanner/>
          
         <LancamentosContainer>
          <Lancamento
           img={CapaLancamentoZelda} 
           nomeJogo={'The Legend of Zelda - Breath of th wild'}
           linkTrailer={"https://www.youtube.com/embed/zw47_q9wbBE"}
           background={"#86de21"}
           price={355}
           description={`
           The Legend of Zelda: Breath of the Wild é um jogo eletrônico de ação-aventura em mundo aberto que os
            jogadores podem explorar livremente enquanto controlam Link. ... O jogador pode realizar ações como 
            correr, escalar, nadar e voar com um paraglider, porém todas são limitadas pelo fôlego de Link.
           `}
           />
          <Lancamento
            img={CapaLancamentoSekiro}
            nomeJogo={'SEKIRO - Shadows die twice'}
            linkTrailer={"https://www.youtube.com/embed/rXMX4YJ7Lks"}
            background={"#92edf0"}
            price={155}
            description={`Sekiro: Shadows Die Twice é um RPG de aventura com um
             combate brutal e impiedoso, no qual o menor dos deslizes pode causar
              a morte do protagonista. Destinado a proteger um jovem senhor que 
              descende de uma antiga linhagem, você se tornará alvo de muitos inimigos 
              cruéis, incluindo o perigoso clã Ashina.
            
            `}
            />
         </LancamentosContainer>


         <Destaques>
            <IconeDestaquesImg src={IconeDestaques} />
            <strong>
              Produtos em destaque
            </strong>
         </Destaques>

        {
          window.innerWidth <=530?
        
           <SlideJogos capas={[CapaOutriders,CapaCyberpunk,CapaDonkeyKong]} imgs={[CapaJogoOutriders,CapaJogoCyberpunk,CapaJogoDonkeyKong]}/>
          :  
        
          <JogosContainer>
         
          <CardJogo
           img={CapaJogoOutriders} 
            nomeJogo={'Outriders'} 
           price={150.00}
           linkTrailer={"https://www.youtube.com/embed/ED4o1WJFmDY"}
           background={CapaOutriders}
           description={`
                  OUTRIDERS é um RPG de tiro co-op para até 3 jogadores em um universo de ficção científica original,
                  sombrio e desesperado. A humanidade sangra nas trincheiras de Enoch, e você vai criar seu Outrider
                  para embarcar em uma jornada pelo planeta hostil
                  `}
            />
          <CardJogo
           img={CapaJogoCyberpunk} 
           nomeJogo={'CYBERPUNK'}
           price={250.00}
           linkTrailer={"https://www.youtube.com/embed/qIcTM8WXFjk"}
           background={CapaCyberpunk}
           description={`
           Descrição. Cyberpunk 2077 é uma história de ação e aventura de mundo aberto ambientada em Night City, 
           uma megalópole obcecada por poder, glamour e biomodificações. Você joga como V,
           um mercenário fora da lei atrás de um implante único que carrega a chave da imortalidade.
           `}
          />
          <CardJogo
           img={CapaJogoDonkeyKong}
           nomeJogo={'Donkey Kong Country Tropical Freeze'} 
           price={ 350.00}
           linkTrailer={"https://www.youtube.com/embed/_5p0SiWHwvw"}
           background={CapaDonkeyKong}
           description={`
           Funky Kong pode pular duas vezes, passear, 
           executar roquetes infinitos e até mesmo realizar saca-rolhas subaquáticos infinitos.
           Graças à sua prancha de surf resistente,
            mesmo os picos não podem retardá-lo.
           `}
           />
  
        </JogosContainer>
        }

        </Container>
       
    )
}