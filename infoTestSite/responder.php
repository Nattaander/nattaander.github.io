<?php

header("Access-Control-Allow-Origin: *");

  	function get_client_ip() {
		$ipaddress = $_SERVER['REMOTE_ADDR'];
		return $ipaddress;
	}

	echo get_client_ip();
	echo "echos";
?>