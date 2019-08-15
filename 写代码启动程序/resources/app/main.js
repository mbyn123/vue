const electron = require('electron');
const { app, BrowserWindow, session, Menu } = electron;

let mainWindow;
let url = "https://xiedaimala.com";
// let url = "http://localhost:3000";

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 1100,
        scrollBounce: true,
        nativeWindowOpen: true,
        webPreferences: { nodeIntegration: false   } 
    });

    const template = [
        {
            label: '写代码啦',
            submenu: [
                { role: 'quit' },
                {
                    label: '网页打开',
                    click () {electron.shell.openExternal(url)}
                }
            ]
        },
        {
          label: '视图',
          submenu: [
            { role: 'reload' },
            { role: 'forcereload' }
          ]
        },
        {
          label: '窗口',
          submenu: [
            { role: 'minimize' },
            { role: 'close' }
          ]
        },
        {
            label: '导航',
            submenu: [
                {
                    label: '后退',
                    accelerator: 'CommandOrControl+[',
                    click () { mainWindow.webContents.goBack() }
                },
                {
                    label: '前进',
                    accelerator: 'CommandOrControl+]',
                    click () { mainWindow.webContents.goForward() }
                },
                {
                    label: '主页',
                    accelerator: 'CommandOrControl+h',
                    click () { mainWindow.loadURL(url ,{userAgent: 'xdml-pc-app'}); }
                },
                {
                    label: '全部课程',
                    click () { mainWindow.loadURL("https://xiedaimala.com/courses" ,{userAgent: 'xdml-pc-app'}); }
                }        
            ]
        }
      ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    const cookie = { url, name: 'client_name', value: 'xdml-pc-app' }

    session.defaultSession.cookies.set(cookie, (error,cookies) => {
        if (error) console.error(error)
      })

    mainWindow.setTitle('写代码啦');
    mainWindow.loadURL(url ,{userAgent: 'xdml-pc-app'});

    app.on('window-all-closed', function() {
        app.quit();
      });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
