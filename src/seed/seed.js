import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createUsers() {
  try {
    await prisma.user.createMany({
      data: [
        {
          name: 'irchamzah',
          username: 'irch',
          email: 'irchamzah@gmail.com',
          photo: 'https://randomuser.me/api/portraits/men/1.jpg',
          title: 'Wedding Organizer',
          phoneNumber: '083134752738',
        },
        {
          name: 'irchamzah kedua',
          username: 'irch_2',
          email: 'irchamzah2@gmail.com',
          photo: 'https://randomuser.me/api/portraits/women/2.jpg',
          title: 'Fotografer dan Vidiografer',
          phoneNumber: '08123123123',
        },
      ],
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

async function createService({
  title,
  description,
  price,
  authorUsername,
  categoryName,
}) {
  try {
    const user = await prisma.user.findUnique({
      where: { username: authorUsername },
    });
    if (!user) {
      throw new Error('User tidak ditemukan');
    }

    const category = await prisma.category.findUnique({
      where: { name: categoryName },
    });
    if (!category) {
      throw new Error('Kategori tidak ditemukan');
    }

    const newService = await prisma.service.create({
      data: {
        title: title,
        description: description,
        price: price,
        published: true,
        authorId: user.id,
        categoryId: category.id,
      },
    });
  } catch (error) {
    console.error('Terjadi kesalahan saat membuat jasa baru', error);
    process.exit(1);
  }
}

async function createServicePortfolio({ serviceTitle, url }) {
  try {
    const service = await prisma.service.findUnique({
      where: { title: serviceTitle },
    });

    if (!service) {
      throw new Error('Service tidak ditemukan');
    }

    const newPortfolio = await prisma.servicePortfolio.create({
      data: {
        url: url,
        serviceId: service.id,
      },
    });
  } catch (error) {
    console.error('Terjadi kesalahan saat membuat portfolio baru', error);
    process.exit(1);
  }
}

async function createCategory({ name, logo }) {
  try {
    const newCategory = await prisma.category.create({
      data: {
        name: name,
        logo: logo,
      },
    });
  } catch (error) {
    console.error('Terjadi kesalahan saat membuat kategori baru', error);
    process.exit(1);
  }
}

async function createReview({
  rating,
  response,
  serviceTitle,
  reviewerUsername,
}) {
  try {
    const service = await prisma.service.findUnique({
      where: { title: serviceTitle },
    });
    if (!service) {
      throw new Error('Service tidak ditemukan');
    }

    const reviewer = await prisma.user.findUnique({
      where: { username: reviewerUsername },
    });

    const newReview = await prisma.review.create({
      data: {
        rating: rating,
        response: response,
        price: service.price,
        userId: reviewer.id,
        serviceId: service.id,
      },
    });
  } catch (error) {
    console.error('Error membuat Review', error);
    process.exit(1);
  }
}

async function createSellerResponse({ reviewResponse, sellerResponse }) {
  try {
    const review = await prisma.review.findFirst({
      where: { response: reviewResponse },
    });
    if (!review) {
      throw new Error('review tidak ditemukan');
    }

    const service = await prisma.service.findUnique({
      where: { id: review.serviceId },
    });

    const newSellerResponse = await prisma.sellerResponse.create({
      data: {
        response: sellerResponse,
        userId: service.authorId,
        reviewId: review.id,
      },
    });
  } catch (error) {
    console.error('Terjadi kesalahan saat membuat seller response', error);
    process.exit(1);
  }
}

// menghapus semua data sebelum diisi kembali
async function deleteAllData() {
  try {
    await prisma.servicePortfolio.deleteMany({});
    await prisma.sellerResponse.deleteMany({});
    await prisma.review.deleteMany({});
    await prisma.service.deleteMany({});
    await prisma.category.deleteMany({});
    await prisma.user.deleteMany({});
  } catch (error) {
    console.error('Terjadi kesalahan saat menghapus data', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
///////////////////////////////////////
async function main() {
  await deleteAllData();
  await createUsers();

  // Create Category
  await Promise.all([
    createCategory({
      name: 'Make Up',
      logo: '/images/random_image/img1.jpg',
    }),
    createCategory({
      name: 'Wedding Organizer',
      logo: '/images/random_image/img1.jpg',
    }),
    createCategory({
      name: 'Fotografi dan Videografi',
      logo: '/images/random_image/img1.jpg',
    }),
    createCategory({
      name: 'Dekorasi',
      logo: '/images/random_image/img1.jpg',
    }),
    createCategory({
      name: 'Catering',
      logo: '/images/random_image/img1.jpg',
    }),
    createCategory({
      name: 'Penyewaan Gaun dan Jas',
      logo: '/images/random_image/img1.jpg',
    }),
    createCategory({
      name: 'Undangan',
      logo: '/images/random_image/img1.jpg',
    }),
    createCategory({
      name: 'Souvenir',
      logo: '/images/random_image/img1.jpg',
    }),
    createCategory({
      name: 'Hiburan',
      logo: '/images/random_image/img1.jpg',
    }),
    createCategory({
      name: 'MC',
      logo: '/images/random_image/img1.jpg',
    }),
    createCategory({
      name: 'Penyewaan Tempat',
      logo: '/images/random_image/img1.jpg',
    }),
    createCategory({
      name: 'Transportasi',
      logo: '/images/random_image/img1.jpg',
    }),
    createCategory({
      name: 'Konsultasi Pernikahan',
      logo: '/images/random_image/img1.jpg',
    }),
    createCategory({
      name: 'Penataan Rambut',
      logo: '/images/random_image/img1.jpg',
    }),
    createCategory({
      name: 'Sound System dan Lighting',
      logo: '/images/random_image/img1.jpg',
    }),
    createCategory({
      name: 'Perawatan Pra-Pernikahan',
      logo: '/images/random_image/img1.jpg',
    }),
  ]);

  // Create Service
  await Promise.all([
    createService({
      title: 'judul service pertama',
      description: 'deskripsi judul service pertama',
      price: 1000000,
      authorUsername: 'irch',
      categoryName: 'Make Up',
    }),
    createService({
      title: 'judul service kedua',
      description: 'deskripsi judul service kedua',
      price: 2000000,
      authorUsername: 'irch',
      categoryName: 'Make Up',
    }),
    createService({
      title: 'judul service ketiga',
      description: 'deskripsi judul service ketiga',
      price: 3000000,
      authorUsername: 'irch_2',
      categoryName: 'Make Up',
    }),
    createService({
      title: 'judul service keempat',
      description: 'deskripsi judul service keempat',
      price: 4000000,
      authorUsername: 'irch_2',
      categoryName: 'Make Up',
    }),
  ]);

  // Create Service Portfolio
  await Promise.all([
    createServicePortfolio({
      serviceTitle: 'judul service pertama',
      url: '/images/random_image/img1.jpg',
    }),
    createServicePortfolio({
      serviceTitle: 'judul service pertama',
      url: '/images/random_image/img2.jpg',
    }),
    createServicePortfolio({
      serviceTitle: 'judul service kedua',
      url: '/images/random_image/img3.jpg',
    }),
    createServicePortfolio({
      serviceTitle: 'judul service kedua',
      url: '/images/random_image/img4.jpg',
    }),
    createServicePortfolio({
      serviceTitle: 'judul service ketiga',
      url: '/images/random_image/img5.jpg',
    }),
    createServicePortfolio({
      serviceTitle: 'judul service ketiga',
      url: '/images/random_image/img6.jpg',
    }),
    createServicePortfolio({
      serviceTitle: 'judul service keempat',
      url: '/images/random_image/img7.jpg',
    }),
    createServicePortfolio({
      serviceTitle: 'judul service pertama',
      url: '/images/random_image/img8.jpg',
    }),
  ]);

  // Create Review
  await Promise.all([
    createReview({
      rating: 5,
      response: 'Terimakasih atas jasanya! 1',
      serviceTitle: 'judul service pertama',
      reviewerUsername: 'irch',
    }),
    createReview({
      rating: 3,
      response: 'Terimakasih atas jasanyan! 1',
      serviceTitle: 'judul service pertama',
      reviewerUsername: 'irch',
    }),
    createReview({
      rating: 4,
      response: 'Terimakasih atas jasanyann! 1',
      serviceTitle: 'judul service pertama',
      reviewerUsername: 'irch',
    }),
    createReview({
      rating: 5,
      response: 'Terimakasih atas jasanya! 2',
      serviceTitle: 'judul service kedua',
      reviewerUsername: 'irch_2',
    }),
    createReview({
      rating: 5,
      response: 'Terimakasih atas jasanya! 3',
      serviceTitle: 'judul service ketiga',
      reviewerUsername: 'irch_2',
    }),
    createReview({
      rating: 5,
      response: 'Terimakasih atas jasanya! 4',
      serviceTitle: 'judul service keempat',
      reviewerUsername: 'irch_2',
    }),
  ]);

  // Create SellerResponse
  await Promise.all([
    createSellerResponse({
      reviewResponse: 'Terimakasih atas jasanya! 1',
      sellerResponse: 'Terimakasih sudah memesan!!',
    }),
  ]);
}

main()
  .catch((e) => {
    console.error('Terjadi kesalahan pada proses main:', e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('BERHASIL PUSH SEED DATABASE!!!!!!!!!!');
    await prisma.$disconnect();
  });
