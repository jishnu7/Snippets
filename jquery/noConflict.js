// Use this for '$ is not a function'
 
j = jQuery.noConflict();  
$j(document).ready(function() {  
   $j("a").click(function() {  
     alert("Hello world!");  
   });  
 }); 
