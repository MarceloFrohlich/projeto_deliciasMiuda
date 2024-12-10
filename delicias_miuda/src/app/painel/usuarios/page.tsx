
import { getAllUsers } from "../../../hooks/users/api"
import IncludeProductModal from "../produtos/components/includeProductModal"

const Usuarios: React.FC = async () => {
    const users = await getAllUsers()
    console.log(users.data)

    return (
        <div className="bg-rose-100/80 font-sans">
            <div className="rounded-md bg-gray-50 mx-6 mt-6 p-6">
                <div className="flex justify-between items-center">
                    <h1 className="mb-2">Usuários Cadastrados</h1>
                    <IncludeProductModal />
                </div>

                {/* <DataTableProducts products={products.data} /> */}
            </div>
        </div>
    )
}

export default Usuarios