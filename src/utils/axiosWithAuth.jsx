<<<<<<< HEAD
import axios from 'axios';


export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: 'https://devdesk-backend.herokuapp.com/api/auth/',
        headers: {
            Authorization: token
        }
    });
}
=======
import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://devdesk-backend.herokuapp.com/api/auth/',
    headers: {
      Authorization: token
    }
  });
};
>>>>>>> fa502965bf33787d5084506704107a9fcc2ca514
