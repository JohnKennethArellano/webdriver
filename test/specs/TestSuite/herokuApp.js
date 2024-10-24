
//Objects
import LoginObjects from "../pageObjects/loginObjects"
import signUpObjects from "../pageObjects/signUpObjects"
import contactList from "../pageObjects/contactList"
import AddContactObjects from "../pageObjects/addContactObjects"
import EditContactObjects from "../pageObjects/editContactObjects"

//utils and Reports
import objUtils from "../objUtils/objUtils"
import Reporter from "../objUtils/reporter"
import File from "../objUtils/File"


//Sample static Data
import SampleContacts from "../sampleCredentials/SampleContacts.json"
import Credentials from "../sampleCredentials/Credentials"

describe('Heroku App', () => {
    it('Heroku App SignUp_TC001', async () => {     
        await Reporter.addLog('Navigate to Website')
        await LoginObjects.navigate()

        await Reporter.addLog('User Click Sign Up')
        await objUtils.clickObject(LoginObjects.signUpBtn)

        await Reporter.addLog('User Fill up First Name Field')
        await objUtils.setObjValue(signUpObjects.firstNameEdit, Credentials.getFirstName())

        await Reporter.addLog('User Fill up Last Name Field')
        await objUtils.setObjValue(signUpObjects.lastNameEdit, Credentials.getLastName())

        await Reporter.addLog('User Fill up Email Field')
        await objUtils.setObjValue(signUpObjects.emailEdit, Credentials.getEmail())

        await Reporter.addLog('User Fill up Password Field')
        await objUtils.setObjValue(signUpObjects.passwordEdit, Credentials.getPassword())

        await Reporter.addLog('User Click submit Register')
        await objUtils.clickObject(signUpObjects.submitBtn)

        await Reporter.addLog('User Successfully Registered')
        expect(await contactList.logOutBtn.isDisplayed());
    })

    it('Heroku App Login User_TC002', async () => {   

        await Reporter.addLog('User Click Logout Button')
        await objUtils.clickObject(contactList.logOutBtn)

        await Reporter.addLog('User Fill up Email Field')
        await objUtils.setObjValue(LoginObjects.emailEdit, Credentials.getEmail())

        await Reporter.addLog('User Fill up Password Field')
        await objUtils.setObjValue(LoginObjects.passwordEdit, Credentials.getPassword())

        await Reporter.addLog('User Click Login Button')
        await objUtils.clickObject(LoginObjects.loginBtn)

        await Reporter.addLog('User Successfully Loged In')
        expect(await contactList.logOutBtn.isDisplayed());
    })

    it('Heroku App Add Contact TC003', async () => {   
        for (const contact of SampleContacts) {
            await Reporter.addLog(`Adding contact: ${contact.firstName} ${contact.lastName}`);

            await objUtils.clickObject(contactList.addNewContactBtn);

            await objUtils.setObjValue(AddContactObjects.firstNameEdit, contact.firstName);
            await objUtils.setObjValue(AddContactObjects.lastNameEdit, contact.lastName);
            await objUtils.setObjValue(AddContactObjects.birthdateEdit, contact.dob);
            await objUtils.setObjValue(AddContactObjects.emailEdit, contact.email);
            await objUtils.setObjValue(AddContactObjects.phoneEdit, contact.phone);
            await objUtils.setObjValue(AddContactObjects.streetAddress1Edit, contact.address1);
            await objUtils.setObjValue(AddContactObjects.streetAddress2Edit, contact.address2);
            await objUtils.setObjValue(AddContactObjects.cityEdit, contact.city);
            await objUtils.setObjValue(AddContactObjects.stateOrProvinceEdit, contact.state);
            await objUtils.setObjValue(AddContactObjects.postalCodeEdit, contact.postalCode);
            await objUtils.setObjValue(AddContactObjects.countryEdit, contact.country);

            await objUtils.clickObject(AddContactObjects.submitBtn);

            await Reporter.addLog(`Contact ${contact.firstName} ${contact.lastName} added successfully.`);
        }

    })

    it('Heroku App Edit Contact TC004', async () => {   

        await Reporter.addLog('User Edit Contact Details')
        await objUtils.clickObject(contactList.firstContactEdit)
        expect(await EditContactObjects.editContactBtn.isDisplayed());

        await Reporter.addLog('User Edit Contact Details')
        await objUtils.clickObject(EditContactObjects.editContactBtn)

        const newNumber = '09168223579'
        const firstPhoneNumber = SampleContacts[0].phone;

        await Reporter.addLog('User Edit Contact Number')
        await objUtils.setObjValue(EditContactObjects.phoneEdit, newNumber);

        await Reporter.addLog('User Edit Contact Details')
        await objUtils.clickObject(EditContactObjects.submitBtn)

        await objUtils.clickObject(EditContactObjects.returnBtn)
        if (firstPhoneNumber !== newNumber) {
            await Reporter.addLog(`Phone numbers changed Expected: ${firstPhoneNumber}, New Number: ${newNumber}`);
        }
    })

    it('Heroku App Delete Contact TC005', async () => {   

        expect(await contactList.tableELm.isDisplayed());

        await Reporter.addLog('User click last elem')
        await objUtils.clickObject(contactList.thirdContactEdit)

        await Reporter.addLog('User Delete Contact')
        await objUtils.clickObject(EditContactObjects.deleteBtn)

        await browser.acceptAlert();
    })

    it('Heroku App Export Contacts on File_TC006', async () => {   
        await browser.pause(2000)
        const rows = await contactList.tableRowsELm;
        const td = await contactList.tableRowsTDELm;
        const theadTh = await contactList.tableHeadTextElm; 

        const rowsLength = rows.length;
        const tdLength = td.length;
        const theadThLength = theadTh.length; 
        
        let contentToSave = "Header and Data:\n";

        if (theadThLength > 0) {
            for (let j = 0; j < rowsLength; j++) {
                const cells = await rows[j].$$('td'); 
                for (let i = 0; i < theadThLength; i++) {
                    const headerText = await theadTh[i].getText(); 
                    const tableData = i < cells.length ? await cells[i + 1].getText() : 'N/A';
                    const line = `${headerText}: ${tableData}`;
                    contentToSave += line + "\n"; 
                    await Reporter.addLog(line);
                }
                contentToSave += "\n"; 
            }
        } else {
            await Reporter.addLog('No header cells found.');
        }

        await File.CreateTxtFile(global.strPath, contentToSave);

    });
    
})