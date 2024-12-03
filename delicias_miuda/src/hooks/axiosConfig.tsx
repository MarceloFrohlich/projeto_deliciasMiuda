import axios from 'axios';

  // Criar a instância do axios para json
export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Criar a instância do axios para arquivos
export const apiFile = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });