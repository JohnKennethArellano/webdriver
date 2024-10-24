import File from "./File";
import Reporter from "./reporter";

class objUtils{
    /**
     * 
     * @function clickObject | @author jkarellano_20201023
     * @description Click Object
     * @param {Object} objElement 
     * @returns <none>
     */

    async clickObject(objElement){
        const strXpath = await objElement.selector
        await Reporter.addLog('Starting Function: clickObject')
        await objElement.waitForExist();
        await objElement.click();
        await Reporter.addLog(`Executed Function : ${strXpath}\n\n`)
    }

    async setObjValue(objElement, strText){
        await Reporter.addLog("Starting Function: setObjValue")
        await objElement.waitForExist();
        await objElement.setValue(strText);
        const strXpath = await objElement.selector
        await Reporter.addLog(`Completed Function: getObjectText - Object [${strXpath}] Text [${strText}]`)
    }


    async getObjectText(objElement){
        await Reporter.addLog("Starting Function: getObjectText")
        await objElement.waitForExist()
        const strText = objElement.getText()
        const strXpath = await objElement.selector
        await Reporter.addLog(`Completed Function: getObjectText - Object [${strXpath}] Text [${strText}]`)
        return strText
    }

    async getObjectValue(objElement){
        await objElement.waitForExist()
        return objElement.getValue()
    }
}

export default new objUtils();