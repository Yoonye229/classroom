import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

// const getCircularReplacer = () => {
//   const seen = new WeakSet();
//   return (key, value) => {
//     if (typeof value === 'object' && value !== null) {
//       if (seen.has(value)) {
//         return;
//       }
//       seen.add(value);
//     }
//     return value;
//   };
// };
const useProfile = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(null);
  const { dispatch } = useAuthContext();
  const api = '/api/user';

  const profile = {
    //read profile

    //edit profile
    editprofile: async (id) => {
      setIsloading(true);
      setError(null);

      const response = await fetch(`${api}/user/:${id}`, {
        method: 'PATCH',
      });
      const json = response.json();
      if (!response.ok) {
        setIsloading(false);
        setError(json.error);
      }
      if (response.ok) {
        dispatch({ type: 'UPDATE', payload: json });

        setIsloading(false);
      }
    },
  };
  return { profile, isloading, error };
};

export default useProfile;
