<h1 align="center">
    Aloco 💘 Word Wide Video Chat
</h1>

Our goal is to build application that will organize peoples in the web in way of connecting their minds.
We tend to improve user experience by using the newest AI technologies and modern design
that will create safe and creative environment.

<p>
    <img src="https://cdn.dribbble.com/users/1925451/screenshots/6618101/image_4x.jpg?resize=1600x1200&vertical=center" alt="Icebreaker">
</p>

# Stack

**Core:** [Next.js](https://nextjs.org), [SurrealDB](https://surrealdb.com/), [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) 💕 [Peer.js](https://peerjs.com/)

**Deployment:** [Docker](https://www.docker.com) 💕 [Docker Compose](https://docs.docker.com/compose/)

**Testing:** [Node Test Runner](https://nodejs.org/api/test.html) 💕 [Node Assertions](https://nodejs.org/api/assert.html), [Playwright](https://playwright.dev/docs/intro)

**CI/CD:** [GitHub Actions](https://docs.github.com/en/actions), [Digital Ocean](https://www.digitalocean.com)

# Starting Point

The First step, as always, is to install dependencies.
Run these commands one by one in your terminal.

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew install nvm
nvm install 21

npm i
```
<br />
The second step is to install environment services with which the application will interact.

```shell
# Install Docker and Docker Compose where our services will be run
brew install --cask docker && brew install docker-compose

# Deploy Surreal DB in development mode
make deploy-dev-surrealdb

# Create environment file
cp .env.example .env.local

# Run migration that will prepare database
make db-build
make db-migrate
```

<br />

The last step is to start the application in development mode.

```shell
npm run dev
```

# Deployment

```shell
# Build and Push docker images
make build && make push

# Connect to the server via ssh or any other way that recommended by your hosting provider
ssh root@<server_ip>

# Clone repository
git clone <repository>

# Pull and Run docker images
make deploy-prod
```

# Contribution

All feature tasks are described in [Issues](https://github.com/Looport/Aloco/issues) and
grouped in [Milestones](https://github.com/Looport/Aloco/milestones).
For any help or information, contact with our team.

## Links

- [Application Concept (Draft)](https://dormammun.notion.site/Product-Concept-01c721c64cbc4060aa768d5fb97faeb4?pvs=4)
- [Design](https://www.figma.com/file/kjHb3gcPDZ9wHmQle0474n/Untitled?type=design&node-id=0-1&mode=design&t=xiiu4bSlGt9aF3g5-0)