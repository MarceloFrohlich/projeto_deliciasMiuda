'use client'

import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { formatData } from '@/hooks/generalFunctions'
import { Dialog, DialogContent, DialogTrigger } from '../../../../components/ui/dialog';
import { CiImageOn } from 'react-icons/ci';
import Image from 'next/image';
import { IUsers } from '../types/types';
import DeleteUserModal from './deleteUserModal';

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

interface IDataTableUsers {
    users: IUsers[]
}

const DataTableUsers: React.FC<IDataTableUsers> = ({
    users
}) => {

    const columns = [
        {
            name: 'Nome',
            selector: (row: IUsers) => row.name,
            sortable: true,
            cell: (row: IUsers) => <div className="rdt_TableCell custom-column-empresa-empresa">{row.name}</div>,
            width: '20%'

        },
        {
            name: 'Email',
            selector: (row: IUsers) => row.email,
            sortable: true,
            cell: (row: IUsers) => <div className="rdt_TableCell custom-column-empresa-empresa">{row.email}</div>,
            width: '50%'

        },
        {
            name: 'Cadastrado em:',
            selector: (row: IUsers) => row.createdAt,
            sortable: true,
            cell: (row: IUsers) => <div className="rdt_TableCell custom-column-empresa-cnpj">{formatData(row.createdAt)}</div>,
            width: '10%'
        },
        {
            name: 'Ações',
            selector: (row: IUsers) => row.id,
            sortable: true,
            cell: (row: IUsers) => <div className="rdt_TableCell custom-column-empresa-cnpj flex gap-2 items-center">
                <DeleteUserModal userId={row.id}/>
            </div>,
            width: '10%'
        },

    ];

    return (
        <DataTable
            columns={columns}
            data={users}
            pagination
            paginationPerPage={10}
            noDataComponent={<div className="mt-8 font-semibold">Nenhum usuário cadastrado!</div>}
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

export default DataTableUsers
