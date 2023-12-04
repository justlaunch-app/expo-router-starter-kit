import { create } from 'apisauce';

export const api = create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

export const reqresApi = create({
  baseURL: process.env.EXPO_PUBLIC_REQRES_API_URL,
});
