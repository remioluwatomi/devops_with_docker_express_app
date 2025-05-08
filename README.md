## express app

This project containerize an Express.js app, set up automatic Docker builds with GitHub Actions, and use Watchtower to auto-deploy updates.

---

## 🚀 Features

- Dockerized Express.js application
- CI/CD pipeline using GitHub Actions
- Automatic image builds and pushes to Docker Hub
- Watchtower-based auto-deployment

---

## 🛠 Project Structure

- `Dockerfile` – Container definition for the Express app
- `docker-compose.yml` – Multi-container setup with Watchtower
- `.github/workflows/main.yml` – GitHub Actions workflow for CI/CD

---

## 📦 Docker Compose

This Compose file spins up:
- `express_app` running your app image
- `watchtower` to monitor and auto-update the container when a new image is pushed

## Start the app with:

```shell
docker compose up -d
```

Access with browser http://localhost:3000
