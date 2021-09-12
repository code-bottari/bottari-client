import GlobalStyle from "./constants/styledComponent/GlobalStyle";
import AppHeader from "./components/AppHeader/AppHeader";
import SnippetDetailPage from "./components/SnippetDetailPage/SnippetDetailPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppHeader />
      <SnippetDetailPage />
    </>
  );
}
