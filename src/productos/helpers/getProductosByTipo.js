//import { heroes } from '../data/heroes';
import { useSelector } from 'react-redux';


export const getProductosByTipo = ( tipo ) =>{
    const { notes } = useSelector( state => state.journal );

    const validTipo = ['b','p','c'];
    if ( !validTipo.includes( tipo ) ) {
        throw new Error(`${ tipo } is not a valid tipo`);
    }

    return notes.filter( nota => nota.tipo === tipo );
}