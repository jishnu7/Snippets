iptables --flush
iptables --table nat --flush
iptables --delete-chain
iptables --table nat --delete-chain

ifconfig eth0 192.168.0.254
echo 1 > /proc/sys/net/ipv4/ip_forward
/etc/rc.d/dnsmasq restart
iptables -t nat -A POSTROUTING -o ppp0 -j MASQUERADE

