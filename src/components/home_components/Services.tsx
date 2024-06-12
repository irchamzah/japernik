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
      id: 1,
      icon: <FiCamera className="w-full text-5xl" />,
      Description: "Service Name",
    },
    {
      id: 2,
      icon: <MdBluetoothSearching className="w-full text-5xl" />,
      Description: "Service Name",
    },
    {
      id: 3,
      icon: <SiElasticsearch className="w-full text-5xl" />,
      Description: "Service Name",
    },
    {
      id: 4,
      icon: <FaBasketballBall className="w-full text-5xl" />,
      Description: "Service Name",
    },
    {
      id: 5,
      icon: <FaBattleNet className="w-full text-5xl" />,
      Description: "Service Name",
    },
    {
      id: 6,
      icon: <FaBuysellads className="w-full text-5xl" />,
      Description: "Service Name",
    },
    {
      id: 7,
      icon: <FaConciergeBell className="w-full text-5xl" />,
      Description: "Service Name",
    },
    {
      id: 8,
      icon: <FaCouch className="w-full text-5xl" />,
      Description: "Service Name",
    },
    {
      id: 9,
      icon: <SiOpensearch className="w-full text-5xl" />,
      Description: "Service Name",
    },
  ];

  return (
    <>
      <section className="grid grid-cols-3 m-4 gap-x-4 gap-y-7 text-gray-600 mb-12 max-w-7xl mx-auto md:grid-cols-4 lg:grid-cols-9 p-5">
        {services.map((service, index) => (
          <a key={index} href="#">
            <div className=" flex flex-col items-center">
              <div className="relative">
                <div className="bg-white p-7 rounded-2xl border border-gray-2 00 relative">
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
