// Here 'filemanager' and 'asd' folders wont get redirected,
// all other files/folders will re-drect to 'app/webroot'

<IfModule mod_rewrite.c>
RewriteEngine on
RewriteBase /
RewriteRule ^(filemanager|asd)($|/) - [L]
RewriteRule ^$ app/webroot/    [L]
RewriteRule (.*) app/webroot/$1 [L]
</IfModule>

