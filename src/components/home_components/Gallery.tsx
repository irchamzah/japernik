'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  // Membuat array menjadi setengah
  const images: any = [];

  function createImageArray(numImages: number) {
    for (let index = 1; index < numImages; index++) {
      images.push({
        id: index,
        src: `/images/random_image/img${index}.jpg`,
      });
    }

    return images;
  }
  const photos = createImageArray(12); // ubah angkanya untuk menampilkan jumlah foto yang ditampilkan
  function bagiArraySetengah(array: any[]) {
    const tengah = Math.ceil(array.length / 2);
    const bagianPertama = array.slice(0, tengah);
    const bagianKedua = array.slice(tengah);
    return [bagianPertama, bagianKedua];
  }
  const hasilPembagian = bagiArraySetengah(photos);
  const photos1 = hasilPembagian[0];
  const photos2 = hasilPembagian[1];

  interface Image {
    id: number;
    src: string;
  }

  const openModal = (image: Image) => {
    if (image.src) {
      setSelectedImage(image);
      setIsModalOpen(true);
    } else {
      console.error('Image source is undefined');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='mx-6 mb-32 mt-20 lg:mb-12'>
        <div className='mx-auto max-w-7xl'>
          <h2 className='mb-10 text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl'>
            Galeri
          </h2>

          <div className='grid grid-cols-2 gap-4 lg:hidden'>
            <div className='flex flex-col gap-4'>
              {photos1.map((photo, index) => (
                <div key={index} className='hover:opacity-90'>
                  <div>
                    <Image
                      onClick={() => openModal(photo)}
                      width={400}
                      height={400}
                      className='h-full w-full max-w-full rounded-lg object-cover'
                      src={photo.src}
                      alt=''
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className='flex flex-col gap-4'>
              {photos2.map((photo, index) => (
                <div key={index} className='hover:opacity-90'>
                  <div>
                    <Image
                      onClick={() => openModal(photo)}
                      width={400}
                      height={400}
                      className='h-full w-full max-w-full rounded-lg object-cover'
                      src={photo.src}
                      alt=''
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className='animated faster fadeIn fixed inset-0 z-50 flex items-center justify-center overflow-auto'>
          <div
            className='fixed inset-0 bg-black opacity-75'
            onClick={closeModal}
          />
          <div className='relative mx-6 max-w-2xl rounded-lg bg-black p-1'>
            <Image
              className='max-h-full max-w-full rounded-lg'
              width={500}
              height={500}
              src={selectedImage?.src!}
              alt={`Art ${selectedImage?.id}`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
