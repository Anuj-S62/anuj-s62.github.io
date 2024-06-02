<?php
$directory = '../blogs/';
$files = array_diff(scandir($directory), array('..', '.'));

$blogs = array_values(array_filter($files, function($file) {
    return pathinfo($file, PATHINFO_EXTENSION) === 'md';
}));

header('Content-Type: application/json');
echo json_encode($blogs);
?>
