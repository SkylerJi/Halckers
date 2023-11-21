
import Link from 'next/link'
export default function Navbar(){
    return (
        <div>
             <div className = "flex flex-row justify-between w-full bg-white">
   
                    <Link href = "/">
                        Halckers
                    </Link>
                    <Link href = "/mission">
                        Mission
                    </Link>

                    <Link href = "/team">
                        Team
                    </Link>




        </div>

        </div>
       
       
          

    )
}

