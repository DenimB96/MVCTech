const { Posts } = require("../models");

const postData = [
  {
    post_sub: "This is a sample post",
    post_descr: `Test description`,
    user_id: 1,
  },
  {
    post_sub: "Another way to test ",
    post_descr: `another day another test`,
    user_id: 1,
  },
  {
    post_sub: "Best show on earth",
    post_descr: `South Park`,
    user_id: 1,
  },
];

const seedPost = () => Posts.bulkCreate(postData);

module.exports = seedPost;