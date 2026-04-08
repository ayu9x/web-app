# 🚀 Dockerized Multi-Tier CI/CD Web Application

A professional-grade, containerized web application featuring a React frontend, Node.js backend, and PostgreSQL database, orchestrated with Nginx and automated via GitHub Actions.

## 🏗️ Architecture

- **Frontend**: React (Vite) - Modern, responsive dashboard.
- **Backend**: Node.js (Express) - REST API with PostgreSQL integration.
- **Database**: PostgreSQL - Persistent data storage.
- **Proxy**: Nginx - Reverse proxy for unified port 80 access.
- **CI/CD**: GitHub Actions - Automated deployment to AWS EC2.

---

## 🛠️ Local Development

### Prerequisites
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Getting Started
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd cicd-webapp
   ```

2. Run the application:
   ```bash
   docker compose up --build
   ```

3. Open your browser:
   - **App**: `http://localhost`
   - **Backend API**: `http://localhost/api/data`
   - **Health Check**: `http://localhost/api/health`

---

## 🌩️ Deployment (CI/CD)

This project is pre-configured for automated deployment to **AWS EC2**.

### 1. GitHub Secrets Setup
Add these to your repository settings (`Settings > Secrets > Actions`):
- `EC2_HOST`: IP address of your EC2 instance.
- `EC2_USERNAME`: Usually `ubuntu` or `ec2-user`.
- `EC2_SSH_KEY`: Your `.pem` private key content.

### 2. EC2 Environment
Ensure your EC2 instance has Docker installed:
```bash
sudo apt update && sudo apt install -y docker.io docker-compose-v2
sudo usermod -aG docker ubuntu
```

### 3. Automatic Deployment
Every push to the `main` branch will automatically:
1. Build and test the project.
2. Securely transfer files to EC2 via SCP.
3. Restart containers via SSH using `docker compose up -d --build`.

---

## 📂 Project Structure

```text
├── .github/workflows/  # CI/CD Pipeline
├── backend/            # Express API & Dockerfile
├── frontend/           # React App & Dockerfile
├── nginx/              # Nginx Proxy Configuration
├── docker-compose.yml  # Container Orchestration
└── README.md           # Documentation
```

---

## 📝 License
This project is open-source and available under the MIT License.
