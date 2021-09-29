import React,{Component} from "react";
import Slider from "react-slick";
import CardJogo from "../CardJogo";
import {Arrow, SlideJogosContainer} from './style';
import LeftArrow from '../../assets/svgs/angle-left-solid.svg';
import RightArrow from '../../assets/svgs/angle-right-solid.svg';

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

export default class SlideJogos extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
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
    };
   
    return (
        <SlideJogosContainer>
          <Slider  ref={c => (this.Slider = c)}     style={{ display: "flex",justifyContent:'center',alignItems:'center'  }} {...settings}>

            
                  <CardJogo
                   background={this.props.capas[0]}
                   img={this.props.imgs[0]} 
                   jogo={'Outriders'} 
                   price={150.00}
                  description={`
                  OUTRIDERS é um RPG de tiro co-op para até 3 jogadores em um universo de ficção científica original,
                  sombrio e desesperado. A humanidade sangra nas trincheiras de Enoch, e você vai criar seu Outrider
                  para embarcar em uma jornada pelo planeta hostil
                  `}
                   />
                  <CardJogo
                   background={this.props.capas[1]}
                   img={this.props.imgs[1]} 
                   jogo={'CYBERPUNK'} 
                   price={250.0} 
                   description={`
                   Descrição. Cyberpunk 2077 é uma história de ação e aventura de mundo aberto ambientada em Night City, 
                   uma megalópole obcecada por poder, glamour e biomodificações. Você joga como V,
                   um mercenário fora da lei atrás de um implante único que carrega a chave da imortalidade.
                   `}
                   />
                  <CardJogo
                   background={this.props.capas[2]}
                   img={this.props.imgs[2]} 
                   jogo={'Donkey Kong Country Tropical Freeze'} 
                   price={350.00}
                   description={`
                   Funky Kong pode pular duas vezes, passear, 
                   executar roquetes infinitos e até mesmo realizar saca-rolhas subaquáticos infinitos.
                   Graças à sua prancha de surf resistente,
                    mesmo os picos não podem retardá-lo.
                   `}
                   />
      
          </Slider>
          <Arrow src={LeftArrow} left={10}  onClick={this.previous} />
          <Arrow src={RightArrow} right={10} onClick={this.next} />


       </SlideJogosContainer>
    );
  }
}

