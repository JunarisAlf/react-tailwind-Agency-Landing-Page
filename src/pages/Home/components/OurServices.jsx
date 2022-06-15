import arrow from '@/assets/icons/arrow-right.svg'
import ServiceItem from '@/pages/Home/components/ServiceItem'
import ItemOne from '@/assets/icons/monitor.svg'
import ItemTwo from '@/assets/icons/settings.svg'
import ItemThree from '@/assets/icons/pen-tool.svg'
import ItemFour from '@/assets/icons/tv.svg'


export default function OurServices() {
    return (
        <section id="services">
            <h2 className="mt-24 font-quicksand text-[0.85rem] text-blue text-center font-semibold">
                Our Services
            </h2>
            <div>
                <h3 className="font-nunito text-[1.5rem] text-black text-center font-bold">
                    Perfect and Fast Movement
                </h3>
                <p className="mt-5 font-quicksand text-[0.8rem] text-grey font-normal leading-6">
                    We move with make a Creative Strategy for help your business
                    goal, we help to improve your income by a services we have.
                    make your content look interesting and make people look for
                    your business
                </p>
                <div className="mt-2 flex flex-row gap-2 items-center">
                    <span className="font-quicksand text-[0.85rem] text-blue font-bold">Read More </span>
                    <img src={arrow} alt="arrow icon" className="w-6 aspect-square"/>
                </div>
                <div className="flex flex-row flex-wrap gap-5 mt-6 content-center">
                    <ServiceItem icon={ItemOne} text="Social Media Management" bgColor='#377DFF'/>
                    <ServiceItem icon={ItemTwo} text="Search Engine Opimization" bgColor='#FF2D2D'/>
                    <ServiceItem icon={ItemThree} text="Design" bgColor='#7CE761'/>
                    <ServiceItem icon={ItemFour} text="Ads" bgColor='#FFA800'/>
                </div>
            </div>
        </section>
    );
}
