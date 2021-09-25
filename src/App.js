import { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalStyle from "./constants/styledComponent/GlobalStyle";
import AppHeader from "./components/AppHeader/AppHeader";
import Main from "./components/Main/Main";
import SnippetDetailPage from "./components/SnippetDetailPage/SnippetDetailPage";
import NewSnippetPage from "./components/NewSnippetPage/NewSnippetPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import UserInformation from "./components/UserInformationPage/UserInformation";
import Footer from "./components/Footer/Footer";
import Greeting from "./components/Greeting/Greeting";

export default function App() {
  const [page, setPage] = useState(1);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalStyle />
        <AppHeader />
        <Switch>
          <Route exact path="/">
            <Main page={page} onButtonClick={setPage} />
          </Route>
          <Route path="/snippets/new" component={NewSnippetPage} />
          <Route path="/snippets/:id" component={SnippetDetailPage} />
          <Route path="/users/register" component={RegisterPage} />
          <Route path="/users/:id" component={UserInformation} />
          <Route path="/slack/greeting" component={Greeting} />
        </Switch>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}
