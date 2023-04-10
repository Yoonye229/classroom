import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from './useAuthContext';

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};
const useProfile = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(null);
  const {user, dispatch} = useAuthContext()
  const api = '/api/user';

  const profile = {
  //read profile
    
  //edit profile
    editprofile: async (id, firstname, educator) => {
      setIsloading(true)
      setError(null);
      const userInfo ={id,firstname,educator}
      const response = await fetch(`${api}/:${user._id}`,{
        method: 'PUT',
        body: JSON.stringify(userInfo, getCircularReplacer()),
      })
      const json = response.json();
      if(!response.ok){
        setIsloading(false);
        setError(json.error);
      }
      if(response.ok){
        response.json(firstname, educator)

        dispatch({ type: 'UPDATE', payload: json });

        setIsloading(false)
      }
  },

}
  return { profile, isloading, error };
};

export default useProfile