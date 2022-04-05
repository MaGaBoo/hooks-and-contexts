import http from './BaseService';

export const comments = () => http.get('/comments');

