import Image from "next/image";

const CardImage = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <a href="#">
      <div className="h-48 lg:h-72 min-w-36 lg:min-w-52 bg-gray-300 relative bg-cover rounded-xl overflow-hidden flex flex-col justify-stretch hover:opacity-90">
        <Image
          src={imageSrc}
          alt={title}
          width={300} // Ubah ukuran gambar sesuai kebutuhan
          height={300} // Ubah ukuran gambar sesuai kebutuhan
          objectFit=""
          className="h-full object-cover"
        />
        <div className="absolute inset-0 p-4 text-white bg-gradient-to-b from-black/50 to-transparent bg-opacity-10 h-1/2">
          <div className="text-sm">{title}</div>
          <div className="text-sm font-bold">{description}</div>
        </div>
      </div>
    </a>
  );
};

export default CardImage;
