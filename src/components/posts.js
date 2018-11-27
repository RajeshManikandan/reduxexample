import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/postActions';
class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        const { items } = this.props.posts;
        const postItems = !items ? (
            <div />
        ) : (
            items.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))
        );
        return (
            <div>
                <h2>Posts</h2>
                {postItems}
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ posts: state.posts });

export default connect(mapStateToProps, { fetchPosts })(Posts);
