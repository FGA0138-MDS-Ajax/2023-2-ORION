import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const SearchBar = () => {
    const { data: session } = useSession();

    

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
                name=""
                id=""
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
            `} href="#">
                <AddIcon
                />
            </Link>
        )}

    </div>
}

export default SearchBar