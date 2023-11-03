import styled from "styled-components";

export const Container = styled.div`

    & form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        & div{
            display: flex;
            flex-direction: column;
            font-weight: 300;
            padding: 1rem 0rem;

            & div {
                display: flex;
                justify-content: space-between; 
                align-items: center; 

                & label {
                    margin-right: 1rem; 
                }

                & input {
                    width: 13rem; 
                }
            }

            & input{
                border: none;
                padding: .5rem;
                background-color: #8080801f;
                border-radius: 1rem;
                width: 20rem;
                text-align: center;
            }

            & span{
                color: red;
            }
        }

        & button{
            border: none;
            padding: 1rem 2rem;
            border-radius: 1rem;
            font-weight: bolder;
            font-size: 1rem;
            color: var(--PrimaryColor);
            transition: all .3s ease-in-out;

            &:hover{
                background-color: var(--PrimaryColor);
                color: white;
            }
        }
    }
`;