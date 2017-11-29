import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostNew extends Component {
  renderField(field) {
    let invalidClass = "";
    if (field.meta.touched && field.meta.error) {
      invalidClass = "invalid";
    }
    return (
      <div>
        <label>{field.label}</label>
        <br />

        <input
          type="text"
          className={invalidClass}
          placeholder={field.placeholder}
          {...field.input}
        />

        <br />
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <h3>New Post </h3>
        <div className="row">
          <form
            className="col s12"
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
          >
            <Field
              name="title"
              label="Title"
              placeholder="Enter a title"
              component={this.renderField}
            />
            <Field
              name="tags"
              label="Tags"
              placeholder="Enter some tags"
              component={this.renderField}
            />
            <Field
              name="content"
              label="Post content"
              placeholder="Enter your content below"
              component={this.renderField}
            />
            <button className="btn" type="submit">
              Submit
            </button>
            <Link to="/" className="btn red">
              {" "}
              Cancel{" "}
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  //Validate the inputs from values
  if (!values.title) {
    errors.title = "Enter a title";
  }

  if (!values.tags) {
    errors.tags = "Enter some categorgies";
  }

  if (!values.content) {
    errors.content = "Enter some content";
  }
  //if errors is empty, form valid
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, { createPost })(PostNew));
