import { ProductoList } from '../components';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/tienda/thunks';

import { Navigate } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
import { setp } from '../../store/tienda';



export const PantalonesPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active ,messageSaved} = useSelector( state => state.journal );

  const onClickNewNote = () => {
    //console.log('llega pantal');
    dispatch( setp() );
    <Navigate to="/new" replace={true} />
    //<NewProduct />
   // dispatch( startNewNote() );
   
  }
  return (
    <>
      <h1>Pantalones</h1>
      
      <IconButton
        component={ RouterLink } color='inherit' to="/new"
        onClick={ onClickNewNote }
        
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
       
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

      <hr />

     <ProductoList tipos='pantalon' />

    </>
  )
}