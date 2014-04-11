# lists all services that need to be restarted.
# got it from http://askubuntu.com/questions/444702/how-to-patch-the-heartbleed-bug-cve-2014-0160-in-openssl
sudo find /proc -maxdepth 2 -name maps -exec grep -HE '/libssl\.so.* \(deleted\)' {} \; | cut -d/ -f3 | sort -u | xargs --no-run-if-empty ps uwwp
