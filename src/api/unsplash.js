import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1KO7JQkNnxm40vsW0TzoqOMHu_xxv2QeYmb9rgaWYNY '
      }
});