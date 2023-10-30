import { useState, useEffect } from "react";
import { Section } from "./Home.Styles";
import { Container } from "../../components/container/container";
import { PrimaryTitle } from "../../components/primaryTitle/primaryTitle";
import { Table } from "../../components/table/table";
import api from "../../services/api";

export default function Home() {

    const [clientes, setClientes] = useState([]);

    console.log(clientes)


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
                <Table>{clientes}</Table>
            </Section>
        </Container>
    )
}