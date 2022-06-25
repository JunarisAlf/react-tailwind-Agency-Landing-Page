import PortofolioItem from '@/pages/Home/components/PortofolioItem';
import portoOne from '@/assets/images/porto-1.png';
import portoTwo from '@/assets/images/porto-2.png';
import portoThree from '@/assets/images/porto-3.png';
import SecondaryBtn from '@/components/SecondaryBtn';

export default function OurPortofolio() {
    return (
        <section id="projects">
            <div className="lg:w-2/3 lg:mx-auto">
                <h2 className="mt-24 font-quicksand text-[0.85rem] text-blue text-center font-semibold">
                    Our Projects
                </h2>
                <h3 className="font-nunito text-[1.5rem] text-black text-center font-bold">
                    What do We do
                </h3>
                <p className="mt-5 font-quicksand text-[0.8rem] text-grey font-normal leading-6 lg:text-center">
                    all projects that we have already done , proven can help to
                    use more comfortable, then can used by client from our
                    business
                </p>
            </div>

            <div>
                <div className="mt-8 flex flex-col lg:flex-row gap-4">
                    <PortofolioItem
                        img={portoOne}
                        text="Design Furniture App"
                    />
                    <PortofolioItem img={portoTwo} text="Cloud App" />
                    <PortofolioItem img={portoThree} text="Design Byte App" />
                </div>

                <div className="flex items-center mt-3">
                    <SecondaryBtn
                        href=""
                        text="See All Portofolio"
                        css="mx-auto"
                    />
                </div>
            </div>
        </section>
    );
}
