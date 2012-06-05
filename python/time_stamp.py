'''
Generate unix time stamp.
Pass number of days/time to add
'''

def timestamp():
    days=0,minutes=0,seconds=0, 
    date = datetime.datetime.now()+datetime.timedelta(days,minuites,seconds)
    return date.strftime('%s')
