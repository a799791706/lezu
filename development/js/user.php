<?php
    header("Content-type: text/html; charset=utf-8");/*php文件以utf-8编码格式输出*/
    error_reporting(E_ALL & ~E_DEPRECATED);/*忽略错误提示*/
    $act=$_GET['act'];
    @$user=$_GET['user'];
    @$pass=$_GET['pass'];

    switch($act){
        case 'lgn':
            mysql_connect('localhost','root','');
            mysql_select_db('2017-07-06');
            $sql="SELECT * FROM user WHERE phone='".$user."'";
            $res=mysql_query($sql);
			$row=mysql_fetch_row($res);
            if($row){
                if($row[1]==$pass){
                    echo '{err:0, msg:"登录成功"}';
                }else{
                    echo '{err:1,msg:"用户名或者密码错误!"}';
                }
            }else{
                echo '{err:1,msg:"用户名不存在"}';
            }
        break;

        case 'add':
            mysql_connect('localhost','root','');
            mysql_select_db('2017-07-06');
            $sql="SELECT * FROM user WHERE phone='".$user."'";
            $res=mysql_query($sql);
			$row=mysql_fetch_row($res);
            if($row){
                echo '{err:1,msg:"用户名已存在!"}';
            }else{
                 $I_SQL="INSERT INTO user VALUES('".$user."','".$pass."')";
                 mysql_query($I_SQL);
                 echo '{err:0,msg:"注册成功!"}';
            }
    };
?>