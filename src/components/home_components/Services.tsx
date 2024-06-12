import {
  FaBasketballBall,
  FaBattleNet,
  FaBuysellads,
  FaConciergeBell,
  FaCouch,
} from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { MdBluetoothSearching } from "react-icons/md";
import { SiElasticsearch, SiOpensearch } from "react-icons/si";

const Services = () => {
  const services = [
    {
      link: "/categories",
      icon: <FiCamera className="w-full text-5xl" />,
      Description: "Make Up",
    },
    {
      link: "#",
      icon: <MdBluetoothSearching className="w-full text-5xl" />,
      Description: "Service Name",
    },
    {
      link: "#",
      icon: <SiElasticsearch className="w-full text-5xl" />,
      Description: "Service Name",
    },
    {
      link: "#",
      icon: <FaBasketballBall className="w-full text-5xl" />,
      Description: "Service Name",
    },
    {
      link: "#",
      icon: <FaBattleNet className="w-full text-5xl" />,
      Description: "Service Name",
    },
    {
      link: "#",
      icon: <FaBuysellads className="w-full text-5xl" />,
      Description: "Service Name",
    },
    {
      link: "#",
      icon: <FaConciergeBell className="w-full text-5xl" />,
      Description: "Service Name",
    },
    {
      link: "#",
      icon: <FaCouch className="w-full text-5xl" />,
      Description: "Service Name",
    },
    {
      link: "#",
      icon: <SiOpensearch className="w-full text-5xl" />,
      Description: "Service Name",
    },
  ];

  return (
    <>
      <section className="grid grid-cols-3 m-4 gap-x-4 gap-y-7 text-gray-600 mb-12 max-w-7xl mx-auto md:grid-cols-4 lg:grid-cols-9 p-5">
        {services.map((service, index) => (
          <a key={index} href={`${service.link}`}>
            <div className=" flex flex-col items-center ">
              <div className="relative">
                <div className="bg-white p-7 rounded-2xl border border-gray-200 hover:border-blue-500 relative ">
                  {service.icon}
                </div>
                <div className="absolute -inset-1 rounded-2xl blur-sm bg-gray-100 -z-10"></div>
              </div>
              <div className="font-bold mt-2 text-center text-sm">
                {service.Description}
              </div>
            </div>
          </a>
        ))}
      </section>
    </>
  );
};

export default Services;
