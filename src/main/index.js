import electron from 'electron'
import path from 'path'
const {
  app,
  BrowserWindow,
  Menu
} = electron
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
let sineWindow
let aboutWindow
const winURL = process.env.NODE_ENV === 'development' ? `http://localhost:9080` : `file://${__dirname}/index.html`
const aboutURL = process.env.NODE_ENV === 'development' ? `http://localhost:9080/static/about.html` : `file://${__static}/about.html`

app.on('ready', () => {
  createWindow()
  createMenu()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  } else {
    mainWindow.show()
  }
})

function createWindow () {
  const {
    width,
    height
  } = electron.screen.getPrimaryDisplay().workAreaSize
  mainWindow = new BrowserWindow({
    title: 'zjhcsoft',
    height: height,
    minHeight: 600,
    minWidth: 900,
    width: 1000,
    useContentSize: true,
    show: false,
    titleBarStyle: 'hidden',
    frame: false
  })

  mainWindow.loadURL(winURL)

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
    aboutWindow && aboutWindow.close()
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
        minWidth: width / 2,
        x: 0,
        y: 0,
        webPreferences: {
          nodeIntegration: false,
          // preload: __static + '/js/preload.js',
          contextIsolation: true
        }
      })
      sineWindow = new BrowserWindow(options)
      sineWindow.loadURL(url)
      sineWindow.on('closed', () => {
        sineWindow = null
      })
    }
  })
}

function createMenu () {
  const template = [{
    label: app.getName(),
    submenu: [{
      label: '关于 zjhcsoft',
      click () {
        if (aboutWindow == null) {
          aboutWindow = new BrowserWindow({
            width: 300,
            height: 180,
            title: '关于',
            center: true,
            resizable: false,
            minimizable: false,
            maximizable: false,
            show: false,
            titleBarStyle: 'hidden',
            frame: false
          })
          aboutWindow.loadURL(aboutURL)
          aboutWindow.once('ready-to-show', () => {
            aboutWindow.show()
          })
          aboutWindow.on('closed', (e) => {
            aboutWindow = null
          })
        } else {
          aboutWindow.show()
        }
      }
    },
    {
      role: 'quit',
      label: '退出'
    }
    ]
  }]
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

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
