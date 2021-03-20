## Comandos docker

- `docker build -t <image_tag> .`: Construye una imagen desde un archivo `Dockerfile` en la carpeta actual
- `docker run <image_tag>`: Ejecuta la imagen en un contenedor
  Flags:
  - `-e PORT=3001`: Configura la variable de entorno `PORT` al valor `3001`
  - `--init`: Arranca el contenedor con un mini sitema de inicio
  - `-it`: Modo interactivo. Permite `stdin`
- `docker ps`: Ver todos los contenedores docker corriendo en el sistema
- `docker kill <container_id>`: Mata un contendor docker
- `docker images`: Ver todas las imagenes docker descargadas

## Helpers

- Stop all containers: `docker kill $(docker ps -q)`
- Remove all containers: `docker rm $(docker ps -a -q)`
- Remove all docker images: `docker rmi $(docker images -q)`

## Tips

✅ Crear el archivo `.dockerignore` y poner alli los `node_modules`

Arrancar con node permite capturar las señales `SIGTERM` y `SIGINT`
✅ `CMD [ "node", "server.js" ]`

No arrancar el servidor con, `npm` capturará `SIGTERM` y `SIGINT`:
❌ `CMD [ "npm", "start" ]`

Arrancar el contenedor docker con la variable de entorno `NODE_ENV` configurada
✅ `-e "NODE_ENV=production"`

Arrancar el contenedor con los flags `--init -it`:
✅ `docker run --init -it demo_image`

Flags para `docker run` que configuran el maximo de memoria RAM usada por el contenedor:
✅ `-m "300M" --memory-swap "1G"`

## Distribuciones de la imagen `node` en dockerhub

- `node:alpine` Usa una distro mas ligera [https://alpinelinux.org/]
- `node:latest` Usa por defecto debian stretch [https://www.debian.org/releases/stretch/]

## Referencias

- https://docs.docker.com/engine/reference/builder/
- https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md
- https://devcenter.heroku.com/articles/container-registry-and-runtime
- https://hub.docker.com/_/node
