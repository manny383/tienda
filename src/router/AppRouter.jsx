import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../router/AuthRoutes';

import { ProductosRoutes } from '../productos/routes/ProductosRoutes';
import { CheckingAuth } from '../ui/';
import { useCheckAuth } from '../hooks';




export const AppRouter = () => {
  console.log('router');
  const status = useCheckAuth();
  
  if ( status === 'checking' ) {
    return <CheckingAuth />
  }

  return (
    <Routes>

        {
          (status === 'authenticated')
           ? <Route path="/*" element={ <ProductosRoutes /> } />
           : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/login' />  } />

        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

        {/* JournalApp */}
        {/* <Route path="/*" element={ <JournalRoutes /> } /> */}

    </Routes>
  )
}