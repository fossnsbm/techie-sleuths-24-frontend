echo "Welcome to the Docker Command Line Interface"
echo "-----------------------------------------"

if [ "$1" == "build" ]; then
    docker build -f Dockerfile -t techie-sleuths-frontend .
    elif [ "$1" == "run" ]; then
    docker run -it -p 3000:3000 techie-sleuths-frontend
    elif [ "$1" == "help" ]; then
    echo "build: builds the docker image"
    echo "run: runs the docker image"
else
    echo "Please enter a valid command"
fi