import { getAllProducts } from "../../../hooks/products/api"
import DataTableProducts from "./components/dataTableProdutos"
import IncludeProductModal from "./components/includeProductModal"


const Produtos: React.FC = async () => {
    const products = await getAllProducts()

    console.log(products.data)
    return (
        <div className="bg-rose-100/80 font-sans">
            <div className="rounded-md bg-gray-50 mx-6 mt-6 p-6">
                <div className="flex justify-between items-center">
                    <h1 className="mb-2">Produtos Cadastrados</h1>
                    <IncludeProductModal />
                </div>

                <DataTableProducts products={products.data} />
            </div>
        </div>
    )
}

export default Produtos