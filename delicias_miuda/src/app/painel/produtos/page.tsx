import { getAllProducts } from "../../../hooks/products/api"
import DataTableProducts from "./components/dataTableProdutos"


const Produtos: React.FC = async () => {
    const products = await getAllProducts()

    console.log(products.data)
    return (
        <div className="fixex bg-rose-100/80">
            <div className="rounded-md bg-gray-50 mx-6 mt-6 p-6">
                <h1 className="mb-2">Produtos Cadastrados</h1>

                <DataTableProducts products={products.data} />
            </div>
        </div>
    )
}

export default Produtos