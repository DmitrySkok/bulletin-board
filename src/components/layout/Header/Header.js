import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { getUser } from '../../../redux/userRedux';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Component = ({ className, user }) => (
  <div className={clsx(className, styles.root)}>
    <Card className={styles.panel}>
      <CardContent>
        <Typography className={styles.title} variant='h5' component='h2'>
          Login
        </Typography>
      </CardContent>
      {user.logged ? (
        <div>
          <Typography className={styles.articles} variant='h5' component='h2'>
            <Link to='/allposts'> See your articles </Link>
          </Typography>

          <Typography className={styles.logout} variant='h5' component='h2'>
            <Link to='/'>Logout</Link>
          </Typography>
        </div>
      ) : (
        <CardActions>
          <Button href='https://google.com' className={styles.google}>
            Log with Google
          </Button>
        </CardActions>
      )}
    </Card>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string,
    logged: PropTypes.bool,
    position: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as Header, Component as HeaderComponent };
