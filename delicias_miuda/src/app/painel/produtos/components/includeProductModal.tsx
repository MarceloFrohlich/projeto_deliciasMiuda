import { CiSquarePlus } from "react-icons/ci"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../../../../components/ui/dialog"
import FormSubmitButton from "../../../components/systemComponents/formSubmitButton"
import { registerProductAction } from "../../../../hooks/products/actions"

const IncludeProductModal: React.FC = () => {

    return (
        <Dialog>
            <DialogTrigger>
                <CiSquarePlus className="text-3xl text-heavy-rose" />
            </DialogTrigger>
            <DialogContent className="w-1/3 font-sans max-h-[90%] overflow-y-auto finer-line-scrollbar">
                <DialogHeader className="border-b-2 border-heavy-rose/70 text-lg">Cadastrar Produtos</DialogHeader>
                <form action={registerProductAction} className="flex flex-col gap-3 ">
                    <div className="flex flex-col gap-1">
                        <label className="text-base ">Produto:</label>
                        <input
                            name="name"
                            className="focus:ring-0 border-heavy-rose border-2 px-4 py-2 bg-light-rose focus:outline-none rounded-md"
                            type="text"></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-base ">Descrição:</label>
                        <textarea
                            name="description"
                            className="focus:ring-0 border-heavy-rose border-2 px-4 py-2 bg-light-rose focus:outline-none rounded-md min-h-[150px]"
                        />
                    </div>
                    <input
                        type="file"
                        id="loadNewLogo"
                        accept="image/*"
                        name="image"
                        className=""
                    />

                    <FormSubmitButton action="Salvar Produto" waiting="Salvando" isFull buttonColor="bg-heavy-rose" />

                </form>
            </DialogContent>
        </Dialog>
    )
}

export default IncludeProductModal