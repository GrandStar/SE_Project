import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import Link from "react-router-dom/es/Link";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 560,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  homeButton: {
    marginLeft: 100
  }
});

const submitHandler = props => {
  const p = props.profile;
  console.log("p");
  let err = [],
    count = 0;
  if (p.firstName === "") {
    err.push("Name is empty!");
    count++;
  }
  if (p.title === "") {
    err.push("Title is empty!");
    count++;
  }
  if (
    p.sex !== "male" &&
    p.sex !== "female" &&
    p.sex !== "Female" &&
    p.sex !== "Male" &&
    p.sex !== "F" &&
    p.sex !== "M"
  ) {
    err.push("Sex must be male or female!");
    count++;
  }
  if (isNaN(p.age)) {
    err.push("Age format is not correct!");
    count++;
  }
  if (count !== 0) {
    err.forEach(el => {
      alert(el);
    });
    return false;
  } else {
    props.createUser(props.profile);
    props.clearProfileState();
    return true;
  }
};

const submitButton = props => {
  console.log(props);
  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={() => {
        const bool = submitHandler(props.appProps);
        if (bool) props.history.push("/");
      }}
    >
      Add User
    </Button>
  );
};
const WithRouterButton = withRouter(submitButton);

const SimpleList = props => {
  const { classes } = props;
  const changeHandler = event => {
    const text = event.target.value;
    const name = event.target.name;
    if (name === "firstName") {
      props.changeFirstName(text);
    } else if (name === "title") {
      props.changeTitle(text);
    } else if (name === "sex") {
      props.changeSex(text);
    } else if (name === "startDate") {
      props.changeStartDate(text);
    } else if (name === "officePhone") {
      props.changeOfficePhone(text);
    } else if (name === "cellPhone") {
      props.changeCellPhone(text);
    } else if (name === "sms") {
      props.changeSms(text);
    } else if (name === "email") {
      props.changeEmail(text);
    }
  };

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <TextField
            id="standard-dense"
            label="Name"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            name="firstName"
            onChange={changeHandler}
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <TextField
            id="standard-dense"
            label="Title"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            name="title"
            onChange={changeHandler}
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <TextField
            id="standard-dense"
            label="Sex"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            name="sex"
            onChange={changeHandler}
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <TextField
            id="standard-dense"
            label="Start Date"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            name="startDate"
            onChange={changeHandler}
          />
        </ListItem>

        <Divider />
        <ListItem button>
          <TextField
            id="standard-dense"
            label="Office Phone"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            name="officePhone"
            onChange={changeHandler}
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <TextField
            id="standard-dense"
            label="Cell Phone"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            name="cellPhone"
            onChange={changeHandler}
          />
        </ListItem>

        <ListItem button>
          <TextField
            id="standard-dense"
            label="SMS"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            name="sms"
            onChange={changeHandler}
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <TextField
            id="standard-dense"
            label="Email"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            name="email"
            onChange={changeHandler}
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <TextField
            id="standard-dense"
            label="Manager"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
            name="Manager"
            onChange={changeHandler}
          />
        </ListItem>
        <Divider />
        <WithRouterButton className={classes.button} appProps={props} />
        <Button
          className={classes.homeButton}
          variant="outlined"
          color="primary"
        >
          <Link to="/">Home</Link>
        </Button>
      </List>
    </div>
  );
};

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
