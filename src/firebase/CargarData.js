import firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from './config';


export const CargarData= ()=>{

    const a =()=>{

    const db = getFirestore();

    const batch = db.batch();

    const collectionRef = db.collection('productos');

    const documents = [
        {
            category: 'A',
            description: 'Francis no le tiene miedo a las sombras...',
            image: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-con-react-c5640.appspot.com/o/A%2Fanime.jpg?alt=media&token=78a1ebd8-cb5d-4ff6-8c1d-9bf701ac350b',
            name: 'Fram de la Noche',
            price: 100,
            stock: 100
        }
    ];

    documents.forEach((doc) => {
    const docRef = collectionRef.doc();
    batch.set(docRef, doc);
    })

    batch.commit()
    .then(() => {
        console.log('Documentos agregados exitosamente!');
    })
    .catch((error) => {
        console.error('Error al agregar documentos: ', error);
    });
}
    return(
        <button onClick={a}>Agregar documentos</button>

    )
}