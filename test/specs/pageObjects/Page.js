


class Page{
    get contactNameEdit(){return $('//input[@id="et_pb_contact_name_1"]')}
    get contactMessageEdit(){return $('//textarea[@id="et_pb_contact_message_1"]')}
    get captchaEdit(){return $('//input[@name="et_pb_contact_captcha_1"]')}
    get submitBtn(){return $('/html/body/div[1]/div/div/div/article/div/div/div/div/div[2]/div[2]/div/div[2]/form/div/button')}
    get successElm(){return $('//div[@class="et-pb-contact-message"]/ul/li')}

    async navigate() {
        await browser.url(`https://ultimateqa.com/filling-out-forms/`)
    }
}

export default new Page()