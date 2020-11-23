<IfModule mod_rewrite.c>
RewriteCond %{HTTP_HOST} ^blog.thecodecracker.com [NC]
RewriteRule ^([^/]+)/([^/]+) http://blog.j15h.nu/$2 [R=301,L]
RewriteRule ^(.*)$ http://blog.j15h.nu/$1 [L,R=301,NC]
</IfModule>
