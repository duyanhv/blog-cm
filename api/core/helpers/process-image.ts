import * as jimp from 'jimp';

const processImage = async (
  filePath: string,
  newFileName: string,
): Promise<void> => {
  const image = await jimp.read(filePath);

  image
    .resize(240, jimp.AUTO)
    .quality(80)
    .write(newFileName);
};

export default processImage;
