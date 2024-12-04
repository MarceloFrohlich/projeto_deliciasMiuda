import { api, apiFile } from '@/hooks/axiosConfig'

export async function getAllProducts() {
    try {
        return api.get('/products/get-all')
    } catch (error: any) {
        console.log('Erro na chamada de API:', error)
        return error
    }
}

export async function registerProduct(formData: FormData) {
    try {
        return apiFile.post('/products/create-product', formData)
    } catch (error: any) {
        console.log('Erro na chamada de API:', error)
        return error
    }
}