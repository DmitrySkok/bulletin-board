import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import clsx from 'clsx';
import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <Card className={styles.panel}>
      <CardContent>
        <Typography className={styles.title} variant='h5' component='h2'>
          Not Found :-(
        </Typography>
      </CardContent>
    </Card>
    <Typography className={styles.home} variant='h5' component='h2'>
      <Link to='/'>Home</Link>
    </Typography>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as NotFound, Component as NotFoundComponent };
