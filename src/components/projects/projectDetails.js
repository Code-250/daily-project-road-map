import React from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';

const projectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <div className='container section project-details'>
        <div className='card z-depth-0'>
          <div className='card-content'>
            <span className='card-title'>{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className='card-action grey lighten-4 grey-text'>
            <div>
              Posted By {project.authorFirstName} {project.authorLastName}
            </div>
            <div>3rd, october, 2910 at 3Pm</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='container center'>
        <p>Loading Projects....</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(projectDetails);
