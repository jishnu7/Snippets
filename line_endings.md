// search for windows line endings
find . -not -type d -exec file "{}" ";" | grep CRLF 

// vim
set ff=unix
