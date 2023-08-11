import Contato from "@/components/content/homepage/Contato";
import Galeria from "@/components/content/homepage/Galeria";
import Intro from "@/components/content/homepage/Intro";
import Menu from "@/components/content/homepage/Menu";
import Slider from "@/components/content/homepage/Slider";
import Local from "@/components/content/homepage/local";
import Header from "@/components/header/Header";
import Cortes from "@/data/Cortes";
import Itens from "@/data/Menu";
import React, { ReactNode } from 'react';




export default function App() {
    
  return (
    <main>
        <Header/>
        <Intro/>
        <section className="flex w-4/5 gap-10 relative z-0 mt-10
        max-md:flex-col 
        max-md:w-full">
            <div className="w-1/2 max-md:w-full">
                <Local></Local>
            </div>
            <div className="w-1/2 max-md:w-full">
                <Menu itens={Itens}></Menu>
            </div>
        </section>
        <section className="flex w-4/5 gap-10 relative z-0 mt-10
        max-md:flex-col 
        max-md:w-full">
            <Galeria cortes={Cortes}></Galeria>
            <Slider cortes={Cortes}></Slider>
        </section>
        <section className="flex w-4/5 gap-10 relative z-0 mt-10
        max-md:flex-col 
        max-md:w-full">
            <Contato></Contato>
        </section>
    </main>
  )
}
