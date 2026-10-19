# Movie App

Aplicación móvil de películas desarrollada con React Native y Expo. Permite explorar películas y consultar información detallada y el reparto, usando datos de [The Movie Database (TMDB)](https://www.themoviedb.org/).

Este proyecto se completó como práctica del curso de React Native y reúne los conceptos y funcionalidades que quería implementar.

## Funcionalidades

- Pantalla de inicio con un carrusel de películas en cartelera.
- Listas de películas populares, mejor valoradas y próximas a estrenarse.
- Carga paginada de películas mejor valoradas al desplazarse por la lista.
- Vista de detalle con sinopsis, puntuación, géneros, presupuesto y reparto.
- Contenido y consultas a TMDB en español (México).

## Tecnologías

- React Native y Expo SDK 57
- Expo Router
- TypeScript
- NativeWind
- TanStack Query
- Axios
- React Native Reanimated Carousel
- The Movie Database (TMDB)

## Requisitos

- Node.js
- pnpm
- Una API key de TMDB

## Instalación y ejecución

1. Clona el repositorio y entra en la carpeta del proyecto.
2. Instala las dependencias:

   ```bash
   pnpm install
   ```

3. Copia `.env.template` como `.env` y agrega tu API key de TMDB:

   ```env
   EXPO_PUBLIC_MOVIE_DB_URL=https://api.themoviedb.org/3/movie
   EXPO_PUBLIC_MOVIE_DB_KEY=tu_api_key
   ```

   Puedes solicitar una API key desde [la configuración de tu cuenta de TMDB](https://www.themoviedb.org/settings/api). No subas tu archivo `.env` al repositorio.

4. Inicia Expo:

   ```bash
   pnpm start
   ```

También puedes iniciar directamente el proyecto en una plataforma:

```bash
pnpm android
pnpm ios
pnpm web
```

## Validaciones

```bash
pnpm lint
pnpm exec tsc --noEmit
```

## Estructura del proyecto

- `src/app/`: rutas y pantallas de Expo Router.
- `presentation/`: componentes de interfaz y hooks de consultas.
- `core/actions/`: acciones para obtener películas y reparto.
- `core/api/`: cliente HTTP de TMDB.
- `infrastructure/`: interfaces de datos y mapeadores de respuestas.
- `config/`: utilidades de configuración y formato.
