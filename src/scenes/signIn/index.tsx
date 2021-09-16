import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import styles from "./style.module.scss";
import { SignInParams, useSignInPresenter } from "./useSignInPresenter";

const SignInPage = () => {
  const { register, handleSubmit } = useForm<SignInParams>();
  const { signIn } = useSignInPresenter();
  const { account } = useCurrentAccount();
  const history = useHistory();

  useEffect(() => {
    if (account) history.push("/");
  }, [account]);

  const onSubmit = (data: SignInParams) => {
    signIn(data);
  };
  return (
    <div className={styles.page}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>求職者ログイン</h1>
        <tr>
          <th>メールアドレス</th>
          <input
            type="text"
            className={styles.InputMail}
            name="account.email"
            ref={register}
            placeholder="coadmap@mail.com"
          />
        </tr>
        <tr>
          <th>パスワード</th>
          <input
            type="password"
            className={styles.InputPass}
            name="account.password"
            ref={register}
            placeholder="パスワードを入力" // type="textにする？"
          />
        </tr>

        <button className={styles.loginBtn}>ログイン</button>
        <button className={styles.forgetPassBtn}>パスワードを忘れた方はこちら</button>
        <button className={styles.registerBtn} onClick={register}>
          新規登録はこちら
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
