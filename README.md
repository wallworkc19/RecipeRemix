# Webpage Application - Recipe Remix 

A web application that allows users to input diet restrictions, food preferences, and current foods they have to produce a list of favorable recipes.

## Setup
### Downloads
 - Windows
   - [Python3.9](https://www.python.org/ftp/python/3.9.10/python-3.9.10-amd64.exe)
   - [Nodejs](https://nodejs.org/dist/v16.13.2/node-v16.13.2-x64.msi)
 - Mac
   - [Python3.9](https://www.python.org/ftp/python/3.9.10/python-3.9.10-macos11.pkg)
   - [Nodejs](https://nodejs.org/dist/v16.13.2/node-v16.13.2.pkg)
 - Both
   - [Postgres](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
#### Python Setup
1. Clone repository by running `git clone <ssh/https url>`
2. Go into the root of the project by running `cd webpage-application-recipe-remix`
3. Run `py -m venv env` from Terminal or CMD window (if you're running a unix based system run `python -m venv env`)
   - **Windows Users**: Run `.\env\Scripts\activate`
   - **Mac Users**: Run `source ./env/bin/activate`
   
   This will create a virtual environment to separate the packages that our application requires from global packages.
4. Run `pip install -r requirements.txt` this will install all the packages required by our project

#### Nodejs Setup
1. From within the repository run `npm install` and run `npm install --global gulp-cli`
2. Run `gulp watch`
