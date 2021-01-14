# Intera Tech Lead Case

## Setup
We assume you have nodejs and npm install
```
$ npm install
$ sls dynamodb install
```
## Running locally
It will run on http://localhost:3000/dev/graphql
```
$ sls offline start
```
## Deploy
ATTENTION: First need to change `provider.profile` property on serverless.yml file to match you AWS credential
```
$ sls deploy
```
## Remove
```
$ sls remove
```

## Making requests
You can use any GRAPHQL client, we support two queries `version` , `openJobs` and `talents`

Here examples:
```
{
  version
}
```
```
{
  openJobs {
    title
    description
    needs
    requirements
  }
}
```
```
{
  talents {
    name
    age
    linkedin
    notes
  }
}
```