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

      const temp = []

      for await (const events of response) {
        let creatorId = events.creator

        const users = await fetch(`/api/user/${creatorId}`)
          .then((res) => res.json())
          .then((data) => data.name)

          temp.push({ ...events, creator: users })
      }

      setEvents(temp)

      console.log(response)
    }


    fetchData()


  }, [])

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
              {events.creator}
            </p>
            <p>
              <i>
                <CalendarMonthIcon />
              </i>
              {new Date(events.date).toLocaleDateString('pt-BR')}
            </p>
            <p>
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
              onClick={() => {
                ///*
                const pegaPerfil = async () => {
                  const session = await getSession();
                  const data = {
                    eventid: events._id,
                    userid: session?.user._id,
                  }
                  const response = await fetch(`/api/events/entrar`, {
                  
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {'Content-Type': 'aplication/json'}
                    

                  }).then((response) => {
                    //console.log(response)
                    //alert(response)
                    response.json()
                  })
                  .catch((err) => {
                    alert("Putz, algo deu errado aqui, tenta de novo!")
                  })

                }
                
                pegaPerfil()//*/
                }}
            />
          </div>
        </div>

      ))}
      {!events ? (<p>Não há eventos cadastrados</p>) : null}

    </div>
  );
}
