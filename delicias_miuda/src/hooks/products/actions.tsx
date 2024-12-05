'use server'

import { revalidatePath } from "next/cache";
import { registerProduct, registerSection } from "./api"

export async function registerProductAction(formData: FormData) {
    const response = await registerProduct(formData)
    if (response.status === 201) {
        revalidatePath('/painel/produtos')
    }

}

export async function registerSectionAction(formData: FormData) {
    const productId = formData.get('productId') as string;

    if (!productId) {
        throw new Error('O ID do produto é obrigatório.');
    }
    
    const response = await registerSection(productId, formData)
    if (response.status === 201) {
        revalidatePath('/painel/produtos')
    }

}