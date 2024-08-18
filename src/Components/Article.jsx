import New from "./New";
import Popular from "./Popullar";

export default function Article(props) {
  if (props.views > 1000) {
    return (
      <Popular>
        <div className="item item-article">
          <h3>
            <a href="#">{props.title}</a>
          </h3>
          <p className="views">Прочтений: {props.views}</p>
        </div>
      </Popular>
    );
  }
  if (props.views < 100) {
    return (
      <New>
        <div className="item item-article">
          <h3>
            <a href="#">{props.title}</a>
          </h3>
          <p className="views">Прочтений: {props.views}</p>
        </div>
      </New>
    );
  }
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{props.title}</a>
      </h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  );
}
