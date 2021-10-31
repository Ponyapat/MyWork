import express from 'express';
import { getPosts} from '../comtrollers/posts.js'

const router = express.Router();

//localhost:5000/posts
router.get('/' , getPosts);

export default router;