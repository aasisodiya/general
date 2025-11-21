# Windows CMD

[![Visitors](https://api.visitorbadge.io/api/visitors?path=aasisodiya.general.windows.commands&labelColor=%23ffa500&countColor=%23263759&labelStyle=upper)](https://visitorbadge.io/status?path=aasisodiya.general.windows.commands)

- [Windows CMD](#windows-cmd)
  - [Sample Commands](#sample-commands)
    - [Command to list down folders and sub-folders](#command-to-list-down-folders-and-sub-folders)
    - [Command to list down all files and folders and sub-folders](#command-to-list-down-all-files-and-folders-and-sub-folders)
    - [Command to list files with specific extension](#command-to-list-files-with-specific-extension)
  - [`ipconfig` Commands](#ipconfig-commands)
  - [Windows Clipboard](#windows-clipboard)
  - [Snip \& Sketch](#snip--sketch)
  - [Delete Large Size Folder](#delete-large-size-folder)
    - [Command `del /f/s/q FolderName > nul`](#command-del-fsq-foldername--nul)
    - [Command `rmdir /s/q FolderName`](#command-rmdir-sq-foldername)
  - [SimplySQL Module in Powershell](#simplysql-module-in-powershell)
  - [Command for Card is Locked issue](#command-for-card-is-locked-issue)
  - [Remove Recycle Bin Folder from External Drive](#remove-recycle-bin-folder-from-external-drive)

## Sample Commands

### Command to list down folders and sub-folders

**Command:** `dir /s /b /o:n /ad`

**Command:** `dir /s /b /o:n /ad > folder.txt` Will save output to folder.txt file

### Command to list down all files and folders and sub-folders

**Command:** `dir /s /b /o:gn`

**Command:** `dir /s /b /o:gn > filelist.txt` Will save output to filelist.txt file

### Command to list down all files and folder in tree structure

```cmd
tree /f /a > filename.txt
```

sample of the output looks like below

```cmd
Folder PATH listing for volume OS
Volume serial number is 1234-123
C:.
|   .gitignore
|   LICENSE
|   README.md
|   _config.yml
|
+---assets
|       alogo.svg
|
+---aws
|   |   README.md
```

### Command to list files with specific extension

| Function                                                 | Command                   |
| -------------------------------------------------------- | ------------------------- |
| List filename with extension in directory                | `dir *.[extension]`       |
| List only the filenames with extension                   | `dir /b *.[extension]`    |
| List files in directory and all sub-directories          | `dir /S *.[extension]`    |
| List only filenames in directory and all sub-directories | `dir /S /b *.[extension]` |

## `ipconfig` Commands

| Function                                                                                                              | Command                |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| To displays Internet Protocol version 4 (IPv4) and IPv6 addresses, subnet mask, and default gateway for all adapters. | `ipconfig`             |
| To display DNS server settings / all IP configuration information.                                                    | `ipconfig /all`        |
| To display the contents of the DNS resolver cache                                                                     | `ipconfig /displaydns` |

## Windows Clipboard

**Command**: `win key + v`

On pressing above command, if clipboard is not enabled then it will show you an option to enable it. You will have to click on `Turn on`

![Windows Clipboard](./images/clipboard.png)

Once you enable this, anything you copy will show up here

![Windows Clipboard](./images/clipboardon.png)

## Snip & Sketch

**Command**: `win key + shift + s`

This will allow you to snip the screenshot and then you can paste it or edit it and save it in `Snip & Sketch`.

## Delete Large Size Folder

```cmd
del /f/q/s FolderName > nul
rmdir /q/s FolderName
```

### Command `del /f/s/q FolderName > nul`

- Deletes one or more files in given `FolderName`. This command is the same as the `erase` command
- It leaves behind the directory structure
- Output is set to `nul` to avoid output on screen

|Parameter|Description|
|-|-|
|`/f`|Forces deletion of read-only files|
|`/s`|Deletes specified files from the current directory and all subdirectories. Displays the names of the files as they are being deleted|
|`/q`|Specifies quiet mode. You are not prompted for delete confirmation.|

### Command `rmdir /s/q FolderName`

Cleans up the directory structure.

|Parameter|Description|
|-|-|
|`/s`|Deletes a directory tree (the specified directory and all its subdirectories, including all files)|
|`/q`|Specifies quiet mode. Does not prompt for confirmation when deleting a directory tree. (Note that `/q` works only if `/s` is specified)|

## SimplySQL Module in Powershell

```powershell
set-executionpolicy unrestricted
Import-Module -Name SimplySql
get-module SimplySql
```

## Command for Card is Locked issue

1. Open command prompt : Windows + R : `diskpart`
2. Run command `list disk`
3. Run command `select disk n` where `n` is the index number of card
4. Run command `attributes disk clear readonly`

## Remove Recycle Bin Folder from External Drive

```bash
rd /s /q E:$Recycle.bin
```

Use above command to remove the bin folder from the external drive, where you just need to replace the `E:` drive letter to actual drive letter. Open command prompt with Admin access else above command won't work.

---

[![Visitors](https://api.visitorbadge.io/api/visitors?path=aasisodiya.general&label=aasisodiya/general&labelColor=%23ffa500&countColor=%23263759&labelStyle=upper)](https://visitorbadge.io/status?path=aasisodiya.general)
