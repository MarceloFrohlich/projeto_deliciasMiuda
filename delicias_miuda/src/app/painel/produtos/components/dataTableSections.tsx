'use client'

import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { ISections } from '../types/types';
import { formatData } from '@/hooks/generalFunctions'
import DeleteSectionModal from './deleteSectionModal';
import OptionsDialog from './optionsDialog';

createTheme(
    'delicias',
    {
        text: {
            primary: '#475569',
        },
        divider: {
            default: '#a1a3a7',
        },
    },
);

interface IDataTableProducts {
    sections: ISections[]
}

const DataTableSections: React.FC<IDataTableProducts> = ({
    sections
}) => {

    const columns = [
        {
            name: 'Titulo',
            selector: (row: ISections) => row.title,
            sortable: true,
            cell: (row: ISections) => <div className="rdt_TableCell custom-column-empresa-empresa">{row.title}</div>,
            width: '20%'

        },
        {
            name: 'Observações',
            selector: (row: ISections) => row.description,
            sortable: true,
            cell: (row: ISections) => <div className="rdt_TableCell custom-column-empresa-empresa">{row.description}</div>,
            width: '50%'

        },
        {
            name: 'Cadastrado em:',
            selector: (row: ISections) => row.createdAt,
            sortable: true,
            cell: (row: ISections) => <div className="rdt_TableCell custom-column-empresa-cnpj">{formatData(row.createdAt)}</div>,
            width: '10%'
        },
        {
            name: 'Ações',
            selector: (row: ISections) => row.id,
            sortable: true,
            cell: (row: ISections) => <div className="rdt_TableCell custom-column-empresa-cnpj flex items-center gap-2">
                <OptionsDialog sectionId={row.id} sectionName={row.title} options={row.options}/>
                <DeleteSectionModal />
            </div>,
            width: '10%'
        },

    ];

    return (
        <DataTable
            columns={columns}
            data={sections}
            pagination
            paginationPerPage={10}
            noDataComponent={<div className="mt-8 font-semibold">Nenhum produto cadastrado!</div>}
            paginationRowsPerPageOptions={[5, 8, 10, 15]}
            paginationComponentOptions={{
                rowsPerPageText: "Linhas por página:",
                rangeSeparatorText: "de",
                noRowsPerPage: false,
                selectAllRowsItem: false,
                selectAllRowsItemText: "Selecionar todos",
            }}
            theme="delicias"
        />
    );
};

export default DataTableSections;
