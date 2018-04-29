import { storage } from './firebase';

export const addImage = (file) => 
    storage.child('images/' + file.name)
        .put(file)
        .then(snapshot => this.addImage(snapshot.downloadURL));

export { storage };