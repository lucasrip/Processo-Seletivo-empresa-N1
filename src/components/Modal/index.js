
import React,{useContext} from "react";
import { ModalContainer,Modal } from "./style"
import CloseModal from '../../assets/svgs/close_btn.svg';
import Mario from  '../../assets/img/mario.png';
import { Context } from "../../Context/Auth";

export default function ModalPedido()
{
    const {controlaModal,setControlaModal,textoModal} = useContext(Context);
    
 

    return(
        <ModalContainer display={controlaModal}>
            <Modal>
                <span>
                    <img src={CloseModal} alt="botao para fechar o modal" onClick={()=>setControlaModal(false)} />
                </span>
                <p>{textoModal}</p>
                <img src={Mario} alt="" />
            </Modal>
                
            
        </ModalContainer>
    )
}