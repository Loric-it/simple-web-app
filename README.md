##### Hello guyssssssssssssssssssssss, you are welcome!!!!!!!!!!!!!

## Description of this little project
This project is a simple web server NodeJs which serves a dynamic web site that contains a button.
When you will press this green button, a text will appear according to javascript file located at ./src/

## Commands to test this web server
npm install
npm test

# Commands to build docker image of this web server
docker build -t loriclannister/simple-web-app:latest .
docker push loriclannister/simple-web-app:latest