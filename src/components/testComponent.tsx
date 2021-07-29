import React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  name: string;
}

const TestComponent = ({ name }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      allSiteBuildMetadata {
        edges {
          node {
            id
          }
        }
      }
    }
  `);
  return (
    <div>
      {name} + {data.allSiteBuildMetadata.edges[0].node.id}
    </div>
  );
};

export default TestComponent;
