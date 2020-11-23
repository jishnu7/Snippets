zmv -n '(*)_(*)' '${1}1_$2

# -n print instead of doing operation
# -Q search for hidden files also

zmv -Q '(**/)(*).txt' '$1$2.rtf
# (**/) search in subfolders

c=1 zmv '*.txt' '$((c++)).txt'

# rename all files with a number incrementing from 1


# add number to existing file name number
c=170 zmv '(*)_(*).png' '$(($c+$1))_$2.png'
