import React from "react";

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
  },
};

export default serializers;
