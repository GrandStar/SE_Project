import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button/Button";
import Link from "react-router-dom/es/Link";
// import { createMuiTheme } from "@material-ui/core/styles";
// import green from "@material-ui/core/colors/green";

// const color = green[500];
// const theme = createMuiTheme({
//   palette: {
//     primary: green,
//     secondary: {
//       main: "#00e676"
//     }
//   }
// });

const styles = theme => ({
  root: {
    width: "100%",
    position: "relative"
  }
});

class TableFoot extends React.Component {
  render() {
    return (
      <div>
        <Toolbar>
          <Button variant="contained" className={root}>
            <Link to="/createUser">CREATE NEW USER</Link>
          </Button>
        </Toolbar>
      </div>
    );
  }
}

export default TableFoot;
