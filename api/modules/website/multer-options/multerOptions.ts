import multer from 'multer';
const s = multer.diskStorage({
  destination: '../public/',
  filename: (req, file, cb) => {
    const randomName = Array(32)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');
    cb(null, `${randomName}${file.originalname}`);
  },
});

export const multerOptions = {
  storage: s,
  limits: { fileSize: 1024 * 1024 },
};
