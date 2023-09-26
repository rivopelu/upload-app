import { diskStorage } from 'multer';

export const multerConfig = {
  dest: './uploads', // The directory where uploaded files will be stored
  storage: diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads'); // Set the destination directory for the uploaded files
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(
        null,
        file.fieldname +
          '-' +
          uniqueSuffix +
          '.' +
          file.originalname.split('.').pop(),
      );
    },
  }),
};
