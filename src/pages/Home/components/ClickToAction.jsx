import PrimaryBtn from '@/components/PrimaryBtn';
import ImgOne from '@/assets/images/secondary-image-1.png';
import ImgTwo from '@/assets/images/secondary-image-2.png';

export default function ClickToAction() {
    return (
        <div className="flex flex-col lg:flex-row-reverse items-center">
            <div className="relative w-full lg:w-[40%] h-[85vw] lg:h-[30vw] my-[7rem]">
                <img
                    src={ImgOne}
                    alt=""
                    className="absolute bottom-0 left-0 z-10 w-[70%]"
                />
                <img
                    src={ImgTwo}
                    alt=""
                    className="absolute top-o right-0 z-0 w-[60%]"
                />
            </div>
            <div className="lg:pr-20">
                <span className="block font-nunito font-bold text-[1.5rem] text-center">
                    Interesting Collaboration With Us?
                </span>
                <span className="block text-center font-quicksand font-normal text-[0.8rem] ">
                    Help you to reach your bussines goal
                </span>
                <div className="flex flex-row items-center">
                    <PrimaryBtn href="" text="Get Started" />
                </div>
            </div>
        </div>
    );
}
