const { Builder } = require('selenium-webdriver');

/**
 * URL del Hub de Selenium Grid. 
 * Asumimos que Docker Compose levantará el Hub en este puerto.
 */
const SELENIUM_HUB_URL = 'http://127.0.0.1:4444/wd/hub';

/**
 * Función que configura e instancia el WebDriver para Chrome.
 * @returns {WebDriver} Una instancia del WebDriver configurada.
 */
async function initializeChromeDriver() {
    console.log('🔗 Intentando conectar con Selenium Grid Hub en:', SELENIUM_HUB_URL);
    
    // 1. Uso del Builder para construir la instancia del WebDriver
    const driver = await new Builder()
        // 2. Especificar la URL del servidor remoto (Selenium Grid Hub)
        .usingServer(SELENIUM_HUB_URL)
        // 3. Establecer las 'capabilities' deseadas para solicitar Chrome
        .forBrowser('chrome')
        // 4. Construir la instancia del driver
        .build();

    console.log('✅ WebDriver de Chrome instanciado exitosamente.');
    
    return driver;
}

// Exportar la función para que pueda ser utilizada en los archivos de prueba.
module.exports = {
    initializeChromeDriver,
    SELENIUM_HUB_URL // También exportamos la URL por si se necesita externamente
};