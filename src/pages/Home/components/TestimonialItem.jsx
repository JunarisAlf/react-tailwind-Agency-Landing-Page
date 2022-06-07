
export default function TestimonialItem({img, name, position, children}) {
    return (
        <div className="mt-10 mb-10 px-12 py-10 flex flex-col gap-4 bg-white drop-shadow-md rounded-2xl">
            <div className="flex flex-row gap-8 items-center justify-start">
                <div className="rounded-full overflow-hidden h-16 aspect-square">
                    <img src={img} alt="profile picture" />
                </div>
                <div className="flex flex-col font-quicksand">
                    <span className="text-[1.4rem] font-[600] text-blue">
                        {name}
                    </span>
                    <span className="font-quicksand text-[0.8rem] text-black font-[600]  opacity-50">
                        {position}
                    </span>
                </div>
            </div>
            <span className="inline-block mt-2 font-quicksand text-[1rem] text-black opacity-60 font-normal leading-8">
                {children}
            </span>
        </div>
    );
}
