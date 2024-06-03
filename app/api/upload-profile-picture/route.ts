// import { NextResponse } from 'next/server';
// import { v2 as cloudinary } from 'cloudinary';
// import { db } from '@/lib/db';

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export async function POST(request: Request) {
//   const formData = await request.formData();
//   const file = formData.get('file') as File;
//   const userId = formData.get('userId') as string;

//   if (!file || !userId) {
//     return NextResponse.json({ error: 'Missing file or user ID' }, { status: 400 });
//   }

//   // Convert the file to a format suitable for Cloudinary upload
//   const buffer = Buffer.from(await file.arrayBuffer());
//   const fileName = `${userId}-${file.name}`;

//   const uploadResult = await new Promise((resolve, reject) => {
//     cloudinary.uploader.upload_stream({ folder: 'profile_pictures', public_id: fileName }, (error, result) => {
//       if (error) return reject(error);
//       resolve(result);
//     }).end(buffer);
//   });

//   await db.user.update({
//     where: { id: userId },
//     data: { image: (uploadResult as any).secure_url },
//   });

//   return NextResponse.json({ url: (uploadResult as any).secure_url });
// }




import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { db } from '@/lib/db';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  const userId = formData.get('userId') as string;

  if (!file || !userId) {
    return NextResponse.json({ error: 'Missing file or user ID' }, { status: 400 });
  }

  // Retrieve the current image URL from the database
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { image: true },
  });

  if (user?.image) {
    // Extract the public ID of the current image
    const publicId = user.image.split('/').slice(-1)[0].split('.')[0];
    
    // Delete the current image from Cloudinary
    await cloudinary.uploader.destroy(`profile_pictures/${publicId}`, (error, result) => {
      if (error) {
        console.error('Error deleting old image:', error);
      } else {
        console.log('Old image deleted successfully:', result);
      }
    });
  }

  // Convert the file to a format suitable for Cloudinary upload
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${userId}-${file.name}`;

  const uploadResult = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({ folder: 'profile_pictures', public_id: fileName }, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    }).end(buffer);
  });

  await db.user.update({
    where: { id: userId },
    data: { image: (uploadResult as any).secure_url },
  });

  return NextResponse.json({ url: (uploadResult as any).secure_url });
}
