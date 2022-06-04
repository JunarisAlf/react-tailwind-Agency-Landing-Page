
export default function PrimaryBtn({href, text}) {
  return (
    <a href={href} className="inline-block text-center text-white font-bold bg-blue py-[0.6rem] px-[1.8rem] rounded-3xl text-xs mt-[1.8rem] mx-auto drop-shadow-btn">{text}</a>
  )
}
