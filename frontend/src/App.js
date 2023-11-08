import ScrollToTop from "components/actions/ScrollTop";
import MainPage from "pages/Main";
import GlobalStyle from "styles/global/globalStyle";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

export const ROUTES = {
  MAIN: "/",
};

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
