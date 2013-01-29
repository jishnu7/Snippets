#-----------------------------------------------#
# Basic
#-----------------------------------------------#

import urllib2
response = urllib2.urlopen('http://python.org/')
html = response.read()

#-----------------------------------------------#
# Passing values
#-----------------------------------------------#

import urllib
import urllib2

url = 'http://www.someserver.com/cgi-bin/register.cgi'
values = {'name': 'Jishnu',
          'location': 'Kochi',
          'language': 'Python'}

data = urllib.urlencode(values)
req = urllib2.Request(url, data)
response = urllib2.urlopen(req)
the_page = response.read()

#-----------------------------------------------#
# Header
#-----------------------------------------------#

import urllib2

url = 'http://www.someserver.com/cgi-bin/register.cgi'
headers = {'User-Agent': 'Mozilla/4.0'}

data = urllib.urlencode(values)
req = urllib2.Request(url, data, headers)
response = urllib2.urlopen(req)
the_page = response.read()


#-----------------------------------------------#
# Error handling
#-----------------------------------------------#

try:
    urllib2.urlopen(req)
except urllib2.HTTPError as e:
    print e.code
    print e.read()
