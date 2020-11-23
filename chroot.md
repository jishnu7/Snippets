sudo mount /dev/sda5 /mnt

sudo mount --bind /dev /mnt/dev
sudo mount --bind /sys /mnt/sys
sudo mount --bind /proc /mnt/proc

sudo chroot /mnt

sudo update-grub
