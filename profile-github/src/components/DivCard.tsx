import type { StateProps } from "../utils/props";

export const DivCard = ({ children, state }: StateProps) => {
  return (
    <div
      className={`${state === "dark" ? "bg-zinc-900" : "bg-zinc-300"} ${
        state === "dark" ? "text-white" : "text-black"
      } p-3 rounded-lg w-[300px] flex justify-center items-center gap-2.5`}
    >
      {children}
    </div>
  );
};