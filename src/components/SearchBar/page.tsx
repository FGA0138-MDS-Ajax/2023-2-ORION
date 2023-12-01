import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const SearchBar = ({ setSearch }: any) => {
    const { data: session } = useSession();
    const [filter, setFilter] = useState('');

    const search = (event: any) => {
        setFilter(event.target.value);

    }
    console.log(filter);
    return <div className='flex justify-center items-center gap-5'>
        <div className={
            `
            flex 
            border 
            border-black 
            border-opacity-15 rounded-lg 
            p-2
            w-[80vw]
            md:w-[40vw]
            `
        }>
            <i>
                <SearchIcon
                    className={`
                    text-black
                    
                    `}
                />
            </i>
            <input
                className="placeholder:text-black focus:outline-none w-full "
                type="search"
                value={filter}
                onChange={search.bind(this)}
                placeholder="Buscar por evento"
            />
        </div>
        {!session ? (
            <>
            </>
        ) : (
            <Link
                className={`
            bg-primary 
            p-2 
            rounded-full 
            text-white
            hover:bg-primaryDark transition duration-100 ease-in-out
            `} href="/create-event">
                <AddIcon
                />
            </Link>
        )}

    </div>
}

export default SearchBar