import Button from "../../Common/Button";

import firebaseAPI from "../../../api/firebase";
import { postData } from "../../../api/service";

import VARIANTS from "../../../constants/variants";
import MESSAGES from "../../../constants/messages";

const { BASIC } = VARIANTS;

const {
  FAILURE_LOGIN,
  FAILED_FULFILLMENT,
} = MESSAGES;

export default function LoginButton({ onClick }) {
  const setLoginStatus = (boolean) => {
    onClick(boolean);
  };

  const handleLogin = async () => {
    try {
      await firebaseAPI.login();

      const idToken = await firebaseAPI.getToken();

      const data = await postData("/users/check-member", { idToken });

      if (data.status === 401) {
        throw new Error(FAILURE_LOGIN);
      }

      if (data.status === 403) {
        throw new Error(FAILURE_LOGIN);
      }

      if (data.status === 500) {
        throw new Error(FAILED_FULFILLMENT);
      }
    } catch (error) {
      alert(error.message);
      return;
    }

    setLoginStatus(true);
  };

  return <Button variant={BASIC} onClick={handleLogin}>로그인</Button>;
}
