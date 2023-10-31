import { Tabela, ResponsiveTable } from "./table.Styles"
import { CiSearch } from 'react-icons/ci';
import { BiEdit } from 'react-icons/bi';


interface Cliente {
    id: number
    nomeCliente: string
    senha: string
    razaoSocial: string
    cnpj: string
    telefone: string
    email: string
    endereco: string
    numero: string
    cep: string
}


export function Table({ children }: { children: Cliente[] }) {
    return (
        <ResponsiveTable>
            <Tabela>
                <thead>
                    <tr>
                        <th scope="col">Opções</th>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Senha</th>
                        <th scope="col">Razão Social</th>
                        <th scope="col">CNPJ</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Email</th>
                        <th scope="col">CEP</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Número</th>
                    </tr>
                </thead>
                <tbody>
                    {children.map((cliente) => {
                        return (
                            <tr key={cliente.id}>
                                <td>
                                    <a href=""><CiSearch size={25}/></a>
                                    <BiEdit size={25}/>
                                </td>
                                <td scope='row'><strong>{cliente.id}</strong></td>
                                <td scope='row'>{cliente.nomeCliente}</td>
                                <td scope='row'>{cliente.senha}</td>
                                <td scope='row'>{cliente.razaoSocial}</td>
                                <td scope='row'>{cliente.cnpj}</td>
                                <td scope='row'>{cliente.telefone}</td>
                                <td scope='row'>{cliente.email}</td>
                                <td scope='row'>{cliente.cep}</td>
                                <td scope='row'>{cliente.endereco}</td>
                                <td scope='row'>{cliente.numero}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Tabela>
        </ResponsiveTable>
    )
}