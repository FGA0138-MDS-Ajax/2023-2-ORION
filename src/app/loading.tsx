import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
export default function Loading() {
    return <div className={container}><HourglassEmptyIcon className={`
        text-primary
        animate-spin 
    `} /></div>

}

const container = `
    h-screen
    w-screen
    flex
    m-auto
    justify-center
    items-center
    bg-white
    
`