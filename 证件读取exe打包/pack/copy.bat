@echo off
rem 强制以管理员身份运行
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit

set filePath=%~dp0
echo %filePath%
cd %filePath%
%~d0

cd %filePath%etc

copy %filePath%etc\app.conf  C:\Windows\System32\drivers\etc
copy %filePath%etc\config_14.xml  C:\Windows\System32\drivers\etc
copy %filePath%etc\config_21.xml  C:\Windows\System32\drivers\etc

cd %filePath%

%filePath%readcert.exe install










