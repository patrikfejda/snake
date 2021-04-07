#!bin/bash

cd C:/Users/patri/Desktop

git clone https://github.com/patrikfejda/snake.git

cd C:/Users/patri/Desktop/snake

rm -rf *

cp -R C:/Users/patri/Documents/FIIT/fiit/ZTIAP/snake/* C:/Users/patri/Desktop/snake/

cd C:/Users/patri/Desktop/snake/

git add .

git commit -m "GITBOT - Add new version"

git push

cd C:/Users/patri/Desktop/
rm -rf snake

echo "DONE"

read
