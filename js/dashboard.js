const { remote, ipcRenderer } = require('electron')
//minimize

document.getElementById('dashboard-minm-btn').addEventListener('click', () => {
    remote.getCurrentWindow().minimize()
})
//close
document.getElementById('dashboard-close-btn').addEventListener('click', () => {
    remote.app.quit()
})

document.getElementById('mod-income-btn').addEventListener('click', () => {
    ipcRenderer.send("mod-income")
    ipcRenderer.sendTo(4,"load-last-inc")
    
})

document.getElementById('mod-expense-btn').addEventListener('click', () => {
    ipcRenderer.send("mod-expense")
    ipcRenderer.sendTo(5,"load-last-exp")
    
})


document.getElementById('add-income-btn').addEventListener('click', () => {
    ipcRenderer.send("add-income")
})

document.getElementById('add-expense-btn').addEventListener('click', () => {
    ipcRenderer.send("add-expense")
})


document.getElementById('report-btn').addEventListener('click', () => {
    var rq = require('request-promise')
    var options = {
        method: 'POST',
        uri: 'http://localhost:5000/report',
    }

    rq(options).then(function (body) {
        console.log(body)

    })

})



document.addEventListener("keypress", function (event) {
    var x = event.key;
    if (x == 'i' || x == 'I') {
        ipcRenderer.send("add-income")

    }
});


document.addEventListener("keypress", function (event) {
    var x = event.key;
    if (x == 'e' || x == 'E') {
        ipcRenderer.send("add-expense")

    }
});

document.addEventListener("keypress", function (event) {
    var x = event.key;
    if (x == 'r' || x == 'R') {
        var rq = require('request-promise')
        var options = {
            method: 'POST',
            uri: 'http://localhost:5000/report',
        }

        rq(options).then(function (body) {
            console.log(body)

        })

    }
});

function bal_update() {
    var rq = require('request-promise')
    var options = {
        method: 'POST',
        uri: 'http://localhost:5000/balance_dashboard',
    }

    rq(options).then(function (body) {
        var bal = document.getElementById('balance_amount')
        bal.innerHTML = ''
        bal.innerHTML = body

    })
}
bal_update()

ipcRenderer.on('income-bal-update', function () {
    bal_update()


})
ipcRenderer.on('expense-bal-update', function () {
    bal_update()


})

document.addEventListener("keypress", function (event) {
    if (event.key == 73) {
        ipcRenderer.send("add-income")

    }
});


document.addEventListener("keypress", function (event) {
    if (event.key == 69) {
        ipcRenderer.send("add-expense")

    }
});

document.addEventListener("keypress", function (event) {
    if (event.key == 82) {
        ipcRenderer.send("generate-result")

    }
});