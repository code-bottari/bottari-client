import Button from "../../common/Button";

import firebaseAPI from "../../../api/firebase";
import { checkMember } from "../../../api/service";

import { BASIC } from "../../../constants/variants";

import {
  FAILURE_LOGIN,
  FAILED_FULFILLMENT,
} from "../../../constants/messages";

export default function LoginButton({ onClick }) {
  const setLoginStatus = (boolean) => {
    onClick(boolean);
  };

  const handleLogin = async () => {
    try {
      await firebaseAPI.login();

      const idToken = await firebaseAPI.getToken();

      const data = await checkMember(idToken);

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
