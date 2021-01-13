import { Component } from "react";
import { blogsUrl, fetchData } from "../api/fetchData";
import BlogCard from "../components/BlogCard";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

class Home extends Component {
  state = {
    blogs: [],
  };
  componentDidMount = async () => {
    try {
      let blogs = await fetchData(blogsUrl);
      this.setState({ blogs: [...blogs] });
      console.log(blogs);
    } catch (err) {
      console.log("**********", err);
    }
  };

  render() {
    return (
      <div>
        <Navigation />
        <div>
          {this.state.blogs.map((blog) => {
            console.log(blog);
            return (
              <div>
                <BlogCard blog={blog} key={blog.id} />
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
