const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");

(async function Test() {
    let driver = await new Builder()
            .forBrowser(Browser.CHROME)
            .build();
    try {
        await driver.get('http://localhost:4200');

        const createPerson = await driver.findElement(By.className('createPerson'));
        createPerson.click();

        const title = await driver.findElement(By.css('h1'));
        assert.equal("Create Person", title.getText());
    } catch (e) {
        console.log(e)
    } finally {
        await driver.quit();
    }
}())
