#!/bin/bash

# Run script that uses Extension Auto-Installer (https://github.com/palant/autoinstaller) to run our add-on without having to restart the browser.

cfx xpi

echo "Pushing the extension to Firefox" 
wget --post-file=copypasta.xpi http://localhost:8888/ >/dev/null 2>&1



 
