/**
 * Created by danielhollcraft on 7/14/17.
 */

const apiEndpoint =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000';

function fetchPosts(limit=20) {
  return fetch(apiEndpoint + '/posts/' + limit, {
    method: "GET",
    body: limit,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((data) => data.json()).then(data => data)
    .catch((error) => {
    console.error('Error')
  });
}

function fetchPost(id) {}

function createPost(title, body) {}

function updatePost(id) {}

function removePost(id) {}


export  {
  fetchPost,
  fetchPosts,
  createPost,
  updatePost,
  removePost
}