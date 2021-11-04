import express from 'express';
import { getPosts, createPost, updatePost} from '../comtrollers/posts.js'

const router = express.Router();

//localhost:5000/posts
router.get('/' , getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost)


export default router;