import { useEffect, useState } from "react";
import { BookMarked, Github, UserRound } from 'lucide-react';

export default function App() {
  const [data, setData] = useState(null);
  const CenterIconsLucide: string = 'flex justify-center items-center gap-2'
  const Main = (props) => {
    return <main className="w-screen h-screen">{props.children}</main>
  }
  const DivDestaque = (props) => {
    return <div className="bg-zinc-900 p-3 rounded-lg w-[300px] mt-3">{props.children}</div>
  }
  const BtnGithub = (props) => {
    return <button className={`bg-zinc-900 p-3 duration-[.42s] block mx-auto font-semibold rounded-lg mt-3 w-[165px] hover:bg-zinc-950 hover:cursor-pointer ${CenterIconsLucide}`}>{props.children}</button>
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/arthurferreira-dev');
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error('Não foi possível receber dados da API:', error);
      }
    }

    getData();
  }, []);

  return (
    <Main>
        <img src={data?.avatar_url} alt="Avatar Github" width="184" className="rounded-[50%] mx-auto my-3" />
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-2xl font-mono text-center">{data?.name}</h1>
            <h2 className="text-lg text-center font-sans mb-3 font-light">{data?.login}</h2>
            <p className="text-base font-sans w-[300px] font-medium text-justify">{data?.bio}</p>
            <div className="flex flex-col flex-wrap">
              <DivDestaque>
                <p className={`text-base font-bold text-center font-sans ${CenterIconsLucide}`}><UserRound/> {data?.followers} seguidores</p>
              </DivDestaque>
              <DivDestaque>
                <p className={`text-base font-semibold text-center font-sans ${CenterIconsLucide}`}>
                  <BookMarked/> {data?.public_repos} Repositórios (Públicos)
                </p>
              </DivDestaque>
              <BtnGithub>
                <Github/> Github
              </BtnGithub>
            </div>
          </div>
        </div>
    </Main>
  );
}