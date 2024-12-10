
import { getAllUsers } from "../../../hooks/users/api"
import DataTableUsers from "./components/dataTableUsers"
import IncludeUserModal from "./components/includeUserModal"

const Usuarios: React.FC = async () => {
    const users = await getAllUsers()

    return (
        <div className="bg-rose-100/80 font-sans">
            <div className="rounded-md bg-white mx-6 mt-6 p-6">
                <div className="flex justify-between items-center">
                    <h1 className="mb-2">Usuários Cadastrados</h1>
                    <IncludeUserModal />
                </div>

                <DataTableUsers users={users.data} />
            </div>
        </div>
    )
}

export default Usuarios