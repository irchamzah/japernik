import { CiFaceSmile } from "react-icons/ci";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

const StepsSection = () => {
  const steps = [
    {
      icon: <RiNumber1 />,
      title: "Pilih Layanan",
      description:
        "Pilih layanan yang Anda butuhkan. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, assumenda!",
    },
    {
      icon: <RiNumber2 />,
      title: "Jadwalkan",
      description:
        "Tentukan jadwal yang sesuai untuk Anda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, assumenda!",
    },
    {
      icon: <RiNumber3 />,
      title: "Konfirmasi",
      description:
        "Konfirmasi detail pemesanan Anda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, assumenda!",
    },
    {
      icon: <CiFaceSmile />,
      title: "Selesai",
      description:
        "Nikmati layanan kami! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, assumenda!",
    },
  ];

  return (
    <div className="mt-20 mb-32 ">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-gray-900 mb-10">
          TAHAP-TAHAP PEMESANAN
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-lg lg:mx-auto "
            >
              <div className="flex items-center mb-2">
                <div className="text-blue-500 text-xl mr-3">{step.icon}</div>
                <h3 className="text-xl font-base">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
