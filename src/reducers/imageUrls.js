const initialState = [1, 2, 3, 4, 5];

const imageUrls = (state = initialState, action) => {
  switch (action.type) {
    case "RECIVE_DATA":
      return "data";
    default:
      return state;
  }
};

export default imageUrls;
