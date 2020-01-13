const initState = {
  activity: [
    { id: "1", title: "Go to watch movie", content: "blah blah blah" },
    { id: "2", title: "Go to play football", content: "blah blah blah" },
    { id: "3", title: "Have to have a haircut", content: "blah blah blah" }
  ]
};

const activityReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_ACTIVITY":
      console.log("Created Project", action.activity);
      return state;
    case "CREATE_ACTIVITY_ERROR":
      console.log("create activity error", action.err);
      return state;
    default:
      return state;
  }
};

export default activityReducer;
