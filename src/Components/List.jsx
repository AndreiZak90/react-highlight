import Video from "./Video";
import Article from "./Article";

export default function List(props) {
  return props.list.map((item, id) => {
    switch (item.type) {
      case "video":
        return <Video {...item} key={id} />;

      case "article":
        return <Article {...item} key={id} />;
    }
  });
}
