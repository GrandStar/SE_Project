import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHeadComplex from "./TableHead";
import EditIcon from "./EditIcon";
import Button from "@material-ui/core/Button/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Link from "react-router-dom/es/Link";

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const styles = theme => ({
  root: {
    width: "90%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 550
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

class EnhancedTable extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (
      this.props.page.orderBy === property &&
      this.props.page.order === "desc"
    ) {
      order = "asc";
    }
    this.props.changeSortRule(order, orderBy);
  };

  handleChangePage = (event, page) => {
    this.props.changePage(page);
  };

  render() {
    const { classes } = this.props;
    const { order, orderBy, rowsPerPage, page } = this.props.page;
    const users = this.props.users;
    const searchUser = this.props.searchUser;
    let data = users.data;

    if (users.isFetching) {
      return <div>Loading the data....</div>;
    }
    if (users.err) {
      return <div>This was an error to get the data.</div>;
    }
    if (data.length === 0) {
      return <div>No data....</div>;
    }
    if (searchUser.showSearch) {
      // data = users.data.filter(el => el.firstName === searchUser.searchWord);
      // data = users.data.filter(el =>
      //   searchUser.searchWord.indexOf(el.firstName)
      data = users.data.filter(
        el => !el.firstName.search(searchUser.searchWord)
      );
    }

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <TableHeadComplex
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  return (
                    <TableRow hover key={n._id}>
                      <TableCell>{n.firstName}</TableCell>
                      <TableCell>{n.title}</TableCell>
                      <TableCell>{n.sex}</TableCell>
                      <TableCell>{n.startDate}</TableCell>
                      <TableCell>{n.officePhone}</TableCell>
                      <TableCell>{n.cellPhone}</TableCell>
                      <TableCell>{n.sms}</TableCell>
                      <TableCell>{n.email}</TableCell>
                      <TableCell>{n.manager}</TableCell>
                      <TableCell>{n.numberOfDr}</TableCell>

                      <TableCell>
                        <Button
                          // variant="contained"
                          className={classes.button}
                          onClick={() => this.props.objectToState(n)}
                        >
                          <EditIcon />
                          <Link to="/editUser">EDIT</Link>
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          // variant="contained"
                          className={classes.button}
                          onClick={() => {
                            console.log(n._id);
                            this.props.deleteUser(n._id);
                          }}
                        >
                          <DeleteIcon className={classes.rightIcon} />
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        {/* <ul class="pager">
          <li>
            <a href="#">Previous</a>
          </li>
          <li>
            <a href="#">Next</a>
          </li>
        </ul> */}
        <TablePagination
          rowsPerPageOptions={[]}
          backIconButtonProps
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          // onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnhancedTable);
