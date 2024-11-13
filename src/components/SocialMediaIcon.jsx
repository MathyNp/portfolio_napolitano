import { PiLinkedinLogoThin } from "react-icons/pi";
import { PiGithubLogoThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { GoDownload } from "react-icons/go";

const SocialMediaIcon = () => {
  return (
    <div className=" max-w-7xl   min-h-auto   ">
      <div className=" ">
        <div className="flex gap-5 ">
          <a
            href="https://www.linkedin.com/in/matias-napolitano-8a0a5a2bb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BR8KPh4vGQEynCgR1wQ0VAw%3D%3D"
            target="blank"
          >
            <div className="text-xl rounded-md border p-2 text-white hover:scale-105 ">
              <PiLinkedinLogoThin />
            </div>
          </a>

          <a href="https://github.com/MathyNp" target="blank">
            <div className="text-xl rounded-md border p-2 text-white hover:scale-105">
              <PiGithubLogoThin />
            </div>
          </a>

          <a href="mailto:matiasenapolitano@gmail.com" target="blank">
            <div className="text-xl rounded-md border p-2 text-white hover:scale-105">
              <CiMail />
            </div>
          </a>

          <a
            href="mailto:matiasenapolitano@gmail.com"
            target="blank"
            className=" items-end"
          >
            <div className=" items-center text-sm flex flex-row gap-2 font-extralight  rounded-md border p-2 text-white hover:scale-105">
              <GoDownload /> descargar_cv
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaIcon;
