The issue stems from an unusual Firebase interaction.  When attempting to update a document using `firebase.firestore().doc().update()`, with a nested object containing an array, the array wouldn't update correctly unless the entire nested object was entirely rewritten.  Simply updating elements within the array, even if using server timestamps, resulted in no changes. This behaviour deviated from the expected behavior of updating only the modified parts of the document.