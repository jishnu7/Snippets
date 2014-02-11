# Using bitlbee with HipChat

## Initial setup


 * account add jabber USERNAME@chat.hipchat.com 'PASSWORD'
 * account hipchat set nick_source full_name
 * account hipchat set resource bot
 * account hipchat on

## Listings

 * For nicks /join &hipchat
 * Get the jabber room number from https://www.hipchat.com/account/xmpp

## Using HipChat rooms

 * Get the jabber room number from https://www.hipchat.com/account/xmpp
 * chat add hipchat XMPP_ROOM@conf.hipchat.com #ANY_CHANNEL_NAME
 * channel #ANY_CHANNEL_NAME set nick "HIPCHAT NICK"
 * /join #ANY_CHANNEL_NAME

# References

 * http://help.hipchat.com/knowledgebase/articles/64377-xmpp-jabber-support-details
 * http://jasongarber.com/blog/2012/05/18/connecting-to-hipchat-from-irc
 * http://treehouseagency.com/blog/steven-merrill/2011/12/15/using-hipchat-through-irc-client-bitlbee
