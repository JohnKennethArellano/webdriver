import AllureReporter from "@wdio/allure-reporter";
import File from "./File";

class Reporter {
    async addLog(strMsg){
        await File.AppendToFile(global.strPath, strMsg)
        await AllureReporter.addStep(strMsg);
    }
    async addStep(){

    }


}

export default new Reporter()