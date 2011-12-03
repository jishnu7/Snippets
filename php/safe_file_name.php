function safe_name($name)
{
	$SafeFile = $name; //$HTTP_POST_FILES['file']['name'];
	$SafeFile = str_replace("#", "No.", $SafeFile);
	$SafeFile = str_replace("$", "Dollar", $SafeFile);
	$SafeFile = str_replace("%", "Percent", $SafeFile);
	$SafeFile = str_replace("^", "", $SafeFile);
	$SafeFile = str_replace("&", "and", $SafeFile);
	$SafeFile = str_replace("*", "", $SafeFile);
	$SafeFile = str_replace("?", "", $SafeFile);
	return $SafeFile;
}
