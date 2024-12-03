import axios from 'axios';
import { parseCookies } from 'nookies';
import { decryptData } from './generalFunctions';
const { token } = parseCookies()

const decryptedToken = decryptData(token)

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