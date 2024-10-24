


class SignUpObjects{
    
    get firstNameEdit(){return $('//input[@id="firstName"]')}
    get lastNameEdit(){return $('//input[@id="lastName"]')}
    get emailEdit(){return $('//input[@id="email"]')}
    get passwordEdit(){return $('//input[@id="password"]')}
    
    get submitBtn(){return $('//button[@id="submit"]')}
    get cancelBtn(){return $('//button[@id="cancel"]')}

}

export default new SignUpObjects()