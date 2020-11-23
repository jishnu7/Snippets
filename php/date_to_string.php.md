<?php

// Covert mysql timestamp to human readable date format 
// eg: '2011-11-24 01:19:51' to '24 Nov 2011'

function date_to_string($str) {
	$date = $str;
	$date = explode(" ", $date);
	$explodedate = explode("-", $date[0]);
	$year = $explodedate[0];
	$month = $explodedate[1];
	$day = $explodedate[2];
	if ($month == 01) { $month1 = 'Jan'; }
	if ($month == 02) { $month1 = 'Feb'; }
	if ($month == 03) { $month1 = 'Mar'; }
	if ($month == 04) { $month1 = 'April'; }
	if ($month == 05) { $month1 = 'May'; }
	if ($month == 06) { $month1 = 'Jun'; }
	if ($month == 07) { $month1 = 'Jul'; }
	if ($month == 08) { $month1 = 'Aug'; }
	if ($month == 09) { $month1 = 'Sep'; }
	if ($month == 10) { $month1 = 'Oct'; }
	if ($month == 11) { $month1 = 'Nov'; }
	if ($month == 12) { $month1 = 'Dec'; }
	return $day. ". ".$month1.". ".$year;
}

?>
