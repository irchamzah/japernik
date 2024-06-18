import Image from 'next/image';
import Link from 'next/link';

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
    <Link href='#'>
      <div className='relative flex h-48 min-w-36 flex-col justify-stretch overflow-hidden rounded-xl bg-gray-300 bg-cover hover:opacity-90 lg:h-72 lg:min-w-52'>
        <Image
          src={imageSrc}
          alt={title}
          width={300} // Ubah ukuran gambar sesuai kebutuhan
          height={300} // Ubah ukuran gambar sesuai kebutuhan
          objectFit=''
          className='h-full object-cover'
        />
        <div className='absolute inset-0 h-1/2 bg-opacity-10 bg-gradient-to-b from-black/50 to-transparent p-4 text-white'>
          <div className='text-sm'>{title}</div>
          <div className='text-sm font-bold'>{description}</div>
        </div>
      </div>
    </Link>
  );
};

export default CardImage;
