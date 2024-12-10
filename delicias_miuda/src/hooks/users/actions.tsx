'use server'

import { revalidatePath } from "next/cache";
import { createUser, deleteUser } from "./api";

export async function registerUserAction(formData: FormData){

    const userData = {
        name: formData.get("name") as string,
        role: Number(formData.get("role")),
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };

    const response = await createUser(userData)
    if (response.status === 201) {
        revalidatePath('/painel/usuarios')
    }
}

export async function deleteUserAction(formData: FormData){
    const userId = formData.get('userId') as string;

    if (!userId) {
        throw new Error('O ID do usuário é obrigatório.');
    }
    
    const response = await deleteUser(userId)
    if (response.status === 200) {
        revalidatePath('/painel/produtos')
    }
}