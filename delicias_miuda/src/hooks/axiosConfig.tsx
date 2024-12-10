import axios from 'axios';
import { decryptData } from './generalFunctions';
import { cookies } from 'next/headers';

const cookieStore = cookies();
const token = cookieStore.get('token')?.value;
const decryptedToken = decryptData(token);

// Verifica se o token está presente
if (!token) {
  throw new Error('Token não encontrado.');
}

// Criar a instância do axios para json
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${decryptedToken}`
  },
});

// Criar a instância do axios para arquivos
export const apiFile = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${decryptedToken}`
  },
});