import { Section, Imagem } from './Main.Styles';
import MainImage from '../../assets/inicial.svg'
import { PrimaryButton } from '../../components/primaryButton/primaryButton';
import { PrimaryTitle } from '../../components/primaryTitle/primaryTitle';
import { Container } from '../../components/container/container';

export default function Main() {
    
    return (
        <Container>
            <Section>
                <PrimaryTitle>Seja bem vindo a Plataforma de cadastro de clientes</PrimaryTitle>
                <Imagem src={MainImage}></Imagem>
                <PrimaryButton url="/home">Iniciar</PrimaryButton>
            </Section>
        </Container>
    )
}