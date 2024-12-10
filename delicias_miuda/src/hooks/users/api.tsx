import {api} from '@/hooks/axiosConfig'

export async function getAllUsers() {
    try {
        return await api.get('/users/get-all')
    } catch (error: any) {
        console.log('Erro na chamada de API:', error)
        return error
    }
}

export async function createUser(data: {}){
    try{
        return await api.post('/users/create', data)
    } catch(error: any){
        console.log('Erro na chamada de API:', error)
        return error
    }
}

export async function deleteUser(userId: string){
    try{
        return await api.patch(`/users/delete/${userId}`)
    } catch(error: any){
        console.log('Erro na chamada de API:', error)
        return error
    }
}

