import { useMemo, useRef,useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {  UploadOutlined } from '@mui/icons-material';
import { Alert, Button, Grid,IconButton, Link, TextField } from '@mui/material';
import Combobox from "react-widgets/Combobox";
import { setActiveNote, startDeletingNote, startNewNote, startSaveNote, startUploadingFiles } from '../../store/tienda';


import { useForm } from '../../hooks';

import { AuthLayout } from '../../auth/layout/AuthLayout';



export const NewProduct = () => {
  

  const { status, errorMessage,photoURL,  } = useSelector( state => state.auth );
  const { messageSaved} = useSelector( state => state.journal );
  //const tipo=messageSaved;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { title, talla,body,precio,tipo,imageUrls, onInputChange } = useForm({
    title: '',
    talla: '',
    body: '',
    precio:'',
    tipo:'blusa',
    
    imageUrls: 'a',
  });
  //intentoimgen
  const [valor, setValue] = useState('blusa')
  const addimagen = () => {
    
    return messageSaved;
  };
  
  const isAuthenticating = useMemo( () => status === 'checking', [status]);
  //cargar imagen

  const calculation = useMemo(() => addimagen(messageSaved), [messageSaved]);

  const onSubmit = ( event ) => {
    
    event.preventDefault();
    console.log(title, talla,body,precio,valor,messageSaved );
    dispatch( startNewNote( title, talla,body,precio,valor,messageSaved ) );
    if(valor=='blusa'){
      navigate("/blusas");
    }
    if(valor=='calzado'){
      navigate("/calzado");
    }
    if(valor=='pantalon'){
      navigate("/pantalones");
    }
    
  }
  //archivos
  const fileInputRef = useRef();
  

   

 const onFileInputChange = ({ target }) => {
        if( target.files === 0 ) return;
        
        dispatch(  startUploadingFiles( target.files ) );
        
    }
    

  return (
    <AuthLayout title="Agregar Productos">
      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="titulo" 
                type="title" 
                placeholder='producto' 
                fullWidth
                name="title"
                value={ title }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="talla" 
                type="text" 
                placeholder='talla' 
                fullWidth
                name="talla"
                value={ talla }
                onChange={ onInputChange }
              />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <Combobox
                
                defaultValue= {valor}
                
                data={["blusa", "calzado", "pantalon"]}
                name="tipo"
                value={valor}
                onChange={valor => setValue(valor)}
                
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Precio" 
                type="number" 
                placeholder='$$' 
                fullWidth
                name="precio"
                value={ precio }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Descripcion" 
                type="text" 
                placeholder='descripcion' 
                fullWidth
                name="body"
                value={ body }
                onChange={ onInputChange }
              />
              
              
              
            </Grid>
            
            <Grid>
              <input 
                    type="file"
                    multiple
                    ref={ fileInputRef }
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }}
                />
              <IconButton
                    color="primary"
                    
                    onClick={ () => fileInputRef.current.click() }
                >
                   <UploadOutlined />
                </IconButton>
                
               
               
              
            </Grid>
            <Grid>
              <div className="col-4" >
                        <img src={ calculation } className="card-img"  />
                    </div>
            </Grid>


            <Grid 
              container
              display={ !!errorMessage ? '': 'none' }
              sx={{ mt: 1 }}>
              <Grid 
                  item 
                  xs={ 12 }
                >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>
            </Grid>
            
            <Grid container justifyContent='center' spacing={ 1 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button
                  disabled={ isAuthenticating }
                  type="submit" 
                  variant='contained' 
                  fullWidth>
                  agregar
                </Button>
              </Grid>
              
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/pantalones">
                Cancelar
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}
