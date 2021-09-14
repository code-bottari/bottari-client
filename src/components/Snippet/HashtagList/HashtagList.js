import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const buildStyle = ({ fontSize }) => css`
  font-size: ${fontSize};
`;

const HashtagType = {
  detail: {
    fontSize: "45px",
  },
  preview: {
    fontSize: "20px",
  },
};

const HashtagWrapper = styled.div`
  height: 55px;
  padding: 5px 0px 0px 10px;
`;

const Hashtag = styled.a`
  margin-right: 15px;
  color: #6A74CD;
  font-weight: bold;
  text-decoration: none;

  ${({ type }) => buildStyle(HashtagType[type])}
`;

export default function HashtagList({ type, hashtags }) {
  return (
    <HashtagWrapper>
      {hashtags && hashtags.map((hashtag) => (
        <Hashtag
          key={hashtag}
          type={type}
          href={`/?search=${hashtag}`}
        >
          {hashtag}
        </Hashtag>
      ))}
    </HashtagWrapper>
  );
}

HashtagList.propTypes = {
  type: PropTypes.string.isRequired,
  hashtags: PropTypes.array.isRequired,
};
