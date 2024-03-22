
import Image from 'next/image';
import rmImg from "../../public/images/home.jpeg"


export default function Home() {
  return (
    <> 
    <div>
    <Image className="w-fit m-auto my-10"
      src={rmImg}
      alt="homeimage"
    />
    </div>
    </>
  );
}
