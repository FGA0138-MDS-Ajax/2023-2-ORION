import { container } from "./styles.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from "../Button/page";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

type Event = {
  name: string;
  description: string;
  creator: string;
  date: string;
};


export default function EventCard() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/events`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then((res) => res.json())

      setEvents(response)
    }

    fetchData()
  }, [])


  async function getUser() {

    const session = await getSession();
    console.log(session?.user?._id)
  }

  getUser()

  return (

    <div className={container}>


      {events.map((events: any, index: any) => (
        <div key={index} className="gap-0">
          <h3 className="font-bold text-lx">{events.name}</h3>
          <p>{events.description}</p>
          <span className="flex gap-5 items-center my-5">
            <p>
              <i>
                <PersonIcon />
              </i>
              {/* {events._id} */}
            </p>
            <p>
              <i>
                <CalendarMonthIcon />
              </i>
              {new Date(events.date).toLocaleDateString('pt-BR')}
            </p>m
            <p>
              <i>
                <LocationOnIcon/>
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
        </div>

      ))}
      {!events ? (<p>Não há eventos cadastrados</p>) : null}

    </div>
  );
}
