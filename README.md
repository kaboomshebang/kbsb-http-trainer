# kbsb-http-trainer

A Node app that serves some routes and renders EJS templates. The routes explain all the important HTTP specs. ~~The protocol specifications data is fetched from an Airtable database~~.

Learn about HTTP while creating a simple Node/Express API. Browse to [http-trainer.kbsb.app](https://http-trainer.kbsb.app) and read the source code of this project for an understanding of the protocol and how to use it.

- [X] Deploy to `http-trainer.kbsb.app`
- [ ] Setup SSL
- [ ] Add feature: store data in Airtable

## Semantic versioning with Git tags

This project loosely follows the [semver](https://semver.org/) `major.minor.patch` versioning system. You can follow the development process by jumping from Git-tag to -tag. Note: the versions are not stored in `package.json`.

## Deploy on AWS Elastic Beanstalk

Install the `awsebcli` tool and setup the AWS credentials.

```sh
# create environment
eb init

# create application without load-balancer
eb create --single

# deploy changes
eb deploy

# open URL
eb open # only works on local machines

# or, get instance URL
eb status | grep CNAME
```
