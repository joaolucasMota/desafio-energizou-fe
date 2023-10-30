import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.288);
  border: 2px solid var(--PrimaryColor); 
  display: inline;
  padding: 1rem;
  border-radius: 1rem;
  background-color: white;
  color: var(--PrimaryColor);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 500px) {
    font-size: .9rem;
    padding: .5rem;
  }
`;