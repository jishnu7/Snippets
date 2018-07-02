# Auto select last boot entry in grub2

# Detect other os
install os-prober

# /etc/default/grub
GRUB_DEFAULT=saved
GRUB_SAVEDEFAULT=true

# update
sudo grub-mkconfig -o /boot/grub/grub.cfg
# ubuntu
sudo update-grub


# Arch
# install grub uefi
grub-install --target=x86_64-efi --efi-directory=/boot/ --bootloader-id=GRUB

# make config
sudo grub-mkconfig -o /boot/grub/grub.cfg
