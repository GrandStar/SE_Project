import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import SearchBar from "../../components/SeacrhBar";
import TableDisplay from "../../components/PageDisplay";
import Grid from "@material-ui/core/Grid/Grid";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SimpleList from "../../components/Form";
import EditForm from "../../components/EditForm";
import TableFoot from "../../components/TableFoot";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              path="/createUser"
              render={() => (
                <table
                  container
                  justify="center"
                  alignItems="center"
                  width="100%"
                >
                  <SimpleList
                    profile={this.props.profile}
                    changeFirstName={this.props.changeFirstName}
                    changeTitle={this.props.changeTitle}
                    changeSex={this.props.changeSex}
                    changeAge={this.props.changeAge}
                    changeEmail={this.props.changeEmail}
                    changeStartDate={this.props.changeStartDate}
                    changeOfficePhone={this.props.changeOfficePhone}
                    changeCellPhone={this.props.changeCellPhone}
                    changeSms={this.props.changeSms}
                    changePassword={this.props.changePassword}
                    changeRepeatPassword={this.props.changeRepeatPassword}
                    createUser={this.props.createUser}
                    clearProfileState={this.props.clearProfileState}
                  />
                </table>
              )}
            />
            <Route
              exact={true}
              path="/"
              render={() => (
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  width="92%"
                >
                  <SearchBar
                    changeSearchWord={this.props.changeSearchWord}
                    searchUser={this.props.searchUser}
                    changeToShowSearch={this.props.changeToShowSearch}
                  />
                  <TableDisplay
                    searchUser={this.props.searchUser}
                    users={this.props.users}
                    getUsers={this.props.getUsers}
                    page={this.props.page}
                    changeSortRule={this.props.changeSortRule}
                    changePage={this.props.changePage}
                    changeRowsPerPage={this.props.changeRowsPerPage}
                    objectToState={this.props.objectToState}
                    deleteUser={this.props.deleteUser}
                  />
                  <div>
                    <TableFoot />
                  </div>
                </Grid>
              )}
            />
            <Route
              path="/editUser"
              render={() => (
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  width="92%"
                >
                  <EditForm
                    profile={this.props.profile}
                    changeFirstName={this.props.changeFirstName}
                    changeTitle={this.props.changeTitle}
                    changeSex={this.props.changeSex}
                    changeAge={this.props.changeAge}
                    changeEmail={this.props.changeEmail}
                    changeStartDate={this.props.changeStartDate}
                    changeOfficePhone={this.props.changeOfficePhone}
                    changeCellPhone={this.props.changeCellPhone}
                    changeSms={this.props.changeSms}
                    changePassword={this.props.changePassword}
                    changeRepeatPassword={this.props.changeRepeatPassword}
                    createUser={this.props.createUser}
                    clearProfileState={this.props.clearProfileState}
                  />
                </Grid>
              )}
            />
          </Switch>
          {/* <TableFoot /> */}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    page: state.page,
    profile: state.profile,
    searchUser: state.searchUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(actions.getData());
    },

    createUser: newUser => {
      dispatch(actions.createUser(newUser));
    },

    changeSearchWord: text => {
      dispatch(actions.changeSearchWord(text));
    },

    changeToShowSearch: () => {
      dispatch({ type: "CHANGE_TO_SHOW_SEARCH" });
    },

    changeSortRule: (order, orderBy) => {
      dispatch(actions.changeSortRule(order, orderBy));
    },
    changePage: page => {
      dispatch(actions.changePage(page));
    },
    changeFirstName: text => {
      dispatch(actions.changeFirstName(text));
    },
    changeEmail: text => {
      dispatch(actions.changeEmail(text));
    },
    changeTitle: text => {
      dispatch(actions.changeTitle(text));
    },
    changeSex: text => {
      dispatch(actions.changeSex(text));
    },
    // managerid: req.body.managerid,
    //   userid: req.body.userid,
    //   title: req.body.title,
    //   startDate: req.body.startDate,
    //   officePhone: req.body.officePhone,
    //   cellPhone: req.body.cellPhone,
    //   sms: req.body.sms,
    //   email: req.body.email
    changeStartDate: text => {
      dispatch(actions.changeStartDate(text));
    },
    changeOfficePhone: text => {
      dispatch(actions.changeOfficePhone(text));
    },
    changeCellPhone: text => {
      dispatch(actions.changeCellPhone(text));
    },
    changeSms: text => {
      dispatch(actions.changeSms(text));
    },
    clearProfileState: () => {
      dispatch(actions.clearProfileState());
    },
    objectToState: obj => {
      dispatch(actions.objectToState(obj));
    },

    deleteUser: id => {
      dispatch(actions.deleteUser(id));
    },

    updateUser: (id, obj) => {
      dispatch(actions.updateData(id, obj));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
