


class LoginObjects{
    
    get emailEdit(){return $('//input[@id="email"]')}
    get passwordEdit(){return $('//input[@id="password"]')}
    get loginBtn(){return $('//button[@id="submit"]')}
    get signUpBtn(){return $('//button[@id="signup"]')}

    async navigate() {
        try {
            await browser.url('https://thinking-tester-contact-list.herokuapp.com/');
        } catch (error) {
            console.error('Navigation failed:', error);
        }
    }
}

export default new LoginObjects()