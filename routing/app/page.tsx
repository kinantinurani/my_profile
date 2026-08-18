import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row justify-center gap-20 items-center h-full px-20">
      <div className="w-1/4 flex justify-end">
      <div className="border-10 w-50 h-50 border-white rounded-full overflow-hidden">
        <Image
        src="/images/s.jpg"
        alt="My Image"
        width={500}
        height={500}
        className="rounded-full w-50 h-50"
        />
      </div>
      </div>
       <div className="w-3/4 p-6 text-white">
       <h1>i am kinn</h1>
       <p>frontend developer</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cum omnis, amet perspiciatis id reiciendis nemo itaque quaerat explicabo corrupti iste maxime autem asperiores, non, laudantium nihil corporis cupiditate provident?</p>
      </div>
    </div>
      
    
  );
}
