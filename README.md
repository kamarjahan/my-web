<!DOCTYPE html>
<html>
<head>
  <title>MY PROFILE</title>
</head>
<body>
  <h1>MY PROFILE</h1>
  <p>Name: KAMAR JAHAN</p>
  <p>Age: 15</p>
  <p>Occupation: IAM A STUDENT</p>
  <p>FATHER NAME: MAJEED</p>
  <p>MOTHER NAME: KHAIRUNNISSA</p>
  <p>SCHOOL: I E M H S S</p>
  <p>CLASS: VIII</p>
  <p>GITHUB PAGE: <a href="http://github.com/kamarjahan">KAMARJAHAN</a> </p>
  <p>HOBBY: MAKE PROGRAM AND OTHERS</p>
  
<button onclick="alert('<h1>Heading</h1><p>problem solves</p>')">how to cloce</button>

<button onclick="window.location.href='https://github.com/kamarjahan/kamarjahan.github.io/edit/master/main.html'">main</button>


<button id="slide-button">Toggle Slide</button>

<div id="side-slide">
  <h1>Side Slide</h1>
  <p>This is the content of the side slide.</p>
</div>

<style>
  #side-slide {
    width: 300px;
    height: 200px;
    background-color: #ddd;
    display: none;
  }
</style>

<script>
  $(document).ready(function() {
    $("#slide-button").click(function() {
      $("#side-slide").slideToggle();
    });
  });
</script>

</body>
</html>
