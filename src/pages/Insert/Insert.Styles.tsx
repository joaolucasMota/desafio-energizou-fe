import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 3rem 5rem;

  & a{
    margin-top: 3rem;
  }
  `;