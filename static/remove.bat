@echo off
rem 强制以管理员身份运行
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit

set filePath=%~dp0
echo %filePath%
cd %filePath%
%~d0

md C:\backup

copy %filePath%zhengjiangui2.db C:\backup

%filePath%zjg_2d.exe stop
%filePath%zjg_2d.exe remove

del %filePath%..\static\*.* /f/s/q/a
rd %filePath%..\static\log
rd %filePath%..\static\

rd %filePath%static
del "%filePath%log\*.*" /f/s/q/a
rd %filePath%log
del "%filePath%config\*.*" /f/s/q/a
rd %filePath%config
del %filePath%*.* /f/s/q/a


