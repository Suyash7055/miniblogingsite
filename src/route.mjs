import express from 'express';
import { createAuthor } from './controllers/authorController.mjs';
const router = express.Router();
router.get('/api', (req, res) => {
  return res.status(200).send({ message: "ok" })
})
router.post('/authors', createAuthor)
export default router;