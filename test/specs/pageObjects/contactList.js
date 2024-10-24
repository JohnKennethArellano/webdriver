


class ContactListObjects{
    get logOutBtn(){return $('//button[@id="logout"]')}
    get addNewContactBtn(){return $('//button[@id="add-contact"]')}
    get tableELm(){return $('//table')}
    get tableHeadElm() { return $('//thead/tr'); }
    get tableHeadTextElm() { return $$('//thead/tr/th'); }
    get tableRowsELm(){return $$('//table/tr')}
    get tabletdELm(){return $$('/td')}
    get tableRowsTDELm(){return $$('//table/tr[1]/td')}
    get firstContactEdit(){return $('//table/tr[1]/td[2]')}
    get thirdContactEdit(){return $('//table/tr[3]/td[2]')}
}

export default new ContactListObjects()