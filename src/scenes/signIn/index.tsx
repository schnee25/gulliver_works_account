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
    console.log("hoge");

    signIn(data);
  };

  console.log(errors);

  return (
    <div className={styles.page}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>求職者ログイン</h1>
        <div>
          {/* trをdivに */}
          <th>メールアドレス</th>
          {/* 正しいメールアドレスでない場合正しいメールアドレスでありませんというエラーメッセージ */}
          <input
            type="text"
            className={styles.InputMail}
            name="account.email"
            ref={register({
              required: "メールアドレスを正しく入力して下さい",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "メールアドレスを正しく入力して下さい",
              },
            })}
            placeholder="coadmap@mail.com"
          />
          {errors.account?.email && <p className="formError">{errors.account?.email.message}</p>}
        </div>
        <div className={styles.logInItem}>
          <th>パスワード</th>
          <input
            type="password"
            className={styles.InputPass}
            name="account.password"
            ref={register}
            placeholder="パスワードを入力" // type="textにする？" ここが✴︎になっちゃう
            minLength={6}
          />
        </div>
        <button className={styles.loginBtn}>ログイン</button>
      </form>
      <button className={styles.forgetPassBtn}>パスワードを忘れた方はこちら</button>
      <button className={styles.registerBtn}>新規登録はこちら</button>
    </div>
  );
};

export default SignInPage;
