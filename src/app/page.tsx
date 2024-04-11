import Image from "next/image";
import Link from "next/link";
import Card from "./components/CardGrid/Card"

export default function Home() {
  return (
    <main className="bg-slate-300">
      <header>
      <div className="flex items-center justify-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/AvatarSegan.png"
          alt="Next.js Logo"
          width={350}
          height={37}
          priority
        />
      </div>
      <p className="text-center font-mono bg-black text-lime-600 mt-3">// C: Olá! Eu sou o Segan e sou desenvolvedor Front-End!</p>
      <div className="flex h-20 justify-center space-x-28 mt-5 bg-blue-400 rounded-full mx-10">
      <Link className="inline-block px-[28px] py-[12px] m-[10px] text-[24px] font-bold uppercase text-[#fff] bg-[linear-gradient(to_bottom_right,_#00c6ff,_#0072ff)] border-[none] rounded-[40px] [box-shadow:0px_4px_0px_#0072ff] [transition:all_0.2s_ease-in-out] cursor-pointer" href={"https://github.com/segans"}>Projetos</Link>
      <Link className="inline-block px-[28px] py-[12px] m-[10px] text-[24px] font-bold uppercase text-[#fff] bg-[linear-gradient(to_bottom_right,_#00c6ff,_#0072ff)] border-[none] rounded-[40px] [box-shadow:0px_4px_0px_#0072ff] [transition:all_0.2s_ease-in-out] cursor-pointer" href={"#"}>Hobbies</Link>
      <Link className="inline-block px-[28px] py-[12px] m-[10px] text-[24px] font-bold uppercase text-[#fff] bg-[linear-gradient(to_bottom_right,_#00c6ff,_#0072ff)] border-[none] rounded-[40px] [box-shadow:0px_4px_0px_#0072ff] [transition:all_0.2s_ease-in-out] cursor-pointer" href={"#"}>Sobre Mim</Link>
      </div>
      </header>
      <div className="flex  h-96 mt-20 justify-center space-x-10">
        <Card/>
      </div>
      <div className="flex justify-center items-center mt-20">
        <Image src="/AvatarSeganVideoGame.png" width={500} height={500} alt={"Eu jogando"} />
      </div>
      <footer>
      <p className="flex justify-center items-center bg-blue-500 h-28 mt-10">Eu sou um footer!</p>
      </footer>
     </main> 
  );
}
