@echo off

set filePath=%~dp0
echo %filePath%
cd %filePath%
%~d0

cd %filePath%static

%filePath%static\zjg_2d.exe stop

copy %filePath%dowload\zjg_2d.exe %filePath%static

%filePath%static\zjg_2d.exe start

