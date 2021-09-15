import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 1050px;
  height: 50px;
  padding-left: 26px;
  font-size: 20px;
`;

const UserImage = styled.img`
  margin-right: 20px;
  margin-left: 10px;
  border-radius: 100%;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
`;

const UserName = styled.div`
  width: 80px;
  margin-top: 4px;
  font-size: 20px;
  font-weight: bold;
`;

const Content = styled.div`
  width: 900px;
  padding-left: 10px;
  margin-top: 4px;
  font-size: 20px;
`;

const Date = styled.div`
  width: 100px;
  height: 20px;
  padding-left: 15px;
  color: gray;
  font-size: 15px;
  font-weight: bold;
`;

export default function Comment({ data }) {
  const { creator, content, createdAt } = data;
  const formatDate = createdAt.slice(0, 10);

  return (
    <Wrapper>
      <UserImage src={creator.imageUrl} alt="프로필 이미지" width="25px" height="25px" />
      <UserName>{creator.nickname}</UserName>
      <Content>{content}</Content>
      <Date>{formatDate}</Date>
    </Wrapper>
  );
}
