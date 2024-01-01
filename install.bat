@echo off
set "output=not installed"
for /f "delims=" %%i in ('node -v 2^>nul') do set output=%%i

IF "!output!" EQU "" (
  echo Please install Node
) else (
  echo Installing Express
  npm install express
  echo Installing fd
  npm install fs
  echo Installing kill-port
  npm install --save kill-port
  echo Installing MongoDB
  npm install mongodb
)
