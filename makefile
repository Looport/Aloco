##############
### COMMON ###
##############
build:
	docker compose build

push:
	docker compose push

pull:
	docker compose pull

##############
### DEPLOY ###
##############
prod-start:
	docker compose up -d

##########
### DB ###
##########
db-start:
	docker compose up -d surrealdb

db-migrate:
	npm run script -- src/database/migrations/init.ts

db-remove:
	npm run script -- src/database/migrations/init.ts