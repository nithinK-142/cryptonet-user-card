import useFetchUser from "../hooks/useFetchUser";
import UserCard from "./UserCard";

const FetchUser = () => {
  const { userData } = useFetchUser();
  return (
    <div>
      {userData && (
        <UserCard
          first={userData.name.first}
          last={userData.name.last}
          gender={userData.gender}
          phone={userData.phone}
          picture={userData.picture.large}
        />
      )}
    </div>
  );
};

export default FetchUser;
