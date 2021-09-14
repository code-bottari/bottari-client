import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./constants/styledComponent/GlobalStyle";
import AppHeader from "./components/AppHeader/AppHeader";
import Main from "./components/Main/Main";
import SnippetDetailPage from "./components/SnippetDetailPage/SnippetDetailPage";
import UserInformation from "./components/UserInformationPage/UserInformation";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/snippets/:id" component={SnippetDetailPage} />
        <Route path="/users/:id" component={UserInformation}/>
      </Switch>
    </Router>
  );
}
