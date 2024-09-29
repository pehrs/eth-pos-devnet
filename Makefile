reset:
	docker compose -f docker-compose-init.yaml down
	docker compose down
	sudo rm -Rf ./data

init:
	docker compose pull
	docker compose -f docker-compose-init.yaml up
	docker compose -f docker-compose-init.yaml down

start:
	docker compose up -d
