import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from "@material-ui/core/Tooltip";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import PropTypes from "prop-types";

const rows = [
  { id: "firstName", numeric: false, label: "Name" },
  { id: "title", numeric: false, label: "Title" },
  { id: "sex", numeric: false, label: "Sex" },
  { id: "startDate", numeric: true, label: "StartDate" },
  { id: "officePhone", numeric: true, label: "OfficePhone" },
  { id: "cellPhone", numeric: true, label: "CellPhone" },
  { id: "sms", numeric: true, label: "SMS" },
  { id: "email", numeric: true, label: "Email" },
  { id: "manager", numeric: true, label: "Manager" },
  { id: "numberofmanager", numeric: true, label: "# of Dr" },
  { id: "edit", numeric: false, label: "" },
  { id: "delete", numeric: false, label: "" }
];

class TableHeadComplex extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(row => {
            return (
              <TableCell
                key={row.id}
                numeric={row.numeric}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? "bottom-end" : "bottom-start"}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

// getDefaultProps:

// getInitialState:

// componentWillMount：

// render:

// componentDidMount:

TableHeadComplex.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};
export default TableHeadComplex;
