import { truncate } from "fs";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import styles from "./style.module.scss";
import { SignInParams, useSignInPresenter } from "./useSignInPresenter";

const SignInPage = () => {
  const { register, handleSubmit, errors } = useForm<SignInParams>();
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
        <div>
          {/* trをdivに */}
          <h3>メールアドレス</h3>
          {/* 正しいメールアドレスでない場合正しいメールアドレスでありませんというエラーメッセージ */}
          <input
            type="text"
            className={styles.InputMail}
            name="account.email"
            ref={register({
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "※メールアドレスの形式が違います",
              },
            })}
            placeholder="coadmap@mail.com"
          />
          {errors.account?.email && (
            <p className={styles.formError}>{errors.account?.email.message}</p>
          )}
        </div>
        <div className={styles.logInItem}>
          <h3>パスワード</h3>
          <input
            type="password"
            className={styles.InputPass}
            name="account.password"
            ref={register({
              required: true,
              minLength: { value: 6, message: "※パスワードは6文字以上で入力してください" },
            })}
            placeholder="パスワードを入力" // type="textにする？" ここが✴︎になっちゃう
          />
          {errors.account?.password && (
            <p className={styles.formError}>{errors.account?.password.message}</p>
          )}
        </div>
        <button className={styles.loginBtn}>ログイン</button>
      </form>
      <button className={styles.forgetPassBtn}>パスワードを忘れた方はこちら</button>
      <button className={styles.registerBtn}>新規登録はこちら</button>
    </div>
  );
};

export default SignInPage;
