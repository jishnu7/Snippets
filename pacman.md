# find the package which owns the file.
pacman -Qo /path/to/file

# clear package cache
pacman -Sc
pacman -Scc

# orphans
pacman -Qdt
pacman -Rs $(pacman -Qtdq)

#packages
pacman -Qt # t- packages not required by any package
pacman -Qlh vi # lists all files associated with a package.
pacman -Qi linux # info about a package

#packages are taking up the most space
pacsysclean

#install package from tar.xz
pacman -U file.tar.xz

# compile packages
makepkg
