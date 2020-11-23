def truncate(s):
    ''' Function to trucate long string in a nicer way '''
    charmax = 120
    suffix ="..."
    length = len(s)

    if(length <= charmax):
        return s
    else:
        # return string to nearest 'space'
        end = s.rfind(' ',0,charmax-3)
        return s[0:end] + suffix
