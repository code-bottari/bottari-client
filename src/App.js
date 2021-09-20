import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalStyle from "./constants/styledComponent/GlobalStyle";
import AppHeader from "./components/AppHeader/AppHeader";
import Main from "./components/Main/Main";
import NewSnippetPage from "./components/NewSnippetPage/NewSnippetPage";
import SnippetDetailPage from "./components/SnippetDetailPage/SnippetDetailPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import UserInformation from "./components/UserInformationPage/UserInformation";
import Greeting from "./components/Greeting/Greeting";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalStyle />
        <AppHeader />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/snippets/new" component={NewSnippetPage} />
          <Route path="/snippets/:id" component={SnippetDetailPage} />
          <Route path="/users/register" component={RegisterPage} />
          <Route path="/users/:id" component={UserInformation} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/slack/greeting" component={Greeting} />
        </Switch>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}
