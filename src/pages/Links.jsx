import { Component } from "react";
import { blogsUrl, fetchData } from "../api/fetchData";
import { Link } from "react-router-dom";
let message = "***";

class Links extends Component {
  state = {
    blog: {},
  };

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
    );
  }
}
export default Links;
