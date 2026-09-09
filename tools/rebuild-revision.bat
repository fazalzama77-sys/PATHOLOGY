@echo off
REM ============================================================
REM  rebuild-revision.bat
REM  ----------------------------------------------------------
REM  Run this ONLY after you have edited one of the printable
REM  revision sheets in  revision\unit-1.html ... unit-6.html
REM
REM  It regenerates  data\data-revision.JS  so the in-app
REM  Rapid Revision section (#/revision) shows the same content.
REM ============================================================
setlocal
cd /d "%~dp0.."

echo.
echo  ============================================
echo   REBUILDING THE RAPID REVISION DATA FILE
echo  ============================================
echo.

python tools\build-revision-data.py
if errorlevel 1 goto :failed

echo.
echo  [SUCCESS] data\data-revision.JS has been rebuilt.
echo.
echo  Next: bump CACHE_VERSION in service-worker.js, then
echo  double-click 1-CLICK-PUSH-TO-GITHUB.bat to publish.
echo.
pause
exit /b 0

:failed
echo.
echo  [FAILED] The rebuild did not finish.
echo  Check that Python is installed and that the sheets in
echo  revision\ still have the expected structure.
echo.
pause
exit /b 1
