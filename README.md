# weather-api

Build a weather API that fetches and returns weather data.

https://roadmap.sh/projects/weather-api-wrapper-service

https://roadmap.sh/api-design

## 3rd party weather service

https://www.visualcrossing.com/weather-api/

## Requisitos de roadmap.sh

- utilizar una 3rd party weather service
- cachear la respuesta utilizando redis usando el city code como key
- utilizar el mecanismo de redis de limpieza de cache (utilizar una variable de entorno para configurarlo)
- Gestionar errores de 3rd partu weather service como que la API está caida o el city code no es valido.
- Implementación del rate-limiting

## Requisitos añadidos por mi

- Utilizar express 5 como framework de backend
- Utilizar testing e2e con supertest
- Utilizar typescript para codificar
- Usar docker para las imagenes y docker-compose
- utilizar github actions para asegurar la calidad del código.
-
