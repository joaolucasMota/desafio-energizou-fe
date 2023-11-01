import { Container } from "../../components/container/container"
import { PrimaryTitle } from "../../components/primaryTitle/primaryTitle"
import { Section } from "./Insert.Styles"
import { MyForm } from "../../components/form/form"
import { Cliente } from "../../interfaces/Cliente"
import api from "../../services/api"

export default function Insert() {

    const handleFormSubmit = (data: Cliente) => {
        console.log(data)
        async function insertCustomer(): Promise<void> {
            try {
                const response = await api.post('/cliente', {
                    nomeCliente: data.nomeCliente,
                    senha: data.senha,
                    razaoSocial: data.razaoSocial,
                    cnpj: data.cnpj,
                    telefone: data.telefone,
                    email: data.email,
                    cep: data.cep,
                    endereco: data.endereco,
                    numero: data.numero
                });
                console.log('Resposta da API:', response.data);
            } catch (error) {
                console.log('Erro na requisição:', error);
            }

        }

        insertCustomer();
    }

    return (
        <Container>
            <Section>
                <PrimaryTitle>Insira um novo cliente</PrimaryTitle>
                <MyForm formSubmit={handleFormSubmit} />
            </Section>
        </Container>
    )
}