import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";
import { Link }, {withRouter} from "react-router-dom";

class PostShow extends Component {
  componentWillMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading..</div>;
    }
    return (
      <div className="container">
        <Link to="/" className="btn blue">
          {" "}
          Home{" "}
        </Link>
        <h3>{post.title} </h3>
        <h6>Categories: {post.tags}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostShow);
