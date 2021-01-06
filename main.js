const electron = require('electron')
const app = electron.app
const { ipcMain } = require('electron')
var path = require('path')

const BrowserWindow = electron.BrowserWindow

app.on('ready', function () {
    let loginwindow = new BrowserWindow({
        width: 300,
        height: 600,
        maxheight: 600,
        maxwidth: 600,
        frame: false,
        titleBarStyle: "hidden",
        resizable: false,
        backgroundColor: '#202121',
        maximizable: false,
        show: false,

        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }

    })
    loginwindow.loadURL('file://' + __dirname + '/html/login.html')

    loginwindow.once('ready-to-show', function () {
        loginwindow.show()
    })

    let dashboardwindow = new BrowserWindow({
        width: 400,
        height: 400,
        maxheight: 400,
        maxwidth: 400,
        frame: false,
        titleBarStyle: "hidden",
        resizable: false,
        backgroundColor: '#202121',
        maximizable: false,
        show: false,

        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }

    })
    dashboardwindow.loadURL('file://' + __dirname + '/html/dashboard.html')

    dashboardwindow.once('ready-to-show', function () {
        dashboardwindow.hide()
    })
    // console.log(dashboardwindow.webContents.id)

    ipcMain.on('login-success', function () {
        dashboardwindow.show(loginwindow.hide())

    })

    let incomewindow = new BrowserWindow({
        width: 400,
        height: 400,
        maxheight: 400,
        maxwidth: 400,
        frame: false,
        titleBarStyle: "hidden",
        resizable: false,
        backgroundColor: '#202121',
        maximizable: false,
        show: false,

        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }

    })
    incomewindow.loadURL('file://' + __dirname + '/html/income.html')

    incomewindow.once('ready-to-show', function () {
        incomewindow.hide()
    })

    ipcMain.on('add-income', function () {
        incomewindow.show()


    })
    let modifyincomewindow = new BrowserWindow({
        width: 400,
        height: 400,
        maxheight: 400,
        maxwidth: 400,
        frame: false,
        titleBarStyle: "hidden",
        resizable: false,
        backgroundColor: '#202121',
        maximizable: false,
        show: false,

        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }

    })
    modifyincomewindow.loadURL('file://' + __dirname + '/html/modify-income.html')

    modifyincomewindow.once('ready-to-show', function () {
        modifyincomewindow.hide()
    })
    // console.log(modifyincomewindow.webContents.id)

    ipcMain.on('mod-income', function () {
        modifyincomewindow.show()


    })

    let modifyexpensewindow = new BrowserWindow({
        width: 400,
        height: 400,
        maxheight: 400,
        maxwidth: 400,
        frame: false,
        titleBarStyle: "hidden",
        resizable: false,
        backgroundColor: '#202121',
        maximizable: false,
        show: false,

        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }

    })
    modifyexpensewindow.loadURL('file://' + __dirname + '/html/modify-expense.html')

    modifyexpensewindow.once('ready-to-show', function () {
        modifyexpensewindow.hide()
    })
    ipcMain.on('mod-expense', function () {
        modifyexpensewindow.show()


    })
    // console.log(modifyexpensewindow.webContents.id)

    let expensewindow = new BrowserWindow({
        width: 400,
        height: 400,
        maxheight: 400,
        maxwidth: 400,
        frame: false,
        titleBarStyle: "hidden",
        resizable: false,
        backgroundColor: '#202121',
        maximizable: false,
        show: false,

        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }

    })
    expensewindow.loadURL('file://' + __dirname + '/html/expense.html')

    expensewindow.once('ready-to-show', function () {
        expensewindow.hide()
    })

    ipcMain.on('add-expense', function () {
        expensewindow.show()


    })

    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') app.quit()
    })
})