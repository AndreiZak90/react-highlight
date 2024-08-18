import New from "./New";
import Popular from "./Popullar";

export default function Video(props) {
  if (props.views > 1000) {
    return (
      <Popular>
        <div className="item item-video">
          <iframe
            src={props.url}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="views">Просмотров: {props.views}</p>
        </div>
      </Popular>
    );
  }
  if (props.views < 100) {
    return (
      <New>
        <div className="item item-video">
          <iframe
            src={props.url}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <p className="views">Просмотров: {props.views}</p>
        </div>
      </New>
    );
  }
  return (
    <div className="item item-video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  );
}
