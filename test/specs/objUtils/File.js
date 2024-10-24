import fs from "fs";
import moment from "moment";

class File {

  async CreateTxtFile(strPath, strText) {
    const strDateTime = moment(new Date()).format(
      "dddd, MMMM Do YYYY HH:mm:ss"
    );

    await fs.writeFile(
      `${strPath}.txt`,
      `[${strDateTime}] - ${strText}`,
      async (err) => {
        if (err) throw err;
      }
    );
  }

  // function to append to a file
  async AppendToFile(strPath, strText) {
    const strDateTime = moment(new Date()).format(
      "dddd, MMMM Do YYYY HH:mm:ss"
    );

    await fs.appendFile(
      `${strPath}.txt`,
      `\n[${strDateTime}] - ${strText}`,
      { flag: "a+" },
      async (err) => {
        if (err) throw err;
      }
    );
  }

  async deleteFolderContents(strFolder) {
    const arrDir = await fs.readdirSync(strFolder);
    for (const strFile of arrDir){
        await fs.unlinkSync(`${strFolder}/${strFile}`)
    }
  }
}

export default new File();

