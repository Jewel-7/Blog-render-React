import { Component } from "react";
import { blogsUrl, fetchData } from "../api/fetchData";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import styles from "../styles/Blog.module.css";

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
      <div className={styles["nav-b"]}>
        <Navigation />
        <div className={styles["flex"]}>
          <div className={styles["flex1"]}>
            <div>
              <img
                className={styles["blog-image"]}
                src={blog.imageUrl}
                alt="blog"
              />
            </div>
            <h4 className={styles["blog-author"]}> Author - {blog.author}</h4>
            <h1 className={styles["blog-title"]}> Title - {blog.title}</h1>
            <p className={styles["blog-content"]}>{blog.content}</p>
          </div>
          <div className={styles["flex2"]}>
            <div className={styles["blog-links"]}>
              <h3>Related Links</h3>
              {this.state.blog.links &&
                this.state.blog.links.map((link) => {
                  return (
                    <div key={link.id}>
                      <Link
                        to={{
                          pathname: `/blogs/${link.id}`,
                        }}
                      >
                        <p
                          onClick={() => this.relatedLink(link.id)}
                          className={styles["blog-link"]}
                        >
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
        </div>
        <Footer />
      </div>
    );
  }
}
export default Blog;
