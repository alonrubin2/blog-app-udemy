// import React, { useReducer } from 'react';
import { Children } from 'react';
import createDataContext from './createDataContext';


const blogReducer = (blogPosts, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return blogPosts.filter((blogPost) => blogPost.id !== action.idOfPostToDelete);
        case 'add_blogpost':
            return [...blogPosts, {
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content
            }];
        default:
            return blogPosts
    }
};


const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: {title, content}});
        callback();
    }
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blogpost', idOfPostToDelete: id})
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    []);