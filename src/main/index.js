import electron from 'electron'
const { app, BrowserWindow } = electron
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
let sineWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
  mainWindow = new BrowserWindow({
    title: 'zjhcsoft-cli',
    height: height,
    width: width - 200,
    useContentSize: true,
    show: false,
    titleBarStyle: 'hidden',
    frame: false
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
  mainWindow.webContents.on('new-window', (event, url, frameName, disposition, options, additionalFeatures) => {
    event.preventDefault()
    if (sineWindow) {
      sineWindow.focus()
      return false
    }
    if (frameName === 'sineui') {
      Object.assign(options, {
        frame: true,
        titleBarStyle: 'default',
        height: height,
        width: width / 2,
        x: 0,
        y: 0
      })
      sineWindow = new BrowserWindow(options)
      sineWindow.loadURL(url)
      sineWindow.on('closed', () => {
        sineWindow = null
      })
    }
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
