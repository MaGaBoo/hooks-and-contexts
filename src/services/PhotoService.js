import http from './BaseService';

export const photos = () => http.get('/photos');
