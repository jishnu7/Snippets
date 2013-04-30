ifconfig wlan0 down

iptables --flush
iptables --table nat --flush
iptables --delete-chain
iptables --table nat --delete-chain

iwconfig wlan0 mode Ad-Hoc
iwconfig wlan0 essid Jishnu
iwconfig wlan0 channel auto
iwconfig wlan0 key restricted 1234-5678-90
iwconfig wlan0 key on
ifconfig wlan0 up 192.168.0.254 netmask 255.255.255.0
echo 1 > /proc/sys/net/ipv4/ip_forward

/etc/rc.d/dnsmasq restart

iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
