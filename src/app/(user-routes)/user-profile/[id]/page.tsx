import Nav from "@/components/Nav/page"
import Button from "@/components/Button/page"
import BackButton from "@/components/BackButton/page"
import { container } from './styles.css';
import Event from '@/models/Event';
import User from "@/models/User"
import connect from "@/lib/mongodb";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Avatar from "@/components/Avatar/page"
import { toast } from "@/components/ui/use-toast"
import { redirect } from "next/navigation";


async function fetchUser(userId: string) {
    await connect();

    const user = await User.findById(userId);
    if (!user) {
        redirect("/")
    }
    const { name, email, alias, bio } = user;
    return user;
}

type UserProps = {
    params: {
        id: string
    }
}
export default async function EventShow({ params }: UserProps) {
    const userId = params.id
    const user = await fetchUser(userId)

    return (
        <div>
            <Nav />
            <div className={container}>
                <header>
                    <div className="w-full flex items-center justify-between my-auto ">
                        <h2 className='text-[3em] font-bold flex items-center gap-2'>
                            <Avatar name={user.name || ''} /> {user.name} <span className="text-sm font-light opacity-50">( {user.alias} )</span></h2>
                        <BackButton />
                    </div>
                </header>

                <hr />
                <div className="flex flex-col">
                    <h3 className='text-[1.5rem] font-medium'>
                        Sobre:
                    </h3>
                    <p className='text-[1rem] font-medium'>
                        {user.bio}
                    </p>
                </div>
                <div className="flex flex-col">
                    <h3 className='text-[1.5rem] font-medium'>
                        Contato:
                    </h3>
                    <p className='text-[1rem] font-medium'>
                        {user.email}
                    </p>
                </div>
            </div>


        </div>
    )

}



