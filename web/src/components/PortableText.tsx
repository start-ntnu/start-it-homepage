import React from "react";
import clientConfig from "../../client-config";
import BasePortableText from "@sanity/block-content-to-react";
import Serializer from "./Serializer";

const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    serializers={Serializer}
    {...clientConfig.sanity}
  />
);

export default PortableText;
