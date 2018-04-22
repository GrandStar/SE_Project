const initState = {
  firstName: "",
  title: "",
  sex: "",
  age: "",
  email: "",
  sms: "",
  startDate: "",
  cellPhone: "",
  files: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_FIRST_NAME":
      return {
        ...state,
        firstName: action.text
      };
    case "CHANGE_TITLE":
      return {
        ...state,
        title: action.text
      };
    case "CHANGE_SEX":
      return {
        ...state,
        sex: action.text
      };
    case "CHANGE_START_DATE":
      return {
        ...state,
        startDate: action.text
      };
    case "CHANGE_OFFICE_PHONE":
      return {
        ...state,
        officePhone: Number(action.text)
      };
    case "CHANGE_CELL_PHONE":
      return {
        ...state,
        cellPhone: Number(action.text)
      };
    case "CHANGE_EMAIL":
      return {
        ...state,
        email: action.text
      };
    case "ADD_FILE":
      return {
        ...state,
        files: [...state.files, action.file]
      };
    case "REMOVE_FILE":
      return {
        ...state,
        files: [
          ...state.files.slice(0, action.index),
          ...state.files.slice(action.index + 1)
        ]
      };
    case "CHANGE_SMS":
      return {
        ...state,
        sms: Number(action.text)
      };
    case "CLEAR_PROFILE_STATE":
      return initState;
    case "OBJECT_TO_STATE":
      return action.preload;
    default:
      return state;
  }
};

export default reducer;
