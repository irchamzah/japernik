"use client";

import Image from "next/image";
import React, { useState } from "react";

const videos = [
  "p0s0_4KO9t4",
  "p0s0_4KO9t4",
  "p0s0_4KO9t4",
  "p0s0_4KO9t4",
  "p0s0_4KO9t4",
  "p0s0_4KO9t4",
  // Tambahkan video ID lainnya
];

const Test = () => {
  // Membagi video ke dalam kelompok 3 elemen
  const videoChunks = [];
  for (let i = 0; i < videos.length; i += 3) {
    videoChunks.push(videos.slice(i, i + 3));
  }

  interface Image {
    id: number;
    src: string;
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null | any>(null);

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
    const bagianPertama = array.slice(0);
    return [bagianPertama];
  }
  const hasil = bagiArraySetengah(photos);
  const photos1 = hasil[0];

  const photoChunks = [];
  for (let i = 0; i < photos1.length; i += 3) {
    photoChunks.push(photos1.slice(i, i + 3));
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
      <div className="hidden lg:flex items-center justify-center mb-32">
        <div className="w-full max-w-7xl px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {photoChunks.map((photo, index) => (
              <div key={index} className="flex flex-col gap-4">
                {photo.map((photocontent, photoIndex) => (
                  <div key={photoIndex} className="">
                    <div>
                      <Image
                        onClick={() => openModal(photocontent)}
                        width={300}
                        height={0}
                        className="h-auto max-w-full rounded-lg object-cover"
                        src={photocontent.src}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
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
              width={450}
              height={0}
              src={selectedImage?.src!}
              alt={`Art ${selectedImage?.id}`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Test;
