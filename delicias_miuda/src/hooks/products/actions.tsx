'use server'

import { revalidatePath } from "next/cache";
import { registerProduct } from "./api"

export async function registerProductAction(formData: FormData) {
    const response = await registerProduct(formData)
    if(response.status === 201){
        revalidatePath('/painel/produtos')
    }

}