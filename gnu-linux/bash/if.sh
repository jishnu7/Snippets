if [ "foo" = "foo" ]; then
   echo expression evaluated as true
elif [ "foo" = "bar" ]; then
   echo else if
else
   echo expression evaluated as false
fi
