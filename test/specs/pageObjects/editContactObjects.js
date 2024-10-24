


class EditContactObjects{
    
    get firstNameEdit(){return $('//input[@id="firstName"]')}
    get lastNameEdit(){return $('//input[@id="lastName"]')}
    get birthdateEdit(){return $('//input[@id="birthdate"]')}
    get emailEdit(){return $('//input[@id="email"]')}
    get phoneEdit(){return $('//input[@id="phone"]')}
    get streetAddress1Edit(){return $('//input[@id="street1"]')}
    get streetAddress2Edit(){return $('//input[@id="street2"]')}
    get cityEdit(){return $('//input[@id="city"]')}
    get stateOrProvinceEdit(){return $('//input[@id="stateProvince"]')}
    get postalCodeEdit(){return $('//input[@id="postalCode"]')}
    get countryEdit(){return $('//input[@id="country"]')}

    get editContactBtn(){return $('//button[@id="edit-contact"]')}
    get submitBtn(){return $('//button[@id="submit"]')}
    get returnBtn(){return $('//button[@id="return"]')}
    get deleteBtn(){return $('//button[@id="delete"]')}

}

export default new EditContactObjects()