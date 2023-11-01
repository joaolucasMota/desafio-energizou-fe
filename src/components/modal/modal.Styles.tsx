import styled from 'styled-components';

  
export const ModalOverlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  margin: 15% auto;
  padding: 2rem;
  border: 1px solid #888;
  border-radius: 1rem;
  width: 50%;
  text-align: center;
  position: relative;

  & :nth-child(3){
    margin-top: 1.1rem;
  }

  & li{
    padding: 1rem;
    text-align: left;
    list-style-type: none;
    font-size: 1.1rem;
    font-weight: 400;
  }

  & strong {
    font-size: 1.2rem;
    font-weight: 500;
  }

  & #senha-div{
    & input{
      text-align: center;
      margin-right: 1rem;
      border: none;
      background-color: #80808058;
    }

    & button{
      font-size: 1rem;
      padding: .4rem;
    }
  }

  @media (max-width: 768px) {
    & h1{
      font-size: 1rem;
      padding: .5rem;
    }

    & li{
    font-size: 1rem;
    }

    & strong {
    font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    padding: 1rem;

    & h1{
      font-size: .9rem;
    }

    & li{
    font-size: .8rem;
    }

    & strong {
    font-size: .9rem;
    }
  }
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  cursor: pointer;
`;