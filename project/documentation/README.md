# Kinesis Code Exercise API - OpenAPI Specification

## PROJECT INFORMATION

Swagger documentation of Kinesis Code Exercise API. 

## USAGE

- Starts the development server: `npm start`
- Bundles the spec and prepares web_deploy folder with static assets: `npm run build`
- Validates the spec: `npm test`
- Validates the npm libraries version: `npm run check`
- Deploys docs to GitHub Pages: `npm run gh-pages`
- Run swagger-repo scripts locally: `npm run swagger-repo`
- Run webserver locally to see final documentation: `npm run web-server`
- Generate API libraries: `npm run generate-lib`
- Generate API library for typescript/angular: `npm run generate-lib-angular`
- Generate API library for java/android: `npm run generate-lib-android`
- Generate API server implementation for nodejs: `npm run generate-server-nodejs`

## DOCUMENTATION

You can create the following folders here:

- `schemas` - reusable [Schema Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#schemaObject)
- `responses` - reusable [Response Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#responseObject)
- `parameters` - reusable [Parameter Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#parameterObject)
- `examples` - reusable [Example Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#exampleObject)
- `headers` - reusable [Header Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#headerObject)
- `requestBodies` - reusable [Request Body Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#requestBodyObject)
- `links` - reusable [Link Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#linkObject)
- `callbacks` - reusable [Callback Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#callbackObject)
- `securitySchemes` - reusable [Security Scheme Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#securitySchemeObject)

## LINKS

- [Reference Documentation (ReDoc)](https://ravimosharksas.github.io/apis/client/documentation)
- OpenAPI Raw Files: [JSON](https://ravimosharksas.gitlab.io/apis/client/documentation/openapi.json) [YAML](https://ravimosharksas.gitlab.io/apis/client/documentation/openapi.yaml)

## CONTRIBUTING

Contributions to this repository are very welcome.

To contribute, please fork this repository on GitLab and send a pull request with a clear description of your changes. If appropriate, please ensure that the user documentation in this README is updated.

If you have submitted a PR and not received any feedback for a while, feel free to [ping me on Twitter](https://twitter.com/patoperpetua) [or find me on facebook](https://www.facebook.com/patoperpetua)

## TODO

- [ ] Config client libraries on commit.
- [ ] Upload html documentation to gitlab pages.
- [ ] Upload html documentation to servers.
- [ ] Setup Github actions.
- [X] Split swagger.yaml into multiple files.
- [X] Use [ReDoc](https://github.com/Redocly/redoc) documentation framework.
- [ ] Generate postman files from specification [link](https://github.com/postmanlabs/openapi-to-postman).

----------------------

© [Singleton SD](https://www.singletonsd.com.au), Australia, 2020.
