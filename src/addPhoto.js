const bucketName = process.env.REACT_APP_S3_BUCKET_NAME;
const bucketRegion = process.env.REACT_APP_S3_BUCKET_REGION;
const IdentityPoolId = process.env.REACT_APP_S3_IDENTITY_POOL_ID;

const AWS = require("aws-sdk");

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: {
    Bucket: bucketName,
  }
});

export default function addPhoto() {
  const files = document.getElementById("uploader").files;
  let imageURL;

  if (!files.length) {
    imageURL = "https://test-bucket960714.s3.ap-northeast-2.amazonaws.com/profilePic/bottari.png";

    return imageURL;
  }

  const maxSize = 1 * 1024 * 1024;
  const fileSize = files[0].size;

  if (fileSize > maxSize){
    alert("첨부파일 사이즈는 1MB 이내로 등록 가능합니다.");

    return;
  }

  const file = files[0];
  const fileName = file.name;
  const albumPhotosKey = "profilePic";

  const photoKey = albumPhotosKey + "/" + fileName;

  return s3.upload({
    Key: photoKey,
    Body: file,
    ACL: "public-read"
  }).promise();
}
