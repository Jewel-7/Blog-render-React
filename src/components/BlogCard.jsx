import { Component } from "react";
import { Link } from "react-router-dom";
class BlogCard extends Component {
  render() {
    let { blog } = this.props;
    return (
      <div>
        <div>
          <img src={blog.imageUrl} alt={blog.title} />
        </div>
        <p>
          <Link to={{ pathname: `blogs/${blog.id}`, state: { id: blog.id } }}>
            {blog.title}
          </Link>
        </p>
      </div>
    );
  }
}
export default BlogCard;
