@echo off
set "output=not installed"
for /f "delims=" %%i in ('node -v 2^>nul') do set output=%%i

IF "!output!" EQU "" (
  echo Please install Node
) else (
  npm install express
  npm install fs
)
