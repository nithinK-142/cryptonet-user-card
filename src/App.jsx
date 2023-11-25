import FetchUser from "./components/FetchUser";
import Loader from "./components/Loader";
import useFetchUser from "./hooks/useFetchUser";

function App() {
  const { loading } = useFetchUser();
  return (
    <main
      className={`h-screen flex justify-center items-center overflow-hidden ${
        loading ? "bg-[#2a4d69e3]" : "bg-[#2a4d69]"
      }`}
    >
      {loading ? <Loader /> : <FetchUser />}
    </main>
  );
}

export default App;
