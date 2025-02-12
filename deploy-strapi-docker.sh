#!/bin/bash

# Konfigurasi
IMAGE_NAME="strapi-app"
CONTAINER_NAME="strapi-container"
PORT="1337"

echo "=== Deploy Strapi dengan Docker ==="

# Pastikan Docker terinstal
if ! command -v docker &> /dev/null; then
  echo "Error: Docker tidak ditemukan. Pastikan sudah terinstal!"
  exit 1
fi

# Hentikan dan hapus container lama jika ada
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "Menghentikan container lama..."
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi

# Build image dari Dockerfile
echo "Membangun image Docker..."
docker build -t $IMAGE_NAME .

# Jalankan container Strapi tanpa database eksternal
echo "Menjalankan container Strapi..."
docker run -d --name $CONTAINER_NAME -p $PORT:1337 \
  -e NODE_ENV=production \
  $IMAGE_NAME

echo "Strapi berjalan di http://localhost:$PORT"

echo "Menghapus docker tidak terpakai..."
docker system prune -a -f
