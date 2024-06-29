import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { usePlayer } from "../contexts/PlayerContext";
import { validVideoId } from "../helpers/validateYTVidId";
import toast from "react-hot-toast";

function Header() {
  const [input, setInput] = useState("");
  const { setVidId } = usePlayer();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(await validVideoId(input)))
      return toast.error("Enter a valid YouTube Video ID!!");
    setVidId(input);
  };

  return (
    <header className="sm:flex items-center justify-between mx-24 my-8 p-2">
      <h1 className="text-lg font-semibold md:text-3xl sm:text-xl">
        Video Player with Notes
      </h1>
      <form
        className="w-full flex justify-between items-center sm:w-1/3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full outline-none border-b-2 px-2 py-0.5"
          placeholder="Enter Video ID"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className=" text-3xl">
          <IoIosSearch />
        </button>
      </form>
    </header>
  );
}

export default Header;
