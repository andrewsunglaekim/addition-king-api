
seed:
	cat db/migrations/*.sql | psql -d addition-king
	cat db/*.sql | psql -d addition-king
