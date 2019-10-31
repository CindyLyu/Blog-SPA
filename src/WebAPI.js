const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://qootest.com/posts/',
})

export const getPosts = () => instance.get(`?_sort=id&_order=desc`);

export const getPost = postId => instance.get(`${postId}`);

export const updatePost = (postId, title, author, body) => instance.put(`${postId}`, {
                                                              title,
                                                              author,
                                                              body,
                                                            });

export const deletePost = postId => instance.delete(`${postId}`);

export const createPost = (title, author, body) => instance.post('/', {
                                                      title,
                                                      author,
                                                      body,
                                                    });
