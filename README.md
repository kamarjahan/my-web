







<!DOCTYPE html>

<form action="/login" method="POST" onsubmit="return checkForm(this);">
  <label for="username">Username:</label><br>
  <input type="text" id="username" name="username"><br>
  <label for="password">Password:</label><br>
  <input type="password" id="password" name="password"><br><br>
  <input type="submit" value="Submit">
</form> 

<script>
  function checkForm(form) {
    if (form.username.value == "1414" && form.password.value == "1234") {
      window.location.href = "/main.html";
      return false;
    }
    else {
      alert("Invalid username or password!");
      return false;
    }
  }
</script>





