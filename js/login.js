const { remote, ipcRenderer } = require('electron')
//minimize

document.getElementById('login-minm-btn').addEventListener('click', () => {
    remote.getCurrentWindow().minimize()
})
//close
document.getElementById('login-close-btn').addEventListener('click', () => {
    remote.app.quit()
})
//password view toggle
document.getElementById('login-toggle-password').addEventListener('click', () => {
    if (document.getElementById('login-password').type === "password") {
        document.getElementById('login-password').type = "text"
        document.getElementById('login-toggle-password').classList.remove('fa-eye-slash')
        document.getElementById('login-toggle-password').classList.add('fa-eye')

    }
    else {
        document.getElementById('login-password').type = "password"
        document.getElementById('login-toggle-password').classList.remove('fa-eye')
        document.getElementById('login-toggle-password').classList.add('fa-eye-slash')

    }
})


//signin
document.getElementById('signin-btn').addEventListener('click', () => {
    var btn = document.getElementById('signin-btn')
    var loader = document.getElementById('signin-loading-spinner-container')
    btn.style.display="none"
    loader.style.display="block"
    var rq = require('request-promise')
    var get_username = document.getElementById("login-username").value
    var get_password = document.getElementById("login-password").value

    var options = {
        method: 'POST',
        uri: 'http://localhost:5000/login_form',
        form: {username: get_username, password: get_password}
    }

    rq(options).then(function(body){
        if(body == 'success'){
            document.getElementById("login-show-error").innerHTML = "Login Success"
            document.getElementById("login-show-error").style.color = "green"
            ipcRenderer.send("login-success")

        }
        else{
            document.getElementById("login-show-error").innerHTML = "Login failed"
            document.getElementById("login-show-error").style.color = "red"
            btn.style.display="block"
            loader.style.display="none"

            

        }
        }).catch(function (err) {
            console.log(err)

        })
    })



//signin using enter
document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        var btn = document.getElementById('signin-btn')
    var loader = document.getElementById('signin-loading-spinner-container')
    btn.style.display="none"
    loader.style.display="block"
    var rq = require('request-promise')
    var get_username = document.getElementById("login-username").value
    var get_password = document.getElementById("login-password").value

    var options = {
        method: 'POST',
        uri: 'http://localhost:5000/login_form',
        form: {username: get_username, password: get_password}
    }

    rq(options).then(function(body){
        if(body == 'success'){
            document.getElementById("login-show-error").innerHTML = "Login Success"
            document.getElementById("login-show-error").style.color = "green"
            ipcRenderer.send("login-success")

        }
        else{
            document.getElementById("login-show-error").innerHTML = "Login failed"
            document.getElementById("login-show-error").style.color = "red"
            btn.style.display="block"
            loader.style.display="none"

            

        }
        }).catch(function (err) {
            console.log(err)

        })
      
    }
  });