import { Container } from "./form.Styles";
import { Cliente } from "../../interfaces/Cliente";
import { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import cepAPI from "../../services/cep";


type MyFormProps = {
    formSubmit: (data: Cliente) => void;
    cliente: Cliente | null
};



export function MyForm({ cliente, formSubmit }: MyFormProps) {

    const [nomeCliente, setNomeCliente] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [senha, setSenha] = useState('');


    useEffect(() => {
        if (cliente) {
            setNomeCliente(cliente.nomeCliente)
            setRazaoSocial(cliente.razaoSocial)
            setCnpj(cliente.cnpj)
            setTelefone(cliente.telefone)
            setEmail(cliente.email)
            setCep(cliente.cep)
            setEndereco(cliente.endereco)
            setNumero(cliente.numero)
            setSenha(cliente.senha)
        }
    }, [cliente]);



    useEffect(() => {
        const loadCep = async () => {
          try {
            const response = await cepAPI.get(`${cep}/json`);
            setEndereco(response.data.logradouro);
          } catch (error) {
            console.log(error);
          }
        };
        loadCep();
      }, [cep]);

    console.log(cliente)
    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        formSubmit({
            nomeCliente,
            razaoSocial,
            cnpj,
            telefone,
            email,
            cep,
            endereco,
            numero,
            senha,
        });
    };

    return (
        <Container>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Nome do Cliente</label>
                    <input
                        type="text"
                        name="nomeCliente"
                        placeholder="Insira o nome"
                        value={nomeCliente}
                        onChange={(e) => setNomeCliente(e.target.value)}
                        required
                    />

                </div>
                <div>
                    <label>Razão Social</label>
                    <input
                        type="text"
                        name="razaoSocial"
                        placeholder="Insira a Razão Social"
                        value={razaoSocial}
                        onChange={(e) => setRazaoSocial(e.target.value)}
                        required
                    />

                </div>
                <div>
                    <label>CNPJ</label>
                    {cliente ?
                        <input
                            type="text"
                            name="cnpj"
                            placeholder="Insira o CNPJ"
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                            required
                            pattern="\d{2}.\d{3}.\d{3}/\d{4}-\d{2}"
                        /> :
                        <InputMask
                            mask={"99.999.999/9999-99"}
                            type="text"
                            name="cnpj"
                            placeholder="Insira o CNPJ"
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                            required
                            pattern="\d{2}.\d{3}.\d{3}/\d{4}-\d{2}"
                        />}
                </div>
                <div>
                    <label>Telefone</label>
                    {cliente ?
                        <input
                            type="text"
                            name="telefone"
                            placeholder="Insira o telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                            pattern="\+ 55 \(\d{2}\) \d{5}-\d{4}"
                        /> :
                        <InputMask
                            mask="+ 55 (99) 99999-9999"
                            type="text"
                            name="telefone"
                            placeholder="Insira o telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                            pattern="\+ 55 \(\d{2}\) \d{5}-\d{4}"
                        />}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Insira o email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                </div>

                <div>
                    <label>CEP</label>
                    {cliente ?
                        <input
                            type="text"
                            name="cep"
                            placeholder="Insira o CEP"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                            required
                            pattern="\d{5}-\d{3}"
                        /> :
                        <InputMask
                            mask="99999-999"
                            type="text"
                            name="cep"
                            placeholder="Insira o CEP"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                            required
                            pattern="\d{5}-\d{3}"
                        />}
                </div>
                <div>
                    <label>Endereço</label>
                    <input
                        type="text"
                        name="endereco"
                        placeholder="Insira o endereço"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                        required
                    />

                </div>
                <div>
                    <label>Número</label>
                    {cliente ?
                        <input
                            type="text"
                            name="numero"
                            placeholder="Insira o Nº"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                            required
                            pattern="\d{0,3}"
                        /> :
                        <InputMask
                            mask="999"
                            type="text"
                            name="numero"
                            placeholder="Insira o Nº"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                            required
                            pattern="\d{0,3}"
                        />}
                </div>
                <div>
                    <label>Senha</label>
                    <input
                        type="password"
                        name="senha"
                        placeholder="Insira a senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />

                </div>
                <button type="submit">{cliente ? "Salvar" : "Criar novo"}</button>
            </form>
        </Container>
    );
};