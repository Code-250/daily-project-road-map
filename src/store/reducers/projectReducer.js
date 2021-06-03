const initState = {
  projects: [
    {
      id: 1,
      title: 'tech english',
      content: 'makesure that we speak and write english very well',
    },
    {
      id: 2,
      title: 'tech french',
      content: 'makesure that we speak and write french very well',
    },
    {
      id: 3,
      title: 'tech dutch',
      content: 'makesure that we speak and write dutch very well',
    },
  ],
};

const ProjectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('new project created', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('we are not able to create project', action.err);
      return state;
    default:
      return state;
  }
};
export default ProjectReducer;
