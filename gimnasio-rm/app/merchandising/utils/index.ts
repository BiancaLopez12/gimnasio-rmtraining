import { AtSign, AtSignIcon } from 'lucide-react';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');


export const obtenerMerchandising = async () => {
    const articulos = await pb.collection('Merchandising').getFullList()
    return articulos;
}