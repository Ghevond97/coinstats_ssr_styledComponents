import {
  getCoinstats,
  createCoinstats,
  removeCoinstats
} from '../services/coinstats';

const coinstats = router => {
  router
    .route('/v1')
    .get((req, res) => {
      getCoinstats()
        .then(data => res.send(data))
        .catch(err => res.send(err.message));
    })
    .post((req, res) => {
      createCoinstats(req.body)
        .then(data => res.send(data))
        .catch(err => res.send(err.message));
    })
    .delete((req, res) => {
      removeCoinstats()
        .then(data => res.send(data))
        .catch(err => res.send(err.message));
    });

  return router;
};

export default coinstats;
