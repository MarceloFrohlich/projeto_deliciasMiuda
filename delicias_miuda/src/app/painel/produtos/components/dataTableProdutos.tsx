"use client"
import React, { useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

import Link from 'next/link'
import { LuCalendarDays } from "react-icons/lu";
import { VscSend } from 'react-icons/vsc';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '../../../../components/ui/dialog';


createTheme(
    'vela',
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
    products: []
}

const DataTableProducts: React.FC<IDataTableProducts> = ({
    products
}) => {
    console.log(products)
    
    const [modalControl, setModalControl] = useState<boolean>(false)

    function formatData(data: string) {
        const arrayData = data.split('-')
        return `${arrayData[2]}/${arrayData[1]}/${arrayData[0]}`
    }

    const columns = [
        {
            name: 'Titulo',
            selector: (row: any) => row.title,
            sortable: true,
            cell: (row: any) => <div className="rdt_TableCell custom-column-empresa-empresa">{row.title}</div>,
            width: '20%'

        },
        {
            name: 'Observações',
            selector: (row: any) => row.observations,
            sortable: true,
            cell: (row: any) => <div className="rdt_TableCell custom-column-empresa-empresa">{row.observations}</div>,
            width: '20%'

        },
        {
            name: 'Data',
            selector: (row: any) => row.date,
            sortable: true,
            cell: (row: any) => <div className="rdt_TableCell custom-column-empresa-cnpj">{formatData(row.date)}</div>,
            width: '10%'
        },
        {
            name: 'Hora Início',
            selector: (row: any) => row.start_time,
            sortable: true,
            cell: (row: any) => <div className="rdt_TableCell custom-column-empresa-sigla">{row.start_time}</div>,
            width: '10%'
        },
        {
            name: 'Hora Fim',
            selector: (row: any) => row.end_time,
            sortable: true,
            center: true,
            cell: (row: any) => <div className="rdt_TableCell custom-column-empresa-sigla">{row.end_time}</div>,
            width: '10%'
        },
        {
            name: 'Ver na agenda',
            center: true,
            cell: (row: any) =>
                <Link className="text-lg" href={`/pages/agenda?${row.id}?${row.date}`}><LuCalendarDays /></Link>,
            width: '10%'
        },
        {
            name: 'Avaliar',
            center: true,
            cell: (row: any) =>
                <div className="text-lg">
                    {/* <ModalEvaluateReunion /> */}
                </div>,
            width: '10%'
        },
        {
            name: 'Enviar Avaliação',
            center: true,
            cell: (row: any) =>
                <div className="text-lg">
                    <Dialog open={modalControl} onOpenChange={setModalControl}>
                        <DialogTrigger>
                            <VscSend />
                        </DialogTrigger>
                        <DialogContent className='w-1/4 flex flex-col justify-start'>
                            <DialogHeader className='border-b pb-2 h-10'>Confirmar envio</DialogHeader>

                            <h1 >Ao confirmar abaixo você estará enviando o link de avaliação da reunião para o responsável da empresa.</h1>

                            <div className='flex gap-4 justify-end'>
                                <button
                                    onClick={() => setModalControl(false)}
                                    className='bg-redVela hover:bg-red-600 duration-300 rounded-lg px-4 py-2 text-white'
                                    type='button'>
                                    Cancelar
                                </button>

                                <button
                                    onClick={() => alert('enviado')}
                                    className='bg-blueVela hover:bg-blue-600 duration-300 rounded-lg px-4 py-2 text-white'
                                    type='button'>
                                    Confirmar
                                </button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>,
            width: '10%'
        },
    ];

    return (
        <DataTable
            columns={columns}
            data={products}
            pagination
            paginationPerPage={10}
            noDataComponent={<div className="mt-8 font-semibold">Não há reuniões agendadas</div>}
            paginationRowsPerPageOptions={[5, 8, 10, 15]}
            paginationComponentOptions={{
                rowsPerPageText: "Linhas por página:",
                rangeSeparatorText: "de",
                noRowsPerPage: false,
                selectAllRowsItem: false,
                selectAllRowsItemText: "Selecionar todos",
            }}
            theme="vela"
        />
    );
};

export default DataTableProducts;
