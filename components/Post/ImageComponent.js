import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import configuredSanityClient from "../../lib/configuredSanityClient";

export default function ImageComponent(props) {
  const imageProps = useNextSanityImage(
    configuredSanityClient,
    props.node.asset
  );

  return (
    <figure className="flex flex-col items-center justify-center">
      <Image
        src={imageProps.src}
        width={imageProps.width}
        height={imageProps.height}
        objectFit="contain"
        layout="intrinsic"
        alt={props.node.altText}
      />
      {props.node.metadata?.creditLine && (
        <figcaption className="text-slate-400">
          {`${props.node.metadata?.creditLine}${
            props.node.metadata?.source?.name === "unsplash"
              ? "  -  " + props.node.metadata?.source.url
              : ""
          }`}
        </figcaption>
      )}
      {props.node.caption && (
        <figcaption className="text-black">{props.node.caption}</figcaption>
      )}
    </figure>
  );
}
