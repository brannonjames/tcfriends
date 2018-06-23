import axios from 'axios';


export function setTokenHeader(token){
  if(token){
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
} else {
  delete axios.defaults.headers.common["Authorization"];
}
}


export function apiCall(method, url, params, data){
  return new Promise((resolve, reject) => {
    return axios({
      method,
      url,
      params,
      data,
    })
      .then(res => resolve(res.data))
      .catch(err => {
        if(err.response.status === 500){
          reject('Oops, something went wrong..')
        } else {
          reject(err.response.data.error.message)
        }
      });
  });
}
