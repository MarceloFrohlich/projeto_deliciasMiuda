import { api, apiFile } from '@/hooks/axiosConfig'

export async function getAllProducts() {
    try {
        return await api.get('/products/get-all')
    } catch (error: any) {
        console.log('Erro na chamada de API:', error)
        return error
    }
}

export async function registerProduct(formData: FormData) {
    try {
        return await apiFile.post('/products/create-product', formData)
    } catch (error: any) {
        console.log('Erro na chamada de API:', error)
        return error
    }
}

export async function registerSection(productId: string, formData: FormData) {
    try {
        return await api.post(`/products/create-section/${productId}`, formData)
    } catch (error: any) {
        console.log('Erro na chamada de API:', error)
        return error
    }
}

export async function registerOption(sectionId: string, formData: FormData) {
    try {
        return await api.post(`/products/create-option/${sectionId}`, formData)
    } catch (error: any) {
        console.log('Erro na chamada de API:', error)
        return error
    }
}

export async function deleteProduct(productId: string) {
    try {
        return await api.patch(`/products/delete-product/${productId}`)
    } catch (error: any) {
        console.log('Erro na chamada de API:', error)
        return error
    }
}