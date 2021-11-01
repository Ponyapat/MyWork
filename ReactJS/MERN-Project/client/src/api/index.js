import axios from 'axios';

const url = 'httpl://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);