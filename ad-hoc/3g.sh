iptables --flush
iptables --table nat --flush
iptables --delete-chain
iptables --table nat --delete-chain

ifconfig wlan0 10.42.0.254
echo 1 > /proc/sys/net/ipv4/ip_forward
systemctl restart dnsmasq
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

