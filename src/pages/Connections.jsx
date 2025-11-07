import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../redux/connectionsSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((state) => state.connections);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log("Connections fetched successfully:", res.data.data);
      dispatch(addConnections(res.data.data));
    } catch (error) {
      console.error("Error fetching connections:", error);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) {
    return (
      <>
        <h2>No Connections Found</h2>
      </>
    );
  }

  return (
    <>
      <div className="text-center my-10">
        <h1 className="text-bold text-white text-3xl">Connections</h1>

        {connections.map((connection) => {
          const { firstName, lastName, photoUrl, age, gender, about } =
            connection;

          return (
            <div className=" flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
              <div>
                <img
                  className="w-20 h-20 rounded-full"
                  src={photoUrl}
                  alt="photo"
                />
              </div>
              <div className="text-left mx-4">
                <h2 className="font-bold text-xl">
                  {firstName + " " + lastName}
                </h2>
                {age && gender && <p>{age + ", " + gender}</p>}
                <p>{about}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Connections;
