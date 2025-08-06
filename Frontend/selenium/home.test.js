const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");

(async function CreatePersonButtonTextTest() {
    let driver = await new Builder()
            .forBrowser(Browser.CHROME)
            .build();
    try {
        await driver.get('http://localhost:4200');

        const createPerson = await driver.findElement(By.className('createPerson'));
        const text = await createPerson.getText();

        assert.equal(text, "Create Person");
    } catch (e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}());

(async function TitleAfterCreatePersonButtonClickedTest() {
    let driver = await new Builder()
            .forBrowser(Browser.CHROME)
            .build();
    try {
        await driver.get('http://localhost:4200');

        const createPerson = await driver.findElement(By.className('createPerson'));
        await createPerson.click();

        const title = await driver.findElement(By.css('h1'));
        const text = await title.getText();

        assert.equal(text, "Create Person");
    } catch (e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}());

(async function NewRowNameCheckAfterCreated() {
    let driver = await new Builder()
            .forBrowser(Browser.CHROME)
            .build();
    try {
        await driver.get('http://localhost:4200');

        const createPerson = await driver.findElement(By.className('createPerson'));
        await createPerson.click();

        const inputs = await driver.findElements(By.css('input'));
        await inputs[0].sendKeys('Ronaldo');
        await inputs[1].sendKeys('1337');

        const submit = await driver.findElement(By.css('button'));
        await submit.click();

        const row = await driver.findElements(By.className('name'));
        const text = await row[row.length - 1].getText();

        assert.equal(text, "Ronaldo");
    } catch (e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}());

(async function NewAgeInDetailsCheckAfterCreated() {
    let driver = await new Builder()
            .forBrowser(Browser.CHROME)
            .build();
    try {
        await driver.get('http://localhost:4200');

        const createPerson = await driver.findElement(By.className('createPerson'));
        await createPerson.click();

        const inputs = await driver.findElements(By.css('input'));
        await inputs[0].sendKeys('Ronaldo');
        await inputs[1].sendKeys('1337');

        const submit = await driver.findElement(By.css('button'));
        await submit.click();

        const details = await driver.findElements(By.className('details'));
        await details[details.length - 1].click();

        const age = await driver.findElement(By.className('age'));
        const text = await age.getText();

        assert.equal(text, "Age: 1337");
    } catch (e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}());
