const { Builder, By, Browser, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

let driver;

const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--headless');

describe('person app integration tests', function () {
  this.timeout(30000); 

  beforeEach(async () => {
    driver = await new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeOptions(chromeOptions)
      .build();
    await driver.get('http://localhost:4200');
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('should display "Create Person" on the button', async () => {
    const createPerson = await driver.wait(until.elementLocated(By.className('createPerson')));
    const text = await createPerson.getText();
    assert.equal(text, "Create Person");
  });

  it('should show title after Create Person button is clicked', async () => {
    const createPerson = await driver.wait(until.elementLocated(By.className('createPerson')));
    await createPerson.click();

    const title = await driver.wait(until.elementLocated(By.css('h1')), 5000);
    const text = await title.getText();

    assert.equal(text, "Create Person");
  });

  it('should add a new row with name after creation', async () => {
    const createPerson = await driver.wait(until.elementLocated(By.className('createPerson')));
    await createPerson.click();

    const inputs = await driver.wait(until.elementsLocated(By.css('input')));
    await inputs[0].sendKeys('Ronaldo');
    await inputs[1].sendKeys('1337');

    const submit = await driver.wait(until.elementLocated(By.css('button')));
    await submit.click();

    const row = await driver.wait(until.elementsLocated(By.className('name')));
    const text = await row[row.length - 1].getText();

    assert.equal(text, "Ronaldo");
  });

  it('should show correct age in details after person is created', async () => {
    const createPerson = await driver.wait(until.elementLocated(By.className('createPerson')));
    await createPerson.click();

    const inputs = await driver.wait(until.elementsLocated(By.css('input')));
    await inputs[0].sendKeys('Ronaldo');
    await inputs[1].sendKeys('1337');

    const submit = await driver.wait(until.elementLocated(By.css('button')));
    await submit.click();

    const details = await driver.wait(until.elementsLocated(By.className('details')));
    await details[details.length - 1].click();

    const age = await driver.wait(until.elementLocated(By.className('age')));
    const text = await age.getText();

    assert.equal(text, "Age: 1337");
  });
});
