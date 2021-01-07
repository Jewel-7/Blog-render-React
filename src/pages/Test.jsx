import { Component } from "react";
import { blogsUrl, fetchData } from "../api/fetchData";

class EssayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {},
      blog: {},
    };
    this.componentDidMount = async () => {
      let id = this.props.match.params.id;
      console.log(id);
      try {
        let data = await fetchData(`${blogsUrl}/${id}`);
        this.setState({ blog: data });
      } catch (err) {
        console.log("******", err);
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>{this.blog.author}</h4>
        <h1>{this.blog.title}</h1>
        <label>
          Essay:
          <button value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EssayForm;
