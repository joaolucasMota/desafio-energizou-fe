import { Container } from "../../components/container/container"
import { PrimaryTitle } from "../../components/primaryTitle/primaryTitle"
import { Section } from "./Insert.Styles"
import { MyForm } from "../../components/form/form"
import { Cliente } from "../../interfaces/Cliente"
import api from "../../services/api"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Insert() {

    //carregando dados do usuario por id
    const { id } = useParams();
    const [cliente, setCliente] = useState<Cliente | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            async function loadId() {
                try {
                    const response = await api.get(`/cliente/${id}`);
                    setCliente(response.data.result);
                } catch (error) {
                    console.log(error);
                }
            }

            loadId();
        }
    }, [id]);


    //Envinado os dados para criar formulario 
    const handleFormSubmit = async (data: Cliente) => {
        try {
            if (id) {
                // Se tiver um ID, faz um pedido PUT
                const response = await api.put(`/cliente/${id}`, data);
                console.log('Dados ataulizados', response.data);
                navigate('/home')
            } else {
                // Se não tiver um ID, faz um pedido POST
                const response = await api.post('/cliente', data);
                console.log('Dados criados', response.data);
                navigate('/home')
            }
        } catch (error) {
            console.log('Erro na requisição:', error);
        }
    }

    return (
        <Container>
            <Section>
                <PrimaryTitle>Insira um novo cliente</PrimaryTitle>
                <MyForm cliente={cliente} formSubmit={handleFormSubmit} />
            </Section>
        </Container>
    )
}