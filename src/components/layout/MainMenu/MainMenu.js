import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { connect } from 'react-redux';
import { getUser, getUsers, changeUser } from '../../../redux/userRedux';
import styles from './MainMenu.module.scss';
import { Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const Component = ({ user, users, changeUser }) => {
  const [state, setState] = React.useState({
    name: user.name,
  });

  const handleChange = (event) => {
    const username = event.target.value;
    setState({
      ...state,
      name: username,
    });

    const userData = users.filter((user) => user.name === username)[0];

    changeUser(userData);
  };

  return (
    <div className={styles.header}>
      <Link className={styles.brand} to='/'>
        B.Board
      </Link>
      <FormControl className={styles.formControl}>
        <InputLabel htmlFor='name-native-disabled'>User Name</InputLabel>
        <NativeSelect
          value={state.name}
          onChange={handleChange}
          inputProps={{
            name: 'user',
            id: 'name-native-disabled',
          }}
        >
          {users.map((user) => (
            <option key={user.name} value={user.name}>
              {user.name}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText></FormHelperText>
      </FormControl>
      <Breadcrumbs separator='|' className={styles.menu} aria-label='breadcrumb'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Profile</Link>

        {user.logged ? (
          <Link to='/'>Logout</Link>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </Breadcrumbs>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array,
  changeUser: PropTypes.func,
  user: PropTypes.shape({
    name: PropTypes.string,
    logged: PropTypes.bool,
    position: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  user: getUser(state),
  users: getUsers(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeUser: (userData) => dispatch(changeUser(userData)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as MainMenu, Component as MainMenuComponent };
