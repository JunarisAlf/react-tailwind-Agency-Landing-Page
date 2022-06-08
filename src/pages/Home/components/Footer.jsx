import logo from '@/assets/icons/logo.svg'
import Copyright from '@/pages/Home/components/Copyright'
export default function Footer() {
  return (
    <footer className="bg-dark-grey w-full mt-24 px-5 py-10">
        <div className="bg-white w-[187px] aspect-[2/1] rounded-2xl px-6 py-4 ">
            <img src={logo} alt="" className="block w-full"/>
        </div>
        <div className="mt-6 flex flex-row gap-14 flex-wrap ">
            <div>
                <span className="sub-footer-head">Terms & Polices</span>
                <span className="sub-footer-child">Term and Service</span>
                <span className="sub-footer-child">Privacy Policy</span>
            </div>
            <div>
                <span className="sub-footer-head">Company</span>
                <span className="sub-footer-child">Home</span>
                <span className="sub-footer-child">About Us</span>
                <span className="sub-footer-child">Contact Us Us</span>
            </div>
            <div>
                <span className="sub-footer-head">Contact</span>
                <span className="sub-footer-child">(+62) 893912392190</span>
                <span className="sub-footer-child">agecnycr@gmail.com</span>
            </div>
            <div>
                <span className="sub-footer-head">Location</span>
                <span className="sub-footer-child">PT Osiris Real Estate Internasional Jl. KH. Wahid Hasyim Kel No.10D Jakarta, Indonesia</span>
                <span className="sub-footer-child">team@OsirisRealEstate.com</span>
            </div>
        </div>
        <Copyright/>
    </footer>
  )
}
