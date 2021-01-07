import { Component } from "react";
import { blogsUrl, fetchData } from "../api/fetchData";
import { Link } from "react-router-dom";
let message = "***";

class Profile extends Component {
  state = {
    blog: {},
  };
  // handleClick = () => {
  //   window.location.reload(true);
  // };
  // // refreshPage = (event) => {
  // //   window.location.reload(false);
  // // };

  componentDidMount = async () => {
    let id = this.props.match.params.id;
    try {
      let data = await fetchData(`${blogsUrl}/${id}`);
      this.setState({ blog: data });
    } catch (err) {
      console.log("******", err);
    }
  };

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
                      pathname: `/blogs/${link.id}`.trim(),
                    }}
                  >
                    <p>{link.title}</p>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default Profile;
