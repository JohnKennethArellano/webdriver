import File from "./File";
import Reporter from "./reporter";

class objUtils {
    /**
     * Click an object
     * @param {Object} objElement 
     */
    async clickObject(objElement) {
        const strXpath = await objElement.selector;
        await Reporter.addLog('Starting Function: clickObject');
        await objElement.waitForExist();
        await objElement.click();
        await Reporter.addLog(`Executed Function: ${strXpath}\n\n`);
    }

    /**
     * Set value of an object
     * @param {Object} objElement 
     * @param {string} strText 
     */
    async setObjValue(objElement, strText) {
        await Reporter.addLog("Starting Function: setObjValue");
        await objElement.waitForExist();
        await objElement.setValue('');
        await objElement.setValue(strText);
        const strXpath = await objElement.selector;
        await Reporter.addLog(`Completed Function: setObjValue - Object [${strXpath}] Text [${strText}]`);
    }

    /**
     * Get text of an object
     * @param {Object} objElement 
     * @returns {string}
     */
    async getObjectText(objElement) {
        await Reporter.addLog("Starting Function: getObjectText");
        await objElement.waitForExist();
        const strText = await objElement.getText();
        const strXpath = await objElement.selector;
        await Reporter.addLog(`Completed Function: getObjectText - Object [${strXpath}] Text [${strText}]`);
        return strText;
    }

    /**
     * Get value of an object
     * @param {Object} objElement 
     * @returns {string}
     */
    async getObjectValue(objElement) {
        await objElement.waitForExist();
        return await objElement.getValue();
    }

    
}

export default new objUtils();
