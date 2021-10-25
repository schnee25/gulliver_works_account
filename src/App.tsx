import React, { FC } from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RecruitmentIndexPage from "./scenes/recruitment/RecruitmentIndexPage";
import SignInPage from "./scenes/signIn";
import ApplicantMyPage from "./scenes/myPage";
import EditBasicInfo from "./scenes/editBasicInfo";
import editSelfIntroduction from "./scenes/editSelfIntroduction";
import editWorkHistory from "./scenes/editWorkHistory";
import editAcademicBackground from "./scenes/editAcademicBackground";
import addWorkHistory from "./scenes/addWorkHistory";
import addAcademicBackground from "./scenes/addAcademicBackground";

const App: FC = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={RecruitmentIndexPage} />
        <Route path="/sign_in" component={SignInPage} />
        <Route path="/my_page" component={ApplicantMyPage} />
        <Route path="/edit_basic_info" component={EditBasicInfo} />
        <Route path="/edit_self_introduction" component={editSelfIntroduction} />
        <Route path="/edit_work_history" component={editWorkHistory} />
        <Route path="/edit_academic_background" component={editAcademicBackground} />
        <Route path="/add_work_history" component={addWorkHistory} />
        <Route path="/add_academic_background" component={addAcademicBackground} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
