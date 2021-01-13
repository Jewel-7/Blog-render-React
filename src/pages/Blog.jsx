import { Component } from "react";
import { blogsUrl, fetchData } from "../api/fetchData";
import { Link } from "react-router-dom";
import AsideCard from "../components/AsideCard";

class Blog extends Component {
  state = {
    blog: {},
  };

  componentDidMount = async () => {
    try {
      let data = await fetchData(`${blogsUrl}/${this.props.match.params.id}`);
      this.setState({ blog: data });
    } catch (err) {
      console.log("******", err);
    }
  };
  componentDidUpdate = async () => {
    try {
      let data = await fetchData(`${blogsUrl}/${this.props.match.params.id}`);
      this.setState({ blog: data });
    } catch (err) {
      console.log("******", err);
    }
  };

  relatedLink(id) {
    try {
      let data = fetchData(`${blogsUrl}/${id}`);
      this.setState({ blog: data });
    } catch (err) {
      console.log("******", err);
    }
  }

  render() {
    let { blog } = this.state;

    return (
      <div>
        <div>
          <img src={blog.imageUrl} alt="blog" />
        </div>
        <h4>{blog.author}</h4>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        <div>
          <h3>links</h3>
          {this.state.blog.links &&
            this.state.blog.links.map((link) => {
              return (
                <div key={link.id}>
                  <Link
                    to={{
                      pathname: `/blogs/${link.id}`,
                    }}
                  >
                    <p onClick={() => this.relatedLink(link.id)}>
                      {link.title}
                      <h1 type="id" name="id" id="id">
                        {this.state.blogId}
                      </h1>
                    </p>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default Blog;
