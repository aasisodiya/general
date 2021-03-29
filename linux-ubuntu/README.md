# Linux/Ubuntu

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
