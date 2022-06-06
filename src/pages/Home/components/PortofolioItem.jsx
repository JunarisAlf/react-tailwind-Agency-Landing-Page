export default function PortofolioItem({ img, text, css}) {
    return (
        <div className="relative mx-auto mt-[3.5rem] px-10 flex flex-col gap-4 items-center justify-center w-[16rem] aspect-square rounded-2xl bg-white drop-shadow-spread border border-1 border-grey border-opacity-20">
            
            <span className="absolute bottom-4 z-10 px-2 font-quicksand text-[1.5rem] font-bold text-white text-center leading-6">
                {text}
            </span>
            <img src={img} alt="Portofolio Image" className="absolute z-0 object-fit object-cover"/>
        </div>
    );
}
