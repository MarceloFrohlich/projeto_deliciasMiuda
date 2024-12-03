import {api} from '@/hooks/axiosConfig'

export async function getAllProducts() {
    try{
        return api.get('/')
    } catch(error: any){

    }
}