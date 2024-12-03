import { api } from '@/hooks/axiosConfig'

export async function getAllProducts() {
    try {
        return api.get('/products/get-all')
    } catch (error: any) {
        console.log('Erro na chamada de API:', error)
        return error
    }
}