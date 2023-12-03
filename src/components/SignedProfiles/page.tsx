import {  container } from "./styles.css"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import Button from "../Button/page";
import { useEffect, useState } from "react";

type Event = {
  name: string;
  description: string;
  autor: string;
  date: string;
};

export default function SignedProfiles() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/api/events`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then((res) => res.json())

      setEvents(response)
    }

    fetchData()
  }, [])

  return (

    <div className={container}>

      {events.map((events, index) => (
        <div key={index} className="gap-0">
          <h3 className="font-bold text-lx">{events.name}</h3>
          <p>{events.description}</p>
          <span className="flex gap-5 items-center my-5">
            <p>
              <i>
                <PersonIcon />
              </i>
              {events.autor}
            </p>
            <p>
              <i>
                <CalendarMonthIcon />
              </i>
              {events.date}
            </p>
          </span>
          <div>
            <Button
              text="Entrar"
              justify="flex justify-end"
              width="w-20"
              onClick={() => alert("Hello World")}
            />
          </div>
        </div>
      ))}

    </div>
  );
}