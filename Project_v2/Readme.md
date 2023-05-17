COMO FOI FEITO ESTE PROJECTO

Criar o arquivo packege
### npm init


Instalar todas as dependencias indicada pelo package.json
### npm install

Iniciar o projeto
### node app.js


SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Sequelize é uma biblioteca Javascript que facilita o gerenciamento do banco de dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados
### npm install --save mysql2

Sequelize-cli interface de linha de comando usada para criar modelos, configurações e arquivos de migração para bancos de dados
### npm install --save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config
### npx sequelize-cli init


Manipular variaveis de ambiente
### npm install --save dotenv

Sequelize <command>

Commands:
  ### npx sequelize db:migrate                        Run pending migrations

  ### sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps

  ### sequelize db:migrate:status                 List the status of all migrations

  ### sequelize db:migrate:undo                   Reverts a migration

  ### sequelize db:migrate:undo:all               Revert all migrations ran

  ### sequelize db:seed                           Run specified seeder

  ### sequelize db:seed:undo                      Deletes data from the database

  ### sequelize db:seed:all                       Run every seeder

  ### sequelize db:seed:undo:all                  Deletes data from the database

  ### sequelize db:create                         Create database specified by configuration

  ### sequelize db:drop                           Drop database specified by configuration

  ### sequelize init                              Initializes project

  ### sequelize init:config                       Initializes configuration

  ### sequelize init:migrations                   Initializes migrations

  ### sequelize init:models                       Initializes models

  ### sequelize init:seeders                      Initializes seeders

  ### sequelize migration:generate                Generates a new migration file      [aliases: migration:create]

  ### sequelize model:generate                    Generates a model and its migration [aliases: model:create]

  ### sequelize seed:generate                     Generates a new seed file 

criar migration 
### npx sequelize-cli migration:generate --name create-users

Executar migrations

### npx sequelize-cli db:migrate


Criar a model users

### npx sequelize-cli model:generate --name Users --attributes name:string,email:string,image:string

Gerencia as requesicoesa, rotas e urls, entre outras funcionalidades

### npm install --save express 

Iniciar a app
### node app.js

Instalar a dependencia de forma global, "-g" significa globalmente. Executar o comando atrves do prompt de comando, executar somente se nunca instalou a dependencia anteriormente na maquina, apos instalar, reniciar o pc

### npm  install -g nodemon

Instalar a dependencia como desenvolvidor para reniciar o servidor sempre que houver alteracao no codigo fonte.

### npm install --save-dev nodemon


Para instalar o swagger-jsdoc usamos o comando 

### npm install swagger-jsdoc --save

Para instalar o swaggerUI usamos o comando 

### npm install swagger-ui-express
 
PARRA INICIAR O PROJECTO TEM DE SER POR VIA DE CONTENRIZACAO UTILIZANDO O DOCKER ONDE TEM-SE DE UTILIZAR O SEGUINTE COMANDO:

### Docker compose up -d

OBS: SE CARREGAR O DOCKER PELA SEGUNDA VEZ TEM DE APAGAR O FICHEI .MIGRATION_EXEC...


