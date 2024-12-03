import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export async function login(data: {}) {
    try {
        return await api.post('/auth/login', data)
    } catch (error: any) {
        console.log('Erro na chamada de API:', error)
        return error
    }
}