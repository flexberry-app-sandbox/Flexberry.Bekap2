docker build --no-cache -f SQL\Dockerfile.PostgreSql -t bekap_2-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t bekap_2-java/app ../../..
