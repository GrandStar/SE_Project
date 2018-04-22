import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import File_Upload from "./../../components/File_Upload/File_Upload";
import Files_View from "./../../components/Files_View/Files_View";

function mapStateToProps(store, props) {
  return {
    uploadFiles: store.uploadFiles
  };
}

class UploadFile extends Component {
  render() {
    let uploadFilesStore = this.props.uploadFiles;

    return (
      <div>
        <File_Upload />
        <Files_View files={uploadFilesStore.files} />
      </div>
    );
  }
}

export default UploadFile;
