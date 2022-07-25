# Linux/Ubuntu

[![Visitors](https://api.visitorbadge.io/api/visitors?path=aasisodiya.general.linux&labelColor=%23ffa500&countColor=%23263759&labelStyle=upper)](https://visitorbadge.io/status?path=aasisodiya.general.linux)

- [Linux/Ubuntu](#linuxubuntu)
  - [Commands & Notes](#commands--notes)
    - [View System Logs](#view-system-logs)
    - [System Services Location & Commands](#system-services-location--commands)
    - [Docker Commands](#docker-commands)
    - [`netstat` Command](#netstat-command)
    - [`ss` **(socket statistics)** Command](#ss-socket-statistics-command)
    - [`lsof` **(list open files)** Command](#lsof-list-open-files-command)
    - [`.bashrc`](#bashrc)
      - [Adding Alias To `.bashrc`](#adding-alias-to-bashrc)
    - [Environment Variable on EC2](#environment-variable-on-ec2)
      - [`/etc/environment` vs `~/.profile`](#etcenvironment-vs-profile)
    - [Environment Variable In `systemd` Service](#environment-variable-in-systemd-service)
    - [`kill` Command](#kill-command)
      - [Issue: What is a defunct process and why doesn't it get killed?](#issue-what-is-a-defunct-process-and-why-doesnt-it-get-killed)
    - [`ps` Command](#ps-command)
  - [Reference](#reference)

## Commands & Notes

### View System Logs

**Command:** `cat /var/log/syslog` You can also use `tail` and `grep` for filter search

### System Services Location & Commands

**Command:** `cd /etc/systemd/system/` will open the folder containing all system services

**Command:** `sudo systemctl start application.service` as the command parameter suggests will start the service

**Command:** `sudo systemctl stop application.service` as the command parameter suggests will stop the service

**Command:** `sudo systemctl remove application.service` as the command parameter suggests will remove the service

**Command:** `sudo systemctl restart application.service` as the command parameter suggests will restart the service

**Command:** `sudo systemctl reload application.service` will reload the configuration of the service

**Command:** `sudo systemctl status application.service` will show the status of the service

**Command:** `sudo systemctl enable application.service` will enable the service to autostart on boot

**Command:** `sudo systemctl disable application.service` will disable the service to not to start on boot

**Command:** `sudo systemctl is-active application.service` will check if the service is active

**Command:** `sudo systemctl is-enabled application.service` will check if the service is enabled to start on system boot

### Docker Commands

**Command:** `docker ps` will list all running containers. You can use `docker ps -a` or `docker ps --all` to list all containers

### `netstat` Command

|Command|Description|
|-|-|
|`sudo netstat -lntu`|Display all services listening for TCP and UDP, all free open ports on the local machine|
|`sudo netstat -nlp`|Use this command to check which port is occupied by which process pid|

|Parameter|Description|
|-|-|
|`-a`|Displays all active connections and the TCP and UDP ports on which the computer is listening|
|`-n`|Displays active TCP connections, however, addresses and port numbers are expressed numerically and no attempt is made to determine names|
|`-p` protocol|Shows connections for the protocol specified by protocol. In this case, protocol can be tcp, udp, tcpv6, or udpv6. If this parameter is used with -s to display statistics by protocol, protocol can be tcp, udp, icmp, ip, tcpv6, udpv6, icmpv6, or ipv6|
|`-p`|Show which processes are using which sockets (similar to -b under Windows) (you must be root to do this)|
|`-t`|Display only TCP connections|
|`-u`|Display only UDP connections|

### `ss` **(socket statistics)** Command

The `ss` **(socket statistics)** tool is a CLI command used to show network statistics.

> The `ss` command is a simpler and faster version of the now obsolete `netstat` command

|Command|Description|
|-|-|
|`sudo ss`|List all connections|
|`sudo ss -t`|To view only tcp or udp or unix connections use the t, u or x option|
|`sudo ss -ua`|List all udp connections|
|`sudo ss -lptn`|Use this command to check which port is occupied by which process pid|
|`sudo ss -ltn`|Show only listening sockets|

### `lsof` **(list open files)** Command

`lsof` is a command meaning ***"list open files"***, which is used in many Unix-like systems to report a list of all open files and the processes that opened them.

|Command|Description|
|-|-|
|`sudo lsof -n -i :{port}`|Use this command to check pid for given port|

### `.bashrc`

`.bashrc` is a Bash shell script that Bash runs whenever it is started interactively. It initializes an interactive shell session. You can put any command in that file that you could type at the command prompt.

You put commands here to set up the shell for use in your particular environment, or to customize things to your preferences. A common thing to put in .bashrc are aliases that you want to always be available.

#### Adding Alias To `.bashrc`

Just to be safe I always take a backup of the file before editing it. So I advice to make a copy of `.bashrc` before proceeding ahead. To view the file use below command

```console
cat $HOME/.bashrc
```

Now lets create a alias for command that takes us to our project folder, which for me is `cd /usr/local/test` so lets edit the `.bashrc` file using below command

```console
vi $HOME/.bashrc
```

When the editor opens, press `i` to enable editing mode, and go to the last line of the code. Now the syntax for creating an alias is as follows: `alias shortcommandname="long custom command that you want to use"` So here since we are creating a alias for `cd /usr/local/test` so our alias code will look like given below:

```bash
# Custom Alias
alias letswork="cd /usr/local/test"
```

So basically `cd /usr/local/test` has an alias `letswork`. Now save the file and exit `.bashrc` using command `:wq!`. Now we have our alias created, but to make is active/usable you will have to either restart your ec2 terminal or simply use `source` command. Sample code to load the `.bashrc` is given below:

```console
source ~/.bashrc
```

Now you can hit your alias and check if it executes the same command as you specified. Which in my case will take me to my test folder when i press `letswork` command on console.

### Environment Variable on EC2

#### `/etc/environment` vs `~/.profile`

|`/etc/environment`|`~/.profile`|
|-|-|
|`/etc/environment` is a system-wide configuration file, which means it is used by all users. It is owned by root though, so you need to be an admin user and use sudo to modify it.|`~/.profile` is one of your own user's personal shell initialization scripts. Every user has one and can edit their file without affecting others.|
|This file is specifically meant for system-wide environment variable settings. It is not a script file, but rather consists of assignment expressions, one per line. <br> `FOO=bar` <br> **Note:** Variable expansion does not work in /etc/environment.|Files with the .sh extension in the /etc/profile.d directory get executed whenever a bash login shell is entered (e.g. when logging in from the console or over ssh), as well as by the DisplayManager when the desktop session loads.|
|Editing `/etc/environment` is not recommended|`/etc/profile` and `/etc/profile.d/*.sh` are the global initialization scripts that are equivalent to `~/.profile` for each user. The global scripts get executed before the user-specific scripts though; and the main `/etc/profile` executes all the `*.sh` scripts in `/etc/profile.d/` just before it exits.|

You can for instance create the file `/etc/profile.d/myenvvars.sh` and set variables like this:

```bash
export JAVA_HOME=/usr/lib/jvm/jdk1.7.0
export PATH=$PATH:$JAVA_HOME/bin
# With White Spaces
VARWITHWHITESPACE="`id -un`"
export VARWITHWHITESPACE
```

If you want to add variable into `/etc/environment` use below format. Always take backup before you do any changes

```bash
cat /etc/environment
vi /etc/environment
```

```bash
SAMPLEVAR="value"
```

### Environment Variable In `systemd` Service

`cd /etc/systemd/system` Open system services folder using the given command

Now before proceeding, You will have to stop the service using command `systemctl stop myservice` and then take a backup of your service file before editing. Now to view the service file use this command: `cat myservice.service`. The given file is editable but its not recommended to edit it directly. Instead the better way is to use command: `systemctl edit myservice` which will create an overide file which we can edit.
`/etc/systemd/system/myservice.service.d` inside this there is a file with extension `.conf` i.e `override.conf`. Here you can add your environment variable.

To add environment variable use below similar syntax and just replace `customvar=value` and you are done. Now start the service

```conf
[Service]
Environment="customvar=value"
```

**Note:** If the directory (`myservice.service.d`) exists and is empty then your service will be disabled, so if you don't intend to put something in the directory then delete it.

---

### `kill` Command

The syntax of the kill command takes the following form: `kill [OPTIONS] [PID]...` The kill command sends a signal to specified processes or process groups, causing them to act according to the signal.

|Commands|Description|
|-|-|
|`kill [PID]`|Kill a process by Process ID|
|`killall [PNAME]`|Kill a process by Process name|
|`kill -l`|Get a list of all the signals that can be sent to the kill command|

|Signal Name|Single Value|Effect|
|-|-|-|
|`SIGHUP`|1|Hangup|
|`SIGINT`|2|Interrupt from keyboard|
|`SIGKILL`|9|Kill signal|
|`SIGTERM`|15|Termination signal|
|`SIGSTOP`|17, 19, 23|Stop the process|

```bash
kill -1 PID
kill -SIGHUP PID
```

To terminate or kill a process with the `kill` command, first you need to find the process ID number (PID). You can do this using different commands such as `top`, `ps` , `pidof` and `pgrep`

#### Issue: What is a defunct process and why doesn't it get killed?

`defunct` means the process has either completed its task or has been corrupted or killed, but its child processes are still running or these parent process is monitoring its child process. To kill this kind of process, `kill -9 PID` doesn't work. You can try to kill them with this command but it will show this again and again.

**Solution**: `sudo kill -9 pid ppid` where `pid` is process id and `ppid` is parent process id

> Use `ps -ef | grep defunct` to get ppid

---

### `ps` Command

> Use `sudo` as required

|Command|Description|
|-|-|
|`ps -efj`|Command to view the process group IDs (GIDs)|
|`ps -ef | grep defunct`|Command to view the defunct process|

---

## Reference

- [Environment Variables](https://help.ubuntu.com/community/EnvironmentVariables)
- [Setting PATH variable in /etc/environment vs .profile](https://askubuntu.com/questions/866161/setting-path-variable-in-etc-environment-vs-profile)
- [What is the purpose of .bashrc and how does it work?](https://unix.stackexchange.com/questions/129143/what-is-the-purpose-of-bashrc-and-how-does-it-work)
- [How to set environment variable in systemd service?](https://serverfault.com/questions/413397/how-to-set-environment-variable-in-systemd-service)
- [What is a defunct process and why doesn't it get killed?](https://askubuntu.com/questions/201303/what-is-a-defunct-process-and-why-doesnt-it-get-killed)

[![Visitors](https://api.visitorbadge.io/api/visitors?path=aasisodiya.general&label=aasisodiya/general&labelColor=%23ffa500&countColor=%23263759&labelStyle=upper)](https://visitorbadge.io/status?path=aasisodiya.general)
