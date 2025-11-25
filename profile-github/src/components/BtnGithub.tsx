import { useNavigate } from "../hooks/useNavigate";
import type { StateProps } from "../utils/props";

interface BtnGithubProps extends StateProps {
  url: string;
}

export const BtnGithub = ({ children, state, url }: BtnGithubProps) => {
  const navigate = useNavigate();

  return (
    <button
      className={`${
        state === "dark"
          ? "bg-zinc-900 hover:bg-zinc-950"
          : "bg-zinc-300 hover:bg-zinc-400"
      } ${
        state === "dark" ? "text-white" : "text-black"
      } w-[165px] duration-300 gap-2.5 btn rounded-md hover:cursor-pointer`}
      onClick={() => navigate(url)}
    >
      {children}
    </button>
  );
};
