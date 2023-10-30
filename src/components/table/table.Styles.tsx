import styled from "styled-components";

export const Tabela = styled.table`
    border-collapse: collapse;

    & th{
        background-color: white;
    }

    & tr{
        transition: all .3s ease-in;

        &:hover{
            background-color: #6b63ff55;
        }
    }

    & th ,td{
        border: 1px solid black;
        padding: 1rem;
    }
 
`;