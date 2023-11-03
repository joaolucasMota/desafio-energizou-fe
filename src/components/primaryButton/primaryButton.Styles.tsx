import styled from "styled-components";

export const Button = styled.button`
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    font-weight: bolder;
    font-size: 1.5rem;
    color: var(--PrimaryColor);
    transition: all .3s ease-in-out;
    box-shadow: 2px 2px 15px 2px #07070734;

    &:hover{
        background-color: var(--PrimaryColor);
        color: white;
    }

    @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1rem 2rem;
  }

  @media (max-width: 500px) {
    font-size: .8rem;
    padding: 1rem 2rem;
  }
 
`;