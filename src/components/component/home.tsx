import React from "react";
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import { Games } from "./games";
import { AutoComplete } from 'primereact/autocomplete';


export function Home() {
  return (
    <div className="bg-pink-100 text-pink-900 min-h-screen flex flex-col">
	<header className="px-4 lg:px-6 h-20 flex items-center bg-pink-200 sticky top-0">
        <Link className="flex items-center justify-center" href="https://www.twitch.tv/matutuca_">
          <TwitchIcon  className="h-8 w-8" />
          <span className="sr-only">Matutuca</span>
        </Link>
        <nav className="ml-auto gap-6 text-lg hidden md:flex">
          <Link className="font-semibold hover:underline underline-offset-4 text-pink-900" href="#LoL">
            League of Legends
          </Link>
          <Link className="font-semibold hover:underline underline-offset-4 text-pink-900" href="#Valo">
            Valorant
          </Link>
          <Link className="font-semibold hover:underline underline-offset-4 text-pink-900" href="#CSGO">
            CS:GO
          </Link>
          <Link className="font-semibold hover:underline underline-offset-4 text-pink-900" href="#Contact">
            Contacto
          </Link>
        </nav>
        <nav className="ml-auto gap-6 text-lg flex md:hidden">
        <Link className="font-semibold hover:underline underline-offset-4 text-pink-600" href="#LoL">
        <div className="flex items-center justify-center w-full h-[30px]">
          <div className="flex items-center justify-center">
            <LoLIcon className="h-8 w-8 text-purple-500" />
            <span className="sr-only">LoLIcon</span>
          </div>
        </div>
        </Link>
        <Link href="#Valo">
        <div className="font-semibold hover:underline underline-offset-4 text-pink-600">
          <div className="flex items-center justify-center">
            <ValoIcon className="h-8 w-8 text-purple-500" />
            <span className="sr-only">ValoIcon</span>
          </div>
        </div>
      </Link>
        <Link className="font-semibold hover:underline underline-offset-4 text-pink-600" href="#CSGO">
        <div className="font-semibold hover:underline underline-offset-4 text-pink-600">
          <div className="flex items-center justify-center">
            <CSGOIcon className="h-8 w-8 text-purple-500" />
            <span className="sr-only">CSGOIcon</span>
          </div>
        </div>
        </Link>
        </nav>
      </header>
      <main className="flex-1 bg-gradient-to-b from-pink-200 to-pink-50 flex justify-center">
      <div className="max-w-[1024px]">
        <section>
        <div className="flex justify-evenly flex-col-reverse md:flex-row px-8 ">
            <div className="flex-initial w-100">
              <h2 className="text-4xl font-bold tracking-tighter md:text-6xl/tight text-pink-700">Sobre mi</h2>
              <p className="max-w-[700px] text-md md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-pink-400 text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident dolore commodi sequi, quo, iure architecto impedit quaerat vel vitae tenetur officiis cupiditate expedita in assumenda iusto repellat totam id quam.
              </p>
            </div>
            <div className="flex justify-center my-8 md:">
              <div className="h-full w-[150px]">
                <img src="/Icon.png" alt="Icono League of Legends"  className="w-full h-full object-cover"></img>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="px-8 pt-[80px]" id="LoL">
          <h2 className="text-4xl font-bold tracking-tighter md:text-6xl/tight text-pink-700">Mejores plays de League of Legends</h2>
          <p className="max-w-[700px] text-md md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-pink-400 text-justify">
                Mis mejores plays (o mas divertidas) en League of Legends c:
          </p>
          </div>
        </section>
        <section>
          <div className="px-8 pt-[80px]"  id="Valo">
          <h2 className="text-4xl font-bold tracking-tighter md:text-6xl/tight text-pink-700">Mejores plays de Valorant</h2>
          <p className="max-w-[700px] text-md md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-pink-400 text-justify">
                Mis mejores plays en Valorant c:
          </p>
          </div>
        </section>
        <section>
          <div className="px-8 pt-[80px]"  id="CSGO">
          <h2 className="text-4xl font-bold tracking-tighter md:text-6xl/tight text-pink-700">Mejores plays de CS:GO</h2>
          <p className="max-w-[700px] text-md md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-pink-400 text-justify">
                Mis mejores plays en CS:GO/CS2 c:
          </p>
          </div>
        </section>
        <section className="w-full py-16 md:py-32 lg:py-48 " id="Contact">
          <div className="container grid items-center gap-8 px-8 md:px-10 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold tracking-tighter md:text-6xl/tight text-pink-700">Contactame (:</h2>
              <p className="max-w-[700px] text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-pink-400">
                Pongámonos en contacto y juguemos juntos. Llena el formulario para postularte como duo o contactame a través de las
                redes sociales.
              </p>
            </div>
            <form className="flex flex-col gap-4 lg:justify-end">
            {/* <span className="p-float-label">
              <AutoComplete inputId="ac" value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
              <label htmlFor="ac">Nombre</label>
            </span> */}
              <Input className="w-full" placeholder="Nombre" type="text" />
              <Input className="w-full" placeholder="Riot ID" type="text" />
              <Input className="w-full" placeholder="Steam" type="text" />
              <Input className="w-full" placeholder="¿Por qué deberiamos ser duo?" type="text" />
              <Button className="bg-pink-500 text-white" type="submit">
                Enviar
              </Button>
            </form>
          </div>
        </section>
      </div>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-8 md:px-10 bg-pink-50">
        <p className="text-sm text-pink-500 dark:text-pink-400">© Matutuca. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}


function TwitchIcon(props:React.HTMLAttributes<SVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
    </svg>
  )
}

function LoLIcon(props:React.HTMLAttributes<SVGElement>) {
  return (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="30px" height="28px" viewBox="0 0 100.000000 110.000000"
    preserveAspectRatio="xMidYMid meet">

    <g transform="translate(0.000000,110.000000) scale(0.100000,-0.100000)"
    fill="#880E4F" stroke="none">
    <path d="M144 1065 c-3 -8 10 -36 30 -64 l36 -49 0 -409 0 -409 -50 -49 c-38
    -37 -47 -52 -38 -62 8 -10 84 -13 367 -13 l357 0 68 69 c103 104 108 101 -204
    101 l-260 0 0 164 c0 114 -3 165 -11 168 -9 3 -9 9 0 25 12 23 16 497 5 527
    -9 23 -292 24 -300 1z m292 -479 c2 -12 1 -13 -3 -1 -6 21 -19 19 -37 -7 -22
    -32 -20 -57 7 -68 22 -10 22 -10 -3 -7 -35 3 -41 56 -10 87 24 24 44 22 46 -4z"/>
    <path d="M500 962 c0 -15 13 -21 70 -31 304 -55 467 -399 310 -653 l-29 -48
    28 0 c27 0 32 6 62 78 41 98 52 230 24 314 -57 176 -175 292 -344 342 -76 22
    -121 21 -121 -2z"/>
    <path d="M500 714 c0 -144 2 -165 15 -160 10 4 15 -1 16 -17 0 -22 0 -22 9 -1
    9 23 36 38 45 25 3 -5 14 -7 25 -4 18 5 20 1 18 -24 -2 -24 -6 -29 -20 -25
    -10 2 -18 9 -18 15 0 7 -4 7 -12 -1 -7 -7 -25 -12 -41 -12 -22 0 -28 4 -23 16
    3 8 2 12 -4 9 -6 -4 -10 -68 -10 -156 l0 -149 138 0 c156 0 157 1 201 87 108
    215 8 468 -215 543 -32 11 -74 20 -91 20 l-33 0 0 -166z"/>
    <path d="M128 803 c-33 -35 -83 -134 -99 -196 -6 -27 -10 -87 -7 -140 3 -83 8
    -100 45 -177 23 -47 53 -96 67 -109 l26 -24 0 27 c0 15 -17 56 -39 92 -46 76
    -66 167 -58 257 8 83 20 122 62 192 21 34 35 69 33 83 l-3 24 -27 -29z"/>
    <path d="M136 615 c-26 -77 -26 -165 -1 -235 l20 -55 3 88 c1 48 1 126 0 175
    l-3 87 -19 -60z"/>
    <path d="M561 534 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
    <path d="M607 543 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3 -9
    2 -12 -2z"/>
    </g>
  </svg>
  )
}

function ValoIcon(props:React.HTMLAttributes<SVGElement>) {
  return (
    <svg fill="#880E4F" width="34px" height="34px" viewBox="0 0 32 32" id="Camada_1" version="1.1"  xmlns="http://www.w3.org/2000/svg" >

      <g id="SVGRepo_bgCarrier" stroke-width="0"/>

      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

      <g id="SVGRepo_iconCarrier"> <g> <path d="M19.8,26.1h-0.2c-2.4,0-4.8,0-7.2,0c-0.3,0-0.5-0.1-0.6-0.3c-2.5-3.2-5.1-6.3-7.6-9.5C4.1,16.1,4,16,4,15.8 c0-3.1,0-6.1,0-9.2c0-0.1,0-0.2,0.1-0.2h0.1c5.2,6.5,10.4,13,15.5,19.5c0,0,0,0.1,0.1,0.1L19.8,26.1L19.8,26.1z"/> <path d="M27.8,16.3c-0.7,0.9-1.5,1.8-2.2,2.8c-0.2,0.2-0.4,0.3-0.6,0.3c-2.4,0-4.8,0-7.1,0c0,0-0.1,0-0.1,0c-0.1,0-0.2-0.1-0.1-0.2 c0,0,0-0.1,0.1-0.1c2.4-3,4.7-5.9,7.1-8.9c1-1.2,2-2.5,2.9-3.7c0-0.1,0.1-0.1,0.2-0.1c0,0,0.1,0,0.1,0c0,0.1,0,0.1,0,0.2 c0,3,0,6.1,0,9.1C28,16,27.9,16.2,27.8,16.3L27.8,16.3z"/> </g> </g>

    </svg>
  )
}

function CSGOIcon(props:React.HTMLAttributes<SVGElement>) {
  return (
    <svg fill="#880E4F" width="34px" height="30px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">

      <g id="SVGRepo_bgCarrier" stroke-width="0"/>

      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

      <g id="SVGRepo_iconCarrier">

      <path d="M9.103.435a1.753 1.753 0 0 1 1.652-.362c.218.072.406.203.609.333.16.101.348.145.493.261.072.058.014.16.014.232.189.45.29.942.13 1.42-.13.16-.362.203-.55.276-.03.203.043.39.072.594-.043.029-.072.058-.116.087.276-.015.551-.073.827-.13.101-.102.26-.044.39-.059.015-.203.088-.391.088-.594a.34.34 0 0 0 .116-.029c.014.145 0 .29.043.435.073.058.189.029.276.043 0 .058 0 .116.014.174 1.681-.014 3.377 0 5.058 0v.247h.16V2.42h.188c0 .26-.014.507 0 .768a.11.11 0 0 0 .073.029c0 .029.014.087.014.116.058-.058.13-.102.218-.073.014.044.029.087.043.145-.058.058-.087.13-.058.218.464.014.928 0 1.406 0 .044-.058.116-.087.189-.116a.464.464 0 0 1 .087.058h.68a.874.874 0 0 1 .015.333h-.696a.46.46 0 0 1-.087.073c-.072-.044-.13-.073-.202-.116h-1.261c-.247.072-.508.058-.754.014v.275H16.16a.532.532 0 0 1-.29.13c.044.218-.202.276-.29.436a.45.45 0 0 1-.231.174c-.073.449.087.87.203 1.29-.13.029-.276.072-.406.101-.073.29-.145.594-.203.884a.848.848 0 0 1-.507.58c-.174.203-.406.406-.682.42-.101.03-.174-.043-.246-.101-.362.029-.696-.145-1.015-.29-.347-.16-.666-.363-1-.55.03.202-.072.376-.145.55.16.072.377.13.464.304.058.13.116.276.116.435-.014.522-.072 1.044-.101 1.565.014.377-.174.754-.435 1.03-.174-.015-.319-.088-.478-.16-.058.13-.189.26-.116.42.058.189.058.392.145.566a6.674 6.674 0 0 1 1.217 1.753c.304.624.536 1.276.783 1.928.043 0 .13-.015.174-.015.058.189 0 .406.116.58.101.16.072.348.072.536-.029.435-.058.87-.101 1.305-.03.304-.102.609-.145.913.014.232.116.464.101.696-.014.217-.014.449-.188.608.014.493-.116.986.058 1.464.232.32.493.623.768.899.304.145.667.174.928.435.1.16.043.347.014.521a6.732 6.732 0 0 1-1.87 0c-.246-.058-.478-.159-.724-.188-.334.014-.725.145-1.03-.087-.028-.391.117-.768.189-1.145.029-.13.16-.217.145-.348-.03-.45-.058-.913-.087-1.362-.058-.03-.16-.058-.145-.145 0-.218-.072-.435-.13-.638a10.821 10.821 0 0 1-.16-1.681c-.014-.16.087-.276.203-.377.03-.246.058-.507.073-.754-.044-.13-.145-.232-.203-.348-.261.03-.638.087-.797-.188-.377-.565-.769-1.145-1.145-1.71-.16-.015-.348 0-.493-.102-.16-.174-.261-.405-.363-.623-.043.174-.072.362-.174.507-.087.145-.231.247-.333.377-.101.232-.188.464-.275.696-.102.29-.247.58-.276.899a1.543 1.543 0 0 1-.101.449c-.073.116-.203.16-.319.217-.087.189-.145.377-.275.537-.087.101-.232.13-.29.26-.058.174-.145.334-.218.493-.029.174.087.363.03.536-.102.435-.32.841-.522 1.232-.102.29-.174.595-.32.87-.057.116-.202.145-.318.16-.13.318-.276.623-.362.956a5.437 5.437 0 0 0-.03.971c0 .145.088.261.146.391.057.174.014.348-.015.522-.565.073-1.145.13-1.696-.043-.058-.044-.043-.116-.058-.174-.043-.261-.072-.536.015-.783.188-.681.348-1.362.536-2.043-.072-.073-.174-.13-.174-.247-.014-.188 0-.391.044-.58.087-.319.318-.565.434-.87.044-.13.03-.26.044-.39 0-.305.174-.551.304-.812.13-.218.232-.45.406-.638.116-.101.116-.26.203-.391.087-.16.232-.29.232-.479.029-.231-.058-.463-.03-.695.059-.681.19-1.348.305-2.03-.058-.072-.145-.144-.174-.246.015-.072.03-.13.044-.203l-.13-.217c.057-.087.115-.188.173-.275-.058-.044-.13-.102-.188-.145.072-.218.043-.537.304-.638.03.014.102.029.13.043-.043-.376-.043-.768-.086-1.145a3.534 3.534 0 0 1-.073-1.232c.145-.217.42-.304.667-.318-.319-.073-.638-.102-.942-.203-.015-.261.029-.522.072-.783.13-.507.073-1.029.145-1.55.073-.146.261-.175.42-.146.189.03.377-.029.566-.087 0-.072.014-.16 0-.232-.116-.507-.087-1.029 0-1.521.116-.638.377-1.261.855-1.71.319-.305.783-.45 1.217-.435.145 0 .232.145.348.232.058-.058.116-.116.16-.174-.073-.247-.189-.508-.174-.769.029-.58.217-1.174.652-1.565m4.522 4.102c.029.029.029.029 0 0m.203.029c.014.101.043.203-.015.29-.072.029-.16.029-.232.072.203 0 .406.015.61 0 .159-.043.1-.246.1-.362-.1-.116-.318-.044-.463 0m-.507.609c.145.159.217.405.347.565.189-.247.334-.508.551-.725-.26-.015-.522.015-.782-.015-.044.058-.073.116-.116.174z"/>

      </g>

    </svg>
  )
}