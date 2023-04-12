import { createContext, useReducer } from 'react';

export const CourseContext = createContext();
export const courseReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return { courses: [action.payload, ...state.courses] };
    case 'DELETE':
      return {
        courses: state.courses.filter((c) => c._id !== action.payload._id),
      };
    case 'GET':
      return { courses: action.payload };
    case 'GETONE':
      return {
        courses: state.courses.filter((c) => c._id === action.payload),
      };
    case 'EDIT':
      return {
        courses: state.courses.filter((c) =>
          c._id === action.payload._id ? action.payload._id : c
        ),
      };
    default:
      return state;
  }
};

export const CourseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(courseReducer, {
    courses: null,
  });

  console.log('Course state:', state);

  return (
    <CourseContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CourseContext.Provider>
  );
};
