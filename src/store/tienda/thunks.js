import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import { addNewEmptyNote, setActiveNote } from './';
import { deleteNoteById, savingNewNote, setNotes, setPhotosToActiveNote, setSaving, setp, updateNote } from './journalSlice';
import { fileUpload, loadNotes } from '../../productos/helpers';


export const startNewNote = (title='nada',tallas='nada',body='nada',precio='nada',tipo='p',iu='nada') => {
    return async( dispatch, getState ) => {
        

        dispatch( savingNewNote() );
        console.log('entra start pasa saving')
        const { uid } = getState().auth;
        console.log({ title, tallas,body,precio,tipo,iu })

        const newNote = {
            title: title,
        	talla: tallas,
            body: body,
            precio:precio,
            tipo:tipo,
            date: new Date().getTime(),
            imageUrls: iu,
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes`) );
        await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;  

        //! dispatch
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );

    }
}
export const startLoadingNotes = () => {
    
    return async( dispatch, getState ) => {
        
        
        console.log('start entra')
        const { uid } = getState().auth;
        console.log(uid)
        if ( !uid ) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );
    }
}


export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;
    
        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
        await setDoc( docRef, noteToFireStore, { merge: true });

        dispatch( updateNote( note ) );

    }
}


export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSaving() );
            
        // await fileUpload( files[0] );
        const fileUploadPromises = [];
        for ( const file of files ) {
            fileUploadPromises.push( fileUpload( file ) )
        }

        const photosUrls = await Promise.all( fileUploadPromises );
        console.log(photosUrls);
        
        //dispatch( imageu ( state, photosUrls ) );
        dispatch( setp( photosUrls[0] ));
        
    }
}


export const startDeletingNote = () => {
    return async( dispatch, getState) => {

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await deleteDoc( docRef );

        dispatch( deleteNoteById(note.id) );

    }
}
// prueba imagen
