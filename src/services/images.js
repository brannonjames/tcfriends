import { apiCall } from 'services/api';

export function uploadImages(url, images){
  return apiCall('post', url, null, images)
    .then(res => res)
    .catch(err => err);
}