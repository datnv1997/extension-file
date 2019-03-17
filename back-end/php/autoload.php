<?php
        //chú ý: tên class phải đặt theo dạng folder1_folder2_class.php
        spl_autoload_register(function ($class) {
            $exp = str_replace("_","/",$class);
            include_once ($_SERVER['DOCUMENT_ROOT'].'/test/'.$exp. '.php');//test là tên project
        });
?>