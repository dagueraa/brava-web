# Desplegar Brava en la VPS de Hostinger

Web estática (Astro). Dominio: **bravacoffee.es**.
Se sirve la carpeta **`dist/`** (ya viene construida y versionada en este repo).

---

## 0) Antes de empezar
- Tener la VPS con Ubuntu/Debian y acceso SSH (root o sudo).
- Tener comprado el dominio `bravacoffee.es` en Hostinger.
- **DNS:** en Hostinger, apuntar un registro **A** de `bravacoffee.es` y de `www` a la **IP de la VPS**.

---

## 1) Subir el sitio a la VPS

### Opción A — Clonar este repo (recomendada, sin instalar Node)
La carpeta `dist/` ya está construida en el repo, así que solo hay que clonarla y servirla.

```bash
sudo mkdir -p /var/www/bravacoffee
sudo git clone https://github.com/djcreate/brava-web.git /var/www/bravacoffee
# La web a servir está en /var/www/bravacoffee/dist
```

### Opción B — Reconstruir en la VPS (si cambiaste el código)
Requiere Node 20+.

```bash
cd /var/www/bravacoffee
npm install
npm run build     # genera /var/www/bravacoffee/dist
```

> Alternativa sin repo: construir en tu PC con `npm run build` y subir **solo el contenido de `dist/`** por SFTP a `/var/www/bravacoffee/dist`.

---

## 2) Configurar Nginx

Crear el archivo `/etc/nginx/sites-available/bravacoffee`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name bravacoffee.es www.bravacoffee.es;

    root /var/www/bravacoffee/dist;
    index index.html;

    # Compresión (sube el rendimiento notablemente)
    gzip on;
    gzip_comp_level 6;
    gzip_min_length 256;
    gzip_types text/plain text/css application/javascript application/json
               image/svg+xml application/xml application/rss+xml font/woff2;

    # Assets con hash → caché larga e inmutable
    location /_astro/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Rutas de Astro (genera /carta/index.html, etc.)
    location / {
        try_files $uri $uri/ $uri.html /404.html;
    }

    error_page 404 /404.html;
}
```

Activar el sitio y recargar:

```bash
sudo ln -s /etc/nginx/sites-available/bravacoffee /etc/nginx/sites-enabled/
sudo nginx -t          # comprobar que la config es válida
sudo systemctl reload nginx
```

En este punto ya debería verse en `http://bravacoffee.es`.

---

## 3) HTTPS (SSL gratis con Let's Encrypt)

```bash
sudo apt update
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d bravacoffee.es -d www.bravacoffee.es
```

Certbot instala el certificado, configura HTTPS y añade la **redirección http → https** automáticamente. Se renueva solo.

---

## 4) Comprobar
- Abrir **https://bravacoffee.es** en móvil y ordenador.
- Probar: botón de WhatsApp, llamar, ver la carta y el mapa.
- En **Google Search Console**: añadir la propiedad y enviar `https://bravacoffee.es/sitemap-index.xml`.

---

## 5) Actualizar la web en el futuro
1. En tu PC, editar lo que sea (normalmente `site.config.ts`).
2. `npm run build`.
3. Subir el nuevo `dist/` (o `git add . && git commit && git push`, y en la VPS `git pull`).

---

## Notas
- **No hace falta Node en el servidor** si usas la Opción A (servir el `dist/` ya construido).
- El botón de WhatsApp apunta a **658 520 040**; funcionará en cuanto ese número se registre en WhatsApp, sin tocar nada.
- Pendiente legal menor: añadir los datos del **Registro Mercantil** en `src/pages/aviso-legal.astro` (bloque `empresa` de `site.config.ts`) cuando estén disponibles.
