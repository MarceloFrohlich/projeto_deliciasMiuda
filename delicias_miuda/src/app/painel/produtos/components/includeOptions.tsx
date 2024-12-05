import { CiSquarePlus } from "react-icons/ci"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../../../../components/ui/dialog"
import FormSubmitButton from "../../../components/systemComponents/formSubmitButton"
import { registerOptionAction, registerSectionAction } from "../../../../hooks/products/actions"

interface IIncludeOptionsModal {
    sectionId: string
    sectionName: string
}

const IncludeOptionsModal: React.FC<IIncludeOptionsModal> = ({
    sectionId, sectionName
}) => {

    return (
        <Dialog>
            <DialogTrigger>
                <CiSquarePlus className="text-3xl text-heavy-rose" />
            </DialogTrigger>
            <DialogContent className="w-1/3 font-sans max-h-[90%] overflow-y-auto finer-line-scrollbar">
                <DialogHeader className="border-b-2 border-heavy-rose/70 text-lg">Cadastrar opção em: {sectionName}</DialogHeader>
                <form action={registerOptionAction} className="flex flex-col gap-3 ">
                    <input type="hidden" name="sectionId" value={sectionId} />
                    <div className="flex flex-col gap-1">
                        <label className="text-base ">Descrição:</label>
                        <input
                            name="description"
                            className="focus:ring-0 border-heavy-rose border-2 px-4 py-2 focus:outline-none rounded-md"
                            type="text"></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-base ">Preço (opcional):</label>
                        <input
                            name="price"
                            className="focus:ring-0 border-heavy-rose border-2 px-4 py-2 focus:outline-none rounded-md"
                            type="text"></input>
                    </div>

                    <FormSubmitButton action="Salvar Produto" waiting="Salvando" isFull buttonColor="bg-heavy-rose" />

                </form>
            </DialogContent>
        </Dialog>
    )
}

export default IncludeOptionsModal