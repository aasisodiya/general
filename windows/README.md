# Windows CMD

[![Visitors](https://api.visitorbadge.io/api/visitors?path=aasisodiya.general.windows.commands&labelColor=%23ffa500&countColor=%23263759&labelStyle=upper)](https://visitorbadge.io/status?path=aasisodiya.general.windows.commands)

- [Windows CMD](#windows-cmd)
  - [Sample Commands](#sample-commands)
    - [Command to list down folders and sub-folders](#command-to-list-down-folders-and-sub-folders)
    - [Command to list down all files and folders and sub-folders](#command-to-list-down-all-files-and-folders-and-sub-folders)
    - [Command to list files with specific extension](#command-to-list-files-with-specific-extension)
  - [`ipconfig` Commands](#ipconfig-commands)

## Sample Commands

### Command to list down folders and sub-folders

**Command:** `dir /s /b /o:n /ad`

**Command:** `dir /s /b /o:n /ad > folder.txt` Will save output to folder.txt file

### Command to list down all files and folders and sub-folders

**Command:** `dir /s /b /o:gn`

**Command:** `dir /s /b /o:gn > filelist.txt` Will save output to filelist.txt file

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

[![Visitors](https://api.visitorbadge.io/api/visitors?path=aasisodiya.general&label=aasisodiya/general&labelColor=%23ffa500&countColor=%23263759&labelStyle=upper)](https://visitorbadge.io/status?path=aasisodiya.general)
