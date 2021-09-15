/* eslint-disable no-console */
import { useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "react-query";

import Button from "../../common/Button";

import firebaseAPI from "../../../api/firebase";
import { checkMember } from "../../../api/service";

import { BASIC } from "../../../constants/variants";

export default function LoginButton({ onClick }) {
  const [idToken, setIdToken] = useState(null);

  const history = useHistory();

  const result = useQuery("login", async () => {
    const result = await checkMember(idToken);
    return result;
    // if (result.userId) {
    //   history.push("/");

    //   return;
    // }

    // history.push("/users/register");
  }, {
    enabled: !!idToken,
  });
  console.log(result);

  const setLoginStatus = (boolean) => {
    onClick(boolean);
  };

  const handleLogin = async () => {
    try {
      await firebaseAPI.login();

      const idToken = await firebaseAPI.getToken();

      setIdToken(idToken);
    } catch (error) {
      alert(error.message);
      return;
    }

    setLoginStatus(true);
  };

  return <Button variant={BASIC} onClick={handleLogin}>로그인</Button>;
}
