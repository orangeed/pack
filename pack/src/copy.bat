@echo off


set filePath=%~dp0
echo %filePath%
cd %filePath%
%~d0

cd %filePath%dowload

copy %filePath%dowload\app.asar %filePath%resources
echo 'copy success'

echo 'open exe'
cd %filePath%
start jixin.exe




