'use client'
import { container } from "./styles.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from "../Button/page";
import { useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import Image from 'next/image'
import Link from "next/link";
import InfoIcon from '@mui/icons-material/Info';

type Event = {
  _id: string;
  name: string;
  description: string;
  creator: string;
  date: string;
  createdAt: string;
};

export default function EventCard() {
  const [events, setEvents] = useState<Event[]>([])
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true)
  const router = useRouter();

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
      setLoading(false)
    }
    fetchData()
  }, [])
  async function enterEvent(eventId: any) {

    if (!session) {
      toast({
        title: 'Erro',
        description: 'Você precisa estar logado para entrar no evento',
        variant: "destructive"
      })
      return
    }

    const participants = session?.user._id


    const response = await fetch(`/api/events/enter/${eventId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ participants })
    })

    if (response.ok) {
      toast({
        title: 'Sucesso',
        description: 'Entrou no evento',
        variant: "constructive"
      })
      router.push(`/event/${eventId}`)
    }

    if (response.status == 409) {
      toast({
        title: 'Erro',
        description: response.text(),
        variant: "destructive"
      })
      router.push('/')
    }

    if (response.status == 500) {
      toast({
        title: 'Erro',
        description: response.text(),
        variant: "destructive"
      })
      router.push('/')
    }

  }

  return (

    <div className={container}>
      <span id="inicio"></span>
      {events.map((events: any) => (
        <div key={events._id} className="gap-0">
          <h3 className="flex items-center gap-5 font-bold text-2xl my-5">
            {events.name}
            <Link
              className="hover:text-primaryDark transition duration-100 ease-in-out"
              href={`/event/${events._id}`}>
              <p className="flex text-sm items-center gap-1 font-medium"><InfoIcon className="text-primary" />Informações</p>
            </Link>
          </h3>

          <p>{events.description}</p>
          <span className="flex gap-5 my-5">
            <p className="flex items-end gap-1">
              <i>
                <PersonIcon className="text-primary" />
              </i>
              {events.creator}
            </p>
            <p className="flex items-end gap-1">
              <i>
                <CalendarMonthIcon className="text-primary" />
              </i>
              {new Date(events.date).toLocaleDateString('pt-BR')}
            </p>
            <p className="flex items-end gap-1">
              <i>
                <LocationOnIcon className="text-primary" />
              </i>
              {events.location}
            </p>
          </span>

          <Button
            text="Entrar"
            justify="flex justify-end"
            width="w-20"
            onClick={() => enterEvent(events._id)}
          />

          <hr className="text-black w-full flex justify-start items-center my-5 opacity-10" />
        </div>
      ))}

      {loading ? (<p className="text-center p-10 animate-pulse">Carregando eventos..</p>)
        : events.length == 0 && !loading ? (
          <div className="flex flex-col justify-center items-center m-auto">
            <Image src='/img/not-found.svg' alt="sem eventos" width={450} height={300} />
            <p className="text-center font-medium text-[1.5em] p-10" >Nenhum evento encontrado </p>
          </div>
        )
          : null}

      <button
        className={`
        fixed
        bottom-5
        left-5
        text-primary
      `}
        onClick={() => window.scrollTo(0, 0)}><KeyboardDoubleArrowUpIcon /></button>
    </div>
  );
}
