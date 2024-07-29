import express from 'express';
import { getBlogs, getBlog, createBlog, updateBlog } from '../controllers/blogController.js';

const router = express.Router();

router.get('/', getBlogs);
router.get('/:id', getBlog);
router.post('/', createBlog);
router.patch('/:id', updateBlog);

export default router;
