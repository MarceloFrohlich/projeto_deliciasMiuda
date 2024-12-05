'use client'

import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { IOptions, ISections } from '../types/types';
import { formatData } from '@/hooks/generalFunctions'
import DeleteSectionModal from './deleteSectionModal';
import DeleteOptionModal from './deleteOptionModal';

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

interface IDataTableOptions {
    options: IOptions[]
}

const DataTableOptions: React.FC<IDataTableOptions> = ({
    options
}) => {

    const columns = [
        {
            name: 'Descrição',
            selector: (row: IOptions) => row.description,
            sortable: true,
            cell: (row: IOptions) => <div className="rdt_TableCell custom-column-empresa-empresa">{row.description}</div>,
            width: '50%'

        },
        {
            name: 'Preço',
            selector: (row: IOptions) => row.price,
            sortable: true,
            cell: (row: IOptions) => <div className="rdt_TableCell custom-column-empresa-empresa">{row.price ? row.price : 'Não cadastrado'}</div>,
            width: '20%'

        },
        {
            name: 'Cadastrado em:',
            selector: (row: IOptions) => row.createdAt,
            sortable: true,
            cell: (row: IOptions) => <div className="rdt_TableCell custom-column-empresa-cnpj">{formatData(row.createdAt)}</div>,
            width: '10%'
        },
        {
            name: 'Ações',
            selector: (row: IOptions) => row.id,
            sortable: true,
            cell: (row: IOptions) => <div className="rdt_TableCell custom-column-empresa-cnpj">
                <DeleteOptionModal />
            </div>,
            width: '10%'
        },

    ];

    return (
        <DataTable
            columns={columns}
            data={options}
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

export default DataTableOptions;
