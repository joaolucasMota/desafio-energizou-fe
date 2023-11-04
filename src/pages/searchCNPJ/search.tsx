import { Container } from "../../components/container/container"
import { Section } from "./search.Styles"
import { PrimaryTitle } from "../../components/primaryTitle/primaryTitle"
import InputMask from 'react-input-mask';
import { useState } from "react";
import api from "../../services/api";
import { Modal } from "../../components/modal/modal";
import { Cliente } from "../../interfaces/Cliente";
import { PrimaryButton } from "../../components/primaryButton/primaryButton";
import { Link } from "react-router-dom";


export default function SeacrhCNP() {

    const [cnpj, setCnpj] = useState('');
    const [span, setSpan] = useState(false)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null);


    async function loadCNPJ() {
        try {
            const cnpjEncoded = encodeURIComponent(cnpj);
            const response = await api.get(`/cnpj/${cnpjEncoded}`);
            const clienteData = response.data.result;

            // Verifica se a requisição foi bem-sucedida
            if (clienteData) {
                setSelectedCliente(clienteData);
                handleOpenModal(); // Abre o modal apenas se a requisição for bem-sucedida
                setSpan(false)
            }
        } catch (error) {
            console.log("Erro na requisição:", error);
            setSpan(true)
        }
    }

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };



    return (
        <Container>
            <Section>
                <PrimaryTitle>Buscar CNPJ</PrimaryTitle>
                <h2>Digite o CNPJ que deseja encontar</h2>
                <InputMask
                    mask={"99.999.999/9999-99"}
                    type="text"
                    name="cnpj"
                    placeholder="Insira o CNPJ"
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                    required
                    pattern="\d{2}.\d{3}.\d{3}/\d{4}-\d{2}"
                />
                {span ? <span className="span">CNPJ não encontrado</span> : ''}
                <PrimaryButton onClick={() => { loadCNPJ() }}>Bsucar</PrimaryButton>
                <Link to={'/home'}>
                    <PrimaryButton>Voltar</PrimaryButton>
                </Link>
                {isModalOpen && <Modal data={selectedCliente} closeModal={() => setIsModalOpen(false)} />}
            </Section>
        </Container>
    )
}