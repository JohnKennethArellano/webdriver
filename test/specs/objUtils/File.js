import fs from 'fs'
import moment from 'moment'
class File {
    // function to create a text file
    async CreateTxtFile(strPath, strText) {

        const strDateTime = moment(new Date()).format('dddd, MMMM Do YYYY HH:mm:ss')


        await fs.writeFile(`${strPath}.txt`, `[${strDateTime}] - ${strText}`, async (err)=> {
            if (err) throw err
        })
    }

    // function to append to a file
    async AppendToFile(strPath, strText) {

        const strDateTime = moment(new Date()).format('dddd, MMMM Do YYYY HH:mm:ss')


        await fs.appendFile(`${strPath}.txt`, `\n[${strDateTime}] - ${strText}`, {flag: 'a+'}, async (err)=> {
            if (err) throw err
        })
    }
}

export default new File()