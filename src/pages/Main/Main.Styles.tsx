import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5rem;
  text-align: center;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 5rem 10rem;

  @media (max-width: 768px) {
    padding: 3rem 7rem;
  }

  @media (max-width: 500px) {
    padding: 2rem 5rem;
  }
`;

export const Imagem = styled.img`
  height: 20rem;
  padding: 2rem;

  @media (max-width: 768px) {
    height: 15rem;
  }

  @media (max-width: 500px) {
    height: 11rem;
  }
`;