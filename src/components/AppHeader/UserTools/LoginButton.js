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

  const { data, isSuccess } = useQuery(
    "login",
    async () => await checkMember(idToken),
    {
      enabled: !!idToken,
    }
  );

  if (isSuccess) {
    onClick();

    history.push(data.userId ? "/" : "/users/register");
  }

  const handleLogin = async () => {
    try {
      await firebaseAPI.login();

      const idToken = await firebaseAPI.getToken();

      setIdToken(idToken);
    } catch (error) {
      alert(error.message);

      return;
    }
  };

  return <Button variant={BASIC} onClick={handleLogin}>로그인</Button>;
}
