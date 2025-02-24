// Solution using transactions to ensure atomic updates to the array
firebase.firestore().runTransaction(transaction => {
  return transaction.get(firebase.firestore().doc('path/to/document'))
    .then(doc => {
      if (!doc.exists) {
        throw new Error('Document does not exist!');
      }

      const newData = doc.data();
      const newArray = newData.nestedObject.myArray;
      newArray.push(newElement);
      newData.nestedObject.myArray = newArray;

      transaction.update(firebase.firestore().doc('path/to/document'), newData);
      return newData;
    });
})