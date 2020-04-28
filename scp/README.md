# SCP

## Sample Commands

### Command To Copy Folder From Local Machine to EC2

**Command:** `sudo scp -i <pem_file_location> -r <folder_location_you_want_to_copy> <user>@<ec2_address>:<path>`

**Example:** `sudo scp -i /Users/akash/Documents/aws/EC2/AWSDefaultKeyPair.pem -r /Users/akash/Documents/FolderToCopy/ ubuntu@ec2-ip-address.us-east-2.compute.amazonaws.com:~/go/`
