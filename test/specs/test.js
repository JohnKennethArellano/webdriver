import Page from "./pageObjects/Page"
import objUtils from "./objUtils/objUtils"
import Reporter from "./objUtils/reporter"

describe('My Login application', () => {
    it('FILLING SAMPLE FIELDS', async () => {
        await Reporter.addLog('Navigate to ultimate qa website')
        await Page.navigate()

        await Reporter.addLog('User Fill up Contact Name')
        await objUtils.setObjValue(Page.contactNameEdit, "test")

        await Reporter.addLog('User Fill up Mesage')
        await objUtils.setObjValue(Page.contactMessageEdit, "test")

        await Reporter.addLog('User Fill up Captcha')
        await objUtils.setObjValue(Page.captchaEdit, 1)

        await Reporter.addLog('User Click Submit')
        await objUtils.clickObject(Page.submitBtn)

        await expect(Page.successElm).toHaveText('You entered the wrong number in captcha.')
    })
})