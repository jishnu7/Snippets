# sort, tar and compy file from remote
ssh bar 'cd /tmp/foo ; ls | sort -r | tar -cT -' | tar -xv


#ssh remote tunneling
# 9230 - remote port
# 8000 - local port
# -v   - verbose
# -nNT - no need need to go to console
ssh -v -nNT -R 9230:localhost:8000 jishnu@example.com


# bypass ssh-agent
export SSH_AUTH_SOCK=0
