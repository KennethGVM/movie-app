# Movie App

Estoy desarrollando esta aplicación móvil de películas con React Native como parte de mi proceso de aprendizaje. La idea es poner en práctica y mostrar mis habilidades mientras avanzo en el curso de React Native.

## Objetivos de aprendizaje

- Construir interfaces móviles con React Native y Expo.
- Organizar pantallas y navegación con Expo Router.
- Escribir código tipado con TypeScript.
- Aplicar estilos con NativeWind.
- Consumir la API de The Movie Database (TMDB) y adaptar sus respuestas al modelo de la aplicación.

## Tecnologías

- React Native
- Expo
- Expo Router
- TypeScript
- NativeWind
- Axios
- The Movie Database (TMDB)

## Empezar

Instala las dependencias:

```bash
pnpm install
```

Crea un archivo `.env` a partir de `.env.template` y configura las variables de TMDB:

```env
EXPO_PUBLIC_MOVIE_DB_URL=https://api.themoviedb.org/3/movie
EXPO_PUBLIC_MOVIE_DB_KEY=tu_api_key
```

Puedes obtener una API key en [la configuración de tu cuenta de TMDB](https://www.themoviedb.org/settings/api). No compartas ni subas tu archivo `.env` al repositorio.

Inicia Expo:

```bash
pnpm start
```

## Estado

El proyecto está en desarrollo. Estoy construyéndolo paso a paso como práctica del curso y para seguir fortaleciendo mis conocimientos de React Native.
