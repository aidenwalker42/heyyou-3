document.querySelector('#login-username').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
      login()
    }
});

document.querySelector('#login-password').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
      login()
    }
});

async function login() {
  let username = document.getElementById('login-username').value
  let password = document.getElementById('login-password').value
  let res
  try{
    res = await axios.get("http://localhost:5000/api/admins", {params: {username: username, password: password}})
  } catch(err){
    console.error(err)
    res = {data: {msg: "fail"}}
  }
  if(res.data.msg == "Login Successful!"){
    window.open('./admin-panel.html', "_self")
  } else{
    window.open('./cssjs/loginFailed.png')
  }
  console.log(res.data)
}

  