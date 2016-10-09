# Spring Angular 2 Webpack

A Spring Boot application with Angular 2 frontend packaged by webpack.
It shows how to bring the nice frontend setup, as shown
[here](https://github.com/harti2006/angular2-webpack),
together with a Spring Boot backend in one single maven build. 

## Build, run

    mvn clean package
    java -jar target/angular2-webpack-spring.jar
    
Open [http://localhost:8080](http://localhost:8080) in your browser.

## Development

Run the webpack dev-server, proxies backend requests to port 8081.

    npm start

Run the backend at port 8081, e.g.:

    mvn spring-boot:run -Dserver.port=8081
