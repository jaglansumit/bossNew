const intitialState = {
  firstName: '',
  lastName: '',
  email: '',
};

function bossreducer(state = intitialState, action) {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
      };
    default:
      return state;
  }
}

export default bossreducer;
