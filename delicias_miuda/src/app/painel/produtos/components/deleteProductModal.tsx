
import { LuTrash2 } from 'react-icons/lu';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from '../../../../components/ui/dialog';
import { deleteProductAction } from '../../../../hooks/products/actions';
import FormSubmitButton from '../../../components/systemComponents/formSubmitButton';

interface IDeleteProductModal {
    productId: string
}

const DeleteProductModal: React.FC<IDeleteProductModal> = ({ productId }) => {

    return (
        <Dialog>
            <DialogTrigger>
                <LuTrash2 className='text-red-500 text-base' />
            </DialogTrigger>
            <DialogContent className='w-1/4 font-sans'>
                <DialogHeader className='border-b-2 border-heavy-rose/70 text-lg'>Deletar produto</DialogHeader>

                <form action={deleteProductAction}>

                    <input className='hidden' value={productId} name='productId'/>
                    <h1>Você tem certeza que deseja deletar esse produto? Essa ação é irreversível!</h1>

                    <div className='flex justify-end gap-4'>
                        <DialogClose className='rounded-md bg-red-500 text-white px-4 py-1 hover:bg-red-600 duration-300'>Cancelar</DialogClose>
                        <FormSubmitButton action='Confirmar' waiting='Deletando' buttonColor='bg-green-500' hoverColor='hover:bg-green-600' />
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteProductModal