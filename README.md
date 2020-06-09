# Special Group Frontend
React Implementation of **Special Group** web app.

## Table of contents
- [Pre-requisites](#prerequisites)
- [Running it locally](#running-it-locally)
- [Eslint and Prettier](#eslint-and-prettier)
- [Creating Your First PR](#creating-your-first-pr)

## Pre-requisites
If you want to setup node and run the application in your host os.
- [Yarn >= v1](https://yarnpkg.com/en/docs/install)
[we are using yarn as primary package manager.]

### Running it locally

```
/**
  If you want to clone the repo using https use https://github.com/shakyasaijal/specialgroup-frontend.git instead.
*/
sh
$ git clone git@github.com:shakyasaijal/specialgroup-frontend.git 
$ cd specialgroup-frontend/
```
Pull the dependencies and start the server.

``` sh
$ yarn
$ yarn start
```

Browse: http://localhost:3000

### Eslint and Prettier
For the default eslint config we are using [eslint-config-leapfrog/react](https://github.com/leapfrogtechnology/eslint-config-leapfrog).
More info on the eslint config that we are using can be found on [ES Lint Configuration](https://github.com/phil-inc/phil-us/blob/master/.eslintrc) 

For viewing the lint related issues, run the following command.
```sh
$ yarn eslint
```

For fixing the lint related issues run the following command:
```sh
$ yarn eslint:fix

For fixing the formatting related issues run the following command:
```sh
$ yarn prettier:fix
```

For fixing the both lint and prettier related issues run the following command:
```sh
$ yarn lint:fix
```

Running this command will fix most of the lint related issues. Some of the issues might have to be fixed manually. 
You can find the issues that are automatically fixed and the issues that require manual fixing after executing the above command.

### Creating Your First PR

##### Create a new branch
```sh
$ git checkout -b <YOUR_BRANCH_NAME>
```
Make the necessary changes, fix the lint related issues and commit to the branch that you just created.
```sh
$ yarn lint:fix
$ git add .
$ git commit -m <YOUR_COMMIT_MESSAGE>
$ git push -u origin <YOUR_BRANCH_NAME>
```

[Note: Pre commit hook is installed so unless lint and prettier auto fix or a programmer themselves fixes formatting related issues, commit can't be made.]
