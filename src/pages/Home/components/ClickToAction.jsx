import  PrimaryBtn  from '@/components/PrimaryBtn';

export default function ClickToAction() {
  return (
    <div>
        <span className="block font-nunito font-bold text-[1.5rem] text-center">Interesting Collaboration With Us?</span>
        <span className="block text-center font-quicksand font-normal text-[0.8rem] ">Help you to reach your bussines goal</span>
        <div className="flex flex-row items-center">
            <PrimaryBtn href="" text="Get Started"/>
        </div>
    </div>
  )
}

