import { CiCircleChevRight } from 'react-icons/ci';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '../../../../components/ui/dialog';
import DataTableSections from './dataTableSections';
import IncludeSectionModal from './includeSectionModal';

interface ISectionDialog{
    productId: string
    productName: string
}

const SectionDialog: React.FC<ISectionDialog> = ({
    productId, productName
}) => {
    return (
        <Dialog>
            <DialogTrigger className='text-lg'>
                <CiCircleChevRight />
            </DialogTrigger>
            <DialogContent className='w-[90%] max-h-[90%] font-sans'>
                <DialogHeader className='border-b-2 border-heavy-rose/70 text-lg h-8'>Editar seções do produto</DialogHeader>

                <div className='flex flex-col gap-2'>
                    <div className='flex justify-between items-center'>
                        <h1>Seções cadastradas</h1>
                        <IncludeSectionModal productId={productId} productName={productName}/>
                    </div>
                    <DataTableSections sections={[]} />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default SectionDialog