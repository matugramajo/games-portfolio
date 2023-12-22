'use client'

import React, { useState } from "react";
import Link from "next/link"
import {TwitchIcon, LoLIcon, ValoIcon, CSGOIcon, IGIcon, TWIcon, SteamIcon} from "@/components/component/icons"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export function Home() {
  const {toast} = useToast()

  const defaultValues = {
    name: "",
    riotid: "",
    steam: "",
    serduo: ""
  }

  const [values, setValues] = useState(defaultValues)

  const handleChange = (e: any) => {
    const {value, name} = e.target
    setValues(prev => ({
      ...prev,
      [name]:value
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(values)
    fetch('/api/send',{method:'POST', body:JSON.stringify(values)}).then(() => {
      toast({description: 'Gracias por la solicitud (: Espero que juguemos pronto <3'}) 
      setValues (defaultValues)
    })
  }

  return (
    <div className="bg-pink-100 text-pink-900 min-h-screen flex flex-col">
	<header className="px-4 lg:px-6 h-20 flex items-center bg-pink-200 sticky top-0">
        <Link className="flex items-center justify-center" href="https://www.twitch.tv/matutuca_" target="_blank">
          <TwitchIcon  className="h-8 w-8" />
          <span className="sr-only">Matutuca</span>
        </Link>
        <nav className="ml-auto gap-6 text-lg hidden md:flex">
          <Link className="font-semibold hover:underline underline-offset-4 text-pink-900" href="#Valo">
            Valorant
          </Link>
          <Link className="font-semibold hover:underline underline-offset-4 text-pink-900" href="#LoL">
            League of Legends
          </Link>
          <Link className="font-semibold hover:underline underline-offset-4 text-pink-900" href="#CSGO">
            CS:GO
          </Link>
          <Link className="font-semibold hover:underline underline-offset-4 text-pink-900" href="#Contact">
            Contacto
          </Link>
        </nav>
        <nav className="ml-auto gap-6 text-lg flex md:hidden">
        <Link href="#Valo">
        <div className="font-semibold hover:underline underline-offset-4 text-pink-600">
          <div className="flex items-center justify-center">
            <ValoIcon className="h-8 w-8 text-purple-500" />
            <span className="sr-only">ValoIcon</span>
          </div>
        </div>
      </Link>
        <Link className="font-semibold hover:underline underline-offset-4 text-pink-600" href="#LoL">
        <div className="flex items-center justify-center w-full h-[30px]">
          <div className="flex items-center justify-center">
            <LoLIcon className="h-8 w-8 text-purple-500" />
            <span className="sr-only">LoLIcon</span>
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
        <div className="flex justify-between flex-col-reverse md:flex-row px-8 ">
            <div className="flex-initial w-100">
              <h2 className="text-4xl font-bold tracking-tighter md:text-6xl/tight text-pink-700">Sobre mi</h2>
              <p className="max-w-[700px] pt-[10px] text-md md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-pink-400 text-justify">
              Soy Matilde, me gusta que me digan Matu. Tengo 21 años y recién a los 18 empecé a introducirme en los videojuegos, jugando al LoL en una notebook que era el único juego que corría hasta casi dos años después que me pude armar mi primera PC. Hoy en día disfruto jugar Valorant, LoL y CS, también al isaac (en un año le meti 500hs xD). Soy hincha de 9z💜, pero en general disfruto ver eSports sea cual sea el team, más si es para bancar a la región.
              </p>
            </div>
            <div className="flex justify-center my-8">
              <div className="h-full w-200">
                <img src="/Icon.png" alt="Icono League of Legends"  className="w-100 h-100 object-cover"></img>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="px-8 pt-[80px]"  id="Valo">
          <h2 className="text-4xl font-bold tracking-tighter md:text-6xl/tight text-pink-700">Mejores plays de Valorant</h2>
          <p className="max-w-[700px] pt-[10px] text-md md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-pink-400 text-justify">
                Mis mejores plays en Valorant 😎
          </p>
          </div>
        </section>
        <section>
          <div className="flex justify-between flex-col px-8 md:flex-row">
            <div className="pt-[20px]">
            <iframe className="h-full w-full aspect-video"
              src="https://www.youtube.com/embed/-N29YqcOVYo" allow="fullscreen;">
            </iframe>
            </div>
            <div className="pt-[20px]">
            <iframe className="h-full w-full aspect-video"
              src="https://www.youtube.com/embed/tyfuw21v97Y" allow="fullscreen;">
            </iframe>
            </div>
            <div className="pt-[20px]">
            <iframe className="h-full w-full aspect-video"
              src="https://www.youtube.com/embed/1dnK4fWYKWQ" allow="fullscreen;">
            </iframe>
            </div>
          </div>
        </section>
        <section>
          <div className="px-8 pt-[80px]" id="LoL">
          <h2 className="text-4xl font-bold tracking-tighter md:text-6xl/tight text-pink-700">Mejores plays de LoL</h2>
          <p className="max-w-[700px] pt-[10px] text-md md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-pink-400 text-justify">
                Mis mejores plays (o mas divertidas) en League of Legends 🫡
          </p>
          <div className="flex justify-between flex-col md:flex-row">
            <div className="pt-[20px]">
            <iframe className="h-full w-full aspect-video"
              src="https://www.youtube.com/embed/KIyx1Hdh4lA" allow="fullscreen;">
            </iframe>
            </div>
            <div className="pt-[20px]">
            <iframe className="h-full w-full aspect-video"
              src="https://www.youtube.com/embed/ZsGIAETA16M" allow="fullscreen;">
            </iframe>
            </div>
            <div className="pt-[20px]">
            <iframe className="h-full w-full aspect-video"
              src="https://www.youtube.com/embed/qyR2rnNCpLU" allow="fullscreen;">
            </iframe>
            </div>
          </div>
          </div>
        </section>
        <section>
          <div className="px-8 pt-[80px]"  id="CSGO">
          <h2 className="text-4xl font-bold tracking-tighter md:text-6xl/tight text-pink-700">Mejores plays de CS:GO</h2>
          <p className="max-w-[700px] pt-[10px] text-md md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-pink-400 text-justify">
                Mis mejores plays en CS:GO/CS2 🤓
          </p>
          <div className="flex justify-between flex-col md:flex-row">
            <div className="pt-[20px]">
            <iframe className="h-full w-full aspect-video"
              src="https://www.youtube.com/embed/4u5ZkK_SjRY" allow="fullscreen;">
            </iframe>
            </div>
            <div className="pt-[20px]">
            <iframe className="h-full w-full aspect-video"
              src="https://www.youtube.com/embed/m2kIR8VnqNw" allow="fullscreen;">
            </iframe>
            </div>
            <div className="pt-[20px]">
            <iframe className="h-full w-full aspect-video"
              src="https://www.youtube.com/embed/7kIIDWZqK5A" allow="fullscreen;">
            </iframe>
            </div>
          </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-32 lg:py-48 " id="Contact">
          <div className="container grid items-center gap-8 px-8 md:px-10 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold tracking-tighter md:text-6xl/tight text-pink-700">Juguemos (:</h2>
              <p className="max-w-[700px] text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-pink-400">
                Pongámonos en contacto y juguemos juntos. Llena el formulario para postularte como duo o contactame a través de las
                redes sociales.
              </p>
            </div>
            <form className="flex flex-col gap-4 lg:justify-end" onSubmit={handleSubmit}>
              <Input className="w-full" placeholder="Nombre" type="text" name="name" value={values.name} onChange={handleChange}/>
              <Input className="w-full" placeholder="Riot ID" type="text" name="riotid" value={values.riotid} onChange={handleChange}/>
              <Input className="w-full" placeholder="Steam" type="text" name="steam" value={values.steam} onChange={handleChange}/>
              <Input className="w-full" placeholder="¿Por qué deberiamos ser duo?" type="text" name="serduo" value={values.serduo} onChange={handleChange}/>
              <Button className="bg-pink-500 text-white" type="submit">
                Enviar
              </Button>
            </form>
          </div>
        </section>
      </div>
      </main>
      <footer className="flex gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-8 md:px-10 bg-pink-50 justify-around flex-col-reverse">
        <p className="text-sm text-pink-500 dark:text-pink-400">© Matutuca (?)</p>
        <div className="flex flex-row">
          <Link href="https://www.instagram.com/matildegramajo/" target="_blank">
            <div className="font-semibold hover:underline underline-offset-4 text-pink-600 px-4">
              <div className="flex items-center justify-center">
                <IGIcon className="h-8 w-8 text-purple-500" />
                <span className="sr-only">IGIcon</span>
              </div>
            </div>
          </Link>
          <Link href="https://twitter.com/_____matilde" target="_blank">
            <div className="font-semibold hover:underline underline-offset-4 text-pink-600 px-4">
              <div className="flex items-center justify-center">
                <TWIcon className="h-8 w-8 text-purple-500" />
                <span className="sr-only">TWIcon</span>
              </div>
            </div>
          </Link>
          <Link href="https://steamcommunity.com/profiles/76561199050899273/" target="_blank">
            <div className="font-semibold hover:underline underline-offset-4 text-pink-600 px-4">
              <div className="flex items-center justify-center">
                <SteamIcon className="h-8 w-8 text-purple-500" />
                <span className="sr-only">SteamIcon</span>
              </div>
            </div>
          </Link>
          </div>
      </footer>
    </div>
  )
}