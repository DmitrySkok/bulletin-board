import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { editPost, getPostById } from '../../../redux/postsRedux';
import { getUser } from '../../../redux/userRedux';

import styles from './PostEdit.module.scss';
import { NotFound } from '../NotFound/NotFound';

class Component extends React.Component {
  state = {
    editedPost: {
      ...this.props.post,
    },
  };

  currentDate = () => {
    const options = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const today = new Date();
    const time = today.toLocaleDateString('en-US', options);
    return time;
  };

  updateField = ({ target }) => {
    const { value, name } = target;

    this.setState((prevState) => ({
      editedPost: {
        ...prevState.editedPost,
        [name]: value,
        actualizationDate: this.currentDate(),
      },
    }));
  };

  setNewPost = (e) => {
    const { editPost } = this.props;
    const { editedPost } = this.state;
    e.preventDefault();
    editPost(editedPost);
    alert(`Success!`);
  };

  render() {
    const { editedPost } = this.state;
    const { user } = this.props;
    const isEditable =
      (user.logged && user.position === 'Admin') ||
      (user.logged && editedPost.author === user.name);

    if (isEditable) {
      return (
        <div className={styles.root}>
          <Container maxWidth='sm'>
            <h2>Edit the post</h2>

            <form
              className={styles.form}
              onSubmit={this.setNewPost}
              noValidate
              autoComplete='off'
            >
              <div>
                <TextField
                  className={styles.title}
                  id='title-textfield'
                  name='title'
                  label='Title'
                  value={editedPost.title}
                  multiline
                  maxRows={4}
                  inputProps={{ minLength: 10 }}
                  onChange={this.updateField}
                />
                <TextField
                  className={styles.article}
                  id='article-textfield'
                  name='description'
                  label='Article'
                  value={editedPost.description}
                  multiline
                  rows={4}
                  inputProps={{ minLength: 20 }}
                  default
                  onChange={this.updateField}
                />
                <FormControl className={styles.status}>
                  <InputLabel htmlFor='age-native-simple'>Status</InputLabel>
                  <Select
                    native
                    name='status'
                    value={editedPost.status}
                    onChange={this.updateField}
                  >
                    <option aria-label='None' value='' />
                    <option>Published</option>
                    <option>Closed</option>
                  </Select>
                </FormControl>
                <Button type='submit' className={styles.submit}>
                  Save
                </Button>
              </div>
            </form>
          </Container>
        </div>
      );
    } else {
      return <NotFound></NotFound>;
    }
  }
}

Component.propTypes = {
  post: PropTypes.object,
  className: PropTypes.string,
  editPost: PropTypes.func,
  user: PropTypes.shape({
    name: PropTypes.string,
    logged: PropTypes.bool,
    position: PropTypes.string,
  }),
};

const mapStateToProps = (state, ownProps) => ({
  user: getUser(state),
  post: getPostById(state, ownProps.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  editPost: (post) => dispatch(editPost(post)),
});

const PostEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export { PostEditContainer as PostEdit, Component as PostEditComponent };
