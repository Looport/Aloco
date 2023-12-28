##############
### COMMON ###
##############
build:
	docker compose -f ./deployment/compose.yaml build

push:
	docker compose -f ./deployment/compose.yaml push

pull:
	docker compose -f ./deployment/compose.yaml pull

##############
### DEPLOY ###
##############
prod-start:
	docker compose -f ./deployment/compose.yaml up -d

##########
### DB ###
##########
db-start:
	docker compose -f ./deployment/compose.yaml -f ./deployment/compose.dev.yaml up -d surrealdb

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