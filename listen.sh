# listen for changes in a folder and run a command
path='test/'

if [ $1 ]
then
    path=$1
fi

while true; do
  change=$(inotifywait -r -e close_write,moved_to,create $path)
  if [ $? == 1 ]
  then
    break
  fi
  istanbul cover _mocha -- -R spec
done
