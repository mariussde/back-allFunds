import express, { Router, RequestHandler } from 'express';
import {
  getAllNews,
  getArchivedNews,
  createNews,
  archiveNews,
  deleteNews
} from '../controllers/newsController';

const router: Router = express.Router();

router.get('/', getAllNews as RequestHandler);

router.get('/archived', getArchivedNews as RequestHandler);

router.post('/', createNews as RequestHandler);

router.put('/:id/archive', archiveNews as RequestHandler);

router.delete('/:id', deleteNews as RequestHandler);

export default router; 
