import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bucket from "./pages/Bucket";
import LayoutWrapper from "./components/LayoutWrapper";
import History from "./pages/History";

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route element={<LayoutWrapper />}>
              <Route path="/" element={<Home />} />
              <Route path="/:bucket_id" element={<Bucket />} />
              <Route path="/history" element={<History />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
