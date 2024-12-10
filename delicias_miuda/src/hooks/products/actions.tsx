'use server'

import { revalidatePath } from "next/cache";
import { deleteProduct, registerOption, registerProduct, registerSection } from "./api"

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

export async function registerOptionAction(formData: FormData) {
    const sectionId = formData.get('sectionId') as string;

    if (!sectionId) {
        throw new Error('O ID da seção é obrigatório.');
    }
    
    const response = await registerOption(sectionId, formData)
    if (response.status === 201) {
        revalidatePath('/painel/produtos')
    }
}

export async function deleteProductAction(formData: FormData) {
    const productId = formData.get('productId') as string;

    if (!productId) {
        throw new Error('O ID do produto é obrigatório.');
    }
    
    const response = await deleteProduct(productId)
    if (response.status === 200) {
        revalidatePath('/painel/produtos')
    }
}