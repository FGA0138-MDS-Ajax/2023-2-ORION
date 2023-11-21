"use client"

import EventCard from "@/components/EventCard/page";
import Nav from "../components/Nav/page";
import { dashboard } from "./styles.css";

export default function Home() {
  return (
    <>
      <Nav />
      <div className={dashboard}>
        <h1 className="font-bold text-2xl my-5">Mural de Eventos</h1>
        <EventCard />
        
      </div>
    </>
  );
}

