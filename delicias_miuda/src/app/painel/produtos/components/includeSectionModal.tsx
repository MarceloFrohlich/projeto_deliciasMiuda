import { CiSquarePlus } from "react-icons/ci"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../../../../components/ui/dialog"
import FormSubmitButton from "../../../components/systemComponents/formSubmitButton"
import { registerSectionAction } from "../../../../hooks/products/actions"

interface IIncludeSectionModal {
    productId: string
    productName: string
}

const IncludeSectionModal: React.FC<IIncludeSectionModal> = ({
    productId, productName
}) => {

    return (
        <Dialog>
            <DialogTrigger>
                <CiSquarePlus className="text-3xl text-heavy-rose" />
            </DialogTrigger>
            <DialogContent className="w-1/3 font-sans max-h-[90%] overflow-y-auto finer-line-scrollbar">
                <DialogHeader className="border-b-2 border-heavy-rose/70 text-lg">Cadastrar seção em: {productName}</DialogHeader>
                <form action={registerSectionAction} className="flex flex-col gap-3 ">
                    <input type="hidden" name="productId" value={productId} />
                    <div className="flex flex-col gap-1">
                        <label className="text-base ">Titulo da seção:</label>
                        <input
                            name="title"
                            className="focus:ring-0 border-heavy-rose border-2 px-4 py-2 bg-light-rose focus:outline-none rounded-md"
                            type="text"></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-base ">Descrição da seção:</label>
                        <textarea
                            name="description"
                            className="focus:ring-0 border-heavy-rose border-2 px-4 py-2 bg-light-rose focus:outline-none rounded-md min-h-[150px]"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-base ">Informação extra da seção:</label>
                        <textarea
                            name="sectionInfo"
                            className="focus:ring-0 border-heavy-rose border-2 px-4 py-2 bg-light-rose focus:outline-none rounded-md min-h-[150px]"
                        />
                    </div>

                    <FormSubmitButton action="Salvar Produto" waiting="Salvando" isFull buttonColor="bg-heavy-rose" />

                </form>
            </DialogContent>
        </Dialog>
    )
}

export default IncludeSectionModal