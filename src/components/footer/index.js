import Image from 'next/image';
import Google from '../../images/icon/gg.png';
import Facebook from '../../images/icon/fb.png';
import Instagram from '../../images/icon/ig.png';
import salonDb from '../../constant/db';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black to-zinc-900  py-14 border-t border-primary ">
      <div className="w-8/12 lg:w-10/12 xl:w-8/12 mx-auto  py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-10 xl:gap-16 mb-14">
          <div className="  p-4 rounded-md transition-all">
            <h2 className="text-xl font-bold mt-3 mb-2 text-white  uppercase">
              Our Location
            </h2>
            <div className="border-b-2 border-primary w-1/4"></div>

            <p className="text-white  mt-2">
              {salonDb.address.street} <br />
              {salonDb.address.city}, {salonDb.address.state}
            </p>
            <p className="text-white  mt-2">{salonDb.phone}</p>
          </div>
          <div className="  p-4 rounded-md transition-all">
            <h2 className="text-xl font-bold mt-3 mb-2 text-white uppercase">
              business hours
            </h2>
            <div className="border-b-2 border-primary w-1/4"></div>
            {salonDb.hours.map((hour, index) => (
              <p key={index} className="text-white  mt-2 capitalize">
                {hour.dates}: {hour.time}
              </p>
            ))}
          </div>
          <div className="  p-4 rounded-md transition-all">
            <h2 className="text-xl font-bold mt-3 mb-2 text-white  uppercase">
              follow us
            </h2>
            <div className="border-b-2 border-primary w-1/4"></div>

            <div className="flex gap-2 mt-4 h-20 w-20">
              {salonDb.social.map((item, index) => (
                <a key={index} href={item.link} target="_blank">
                  <Image className='' src={item.icon} />
                </a>
              ))}
            
            </div>
          </div>
        </div>
        {/* <div className="border-b-2 border-amber-400 w-1/4"></div> */}

        <div className="mx-4 color-primary text-base">
          <div className="">2021 © {salonDb.salonName}.</div>
          <div className=" ">All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
