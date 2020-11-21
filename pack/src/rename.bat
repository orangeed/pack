@echo off

@echo 'rename begin'

set a=00

setlocal EnableDelayedExpansion

for %%n in (*.txt) do (

set /A a+=1

ren "%%n" "app.asar"

)

echo 'rename end'
pause