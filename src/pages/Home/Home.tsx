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

    useEffect(() => {
        async function loadClientes() {
            try {
                const response = await api.get('/clientes');
                setClientes(response.data.result);
            } catch (error) {
                console.log(error);
            }
        }

        loadClientes();
    }, []);

    return (
        <Container>
            <Section>
                <PrimaryTitle>Lista de clientes</PrimaryTitle>
                <div>
                    <Link to={'/insert'}>
                        <PrimaryButton>Adicionar novo cliente</PrimaryButton>
                    </Link>
                    <PrimaryButton>Buscar por CNPJ</PrimaryButton>
                </div>
                <Table>{clientes}</Table>
            </Section>
        </Container>
    )
}