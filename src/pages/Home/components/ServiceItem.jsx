export default function ServiceItem({ icon, text, bgColor }) {
    const classBgColor = `bg-[${bgColor}]`;
    return (
        <div className="mx-auto px-10 flrx-auto flex flex-col gap-4 items-center justify-center w-1/3 min-w-[15rem] aspect-square rounded-2xl bg-white drop-shadow-spread border border-1 border-grey border-opacity-20">
            <div
                className="flex w-[6.25rem] aspect-square rounded-full"
                style={{backgroundColor: bgColor}}
            >
                <img src={icon} alt="icon" className="mx-auto self-center " />
            </div>
            <span className="font-quicksand text-[1rem] font-bold text-black text-center leading-6">
                {text}
            </span>
        </div>
    );
}
