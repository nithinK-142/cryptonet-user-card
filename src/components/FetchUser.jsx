import useFetchUser from "../hooks/useFetchUser";
import UserCard from "./UserCard";
import SkeletonLoader from "./SkeletonLoader";

const FetchUser = () => {
  const { userData, loading } = useFetchUser();
  
  if (loading) return <SkeletonLoader />;

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
