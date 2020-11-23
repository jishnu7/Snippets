grep 'GET / ' localhost.access.log.2.gz |  awk '{print $1}' | sort -n | uniq | xargs -I {} curl 'ipinfo.io/{}'
