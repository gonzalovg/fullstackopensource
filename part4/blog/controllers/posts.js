const postsRouter = require('express').Router();
const Post = require('../models/post');

postsRouter.get('/', (request, response) => {
  Post.find({}).then((posts) => {
    response.json(posts);
  });
});

postsRouter.get('/:id', (request, response, next) => {
  Post.findById(request.params.id)
    .then((post) => {
      if (post) {
        response.json(post);
      } else {
        response.status(400).end();
      }
    })
    .catch((error) => next(error));
});

postsRouter.post('/', (request, response, next) => {
  // eslint-disable-next-line no-multi-spaces
  const  { body } = request;

  const post = new Post({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  });

  post.save()
    .then((savedPost) => response.json(savedPost))
    .catch((error) => next(error));
});

postsRouter.delete('/:id', (request, response, next) => {
  Post.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

postsRouter.put('/:id', (request, response, next) => {
  const { body } = request;
  const post = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  };

  Post.findByIdAndUpdate(request.params.id, post, { new: true })
    .then((updatedPost) => {
      response.json(updatedPost);
    })
    .catch((error) => next(error));
});

module.exports = postsRouter;
