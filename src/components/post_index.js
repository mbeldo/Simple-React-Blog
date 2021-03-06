import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { Link } from "react-router-dom";

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="collection-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title} </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="right-align">
          <Link to="/posts/new" className="btn waves-effect">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="collection">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
