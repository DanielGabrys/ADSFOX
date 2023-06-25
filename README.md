# Recrutation task

## RUNNING

### BACKEND:

install dependencies

> composer update

set up Laravel .env file with database credentials

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=DATABASE_NAME
DB_USERNAME=DB_USER
DB_PASSWORD=DB_PASSWORD

```


run migration
> php artisan migrate


run project on host 8001:
> php artisan serve --host=localhost --port=8081

or choose another one but then setup react .env file: canals/.env
> REACT_APP_API_HOST=HOST_NAME/api/



### FRONTEND:

> cd Canals

> npm install

> npm start
