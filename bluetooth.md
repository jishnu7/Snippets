# Bluez5 is only supported by PulseAudio and not by ALSA.

# Loading
modprobe btusb
systemctl start bluetooth

# Unblock
rfkill list
rfkill unblock <id>

# Connecting
bluetoothctl

  power on
  agent on
  default-agent
  scan on
  pair 00:1D:43:6D:03:26
  connect 00:1D:43:6D:03:26

  scan off
  exit

# set output
pavucontrol
