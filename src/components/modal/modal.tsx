import { ModalOverlay, ModalContent, CloseButton } from './modal.Styles'
import { PrimaryTitle } from '../primaryTitle/primaryTitle';
import { Cliente } from '../../interfaces/Cliente';
import { useState } from 'react';
import { PrimaryButton } from '../primaryButton/primaryButton';
import { AiFillCloseCircle } from 'react-icons/ai'

interface CloseModalProps {
    data: Cliente | null;
    closeModal: () => void;
}

export function Modal({ data, closeModal }: CloseModalProps) {


    const [inputType, setInputType] = useState('password');
    const togglePasswordVisibility = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    };

    return (
        <>
            <ModalOverlay>
                <ModalContent>
                    <CloseButton onClick={closeModal}><AiFillCloseCircle size={25}/></CloseButton>
                    <PrimaryTitle>Cliente: {data?.nomeCliente}</PrimaryTitle>
                    <li><strong>Razão Social:</strong> {data?.razaoSocial}</li>
                    <li><strong>CNPJ:</strong> {data?.cnpj}</li>
                    <li><strong>Telefone:</strong> {data?.telefone}</li>
                    <li><strong>Email:</strong> {data?.email}</li>
                    <li><strong>CEP:</strong> {data?.cep}</li>
                    <li><strong>Endereço:</strong> {data?.endereco}</li>
                    <li><strong>Numero:</strong> {data?.numero}</li>
                    <div id='senha-div'>
                        <input
                            type={inputType}
                            value={data?.senha}
                            readOnly
                        />
                        <PrimaryButton onClick={togglePasswordVisibility}>
                            {inputType === 'password' ? 'Mostrar Senha' : 'Ocultar Senha'}
                        </PrimaryButton>
                    </div>


                </ModalContent>
            </ModalOverlay>
        </>
    )
}