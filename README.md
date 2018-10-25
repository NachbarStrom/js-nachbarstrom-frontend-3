# Nachbarstrom React.js Webapp

## Get the files

* Get the source code.

```commandline
git clone https://gitlab.com/sagar270690/nachbarstrom.git
cd nachbarstrom/
```

# Setup the environment

* Run script to setup the React environment. It is designed to run on
  'Ubuntu 16.04 TLS'. If it doesn't work on your environment, open the file
  and follow the steps.
* The script will also compile production-ready files. Press 'Enter' if any
  step takes too long.

```commandline
bash ./setup_ubuntu16.sh
```

# Start the server

* Altough the setup script already does so, you can rebuild the  
  production build at any time:

```bash
yarn build
```

* To run attached to the command line:

```commandline
sudo $(which serve) build --listen 80
```

* To run detached from the command line:

```commandline
nohup sudo $(which serve) -s build --listen 80 >>logs 2>>logs &
```

* Logs are stored on the file 'logs'

# Stop the server

```bash
sudo killall node
```
