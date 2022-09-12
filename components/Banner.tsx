import Image from "next/image"

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]w-auto xl:h-[600px 2xl:h[700px]">
     <Image src="https://mapandfire.com/wp-content/uploads/2021/08/ikea-brand-hero-image-1.jpg"
     layout="fill"
     objectFit="cover" />
     <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full text-center font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 ">I'm flexible</button>
     </div>
    
    </div>
  )
}

export default Banner