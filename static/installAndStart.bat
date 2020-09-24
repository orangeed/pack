@echo off
rem 强制以管理员身份运行
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
set filePath=%~dp0
echo %filePath%
cd %filePath%
%~d0

copy C:\backup\zhengjiangui.db C:\jixin\static

%filePath%zjg_2d.exe install
%filePath%zjg_2d.exe start
