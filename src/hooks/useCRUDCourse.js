import { useState } from 'react';
import { useCourseContext } from './useCourseContext';
//CREATE
export const useCreateCourse = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(null);
  const { dispatch } = useCourseContext;

  const create = async (coursename, desc, coursekey) => {
    setIsloading(true);
    setError(null);

    console.log({ coursename, desc, coursekey });
    const response = await fetch('/api/course/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        coursename: coursename,
        coursekey: coursekey,
        desc: desc,
      }),
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
      setError(null);
    }
  };
  return { create, isloading, error };
};
//DELETE
export const DeleteCourse = (id) => {
  const [error, setError] = useState()
  const { dispatch } = useCourseContext;

  const deleteCourse = async () => {
    const response = await fetch('/api/course/' + id, {
      method: 'DELETE',
    });

    const json = await response.json();
    if(!response.ok){
      setError(error)
    }
    if (response.ok) {
      setError(null)
      dispatch({ type: 'DELETE', payload: json });
    }
  };

  return {deleteCourse, error};
};
//EDIT
export const useEditCourse = (course) => {
  const { dispatch } = useCourseContext;

  const editCourse = async () => {
    const response = await fetch('/api/course/' + course._id, {
      method: 'PATCH',
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ tye: 'EDIT', payload: json });
    }
  };
  return editCourse;
};
//FIND
export const useGetCourse = (id) => {
  const { dispatch } = useCourseContext;

  const getCourse = async () => {
    const response = await fetch('/api/course/'+id, {
      method: 'GET',
    });
    const json = await response.json();
    if (response.ok) {
      localStorage.setItem('course', JSON.stringify(json))

      dispatch({ tye: 'GETONE', payload: json });
    }
  };
  return getCourse;
};
