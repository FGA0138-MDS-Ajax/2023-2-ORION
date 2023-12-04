"use client"
import { dashboard } from "./styles.css";
import EventCard from "@/components/EventCard/page";
import Nav from "../components/Nav/page";
import SearchBar from "@/components/SearchBar/page";



export default function Home() {
  return (
    <>
      <Nav />
      <div className={dashboard}>
        <h1 className="font-light text-black my-5 text-[3rem]">Mural de Eventos</h1>
        <SearchBar />
        <EventCard />
        
      </div>
    </>
  );
}

