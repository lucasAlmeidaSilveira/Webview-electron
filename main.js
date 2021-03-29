const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 550,
    height: 400,
    // frame: false,
    autoHideMenuBar: true,
    alwaysOnTop: true,
    icon: __dirname + "/.github/electronjs-icon.svg",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true
    },
    
  });

  win.loadURL("http://localhost:5500/");
  /*   win.webContents.openDevTools() */
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


