# Log
heroku logs --tail --remote staging

# run bash
heroku run bash --remote staging

# Restart
heroku restart --remote staging

# Restart just a process
heroku ps:restart worker --remote production
