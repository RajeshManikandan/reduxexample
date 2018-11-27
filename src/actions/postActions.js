import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
    //get posts data
    axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts.data
            })
        )
        .catch(err => console.log(err));
};

export const addPost = ({ title, body }) => dispatch => {
    //get posts data
    axios
        .post('https://jsonplaceholder.typicode.com/posts', { title, body })
        .then(post =>
            dispatch({
                type: NEW_POST,
                payload: post.data
            })
        )
        .catch(err => console.log(err));
};
