# show the progress of dd

sudo kill -USR1 $(pgrep '^dd')
dd if=/dev/urandom | pv | dd of=/dev/null

# bootable usb
dd bs=4M if=ubuntu-16.04.iso of=/dev/sdd status=progress && sync
