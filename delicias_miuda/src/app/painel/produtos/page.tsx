import DataTableProducts from "./components/dataTableProdutos"



const Produtos: React.FC = () => {
    return (
        <div className="fixex bg-rose-100/80">
            <div className="rounded-md bg-gray-50 mx-6 mt-6">
                <h1>Produtos Cadastrados</h1>

                <DataTableProducts products={[]} />
            </div>
        </div>
    )
}

export default Produtos