import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../redux/feedSlice";
import { useEffect } from "react";
import UserCard from "../components/UserCard";

function Feed() {
  const feed = useSelector((state) => state.feed);
  const dispatch = useDispatch();

  const getFeedData = async () => {
    try {
      if (feed) return;
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data.data));
    } catch (error) {
      console.log("Error while fetching feed data", error);
    }
  };

  useEffect(() => {
    getFeedData();
  }, []);

  if (!feed) return;
  if (feed.length <= 0)
    return (
      <h2 className=" flex justify-center text-center mt-10 text-2xl">
        No more users in feed
      </h2>
    );
  return (
    feed && (
      <div className="flex justify-center my-10">
        <UserCard user={feed[0]} />
      </div>
    )
  );
}

export default Feed;
