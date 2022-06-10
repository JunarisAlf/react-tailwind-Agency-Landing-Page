import profileImgOne from '@/assets/images/pict-profile-1.jpeg'
import profileImgTwo from '@/assets/images/pict-profile-2.jpg'

import TestimonialItem from '@/pages/Home/components/TestimonialItem'
export default function Testimonial() {
    return (
        <section id="testimonial">
            <h2 className="mt-24 font-quicksand text-[0.85rem] text-blue text-center font-semibold">
                Testimonial
            </h2>
            <div>
                <h3 className="font-nunito text-[1.5rem] text-black text-center font-bold">
                    People Talk About Us
                </h3>
                <TestimonialItem img={profileImgOne} name="Junaris Alf" position="Web Developer">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor dolorum ut dignissimos esse unde, et, in accusamus possimus eum, incidunt aliquam culpa mollitia aliquid omnis ipsa maiores modi porro"
                </TestimonialItem>

                <TestimonialItem img={profileImgTwo} name="Angle Rose" position="Creative Manager">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor dolorum ut dignissimos esse unde, et, in accusamus possimus eum."
                </TestimonialItem>

                <TestimonialItem img={profileImgOne} name="Junaris Alf" position="Web Developer">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor dolorum ut dignissimos esse unde, et, in accusamus possimus eum, incidunt aliquam culpa mollitia aliquid omnis ipsa maiores modi porro"
                </TestimonialItem>

                <TestimonialItem img={profileImgTwo} name="Angle Rose" position="Creative Manager">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor dolorum ut dignissimos esse unde, et, in accusamus possimus eum."
                </TestimonialItem>
            </div>
        </section>
    );
}
