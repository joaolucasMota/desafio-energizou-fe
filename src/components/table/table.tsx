import { Tabela, ResponsiveTable } from "./table.Styles"
import { CiSearch } from 'react-icons/ci';
import { BiEdit } from 'react-icons/bi';
import { useState } from "react";
import { Modal } from "../modal/modal";
import { Cliente } from "../../interfaces/Cliente";


export function Table({ children }: { children: Cliente[] }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null);

    const handleOpenModal = (cliente : Cliente) => {
        setSelectedCliente(cliente);
        setIsModalOpen(true);
      };

    return (
        <ResponsiveTable>
            <Tabela>
                <thead>
                    <tr>
                        <th scope="col">Opções</th>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Razão Social</th>
                        <th scope="col">CNPJ</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Email</th>
                        <th scope="col">CEP</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Número</th>
                        <th scope="col">Senha</th>
                    </tr>
                </thead>
                <tbody>
                    {children.map((cliente) => {
                        return (
                            <tr key={cliente.id}>
                                <td>
                                    <button onClick={() => handleOpenModal(cliente)}><CiSearch size={25}/></button>
                                    <BiEdit size={25}/>
                                </td>
                                <td scope='row'><strong>{cliente.id}</strong></td>
                                <td scope='row'>{cliente.nomeCliente}</td>
                                <td scope='row'>{cliente.razaoSocial}</td>
                                <td scope='row'>{cliente.cnpj}</td>
                                <td scope='row'>{cliente.telefone}</td>
                                <td scope='row'>{cliente.email}</td>
                                <td scope='row'>{cliente.cep}</td>
                                <td scope='row'>{cliente.endereco}</td>
                                <td scope='row'>{cliente.numero}</td>
                                <td scope='row'><input type="password" value={cliente.senha}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Tabela>
            {isModalOpen && <Modal data={selectedCliente} closeModal={() => setIsModalOpen(false)} />}
        </ResponsiveTable>
    )
}