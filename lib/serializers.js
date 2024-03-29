import Link from "next/link";

import YoutubeComponent from "../components/Post/YoutubeComponent";
import ImageComponent from "../components/Post/ImageComponent";
import GalleryComponent from "../components/Post/Gallery/GalleryComponent";

import HtmlTable from "../components/Post/HtmlTable/HtmlTable";

export const serializers = {
  marks: {
    sup: (props) => <sup>{props.children}</sup>,
    sub: (props) => <sub>{props.children}</sub>,
    link: (props) => (
      <Link href={props.mark.href}>
        <a target="_blanc" rel="noopener noreferer">
          {props.children}
        </a>
      </Link>
    ),
    internalLink: (props) => (
      <Link
        href={{
          pathname: `/[category]/[post]`,
          query: {
            post: props.mark.postSlug,
            category: props.mark.categorySlug,
          },
        }}
      >
        <a>{props.children}</a>
      </Link>
    ),
    textDecoration: (props) => {
      let size1 = props.mark.fontSize?.split(" ")[0];
      let size2 = props.mark.fontSize?.split(" ")[1];
      return (
        <span
          style={{
            letterSpacing: `${props.mark.letterSpacing}`,
            color: props.mark.textColor?.hex,
            fontSize: `${props.mark.fontSize && size1}`,
            lineHeight: `${props.mark.fontSize && size2}`,
          }}
        >
          {props.children}
        </span>
      );
    },
  },
  types: {
    image: ImageComponent,
    youtube: YoutubeComponent,
    gallery: GalleryComponent,
    htmltable: HtmlTable,
  },
};

// key: (props) => (<pre>{JSON.stringify(props, null, 2)}</pre>)
