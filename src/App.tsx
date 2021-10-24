import React, { FC } from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RecruitmentIndexPage from "./scenes/recruitment/RecruitmentIndexPage";
import SignInPage from "./scenes/signIn";
import ApplicantMyPage from "./scenes/myPage";
import EditBasicInfo from "./scenes/editBasicInfo";

const App: FC = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={RecruitmentIndexPage} />
        <Route path="/sign_in" component={SignInPage} />
        <Route path="/my_page" component={ApplicantMyPage} />
        <Route path="/edit_basic_info" component={EditBasicInfo} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
