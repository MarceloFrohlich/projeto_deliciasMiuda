import { CiCircleChevRight } from 'react-icons/ci';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '../../../../components/ui/dialog';
import { IOptions } from '../types/types';
import IncludeOptionsModal from './includeOptions';
import DataTableOptions from './dataTableOptions';

interface ISectionDialog{
    sectionId: string
    sectionName: string
    options: IOptions[]
}

const OptionsDialog: React.FC<ISectionDialog> = ({
    sectionId, sectionName, options
}) => {
    return (
        <Dialog>
            <DialogTrigger className='text-lg'>
                <CiCircleChevRight />
            </DialogTrigger>
            <DialogContent className='w-[90%] max-h-[90%] font-sans'>
                <DialogHeader className='border-b-2 border-heavy-rose/70 text-lg h-8'>Editar opções da seção</DialogHeader>

                <div className='flex flex-col gap-2'>
                    <div className='flex justify-between items-center'>
                        <h1>Opções cadastradas</h1>
                        <IncludeOptionsModal sectionId={sectionId} sectionName={sectionName} />
                    </div>
                    <DataTableOptions options={options} />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default OptionsDialog