import { useState } from 'react';

export const useProfile = () => {
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(null);
  const api = '/api/user:id';
  const profile = async (firstname, password, educator) => {
    setIsloading(true);
    setError(null);

    const response = await fetch(api, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstname,
        password,
        educator,
      }),
    });
    const json = response.json();
    if (!response.ok) {
      setIsloading(false);
      setError(json.error);
    }
    if (response.ok) {
      //get firstname password educator
      response.json(firstname, password, educator);
      setIsloading(false);
    }
  };
  return { profile, isloading, error };
};
