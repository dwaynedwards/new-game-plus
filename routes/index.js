import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/games');
});
router.get(
  ['/games', '/games/:platform/:slug', '/games/:platform/'],
  (req, res) => {
    res.render('index', { title: 'New Game+' });
  }
);

export default router;
