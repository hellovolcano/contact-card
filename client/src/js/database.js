import { openDB } from 'idb';
import 'regenerator-runtime/runtime'


export const initDb = async () => {
    openDB('contact_db', 1, {
        upgrade(db) {
            if (db.objectStoreNames.contains('contacts')) {
                console.log('contacts already exists')
                return
            }

            db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true })
            console.log('contacts store created')
        }   
    })
}

export const getDb = async() => {
    const db = await openDB('contact_db')
    const tx = db.transaction('contacts','readonly')
    const store = tx.objectStore('contacts')
    const request = store.getAll()
    
    const result = await request
    console.log('result.value', result)

    return result
}

export const createStuff = async(name, email, phone, profile) => {

    // Create a connection to the database and specify the version we want to use.
    const db = await openDB('contact_db',1)

    // Create a new transaction and specify the store and data privileges.
    const tx = db.transaction('contacts', 'readwrite')

    // Open up the desired object store.
    const store = tx.objectStore('contacts')

    // Use the .add() method on the store and pass in the content.
    const request =  store.add({ name: name, email: email, phone: phone, profile: profile })

    // Get confirmation of the request
    const result = await request

    console.log('🚀 - data saved to the database', result);
}

export const deleteDb = async(id) => {
    console.log('DELETE from the database', id)

    // Create a new connection to the IndexedDB database and the version we want to use
    const db = await openDB('contact_db', 1)

    // Create a new transaction and specify the store and data privileges
    const tx = db.transaction('contacts','readwrite')

    // Opne up the desired store object
    const store = tx.objectStore('contacts')

    // Use the .delete() method to get all the data in the database
    const request = store.delete(id)

    // Get confirmation of the request
    const result = await request
    console.log('result.value', result)
    return result?.value
}

export const editDb = async (id, name, email, phone, profile) => {
    // Create a new connection to the IndexedDB database and the version we want to use
    const db = await openDB('contact_db', 1)

    // Create a new transaction and specify the store and data privileges
    const tx = db.transaction('contacts','readwrite')

    // Opne up the desired store object
    const store = tx.objectStore('contacts')

    // update an entry using the .put method
    console.log ('id before the put ' + id)
    const request = store.put({ id: id, name: name, email: email, phone: phone, profile: profile });
    const result = await request;
    console.log('🚀 - data saved to the database', result);
  };