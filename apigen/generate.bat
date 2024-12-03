@echo off

REM Download the swagger.json from the specified URL
set swaggerUrl=https://localhost:44378/swagger/v1/swagger.json
set outputPath=spec.json

REM Use curl to download the swagger.json file
curl -o %outputPath% %swaggerUrl%

REM Run openapi-generator-cli to generate the API client in typescript with only relevant files
openapi-generator-cli generate -i %outputPath% -g typescript-fetch -o ../src/components/api

pause
