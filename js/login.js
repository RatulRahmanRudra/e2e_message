
var auth = app.auth;
var database = app.database;
console.log(auth);

function register() {
  console.log(auth);
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  if (validation_email == false || validation_pass == false)
    alert(`incorrect email or pass`)

  // if (validation_field == false)
  //move on with auth
  auth.createUserWithEmailAndPassword(email, password)
    .then(function () {

      var user = auth.currentUser

      var database_ref = database.ref()
      var user_data = {
        email: email,
        last_login: Date.now()
      }
      database_ref.child('users/' + user.uid).set(user_data)

      alert(`user created`);

    })
    .catch(function (error) {
      var error_code = error.code;
      var error_message = error.message;
      alert(error_message)
    })


}



///valid email//
function validation_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
  if (expression.test(email) == true) return true;
  else
    return false;
}

//valid pass
function validation_pass(password) {
  if (password.length < 6) return false;
  else return true;

}
