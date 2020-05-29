# Linux/Ubuntu

## Sample Commands / Notes

### View System Logs

**Commands:** `cat /var/log/syslog` You can also use `tail` and `grep` for filter search

### System Services Location & Commands

**Commands:** `cd /etc/systemd/system/` will open the folder containing all system services

**Commands:** `sudo systemctl start application.service` as the command parameter suggests will start the service

**Commands:** `sudo systemctl stop application.service` as the command parameter suggests will stop the service

**Commands:** `sudo systemctl remove application.service` as the command parameter suggests will remove the service

**Commands:** `sudo systemctl restart application.service` as the command parameter suggests will restart the service

**Commands:** `sudo systemctl reload application.service` will reload the configuration of the service

**Commands:** `sudo systemctl status application.service` will show the status of the service

**Commands:** `sudo systemctl enable application.service` will enable the service to autostart on boot

**Commands:** `sudo systemctl disable application.service` will disable the service to not to start on boot

**Commands:** `sudo systemctl is-active application.service` will check if the service is active

**Commands:** `sudo systemctl is-enabled application.service` will check if the service is enabled to start on system boot
