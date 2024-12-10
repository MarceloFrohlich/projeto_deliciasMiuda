import { CiSquarePlus } from "react-icons/ci"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../../../../components/ui/dialog"
import FormSubmitButton from "../../../components/systemComponents/formSubmitButton"
import { registerUserAction } from "../../../../hooks/users/actions"

const IncludeUserModal: React.FC = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <CiSquarePlus className="text-3xl text-heavy-rose" />
            </DialogTrigger>
            <DialogContent className="w-1/3 font-sans max-h-[90%] overflow-y-auto finer-line-scrollbar">
                <DialogHeader className="border-b-2 border-heavy-rose/70 text-lg">Cadastrar Usuários</DialogHeader>
                <form action={registerUserAction} className="flex flex-col gap-3 ">
                    <div className="flex flex-col gap-1">
                        <label className="text-base ">Nome:</label>
                        <input
                            name="name"
                            className="focus:ring-0 border-heavy-rose border-2 px-4 py-2 focus:outline-none rounded-md"
                            type="text"></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-base ">Nível de usuário:</label>
                        <select
                            name="role"
                            className="focus:ring-0 border-heavy-rose border-2 px-4 py-2 focus:outline-none rounded-md"
                        >
                            <option disabled>Selecione abaixo</option>
                            <option value={1}>Administrador</option>
                            <option value={2}>Usuário</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-base ">Email:</label>
                        <input
                            name="email"
                            className="focus:ring-0 border-heavy-rose border-2 px-4 py-2 focus:outline-none rounded-md"
                            type="email"></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-base ">Senha:</label>
                        <input
                            name="password"
                            className="focus:ring-0 border-heavy-rose border-2 px-4 py-2 focus:outline-none rounded-md"
                            type="password"></input>
                    </div>

                    <FormSubmitButton action="Salvar Usuário" waiting="Salvando" isFull buttonColor="bg-heavy-rose" />

                </form>
            </DialogContent>
        </Dialog>
    )
}

export default IncludeUserModal