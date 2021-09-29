import { FooterContainer,FooterDetalhe,LogoFooter,Direitos} from "./style"
import { colors } from "../../GlobalStyle"
import LogoIcon from '../../assets/svgs/logoIcon.svg';
export default function Footer()
{

    return(
      <FooterContainer>
        <FooterDetalhe width={30} backgroundColor={colors.azulEscuro} justify={'flex-end'}>
          <LogoFooter src={LogoIcon} alt="logo resumida , no footer" />
        </FooterDetalhe>
        <FooterDetalhe width={70} backgroundColor={colors.azulClaro} justify={'flex-start'}>
         <Direitos>Agência N1 - Todos os direitos reservados</Direitos>
        </FooterDetalhe>
      </FooterContainer>
    )
}