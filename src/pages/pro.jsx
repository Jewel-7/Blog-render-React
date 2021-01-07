import { Component } from "react";
import { blogsUrl, fetchData } from "../api/fetchData";
import { Link } from "react-router-dom";
let message = "***";

class Profile extends Component {
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
  handleup = (event) => {
    this.state.blog.links.map(async (data) => {
      console.log(data);
      //   console.log(data);
      //   let id = this.state.blog.links.id;
      //   try {
      //     let data = await fetchData(`${blogsUrl}/${id}`);
      //     this.setState({ blog: data });
      //   } catch (err) {
      //     console.log("******", err);
      //   }
    });
  };
  //  const navigateBack = () => {
  //   router.push("/users");
  // };
  handleClick(e) {
    console.log("this is:", this);
  }
  renderEmployeeCard = () => {
    return this.state.blog.links.map((data) => {
      console.log(data);
    });
  };
  // function reply_click(clicked_id)
  // {
  //     alert(clicked_id);
  // }
  //   try {
  //     let data = await fetchData(`${blogsUrl}/${id}`);
  //     this.setState({ blog: data });
  //   } catch (err) {
  //     console.log("******", err);
  //   }
  // };
  // handleClick = async (value) => {
  //   const propertyNames = Object.values(value);
  //   console.log(value);
  // let id = propertyNames[0].id;
  // try {
  //   let data = await fetchData(`${blogsUrl}/${id}`);
  //   this.setState({ blog: data });
  // } catch (err) {
  //   console.log("******", err);
  // }
  // };
  // displayMessage(message) {
  //   console.log(message);
  // }
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
                      pathname: `${link.id}`,
                      state: { id: link.id },
                    }}
                  >
                    {link.title}
                  </Link>{" "}
                </div>
              );
            })}
          {/* {this.state.blog.links.forEach((data) => {
            console.log(data);
          })}
          ; */}
          {/* {this.state.blog.links &&
            this. tate.blog.links.map((data) => {
              console.log(data.id);
              return (
                <p key={data.id}> */}
          {/* <button onClick={this.handleup}> */}
          {/* <button
                    onClick={() => {
                      this.renderEmployeeCard();
                    }}
                  >
                    ++
                  </button> */}
          {/* <button id="1" onClick="reply_click(this.id)">
                    B1
                  </button> */}
          {/* <button id="123" onClick={this.handleClick.bind(this, id)}>
                    ++
                  </button> */}
          {/* <button onClick={(e) => this.handleClick(id, e)}>
                    Delete Row
                  </button> */}
          {/* <button onClick={navigateBack}>back</button>
                    Delete Row
                  </button> */}
          {/* <button onClick={this.displayMessage.bind(this, message)}>
                    Press to hear your message.
                  </button> */}
          {/* ;{data.title}
                  {/* </button> */}
          {/* <button onClick={this.handleup}></button> */}
          {/* </p> */}
          ); })}
        </div>
      </div>
    );
  }
}
export default Profile;
