import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPost } from '../actions/postActions';

class PostForm extends Component {
    state = {
        title: '',
        body: ''
    };
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newPost = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.addPost(newPost);
        this.setState({
            title: '',
            body: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h2>Add Post</h2>
                <div>
                    <label>Title</label>
                    <br />
                    <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
                </div>
                <br />
                <div>
                    <label>Content</label>
                    <br />
                    <textarea name="body" value={this.state.body} onChange={this.onChange} />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
