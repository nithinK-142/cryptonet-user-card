const UserCard = ({ first, last, gender, phone, picture }) => (
  <div className="w-80 h-[26rem] bg-[#9FB3BA] flex flex-col items-center justify-center rounded-md">
    <div className="rounded-full">
      <img src={picture} alt="User" className="rounded-full" />
    </div>
    <div className="mt-4 w-full">
      <div className="mt-2 flex justify-center items-center opacity-80">
        <img src="/user.svg" alt="user" className="pr-2 h-[20px]"/>
        <p className="font-semibold text-2xl">{`${first} ${last}`}</p>
      </div>
      <div className="mt-2 flex justify-center items-center opacity-70">
        <img src="/gender.svg" alt="gender"className="pr-2" />
        <p className="font-semibold">{gender}</p>
      </div>
      <div className="mt-2 flex justify-center items-center opacity-70">
        <img src="/phone.svg" alt="phone" className="pr-2"/>
        <p className="font-semibold">{phone}</p>
      </div>
    </div>
    <button className="mt-6 p-2 px-6 rounded-lg font-semibold text-white bg-[#851e3e]">Connect</button>
  </div>
);

export default UserCard;
