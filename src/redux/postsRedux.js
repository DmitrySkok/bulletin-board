import Axios from 'axios';

/* selectors */
export const getAllPublished = ({ posts }) => posts.data;
export const getPostById = ({ posts }) => posts.postData;

/* action name creator */
const reducerName = 'posts';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');
const FETCH_POST_DATA = createActionName('FETCH_POST_DATA');
const FETCH_ADD_POST = createActionName('FETCH_ADD_POST');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });

export const addPost = (payload) => ({ payload, type: ADD_POST });
export const editPost = (payload) => ({ payload, type: EDIT_POST });
export const fetchPostData = (payload) => ({ payload, type: FETCH_POST_DATA });
export const fetchAddPost = (payload) => ({ payload, type: FETCH_ADD_POST });

/* thunk creators */
export const fetchPublished = () => {
  return (dispatch, getState) => {
    try {
      const { posts } = getState();
      if (!posts.data.length || posts.loading.active === false) {
        dispatch(fetchStarted());
        Axios.get('http://localhost:8000/api/posts').then((res) => {
          dispatch(fetchSuccess(res.data));
        });
      }
    } catch (err) {
      dispatch(fetchError(err.message || true));
    }
  };
};

export const fetchPost = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios.get(`http://localhost:8000/api/posts/${id}`)
      .then((res) => {
        dispatch(fetchPostData(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const fetchAdd = (post) => {
  console.log('Added post:', post);

  return (dispatch, getState) => {
    dispatch(fetchStarted());
    Axios.post('http://localhost:8000/api/posts', post)
      .then((res) => {
        dispatch(addPost(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...statePart,
        data: [...statePart.data, action.payload],
      };
    }
    case FETCH_ADD_POST: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: [...statePart.data, action.payload],
      };
    }
    case EDIT_POST: {
      const restPosts = statePart.data.filter(
        (post) => post.id !== action.payload.id
      );
      return {
        ...statePart,
        data: [...restPosts, action.payload],
      };
    }
    case FETCH_POST_DATA: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        postData: action.payload,
      };
    }
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
