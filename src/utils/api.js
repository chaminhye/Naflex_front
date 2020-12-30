import axios from 'axios'
import BASE_URL from '../constants';

export const executeJwtAuthenticationService = async ({ username, password }) => {
    const { data } = await axios.post({BASE_URL}`/authenticate`, {
      username,
      password,
    });
    return data;
  };

  
export const signOut = async session => {
    const headers = {
      Authorization: `jwt ${session}`,
    };
  
    const { data } = await axios.get({BASE_URL}`/api/signout`, {
      headers,
    });
  
    return data;
};