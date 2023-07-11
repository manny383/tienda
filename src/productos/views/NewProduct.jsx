import { useMemo, useRef } from 'react';
import {Webcam} from "react-webcam";
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { CameraEnhance, DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Alert, Button, Grid,IconButton, Link, TextField, Typography } from '@mui/material';

import { setActiveNote, startDeletingNote, startNewNote, startSaveNote, startUploadingFiles } from '../../store/tienda';


import { useForm } from '../../hooks';

import { AuthLayout } from '../../auth/layout/AuthLayout';


export const NewProduct = () => {
  const WebcamComponent = () => <Webcam />;

  const { status, errorMessage,  } = useSelector( state => state.auth );
  const { messageSaved} = useSelector( state => state.journal );
  //const tipo=messageSaved;
  console.log('hola');

  const dispatch = useDispatch();
  const { title, talla,body,precio,tipo,imageUrls, onInputChange } = useForm({
    title: '',
    talla: '',
    body: '',
    precio:'',
    tipo:'',
    
    imageUrls: 'a',
  });
  
  const isAuthenticating = useMemo( () => status === 'checking', [status]);
  

  const onSubmit = ( event ) => {
    event.preventDefault();
    //console.log(messageSaved);
    //console.log('prueba uno');
    //imageUrls=messageSaved;
        //console.log('prueba')
        //fileInputRef2.current.click();
        //console.log(imageUrls);

     //console.log('onsumit')
     //console.log({ title , talla,body,precio,tipo,messageSaved });
    dispatch( startNewNote( title, talla,body,precio,tipo,messageSaved ) );
  }
  //archivos
  const fileInputRef = useRef();
  
   const heroImageUrl = `/assets/descarga.jpg`;

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
              <TextField 
                label="tipo" 
                type="tipo" 
                placeholder='tipo' 
                fullWidth
                name="tipo"
                value={ tipo }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Precio" 
                type="text" 
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
                
                <IconButton
                    color="primary"
                    
                    onClick={ () => fileInputRef.current.click() }
                >
                   <CameraEnhance />
                </IconButton>
               
              
            </Grid>
            <Grid>
              <div className="col-4" >
                        <img src={ heroImageUrl } className="card-img"  />
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
