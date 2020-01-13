export const createActivity = (activity) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    //make async call to database
    firestore.collection('activity').add({
      ...activity,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: "CREATE_ACTIVITY", activity: activity });
    }).catch((err) => {
      dispatch({ type: 'CREATE_ACTIVITY_ERROR', err});
    })
    
  };
};
