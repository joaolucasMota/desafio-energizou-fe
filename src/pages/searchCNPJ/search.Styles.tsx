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
  
  & h2{
    margin-bottom: 1rem;
  }

  & input{
    border: none;
    background-color: #80808028;
    padding: 1rem 2rem;
    border-radius: 1rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  &  .span{
    color: red;
    margin-bottom: 1rem;
  }

  & button{
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    & h2{
      font-size: 1rem;
    }
  }

  `;