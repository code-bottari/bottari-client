import PropTypes from "prop-types";
import styled from "styled-components";

const TitleWrapper = styled.div`
  height: 55px;
  padding: 5px 0px 0px 10px;
`;

const Hashtag = styled.a`
  margin-right: 15px;
  color: #6A74CD;
  font-size: 45px;
  font-weight: bold;
  text-decoration: none;
`;

export default function TitleHashtag({ hashtags }) {
  return (
    <TitleWrapper>
      {hashtags.map((hashtag) => {
        return (
          <Hashtag
            key={hashtag}
            href={`/?search=${hashtag}`}
          >
            {hashtag}
          </Hashtag>
        );
      })}
    </TitleWrapper>
  );
}

TitleHashtag.propTypes = {
  hashtags: PropTypes.array.isRequired,
};
