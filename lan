# static ip

ip link set eth0 up
ip addr add 192.168.1.2/24 broadcast 192.168.1.255 dev eth0
ip route add default via 192.168.1.1

# Incase last one failed
ip route add 192.168.1.1 dev eth0
ip route add default via 192.168.1.1 dev eth0

# cleanup
ip addr flush dev eth0
ip route flush dev eth0
