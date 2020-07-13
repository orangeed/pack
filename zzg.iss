; Script generated by the Inno Setup Script Wizard.
; SEE THE DOCUMENTATION FOR DETAILS ON CREATING INNO SETUP SCRIPT FILES!

#define MyAppName "报备审批和证件领用"
#define enName 'jixin'
#define MyAppVersion "0.0.1"
#define MyAppPublisher "My Company, Inc."
#define MyAppURL "https://www.orangecj.cn/"
#define MyAppExeName "jixin.exe"

[Setup]
; NOTE: The value of AppId uniquely identifies this application. Do not use the same AppId value in installers for other applications.
; (To generate a new GUID, click Tools | Generate GUID inside the IDE.)
AppId={{6B4AE0CA-47D9-4EE8-B728-4BBA10204401}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
;AppVerName={#MyAppName} {#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName=C:\{#enName}
DisableProgramGroupPage=yes
; Uncomment the following line to run in non administrative install mode (install for current user only.)
;PrivilegesRequired=lowest
OutputDir=D:\electron\Output
OutputBaseFilename=jixin
Compression=lzma
SolidCompression=yes
DisableDirPage=yes
WizardStyle=modern

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"
Name: "chinesesimplified"; MessagesFile: "compiler:Languages\ChineseSimplified.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
Source: "D:\electron\pack\jixin\jixin-win32-x64\jixin.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\electron\pack\jixin\jixin-win32-x64\static\zjg_2d.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\electron\pack\jixin\jixin-win32-x64\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
;Source: "D:\electron\pack\jixin\jixin-win32-x64\static\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
;Source: "D:\electron\pack\jixin\jixin-win32-x64\static\remove.bat"; DestDir: "{app}"; Flags: ignoreversion
Source: "D:\electron\pack\jixin\jixin-win32-x64\static\*"; DestDir: "{app}\{#enName}"; Flags: sharedfile uninsneveruninstall
Source: "D:\electron\pack\jixin\jixin-win32-x64\static\config\app.ini"; DestDir: "{app}\{#enName}\config"; Flags: sharedfile uninsneveruninstall
; NOTE: Don't use "Flags: ignoreversion" on any shared system files

[Icons]
Name: "{autoprograms}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"
Name: "{autodesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "{cm:LaunchProgram,{#StringChange(MyAppName, '&', '&&')}}"; Flags: nowait postinstall skipifsilent
Filename: "{app}\static\installAndStart.bat"; Description: "Install bat"; Flags: nowait skipifsilent

[UninstallRun]
Filename: "{app}\{#enName}\remove.bat"; Flags: nowait hidewizard