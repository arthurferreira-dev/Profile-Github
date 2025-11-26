import { useState, useEffect } from "react";
import type { DataType } from "./utils/props";
import { Sun, Moon, UsersRound, BookMarked, Github } from "lucide-react";
import { DivCard } from "./components/DivCard";
import { BtnGithub } from "./components/BtnGithub";

export default function App() {
  const [data, setData] = useState<DataType | null>(null);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/arthurferreira-dev"
        );
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Não foi possível receber dados da API: ", error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toogleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "garden" : "dark"));
  };

  return (
    <div className="w-screen h-screen text-neutral-content">
      <div className="p-2">
        <label className="swap swap-rotate">
          <input type="checkbox" onChange={toogleTheme} />

          <Moon className="swap-off text-base-content" size={30} />

          <Sun className="swap-on text-base-content" size={30} />
        </label>
      </div>
      <main className="text-base-content">
        <div className="flex flex-col flex-wrap justify-center items-center gap-3.5">
          <div className="flex flex-col flex-wrap justify-center items-center gap-3.5">
            <img
              className="mask mask-circle w-60"
              src={data?.avatar_url}
              alt={`${data?.login} - Avatar`}
            />
            <h2 className="text-xl font-mono">
              <span className="font-sans">@</span>
              {data?.login}
            </h2>
          </div>
          <div className="flex flex-col flex-wrap justify-center items-center">
           <p className="text-justify w-[300px]">
            {data?.bio}
           </p>
          </div>
          <div className="flex flex-col flex-wrap justify-center items-center gap-3">
            <DivCard state={theme}>
              <UsersRound/> <p className="font-semibold">{data?.followers} Seguidores</p>
            </DivCard>
            <DivCard state={theme}>
              <BookMarked/> <p className="font-semibold">{data?.public_repos} Repositórios (Públicos)</p>
            </DivCard>
            <BtnGithub state={theme} url={data?.html_url ?? ""}>
              <Github/> Github
            </BtnGithub>
          </div>
        </div>
      </main>
    </div>
  );
}
