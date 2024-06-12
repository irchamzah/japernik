"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

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
      console.error("Image source is undefined");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mt-20 lg:mb-12 mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl text-center text-gray-900 mb-10">
            GALERI
          </h2>

          <div className="grid grid-cols-2 gap-4  lg:hidden">
            <div className="flex flex-col gap-4">
              {photos1.map((photo, index) => (
                <div key={index} className="">
                  <div>
                    <Image
                      onClick={() => openModal(photo)}
                      width={400}
                      height={400}
                      className="h-auto max-w-full rounded-lg object-cover"
                      src={photo.src}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {photos2.map((photo, index) => (
                <div key={index} className="">
                  <div>
                    <Image
                      onClick={() => openModal(photo)}
                      width={400}
                      height={400}
                      className="h-auto max-w-full rounded-lg object-cover"
                      src={photo.src}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto flex justify-center items-center animated faster fadeIn">
          <div
            className="fixed inset-0 bg-black opacity-75"
            onClick={closeModal}
          />
          <div className="relative max-w-2xl bg-black p-1 rounded-lg mx-4">
            <Image
              className="max-w-full max-h-full rounded-lg"
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
