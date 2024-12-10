import {api} from '@/hooks/axiosConfig'

export async function getAllUsers() {
    try {
        return await api.get('/users/get-all')
    } catch (error: any) {
        console.log('Erro na chamada de API:', error)
        return error
    }
}