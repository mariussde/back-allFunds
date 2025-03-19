# API de Noticias

API REST para gestionar noticias con Node.js, Express y MongoDB.

## Configuración Rápida

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd backend
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo `.env` en la raíz del proyecto:
```env
PORT=5000
MONGODB_URL= tu url de mongodb
```

4. Iniciar el servidor:
```bash
npm run dev
```

## Endpoints Disponibles

- `POST /api/news` - Crear nueva noticia
- `GET /api/news` - Obtener todas las noticias activas
- `GET /api/news/archived` - Obtener noticias archivadas
- `PUT /api/news/:id/archive` - Archivar una noticia
- `DELETE /api/news/:id` - Eliminar una noticia

## Colección Postman

Se incluye un archivo `postman.json` con todos los endpoints configurados para pruebas rápidas en postman. 
