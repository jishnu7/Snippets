#build package
makepkg -Acs
# update checksum
updpkgsums
# update srcinfo
makepkg --printsrcinfo > .SRCINFO
#install
pacman -U x.pkg.tar.xz
