import { Component } from "react";
import { Link } from "react-router-dom";
class AsideCard extends Component {
  render() {
    let { link } = this.props;
    return (
      <div>
        <p>
          <Link to={{ pathname: `/blogs/${link.id}`, state: { id: link.id } }}>
            {link.title}
          </Link>
        </p>
      </div>
    );
  }
}
export default AsideCard;
