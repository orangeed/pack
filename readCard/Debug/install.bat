@echo off
rem 强制以管理员身份运行
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
cd /d "%~dp0"
%SystemRoot%\Microsoft.NET\Framework\v4.0.30319\installutil.exe readcardservice.exe
Net Start huzhoureadcardService
sc config huzhoureadcardService start= auto
pause