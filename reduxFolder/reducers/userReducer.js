const initialState = {

};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.payload };
    case 'LOGOUT':
      return null;
    case 'ADD_FOLLOWING':
      return { ...state, following: [...state.following, action.payload] };
    case 'REMOVE_FOLLOWING':
      return {
        ...state,
        following: state.following.filter((following) => following !== action.payload),
      };
    case 'UPDATE_RATEDHANDICRAFTS':
      let updatedRatedHandicrafts = state.ratedHandicrafts.map(ratedHandicraft => {
        console.log(action.payload)
        if (ratedHandicraft.handicraftId === action.payload.handicraftId) {
          console.log({ handicraftId:ratedHandicraft.handicraftId, rate: action.payload.rate, })
          return { handicraftId:ratedHandicraft.handicraftId,rate: action.payload.rate, };
        }
        return ratedHandicraft;
      });
      console.log(updatedRatedHandicrafts);
      return { ...state, ratedHandicrafts: updatedRatedHandicrafts };
    default:
      return { ...state };
  }
};

export default userReducer;
