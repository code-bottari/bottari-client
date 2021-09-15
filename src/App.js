import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalStyle from "./constants/styledComponent/GlobalStyle";
import AppHeader from "./components/AppHeader/AppHeader";
import Main from "./components/Main/Main";
import SnippetDetailPage from "./components/SnippetDetailPage/SnippetDetailPage";
import RegisterCard from "./components/RegisterCard/RegisterCard";
import UserInformation from "./components/UserInformationPage/UserInformation";
import Footer from "./components/Footer";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalStyle />
        <AppHeader />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/snippets/:id" component={SnippetDetailPage} />
          <Route path="/users/register" component={RegisterCard} />
          <Route path="/users/:id" component={UserInformation} />
        </Switch>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}
