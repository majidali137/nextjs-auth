// "use client"
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useUserStore } from '@/hooks/useUserStore';
// import { UploadIcon } from "@radix-ui/react-icons";
// import { toast } from 'sonner';
// // import { toast } from 'react-toastify';

// interface UploadProfilePictureProps {
//   userId: string;
// }

// export const UploadProfilePicture: React.FC<UploadProfilePictureProps> = ({ userId }) => {
//   const [file, setFile] = useState<File | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0); // State for tracking upload progress
//   const { refreshUser } = useUserStore();

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = event.target.files?.[0] || null;
//     setFile(selectedFile);
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     setLoading(true);

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('userId', userId);

//     try {
//       const response = await axios.post('/api/upload-profile-picture', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//         onUploadProgress: (progressEvent) => {
//           if (progressEvent.total) {
//             const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//             setUploadProgress(percentCompleted); // Update upload progress
//           }
//         },
//       });
//       console.log('Image uploaded successfully:', response.data.url);
//       setLoading(false);
//       refreshUser(); // Refresh user data to get the new image
//       toast.success('Image uploaded successfully!');
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       setLoading(false);
//       toast.error('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div onClick={(e) => e.stopPropagation()}>
//       <input type="file" onChange={handleFileChange} className='flex text-lg  cursor-pointer' />
//       <button onClick={handleUpload} disabled={loading || !file} className='cursor-pointer py-3 flex gap-2 items-center'>
//         <UploadIcon /> <span>{loading ? `Uploading... ${uploadProgress}%` : 'Upload'}</span>
//       </button>
//       {loading && (
//         <div style={{ width: '100%', backgroundColor: '#f3f3f3', marginTop: '10px' }}>
//           <div
//             style={{
//               width: `${uploadProgress}%`,
//               height: '5px',
//               backgroundColor: '#4caf50',
//               transition: 'width 0.3s',
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };



// "use client"
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useUserStore } from '@/hooks/useUserStore';
// import { UploadIcon } from "@radix-ui/react-icons";
// import { toast } from 'sonner';

// interface UploadProfilePictureProps {
//   userId: string;
// }

// export const UploadProfilePicture: React.FC<UploadProfilePictureProps> = ({ userId }) => {
//   const [file, setFile] = useState<File | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0); // State for tracking upload progress
//   const { refreshUser } = useUserStore();

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = event.target.files?.[0] || null;
//     setFile(selectedFile);
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     setLoading(true);
//     setUploadProgress(0); // Reset upload progress

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('userId', userId);

//     try {
//       const response = await axios.post('/api/upload-profile-picture', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//         onUploadProgress: (progressEvent) => {
//           if (progressEvent.total) {
//             const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//             setUploadProgress(percentCompleted); // Update upload progress
//           }
//         },
//       });
//       console.log('Image uploaded successfully:', response.data.url);
//       setLoading(false);
//       refreshUser(); // Refresh user data to get the new image
//       toast.success('Image uploaded successfully!');
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       setLoading(false);
//       toast.error('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div onClick={(e) => e.stopPropagation()}>
//       <input type="file" onChange={handleFileChange} className='flex text-lg  cursor-pointer' />
//       <button onClick={handleUpload} disabled={loading || !file} className='cursor-pointer py-3 flex gap-2 items-center'>
//         <UploadIcon /> <span>{loading ? `Uploading... ${uploadProgress}%` : 'Upload'}</span>
//       </button>
//       {loading && (
//         <div style={{ width: '100%', backgroundColor: '#f3f3f3', marginTop: '10px' }}>
//           <div
//             style={{
//               width: `${uploadProgress}%`,
//               height: '5px',
//               backgroundColor: '#4caf50',
//               transition: 'width 0.3s',
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };


// "use client"
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useUserStore } from '@/hooks/useUserStore';
// import { UploadIcon } from "@radix-ui/react-icons";
// import { toast } from 'sonner';

// interface UploadProfilePictureProps {
//   userId: string;
// }

// export const UploadProfilePicture: React.FC<UploadProfilePictureProps> = ({ userId }) => {
//   const [file, setFile] = useState<File | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0); // State for tracking upload progress
//   const { refreshUser } = useUserStore();

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = event.target.files?.[0] || null;
//     if (selectedFile) {
//       if (selectedFile.size > 2 * 1024 * 1024) {
//         toast.error('File size must be less than 2MB');
//         return;
//       }
//       if (!selectedFile.type.match(/image\/(jpeg|jpg|png|gif)/)) {
//         toast.error('Only JPEG, JPG, PNG, and GIF image files are allowed');
//         return;
//       }
//       setFile(selectedFile);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     setLoading(true);
//     setUploadProgress(0); // Reset upload progress

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('userId', userId);

//     try {
//       const response = await axios.post('/api/upload-profile-picture', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//         onUploadProgress: (progressEvent) => {
//           if (progressEvent.total) {
//             const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//             setUploadProgress(percentCompleted); // Update upload progress
//           }
//         },
//       });
//       console.log('Image uploaded successfully:', response.data.url);
//       setLoading(false);
//       refreshUser(); // Refresh user data to get the new image
//       toast.success('Image uploaded successfully!');
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       setLoading(false);
//       toast.error('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div onClick={(e) => e.stopPropagation()}>
//       <input type="file" accept="image/jpeg,image/jpg,image/png,image/gif" onChange={handleFileChange} className='flex text-lg cursor-pointer' />
//       <button onClick={handleUpload} disabled={loading || !file} className='cursor-pointer py-3 flex gap-2 items-center'>
//         <UploadIcon /> <span>{loading ? `Uploading... ${uploadProgress}%` : 'Upload'}</span>
//       </button>
//       {loading && (
//         <div style={{ width: '100%', backgroundColor: '#f3f3f3', marginTop: '10px' }}>
//           <div
//             style={{
//               width: `${uploadProgress}%`,
//               height: '5px',
//               backgroundColor: '#4caf50',
//               transition: 'width 0.3s',
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };



"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useUserStore } from '@/hooks/useUserStore';
import { toast } from 'sonner';

interface UploadProfilePictureProps {
  userId: string;
}

export const UploadProfilePicture: React.FC<UploadProfilePictureProps> = ({ userId }) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0); // State for tracking upload progress
  const { refreshUser } = useUserStore();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    if (selectedFile) {
      if (selectedFile.size > 2 * 1024 * 1024) {
        toast.error('File size must be less than 2MB');
        return;
      }
      if (!selectedFile.type.match(/image\/(jpeg|jpg|png|gif)/)) {
        toast.error('Only JPEG, JPG, PNG, and GIF image files are allowed');
        return;
      }
      setFile(selectedFile);
      await handleUpload(selectedFile); // Automatically upload the file after selection
    }
  };

  const handleUpload = async (file: File) => {
    setLoading(true);
    setUploadProgress(0); // Reset upload progress

    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', userId);

    try {
      const response = await axios.post('/api/upload-profile-picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted); // Update upload progress
          }
        },
      });
      console.log('Image uploaded successfully:', response.data.url);
      setLoading(false);
      refreshUser(); // Refresh user data to get the new image
      toast.success('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      setLoading(false);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <input type="file" accept="image/jpeg,image/jpg,image/png,image/gif" onChange={handleFileChange} className='hidden' id="file-upload" />
      <label htmlFor="file-upload" className='cursor-pointer py-3 flex gap-2 items-center'>
       <span className='border border-1 px-8 py-3 rounded-full font-semibold'>{loading ? `Uploading... ${uploadProgress}%` : 'Change your Avatar'}</span>
      </label>
      {loading && (
        <div style={{ width: '100%', backgroundColor: '#f3f3f3', marginTop: '10px' }}>
          <div
            style={{
              width: `${uploadProgress}%`,
              height: '5px',
              backgroundColor: '#4caf50',
              transition: 'width 0.3s',
            }}
          />
        </div>
      )}
    </div>
  );
};
