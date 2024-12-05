import { LuTrash2 } from 'react-icons/lu';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from '../../../../components/ui/dialog';


const DeleteProductModal: React.FC = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <LuTrash2 className='text-red-500 text-base' />
            </DialogTrigger>
            <DialogContent className='w-1/4 font-sans'>
                <DialogHeader className='border-b-2 border-heavy-rose/70 text-lg'>Deletar produto</DialogHeader>

                <h1>Você tem certeza que deseja deletar esse produto? Essa ação é irreversível!</h1>

                <div className='flex justify-end gap-4'>
                    <DialogClose className='rounded-md bg-red-500 text-white px-4 py-1 hover:bg-red-600 duration-300'>Cancelar</DialogClose>
                    <DialogClose onClick={() => alert('criar rota no backend')} className='rounded-md bg-green-500 text-white px-4 py-1 hover:bg-green-600 duration-300'>Confirmar</DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteProductModal