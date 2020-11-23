sudo ip link set wlan0 up


# Current network interface
ip r show default | awk '{print $5}'
