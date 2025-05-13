up:
	docker-compose up -d --build

down:
	docker-compose down

restart:
	docker-compose down && docker-compose up -d --build

logs:
	docker-compose logs -f

ps:
	docker-compose ps

migrate:
	npm run typeorm migration:run --prefix apps/api

seed:
	npm run seed --prefix apps/api

start:
	npm run start:dev --prefix apps/api
