# Selenium Grid Demo con Docker

Este documento resume los comandos esenciales para levantar la infraestructura y ejecutar las pruebas.

## 1. Instalación de Dependencias
Antes de empezar, instala las librerías de Node.js (Selenium Webdriver y Mocha).

```bash
npm install
```

## 2. Gestión del Grid (Docker)
Estos comandos controlan el ciclo de vida de Selenium Grid.

**Levantar el Grid:**
Inicia el Hub y el nodo de Chrome en segundo plano.
```bash
docker-compose up -d
```

**Escalar Nodos:**
Aumenta el número de navegadores Chrome disponibles (ej. 3 instancias) para paralelismo.
```bash
docker-compose up -d --scale chrome=3
```

**Detener el Grid:**
Apaga y elimina los contenedores y redes creadas.
```bash
docker-compose down
```

## 3. Ejecución de Pruebas
Ejecuta los scripts de prueba ubicados en la carpeta `tests` utilizando Mocha.

```bash
npm test
```

## 4. Acceso al Dashboard
Una vez levantado el Grid, puedes ver el estado de los nodos en: http://localhost:4444

## 5. Ver Pruebas en Vivo (Live View)
Para ver lo que hace el navegador en tiempo real mientras corren los tests:
1. Abre tu navegador y ve a: **http://localhost:7900**
2. Haz clic en **Connect** (la contraseña está deshabilitada).