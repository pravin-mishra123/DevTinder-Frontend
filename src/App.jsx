import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Connections from "./pages/Connections";

function App() {
  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}>
      <Route path="/" element={<Feed/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/connections" element={<Connections/>}/>
      <Route path="/requests" element={<Feed/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
      {/* <NavBar/> */}
    </>
  );
}

export default App;
