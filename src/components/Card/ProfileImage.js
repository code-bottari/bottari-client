import styled from "styled-components";

const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 320px;
  height: 180px;
`;

const Image = styled.img`
  position: absolute;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
  border-radius: 100%;
`;

const UploadingButton = styled.input`
  position: absolute;
  left: 190px;
  bottom: 0px;
  width: 45px;
  height: 40px;
`;

export default function ProfileImage() {
  return (
    <ProfileImageWrapper>
      <Image src="/images/arbitrary_profile_image.jpeg" alt="프로필 이미지" width="180" height="180" />
      <UploadingButton type="image" alt="이미지 추가" src="/images/image_uploader_icon.png" />
    </ProfileImageWrapper>
  );
}
