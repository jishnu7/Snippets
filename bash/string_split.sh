// split "string1;string2;string3"

original=’string1;string2;string3′
part1=${original%%;*}; rest=${original#*;}
part2=${rest%%;*}; rest=${rest#*;}
part3=${rest%%;*};
