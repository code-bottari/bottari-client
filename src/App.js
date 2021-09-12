import { useState } from "react";

import GlobalStyle from "./constants/styledComponent/GlobalStyle";
import AppHeader from "./components/AppHeader/AppHeader";
import EditorModal from "./components/EditorModal";

export default function App() {
  const [isOpen, setOpenStatus] = useState(false);

  return (
    <>
      <GlobalStyle />
      <AppHeader />
      {isOpen && <EditorModal onClick={setOpenStatus} />}
    </>
  );
}
