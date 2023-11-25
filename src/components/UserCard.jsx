const UserCard = ({ first, last, gender, phone, picture }) => (
  <div
    className="w-80 h-[26rem] bg-[#9FB3BA] flex flex-col items-center justify-center rounded-md border border-gray-200"
    style={{
      boxShadow: "0 0 6px 2px #F9F6EE",
    }}
  >
    <div className="rounded-full">
      <img src={picture} alt="User" className="rounded-full" />
    </div>
    <div className="w-full mt-4">
      <div className="flex items-center justify-center mt-2 opacity-80">
        <img src="/user.svg" alt="user" className="pr-2 h-[20px]" />
        <p className="text-2xl font-semibold">{`${first} ${last}`}</p>
      </div>
      <div className="flex items-center justify-center mt-2 opacity-70">
        <img src="/gender.svg" alt="gender" className="pr-2" />
        <p className="font-semibold">{gender}</p>
      </div>
      <div className="flex items-center justify-center mt-2 opacity-70">
        <img src="/phone.svg" alt="phone" className="pr-2" />
        <p className="font-semibold">{phone}</p>
      </div>
    </div>
    <button
      className="mt-6 p-2 px-6 rounded-lg font-semibold text-white bg-[#851e3e]"
      style={{
        boxShadow: "0px 4px 6px black",
      }}
    >
      Connect
    </button>
  </div>
);

export default UserCard;
