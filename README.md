# 🚀 Dockerized Multi-Tier CI/CD Web Application

A professional-grade, containerized web application designed for high availability and automated deployment. This project features a React frontend, Node.js backend, and PostgreSQL database, all orchestrated via Nginx and automated with GitHub Actions for deployment to AWS EC2.

---

## 🛠️ Tools & Technologies

- **Frontend**: [React](https://reactjs.org/) (Vite) - Modern UI with premium dark-mode styling.
- **Backend**: [Node.js](https://nodejs.org/) (Express) - RESTful API with database integration.
- **Database**: [PostgreSQL](https://www.postgresql.org/) - Industry-standard relational database.
- **Reverse Proxy**: [Nginx](https://www.nginx.com/) - Unified entry point and load balancer.
- **Containerization**: [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/) - Consistent environments.
- **CI/CD Pipeline**: [GitHub Actions](https://github.com/features/actions) - Automated build, test, and deploy.
- **Cloud Hosting**: [AWS EC2](https://aws.amazon.com/ec2/) - Scalable production environment.

---

## 🏗️ Project Architecture

Our multi-tier application is structured into isolated containers for security and scalability:

- **Nginx Container**: Listens on Port 80. Routes `/api` to the Backend and `/` to the Frontend.
- **Frontend Container**: Serves the static React application.
- **Backend Container**: Handles business logic and database queries.
- **PostgreSQL Container**: Stores persistent data with an automated health check to ensure reliability.

---

## 📂 Project Structure

```text
├── .github/workflows/  # GitHub Actions Deployment Pipeline
├── backend/            # Node.js Server & Docker configuration
├── frontend/           # React App & Build configuration
├── nginx/              # Nginx Proxy routing rules
├── docker-compose.yml  # Local & Production orchestration
└── README.md           # Project Documentation
```

---

## 🚀 Getting Started (Local)

### Prerequisites
- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Run the Application
```bash
# Clone the repository
git clone https://github.com/ayu9x/web-app.git
cd web-app

# Start the cluster
docker compose up --build
```
Access the app at `http://localhost`.

---

## 🌩️ Deployment to AWS EC2

This project is configured for **Auto-Deployment**. Every push to the `main` branch triggers the GitHub Actions CI/CD pipeline.

### Required GitHub Secrets
Go to **Settings > Secrets and variables > Actions** in your repo and add:

| Secret Name | Description |
| :--- | :--- |
| `EC2_HOST` | Your EC2 Public IP address. |
| `EC2_USERNAME` | The SSH user (usually `ubuntu`). |
| `EC2_SSH_KEY` | The contents of your `.pem` private key. |

### EC2 Initial Setup
Ensure your EC2 instance is prepared with Docker:
```bash
sudo apt update && sudo apt install -y docker.io docker-compose-v2
sudo usermod -aG docker ubuntu
```

---

## 📝 License
This project is open-source and available under the MIT License.
