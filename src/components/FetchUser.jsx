import useFetchUser from "../hooks/useFetchUser";
import Loader from "./Loader";
import UserCard from "./UserCard";

const FetchUser = () => {
  const { userData, error } = useFetchUser();

  // if (loading) {
  //   return (
  //     // <p>
  //     //   Loading...{" "}
  //     //   <span role="img" aria-label="loading">
  //     //     ⌛
  //     //   </span>
  //     // </p>
  //   );
  // }

  // if (error) console.error("Error fetching user:", error);

  return (
    <div>
      {userData ? (
        <UserCard
          first={userData.name.first}
          last={userData.name.last}
          gender={userData.gender}
          phone={userData.phone}
          picture={userData.picture.large}
        />
      ) : (
        <p className="text-2xl text-white">Loading...⌛</p>
      )}
    </div>
  );
};

export default FetchUser;
