# SSO Login With VSCode

[![Visitors](https://api.visitorbadge.io/api/visitors?path=aasisodiya.general.vscode.awsssologin&labelColor=%23ffa500&countColor=%23263759&labelStyle=upper)](https://visitorbadge.io/status?path=aasisodiya.general.vscode.awsssologin)

- [SSO Login With VSCode](#sso-login-with-vscode)
  - [Prerequisites](#prerequisites)
  - [Configure VSCode](#configure-vscode)
  - [Configure AWS Credentials](#configure-aws-credentials)
  - [SSO Login](#sso-login)
  - [Reference](#reference)

## Prerequisites

- Python 3 [Download Link](https://www.python.org/downloads/windows/)
- AWS CLI v2 [Download Link](https://awscli.amazonaws.com/AWSCLIV2.msi)
- Git [Download Link](https://git-scm.com/downloads)

Make sure to Uninstall any previous versions of above mentioned tools before installing new ones. Also make sure to remove the old path variable.

After installing everything, restart your system.

## Configure VSCode

- Open VS Code
- Then Open Terminal in VSCode
- Run `aws --version` command and make sure that AWS CLI V2 version is shown, for example `aws-cli/2.1.0 Python/3.7.7 Windows/11 exe/AMD64`
- Run `pip install pipx` command
- Run `python -m pipx ensurepath` Command
- Run `pipx install aws-sso-credential-process` Command
- Run `pip install git-remote-codecommit` Command

## Configure AWS Credentials

Open file `c:\users\[user]\.aws\credentials` and paste below code in the file

```config
[default]
credential_process = aws-sso-credential-process --profile default
sso_start_url = https://my-sso-portal.awsapps.com/start
sso_region = us-east-1
sso_account_id = 123456789011
sso_role_name = readOnly
region = us-west-2
output = json
```

or you can also run following command: `aws configure sso --profile default` this will insert all values to credential file

## SSO Login

Now to login use command `aws sso login`

You can use following command to Describes a user's SSH information `aws opsworks --region us-west-2 describe-my-user-profile` which will generate an output as shown below

```json
{
  "UserProfile": {
    "IamUserArn": "arn:aws:iam::123456789012:user/myusername",
    "SshPublicKey": "ssh-rsa AAAAB3NzaC1yc2EAAAABJQ...3LQ4aX9jpxQw== rsa-key-20141104",
    "Name": "myusername",
    "SshUsername": "myusername"
  }
}
```

## Reference

- [Configuring the AWS CLI to use AWS IAM Identity Center (successor to AWS Single Sign-On)](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html)
- [describe-my-user-profile](https://docs.aws.amazon.com/cli/latest/reference/opsworks/describe-my-user-profile.html)

[![Visitors](https://api.visitorbadge.io/api/visitors?path=aasisodiya.general&label=aasisodiya/general&labelColor=%23ffa500&countColor=%23263759&labelStyle=upper)](https://visitorbadge.io/status?path=aasisodiya.general)
