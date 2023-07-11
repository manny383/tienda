import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/tienda';



export const NoteCard = ({ 
    id,
    title,
    talla,
    precio,
    body,
    imageUrls,
    
}) => {

    //const heroImageUrl = `/assets/heroes/dc-batman.jpg`;
    const heroImageUrl = imageUrls;
    const dispatch = useDispatch();
    const onClickNote = () => {
        dispatch( setActiveNote({ title, body, id, date, imageUrls }) )
    }

    // const charactesByHero =  (<p>{ characters }</p>);


    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">
                    
                    <div className="col-4">
                        //<img src={ heroImageUrl } className="card-img" alt={ title } />
                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{ title }</h5>
                            <p className="card-text">{ talla }</p>
                            <p className="card-text">{ precio }</p>

                            
                            

                            <p className="card-text">
                                <small className="text-muted">{ body }</small>
                            </p>

                            <Link to={`/hero/${ id }`} onClick={ onClickNote }>
                                Más..
                            </Link>

                            
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}
