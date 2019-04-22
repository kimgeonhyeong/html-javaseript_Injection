    <?php
    $ID = "yellow_0r_green";
    $Password = "WhyNOT";
    error_reporting(E_ALL);
    ini_set("display_errors", 1);
    if(strcmp($_GET["ID"], $ID) != 0) {
      ?> <script type="text/javascript">
        alert("아이디와 비밀번호를 확인 후 다시 로그인 해 주세요.");
        window.history.back(-1);
      </script>
      <?php
    }
    else if (strcmp($_GET["PASSWORD"], $Password) != 0) {
      ?>
      <script type="text/javascript">
        alert("아이디와 비밀번호를 확인 후 다시 로그인 해 주세요.");
        window.history.back(-1);
      </script>
      <?php
    }
    else {
      ?>
      <script type="text/javascript">
      if (document.cookie=="ao53846i2d2z63") {
        alert("관리자가 아닙니다.");
        window.history.go(-1);
      }
      else {
        alert("관리자님 환영합니다.");
        location="project.html";
      }
      </script>
      <?php
    }
    ?>
