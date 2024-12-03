'use client'

import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { IProdutos } from '../types/types';
import {formatData} from '@/hooks/generalFunctions'

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

interface IDataTableProducts{
    products: IProdutos[]
}

const DataTableProducts: React.FC<IDataTableProducts> = ({
    products
}) => {

    const columns = [
        {
            name: 'Titulo',
            selector: (row: IProdutos) => row.name,
            sortable: true,
            cell: (row: IProdutos) => <div className="rdt_TableCell custom-column-empresa-empresa">{row.name}</div>,
            width: '20%'

        },
        {
            name: 'Observações',
            selector: (row: IProdutos) => row.description,
            sortable: true,
            cell: (row: IProdutos) => <div className="rdt_TableCell custom-column-empresa-empresa">{row.description}</div>,
            width: '50%'

        },
        {
            name: 'Cadastrado em:',
            selector: (row: IProdutos) => row.createdAt,
            sortable: true,
            cell: (row: IProdutos) => <div className="rdt_TableCell custom-column-empresa-cnpj">{formatData(row.createdAt)}</div>,
            width: '30%'
        },

    ];

    return (
        <DataTable
            columns={columns}
            data={products}
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

export default DataTableProducts;
