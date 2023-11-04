import { useState, useEffect } from "react";
import { Section } from "./Home.Styles";
import { Container } from "../../components/container/container";
import { PrimaryTitle } from "../../components/primaryTitle/primaryTitle";
import { Table } from "../../components/table/table";
import { PrimaryButton } from "../../components/primaryButton/primaryButton";
import api from "../../services/api";
import { Link } from "react-router-dom";

export default function Home() {

    const [clientes, setClientes] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        async function loadClientes() {
            try {
                const response = await api.get('/clientes');
                setClientes(response.data.result);
                setLoad(false)
            } catch (error) {
                console.log(error);
            }
        }

        loadClientes();
    }, [handleDelete]);


    async function handleDelete(id: number) {
        try {
            await api.delete(`/cliente/${id}`);

        } catch (error) {
            console.error(`Erro ao excluir o cliente com ID ${id}:`, error);
        }
    }

    return (
        <>
            {load ?
                <Container>
                    <Section>
                        <PrimaryTitle>Carregando dados...</PrimaryTitle>
                    </Section>
                </Container>

                :
                <Container>
                    <Section>
                        <PrimaryTitle>Lista de clientes</PrimaryTitle>
                        <div>
                            <Link to={'/insert'}>
                                <PrimaryButton>Adicionar novo cliente</PrimaryButton>
                            </Link>
                            <Link to={'/cnpj'}>
                                <PrimaryButton>Buscar por CNPJ</PrimaryButton>
                            </Link>
                        </div>
                        <Table handleDelete={handleDelete}>{clientes}</Table>
                    </Section>
                </Container>
            }
        </>
    )
}