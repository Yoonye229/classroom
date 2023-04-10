import { createContext, useEffect, useReducer } from 'react';

export const CourseContext = createContext();
export const courseReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return { courses: [action.payload,...state.courses] };
    case 'DELETE':
      return { courses: state.courses.filter((c) => c._id !== action.payload._id) };
    case 'GET':
      return { courses: action.payload }  
    default:
      return state;
  }
};

export const CourseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(courseReducer, {
    courses: null,
  });

  useEffect(() => {
    const courses = JSON.parse(localStorage.getItem('user'));

    if (courses) {
      dispatch({ type: 'LOGIN', payload: courses });
    }
  }, []);

  console.log('AuthContext state:', state);

  return (
    <CourseContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CourseContext.Provider>
  );
};
