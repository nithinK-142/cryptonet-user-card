import useFetchUser from "../hooks/useFetchUser";
import UserCard from "./UserCard";

const FetchUser = () => {
  const { userData, loading, error } = useFetchUser();

  if (loading) {
    return (
      <p>
        Loading...{" "}
        <span role="img" aria-label="loading">
          ⌛
        </span>
      </p>
    );
  }

  // if (error) {
  //   console.error("Error fetching user:", error);
  // }

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
        <p>No user data available</p>
      )}
    </div>
  );
};

export default FetchUser;
