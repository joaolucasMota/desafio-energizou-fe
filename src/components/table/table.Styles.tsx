import styled from "styled-components";

export const ResponsiveTable = styled.section`
    overflow-x: scroll;
    width: 90%;

    @media (max-width: 1200px) {
        width: 70%;
  }

  @media (max-width: 900px) {
        width: 50%;
  }

  @media (max-width: 700px) {
        width: 40%;
  }

  @media (max-width: 500px) {
        width: 30%;
  }
`;

export const Tabela = styled.table`
    border-collapse: collapse;

    & th{
        background-color: #0000004b;
        color: var(--PrimaryColor);
        font-size: 1rem;
    }

    & tr{
        transition: all .3s ease-in;
        font-size: .8rem;
    }

    & td{
        & svg{
        margin: .5rem;
        }

        & button{
        border: none;
        background-color: white;
        }

        & input{
            border: 0;
            width: 2rem;
        }
        
    }

    & th ,td{
        border-bottom: 1px solid grey;
        padding: 1rem;
        white-space: nowrap
    }
 
`;