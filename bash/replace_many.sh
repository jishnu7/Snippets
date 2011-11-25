// Replace a string with another in many files at once.
// 'i' for case insensitivity

for f in *.php; 
do 
	sed 's/old_text/new_text/i' < "$f" > "$f.new"; 
done
