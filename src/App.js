import GlobalStyle from "./constants/styledComponent/GlobalStyle";
import AppHeader from "./components/AppHeader/AppHeader";
import UserInformation from "./components/UserInformation";
import { Route, Switch, BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppHeader />
      <Switch>
        <Route path="/users/:id" component={UserInformation}/>
      </Switch>
    </BrowserRouter>
  );
}
