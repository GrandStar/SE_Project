import axios from "axios";

function requestStart() {
  return {
    type: "USER_FETCH_START"
  };
}
function requestSuccess(response) {
  return {
    type: "USER_FETCH_SUCCESS",
    data: response.data
  };
}
function requestFail(error) {
  return {
    type: "USER_FETCH_FAIL",
    error
  };
}
export const getData = () => {
  return (dispatch, store) => {
    dispatch(requestStart());
    axios
      .get("/users")
      .then(response => {
        dispatch(requestSuccess(response));
      })
      .catch(err => {
        dispatch(requestFail(err));
      });
  };
};

export const createUser = newUser => {
  return (dispatch, store) => {
    dispatch(requestStart());
    axios.post("/users", newUser).catch(err => {
      dispatch(requestFail(err));
    });
    console.log("createUser actions 40.");
  };
};

export const updateData = (id, newUser) => {
  return (dispatch, store) => {
    dispatch(requestStart());
    axios.put(`/users/${id}`, newUser).catch(err => {
      dispatch(requestFail(err));
    });
  };
};

export const deleteUser = id => {
  return (dispatch, store) => {
    axios
      .delete("/users/" + id)
      .then(response => {
        dispatch(getData());
      })
      .catch(err => {
        dispatch(requestFail(err));
      });
  };
};

export const clearSearchWord = text => {
  return {
    type: "CLEAR_SEARCH_WORD",
    text
  };
};

export const changeSearchWord = text => {
  return {
    type: "CHANGE_SEARCH_WORD",
    text
  };
};

export const changeSortRule = (order, orderBy) => {
  return {
    type: "CHANGE_SORT_RULE",
    order,
    orderBy
  };
};

export const changePage = page => {
  return {
    type: "CHANGE_PAGE",
    page
  };
};

export const changeFirstName = text => {
  return {
    type: "CHANGE_FIRST_NAME",
    text
  };
};
export const changeTitle = text => {
  return {
    type: "CHANGE_TITLE",
    text
  };
};
export const changeSex = text => {
  return {
    type: "CHANGE_SEX",
    text
  };
};
// export const changeManager = text => {
//   return {
//     type: "CHANGE_MANAGER",
//     text
//   };
// };
//       managerid: req.body.managerid,
//       userid: req.body.userid,
//       title: req.body.title,
//       startDate: req.body.startDate,
//       officePhone: req.body.officePhone,
//       cellPhone: req.body.cellPhone,
//       sms: req.body.sms,
//       email: req.body.email
// export const changeTitle = text => {
//   return {
//     type: "CHANGE_TITLE",
//     text
//   };
// };
export const changeStartDate = text => {
  return {
    type: "CHANGE_START_DATE",
    text
  };
};
export const changeCellPhone = text => {
  return {
    type: "CHANGE_CELL_PHONE",
    text
  };
};
export const changeOfficePhone = text => {
  return {
    type: "CHANGE_OFFICE_PHONE",
    text
  };
};
export const changeSms = text => {
  return {
    type: "CHANGE_SMS",
    text
  };
};
export const changeEmail = text => {
  return {
    type: "CHANGE_EMAIL",
    text
  };
};
export const clearProfileState = () => {
  return {
    type: "CLEAR_PROFILE_STATE"
  };
};

export const objectToState = obj => {
  return {
    type: "OBJECT_TO_STATE",
    preload: obj
  };
};

export const addFile = file => {
  return {
    type: "ADD_FILE",
    file
  };
};

export const removeFile = file => {
  return {
    type: "REMOVE_FILE",
    preload: file
  };
};

export const editile = file => {
  return {
    type: "EDIT_FILE",
    file
  };
};
