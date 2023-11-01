import { SubmitHandler, useForm } from "react-hook-form";
import { Cliente } from "../../interfaces/Cliente";
import InputMask from 'react-input-mask';

type MyFormProps = {
    formSubmit: (data: Cliente) => void;
};

export function MyForm({ formSubmit }: MyFormProps) {

    const { register, handleSubmit, formState: { errors } } = useForm<Cliente>();

    const onSubmit: SubmitHandler<Cliente> = (data) => { formSubmit(data) }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nome do Cliente</label>
                <input type="text" {...register("nomeCliente", { required: true })} />
                {errors.nomeCliente && <span>Este campo é obrigatório</span>}
            </div>
            <div>
                <label>Senha</label>
                <input type="password" {...register("senha", { required: true })} />
                {errors.senha && <span>Este campo é obrigatório</span>}
            </div>
            <div>
                <label>Razão Social</label>
                <input type="text" {...register("razaoSocial", { required: true })} />
                {errors.razaoSocial && <span>Este campo é obrigatório</span>}
            </div>
            <div>
                <label>CNPJ</label>
                <InputMask mask="99.999.999/9999-99" type="text" {...register("cnpj", { required: true, pattern: /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/ })} />
                {errors.cnpj && <span>Formato inválido de CNPJ</span>}
            </div>
            <div>
                <label>CEP</label>
                <InputMask mask="99999-999" type="text" {...register("cep", { required: true, pattern: /^[0-9]{5}-[0-9]{3}$/ })} />
                {errors.cep && <span>Formato inválido de CEP</span>}
            </div>
            <div>
                <label>Endereço</label>
                <input type="text" {...register("endereco", { required: true })} />
                {errors.endereco && <span>Este campo é obrigatório</span>}
            </div>
            <div>
                <label>Número</label>
                <InputMask mask="999" type="text" {...register("numero", { required: true, pattern: /^[0-9]{3}$/ })} />
                {errors.numero && <span>Formato inválido de número</span>}
            </div>
            <div>
                <label>Telefone</label>
                <InputMask mask="+55(99)99999-9999" type="text" {...register("telefone", { required: true })} />
                {errors.telefone && <span>Formato inválido de telefone</span>}
            </div>
            <div>
                <label>Email</label>
                <input type="text" {...register("email", { required: true, pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/ })} />
                {errors.email && <span>Formato inválido de email</span>}
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};