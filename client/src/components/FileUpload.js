import React, { Component } from "react";
import store from "./../store";
import { addFile } from "./../actions";
import { uploadFile } from "./../services/fileUploadService";
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


class File_Upload extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * @param {Object} event
   */
  handleChange(event) {
    _.each(event.target.files, file => {
      uploadFile(file).then(uploadedFile => {
        store.dispatch(addFile(uploadedFile));
      });
    });

    // allow to upload the same file twice in a row
    event.target.value = "";
  }

  render() {
    return (
      <div>
        <div className="file-upload">
          <input
            type="file"
            name="file"
            onChange={this.handleChange}
            id="fileUpload"
            multiple
          />
          <label htmlFor="fileUpload">Add Image</label>
        </div>
      </div>
    );
  }
}

export default File_Upload;