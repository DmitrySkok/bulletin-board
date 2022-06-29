/* selectors */
export const getUser = ({ user }) => user;
export const getUsers = ({ users }) => users;

/* action name creator */
const reducerName = 'user';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_USER = createActionName('CHANGE_USER');

/* action creators */
export const changeUser = (payload) => ({ payload, type: CHANGE_USER });

/* reducer */

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case CHANGE_USER: {
      return {
        name: action.payload.name,
        logged: action.payload.logged,
        position: action.payload.position,
      };
    }
    default:
      return statePart;
  }
};
