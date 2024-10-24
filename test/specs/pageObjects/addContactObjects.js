


class AddContactObjects{
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
    get submitBtn(){return $('//button[@id="submit"]')}
    get cancelBtn(){return $('//button[@id="cancel"]')}
}

export default new AddContactObjects()