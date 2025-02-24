# Firebase Firestore Unexpected Array Update in Nested Objects

This repository demonstrates an unexpected behavior in Firebase Firestore when updating arrays within nested objects.  Standard `update()` calls fail to modify the array unless the entire nested object is overwritten.  This issue is further detailed in the `bug.js` file. A working solution is provided in `bugSolution.js`

## Problem
Updating an array within a nested object using `firebase.firestore().doc().update()` doesn't work as expected. Instead of updating specific elements, the entire operation fails unless the entire object is rewritten.

## Solution
The solution involves using a transaction to ensure atomicity and proper array updates.  The `bugSolution.js` file shows an implementation that correctly updates the array.