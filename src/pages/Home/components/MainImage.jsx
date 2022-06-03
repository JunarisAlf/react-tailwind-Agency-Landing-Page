import image from '@/assets/images/main-image.png'
import starIcon from '@/assets/icons/star.svg'

export default function MainImage() {
    return (
        <section className="relative mt-10">
            <div className="box-content absolute flex flex-col items-center  bg-white shadow-top-left -top-5 -left-3 rounded-md drop-shadow-top-left px-4 py-2">
                <div className="flex flex-row gap-x-1 items-center ">
                    <img src={starIcon} alt="star icon" className="h-4 aspect-square"/>
                    <span className="font-quicksand text-[0.6rem] font-[700] text-black opacity-50">Great Project</span>
                </div>
                <span className="font-nunito text-[1rem] font-[400] text-black"><span className="font-[600]">800+</span> Done</span>
            </div>
            <div className="absolute h-[5rem] aspect-[1/1] bg-white shadow-bottom-right -bottom-3 -right-3 rounded-md drop-shadow-bottom-right"></div>
            <img src={image} alt="main image" className="w-full aspect-[1.47/1] mx-auto"/>
        </section>
    )
}