import { container } from "./styles.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from "../Button/page";
import { useEffect, useState } from "react";


type Event = {
  name: string;
  description: string;
  creator: string;
  date: string;
  createdAt: string;
};


export default function EventCard() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/events`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then((res) => res.json())

      const temp = []

      for await (const events of response) {
        let creatorId = events.creator

        const users = await fetch(`/api/user/${creatorId}`)
          .then((res) => res.json())
          .then((data) => data.name)

        temp.push({ ...events, creator: users })
      }

      setEvents(temp)
    }
    fetchData()


  }, [])
  return (

    <div className={container}>

      {events.map((events: any, index: any) => (
        <div key={index} className="gap-0">
          <h3 className="font-bold text-2xl my-5">{events.name}</h3>
          <p>{events.description}</p>
          <span className="flex gap-5 my-5">
            <p className="flex items-end gap-1">
              <i>
                <PersonIcon />
              </i>
              {events.creator}
            </p>
            <p className="flex items-end gap-1">
              <i>
                <CalendarMonthIcon />
              </i>
              {new Date(events.date).toLocaleDateString('pt-BR')}
            </p>
            <p className="flex items-end gap-1">
              <i>
                <LocationOnIcon />
              </i>
              {events.location}
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
          <hr className="text-black w-full flex justify-start items-center my-5 opacity-10" />

        </div>

      ))}

    </div>
  );
}
