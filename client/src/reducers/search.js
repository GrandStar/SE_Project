const initState = { searchWord: "", showSearch: false };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "USE_SEARCH":
      return {
        showSearch: true,
        searchWord: action.text
      };
    case "CHANGE_SEARCH_WORD":
      return {
        showSearch: true,
        searchWord: action.text
      };
    case "CHANGE_TO_SHOW_SEARCH":
      return {
        ...state,
        showSearch: true
      };
    case "CLEAR_SEARCH_WORD":
      return initState;

    default:
      return state;
  }
};
export default reducer;
