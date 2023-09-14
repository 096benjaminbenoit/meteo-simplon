import { FaUniversalAccess } from "react-icons/fa";
import {BsTwitter, BsLinkedin, BsFacebook} from "react-icons/bs"

export default function HeaderSocialNav() {
  return (
    <div className="px-5 sm:px-10 lg:px-20 hidden sm:block">
      <div className="flex justify-between items-center py-2">
        <div className="flex justify-center items-center gap-3">
          <FaUniversalAccess />
          <p className="text-slate-500">SIMPLON.CO</p>
        </div>
        <nav>
            <ul className="flex gap-3 text-rose-600">
                <li className="border border-black rounded-full p-1"><BsTwitter /></li>
                <li className="border border-black rounded-full p-1"><BsLinkedin /></li>
                <li className="border border-black rounded-full p-1"><BsFacebook /></li>
            </ul>
        </nav>
      </div>
      <hr />
    </div>
  );
}
