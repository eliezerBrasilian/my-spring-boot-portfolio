import axios from 'axios';

const taskApi = axios.create({
  baseURL: 'http://localhost:8080/api/tasks/v1',
});

export { taskApi };
