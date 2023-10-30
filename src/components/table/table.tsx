import { Tabela } from "./table.Styles"

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
}

export function Table({ children }: { children: Cliente[] }) {
    return (
        <Tabela>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Senha</th>
                    <th scope="col">Razão Social</th>
                    <th scope="col">CNPJ</th>
                    <th scope="col">CEP</th>
                    <th scope="col">Endereço</th>
                    <th scope="col">Número</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {children.map((cliente) => {
                    return (
                        <tr key={cliente.id}>
                            <td scope='row'>{cliente.id}</td>
                            <td scope='row'>{cliente.nomeCliente}</td>
                            <td scope='row'>{cliente.senha}</td>
                            <td scope='row'>{cliente.razaoSocial}</td>
                            <td scope='row'>{cliente.cnpj}</td>
                            <td scope='row'>{cliente.telefone}</td>
                            <td scope='row'>{cliente.endereco}</td>
                            <td scope='row'>{cliente.numero}</td>
                            <td scope='row'>{cliente.telefone}</td>
                            <td scope='row'>{cliente.email}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Tabela>
    )
}