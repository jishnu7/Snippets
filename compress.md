# Zip
zip -r archive_name.zip directory_to_compress
unzip archive_name.zip

# Tar
tar -cvf archive_name.tar directory_to_compress # create
tar -xvf archive_name.tar.gz # untar
tar -xvf archive_name.tar -C /tmp/extract_here/ # untar to specific folder
tar -xvf cleanfiles.sh.tar cleanfiles.sh # untar single file
tar -tvf file.tar # list files
tar -rvf file.tar directory # append to existing file

# Tar.gz
tar -zcvf archive_name.tar.gz directory_to_compress
tar -zxvf archive_name.tar.gz

# Tar.bz2
tar -jcvf archive_name.tar.bz2 directory_to_compress
tar -jxvf archive_name.tar.bz2 -C /tmp/extract_here
