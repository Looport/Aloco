# Images

build:
	docker compose -f ./deployment/compose.yaml build

push:
	docker compose -f ./deployment/compose.yaml push

pull:
	docker compose -f ./deployment/compose.yaml pull

# Development

deploy-dev:
	docker compose -f ./deployment/compose.yaml -f ./deployment/compose.dev.yaml up -d

deploy-dev-surrealdb:
	docker compose -f ./deployment/compose.yaml -f ./deployment/compose.dev.yaml up -d surrealdb

# Production

deploy-prod:
	docker compose -f ./deployment/compose.yaml up -d

deploy-prod-surrealdb:
	docker compose -f ./deployment/compose.yaml up -d surrealdb

# Database

db-build:
	if [ -d dist/database ]; then \
		rm -r dist/database; \
	fi
	npx tsc src/database/**/* --outDir dist/database

db-migrate:
	if [ -f .env.local ]; then \
	  node --env-file=.env.local dist/database/migrations/init.js; \
	else \
	  node dist/database/migrations/init.js; \
	fi
	echo "Migration completed"

db-clear:
	if [ -f .env.local ]; then \
	  node --env-file=.env.local dist/database/scripts/clear-db.js; \
	else \
	  node dist/database/scripts/clear-db.js; \
	fi
	echo "Database cleared"