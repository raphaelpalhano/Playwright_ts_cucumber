import fs from 'fs';
import path from 'path';

export const removeFiles = (pathFile: string) => {
  fs.readdir(pathFile, async (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(pathFile, file), (err) => {
        if (err) throw err;
      });
    }
  });
};
