/* eslint-disable max-len */
const dummy = (posts) => (posts ? 1 : 0);

const totalLikes = (posts) => {
  if (posts.length === 1) {
    return posts[0].likes;
  } if (posts.length === 0) {
    return 0;
  }
  const likesSum = posts.reduce((prev, curr) => prev.likes + curr.likes);

  return likesSum;
};

const favouritePost = (posts) => posts.reduce((prev, curr) => ((prev.likes > curr.likes) ? prev : curr));

module.exports = {
  dummy,
  totalLikes,
  favouritePost,
};
