import { Link } from "gatsby";
import React from "react";
import BlogPostPreview from "./BlogPostPreview";
import styled from "styled-components";

function BlogPostPreviewGrid(props) {
  return (
    <div>
      {props.title && <Title>{props.title}</Title>}
      <ListEl>
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </ListEl>
    </div>
  );
}

const ListEl = styled.ul`
  list-style-type: none;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media (max-width: 1268px) {
    font-size: 30px;
  }
  @media (max-width: 800px) {
    font-size: 25px;
  }
`;

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostPreviewGrid;
