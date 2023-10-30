import styled from "styled-components";

export const Button = styled.button`
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    font-weight: bolder;
    font-size: 1.5rem;
    color: var(--PrimaryColor);
    transition: all .3s ease-in-out;

    &:hover{
        background-color: var(--PrimaryColor);
        color: white;
    }

    @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1rem 2rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 1rem 2rem;
  }
 
`;