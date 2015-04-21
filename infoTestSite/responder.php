<!DOCTYPE html>
<html lang="en">
  <head>
  <?php
  function get_client_ip() {
    $ipaddress = $_SERVER['REMOTE_ADDR'];
    return $ipaddress;
}
  ?>
  </head>
<body>
<?php
echo get_client_ip();
echo "echos";
?>
</body>
</html>