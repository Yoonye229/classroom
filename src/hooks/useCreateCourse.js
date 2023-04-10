import { useState } from 'react';
import { useCourseContext } from './useCourseContext';

export const useCreateCourse = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(null);
  const { dispatch } = useCourseContext;

  const create = async (coursename, desc, coursekey) => {
    setIsloading(true);
    setError(null);
    
    console.log({coursename, desc, coursekey});
    const response = await fetch('/api/course/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({coursename:coursename, coursekey: coursekey, desc: desc}),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsloading(false);
      setError(json.error);
    }
    if (response.ok) {
      //save the user to local storage
      localStorage.setItem('course', JSON.stringify(json));

      //update the auth context
      dispatch({ type: 'CREATE', payload: json });

      setIsloading(false);
    }
  };
  return { create, isloading, error };
};
