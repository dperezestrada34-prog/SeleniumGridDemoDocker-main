const { By, until } = require('selenium-webdriver');
const { initializeChromeDriver } = require('../config/webdriver-simple-config'); // <--- 1. Importación de la función
const assert = require('assert');

// Credenciales de prueba
const USERNAME = 'standard_user';
const PASSWORD = 'secret_sauce';
const URL = 'https://www.saucedemo.com/';

describe('Sauce Demo Login Test', function() {
    this.timeout(60000); // Aumentado a 60 segundos para dar más tiempo a la conexión
    let driver;

    // Ejecuta esto ANTES de cualquier prueba (it)
    before(async function() {
        // <--- 2. Aquí es donde se llama la función
        // Llama a la función centralizada para obtener el driver
        driver = await initializeChromeDriver(); 
    });

    // Ejecuta esto DESPUÉS de todas las pruebas
    after(async function() {
        // Cerrar el navegador
        if (driver) {
            await driver.quit();
        }
    });

    it('Debería iniciar sesión correctamente con credenciales válidas', async function() {
        // 3. El resto de la prueba utiliza el 'driver' instanciado en 'before'
        
        await driver.get(URL);

        // Ingresar credenciales
        await driver.findElement(By.id('user-name')).sendKeys(USERNAME);
        await driver.findElement(By.id('password')).sendKeys(PASSWORD);
        
        // Clic en el botón de login
        await driver.findElement(By.id('login-button')).click();

        // Verificar éxito
        await driver.wait(until.urlIs('https://www.saucedemo.com/inventory.html'), 10000);
        
        const inventoryHeader = await driver.findElement(By.className('title'));
        const headerText = await inventoryHeader.getText();
        
        assert.strictEqual(headerText, 'Products', 'El login no fue exitoso.');
        
        console.log(`✅ Prueba exitosa: Se inició sesión.`);
    });
});