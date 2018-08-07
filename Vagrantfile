# A dummy plugin for Barge to set hostname and network correctly at the very first `vagrant up`
module VagrantPlugins
  module GuestLinux
    class Plugin < Vagrant.plugin("2")
      guest_capability("linux", "change_host_name") { Cap::ChangeHostName }
      guest_capability("linux", "configure_networks") { Cap::ConfigureNetworks }
    end
  end
end

unless Vagrant.has_plugin?("vagrant-docker-compose")
  system("vagrant plugin install vagrant-docker-compose")
  puts "Dependencies installed, please try the command again."
  exit
end

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64" # config.vm.box = "jpbriquet/alpine2docker" # "dduportal/alpine2docker" has no virtualbox additions

  config.vm.synced_folder ".", "/vagrant"

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
  end

  config.vm.network :forwarded_port, guest: 8000, host: 8000, id: 'django_http'
  config.vm.network :forwarded_port, guest: 5442, host: 5442, id: 'postgresql'
  config.vm.network :forwarded_port, guest: 3000, host: 3000, id: 'react'

  config.vm.provision :docker
  config.vm.provision :docker_compose, yml: "/vagrant/lap_sensor/docker-compose.yml", run: "always"
  config.vm.provision "shell", inline: "echo cd /vagrant >> /home/vagrant/.bashrc"
  config.vm.provision "shell", privileged: false, inline: <<-SHELL
    echo "Provisioning Virtual Machine..."
    sudo apt-get update
    echo "Installing developer packages..."
    sudo apt-get install build-essential curl vim -y > /dev/null
    echo "Installing Git..."
    sudo apt-get install git -y > /dev/null
    echo "Installing Node and NVM..."
    curl -o- https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
    source ~/.nvm/nvm.sh
    nvm install node
    nvm alias default node
    cd /vagrant
    echo "Installing Node dependencies..."
    npm install -g webpack
    npm install
    npm shrinkwrap --dev
  SHELL
end
