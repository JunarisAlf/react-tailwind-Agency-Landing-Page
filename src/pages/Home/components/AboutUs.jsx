import PrimaryBtn from '@/components/PrimaryBtn';
import SecondaryBtn from '@/components/SecondaryBtn';
import image from '@/assets/images/our-team.png';
import ImgDecoration from '@/assets/images/img-decoration-purple.svg';

export default function AboutUs() {
    return (
        <section
            id="about"
            className="mt-24 flex flex-col lg:flex-row-reverse lg:flex-wrap lg:justify-between"
        >
            <div className="w-full ">
                <h2 className="font-quicksand text-[0.85rem] text-blue text-center font-semibold">
                    About Us
                </h2>
                <h3 className="font-nunito text-[1.5rem] text-black text-center font-bold">
                    Our Teammate
                </h3>
            </div>
            <div className="lg:w-[50%] lg:mt-10">
                <p className="mt-5 lg:mt-0 font-quicksand text-[0.8rem] text-grey font-normal leading-6">
                    We move with make a Creative Strategy for help your business
                    goal, we help to improve your income by a services we have.
                    make your content look interesting and make people look for
                    your business.
                </p>
                <p className="mt-3 font-quicksand text-[0.8rem] text-grey font-normal leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                    neque tempor at ut auctor maecenas,Lorem ipsum d
                </p>
                <div className="px-6 flex flex-row  justify-between lg:px-0">
                    <PrimaryBtn href="" text="About Us" />
                    <SecondaryBtn href="" text="About Us" />
                </div>
            </div>

            <div className="relative mt-16 lg:mt-10 w-full lg:w-[45%] aspect-[1.47/1]">
                <img
                    src={image}
                    alt="Our Team Image"
                    className="z-10 absolute inset-0  w-full aspect-[1.47/1] mx-auto"
                />
                <img
                    src={ImgDecoration}
                    alt="Image decoratino"
                    className="absolute z-0 -top-4 left-0 lg:-left-5"
                />
            </div>
        </section>
    );
}
