import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const SearchBar = ({ setSearch }: any) => {
    const { data: session } = useSession();
    const [filter, setFilter] = useState('');

    return <div className='flex justify-end items-center gap-5'>

        {(!session) ? <div className='text-center text-lg'>
            <Link className={link} href='/signup'> Crie sua conta </Link>
            ou
            <Link className={link} href='/signup'> entre </Link>
            para acessar ou criar um evento
        </div>

            : <div>
                <Link
                    className={button} href="/create-event">

                    <AddIcon
                    />
                </Link>
            </div>}
    </div>
}

export default SearchBar

export const button = `
    bg-primary 
    p-2 
    rounded-full 
    text-white
    hover:bg-primaryDark transition duration-100 ease-in-out
`


export const link = `
    text-primary
    hover:text-primaryDark transition duration-100 ease-in-out
`