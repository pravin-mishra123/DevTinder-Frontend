import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionsSlice";
import requestReducer from "./requestsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    requests: requestReducer,
    connections: connectionReducer,
  },
});

export default appStore;
