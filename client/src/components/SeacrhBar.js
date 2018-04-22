import React, { Component } from "react";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing.unit * 2,
    marginLeft: 1,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class SearchBar extends Component {
  handleChange = event => {
    this.props.changeSearchWord(event.target.value);
  };
  handleClear = event => {
    this.props.clearSearchWord(event.target.value);
  };
  handleSubmit = event => {
    this.props.changeToShowSearch();
    event.preventDefault();
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Toolbar>
          <div>
            <Typography
              className={classes.title}
              variant="title"
              color="inherit"
              noWrap
            >
              Users
            </Typography>
          </div>
        </Toolbar>
        <Toolbar>
          <form className={classes.search} onSubmit={this.handleSubmit}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <Input
              placeholder="Search…"
              disableUnderline
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              value={this.props.searchUser.searchWord}
              onChange={this.handleChange}
            />
          </form>
        </Toolbar>
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
