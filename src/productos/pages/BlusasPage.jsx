import { ProductoList } from '../components';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';

export const BlusasPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal );

  const onClickNewNote = () => {
    <Navigate to="/new" replace={true} />
  }
  return (
    <>
      <h1>Blusas</h1>
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

      <ProductoList tipos='blusa' />

    </>
  )
}
