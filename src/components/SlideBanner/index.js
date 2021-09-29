import React,{Component} from "react";
import { SlideContainer,PaginacaoContainer,PaginacaoItemTitulo,PaginacaoItemNumeroPagina,TituloJogo,Linha} from "./style";
import Banner from "../Banner";

import BannerImg1 from '../../assets/img/principal_banner_desktop.jpg';
import BannerImg2 from '../../assets/img/principal_banner_desktop_02.jpg';

import BannerImgMenor1 from '../../assets/img/principal_banner_mobile.jpg';
import BannerImgMenor2 from '../../assets/img/principal_banner_mobile_02.jpg';

import LeftArrow from '../../assets/svgs/angle-left-solid.svg';
import RightArrow from '../../assets/svgs/angle-right-solid.svg';

import { colors } from "../../GlobalStyle";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class SlideBanner extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.namesBanners=['MORTAL KOMBAT','Red Dead Redemption 2'];
     this.state={
       name:this.namesBanners[0],
       totalBanners:this.namesBanners.length,
       bannerAtual:1,
      };
  }

  
  next() {
    this.Slider.slickNext();
  }
  previous() {
    this.Slider.slickPrev();
  }
 
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      pauseOnHover: true,
      autoplaySpeed: 4000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      lazyLoad: true,
      afterChange:(index)=>
      {
        this.setState({name:this.namesBanners[index]})
        this.setState({bannerAtual:this.state.bannerAtual === this.namesBanners.length
        ?1:this.state.bannerAtual+1});
      },
    };
   
    return (
        <SlideContainer>
          <Slider  ref={c => (this.Slider = c)} {...settings}>
         
             <Banner 
             img={BannerImg1}
             imgMenor={BannerImgMenor1}
             nomeJogo={'MORTAL KOMBAT'}
             price={299.99}
             linkTrailer={"https://www.youtube.com/embed/jSi2LDkyKmI"}
             background={'#000000'}
             description={
             `
              Mortal Kombat X combina uma apresentação cinemática 
              única com uma jogabilidade totalmente nova. Os 
              jogadores podem escolher pela primeira vez diversas 
              variantes de cada personagem, afetando tanto a estratégia 
              como o estilo de luta.
             `
             }
             
           />

           <Banner 
            img={BannerImg2}
            imgMenor={BannerImgMenor2}
            nomeJogo={'Red Dead Redemption 2'}
            price={ 350.00}
            linkTrailer={"https://www.youtube.com/embed/gmA6MrX81z4"}
            background={"#fc1c03"}
            description={
              `
                   América, 1899. O fim da era do Velho Oeste começou. 
                   Depois que um roubo deu errado na cidade de Blackwater,
                   no oeste do país, Arthur Morgan e a gangue Van der Linde 
                   são forçados a fugir. Com os agentes federais e os melhores 
                   caçadores de recompensas do país se reunindo em seus calcanhares,
                   a gangue deve roubar, roubar e abrir caminho pelo acidentado coração
                   da América para sobreviver. Como o aprofundamento das divisões internas 
                   ameaça separar a gangue, Arthur deve fazer uma escolha entre seus próprios
                   ideais e lealdade à gangue que o criou.
              `
            }
           />
          </Slider>
           <PaginacaoContainer >
            <PaginacaoItemTitulo height={80} backgroundColor={colors.azulClaro}>
                <TituloJogo>
                  {this.state.name}
                </TituloJogo>
                <Linha/>
            </PaginacaoItemTitulo>

            <PaginacaoItemNumeroPagina height={20} backgroundColor={colors.azulEscuro}>
             <p>{this.state.bannerAtual} / {this.state.totalBanners}</p>
             <span>
               <img src={LeftArrow} alt="navegacao para a esquerda" onClick={this.previous} />
               <img src={RightArrow} alt="navegacao para a direita" onClick={this.next}/>
             </span>
            </PaginacaoItemNumeroPagina>

           </PaginacaoContainer>

       </SlideContainer>
    );
  }
}

