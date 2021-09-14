import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./constants/styledComponent/GlobalStyle";
import AppHeader from "./components/AppHeader/AppHeader";
import Main from "./components/Main/Main";
import SnippetDetailPage from "./components/SnippetDetailPage/SnippetDetailPage";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/snippets/:id" component={SnippetDetailPage} />
      </Switch>
    </Router>
  );
}
