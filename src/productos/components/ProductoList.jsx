
//import { useMemo } from 'react';
import { NoteCard } from './';
//import { getProductosByTipo } from '../helpers';
import { useSelector } from 'react-redux';

export const ProductoList = ({ tipos }) => 
{

    //const notas = useMemo( () => getProductosByTipo( tipo ), [ tipo ]);
    const { notes } = useSelector( state => state.journal );
    const filtro = notes.filter( note => note.tipo === tipos );
    
    

    return (
        <div className="row rows-cols-1 row-cols-md-2 g-3">
            {
                filtro.map( nota => (
                    <NoteCard 
                        key={ nota.id }
                        
                        { ...nota }
                    />
                ))
            }
        </div>
    )
}