# more info: https://wiki.archlinux.org/index.php/Dm-crypt/Device_encryption

# format the device
cryptsetup -v luksFormat /dev/sdx

# dump header
cryptsetup luksDump /dev/sdx

# map
cryptsetup luksOpen /dev/sdx name

# zero (random data) fill
dd if=/dev/zero of=/dev/mapper/name bs=1M

# create partition
mkfs.ext4 /dev/mapper/name

# mount
mount -t ext4 /dev/mapper/name /mnt

# unmount and close
umount /mnt
cryptsetup luksClose

