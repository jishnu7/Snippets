import functools

def debug(level, text):
    print "%s: %s" % (level, text)

info = functools.partial(debug, "INFO")
error = functools.partial(debug, "ERROR")

info("running")
error("stopped")
