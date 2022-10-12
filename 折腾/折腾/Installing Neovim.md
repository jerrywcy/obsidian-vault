```bash
sudo apt install neovim
```

However, this will only install NeoVim v0.4.3, which is too old.

To install a newer version, we must use the following method:

To be able to use add-apt-repository you may need to install software-properties-common:

```bash
sudo apt-get install software-properties-common
```

Then run the following command:

```bash
sudo add-apt-repository ppa:neovim-ppa/stable
sudo apt-get update
sudo apt-get install neovim
```

Prerequisites for the Python modules:

```bash
sudo apt-get install python-dev python-pip python3-dev python3-pip
```

If you want to use Neovim for some (or all) of the editor alternatives, use the following commands:

```bash
sudo update-alternatives --install /usr/bin/vi vi /usr/bin/nvim 60
sudo update-alternatives --config vi
sudo update-alternatives --install /usr/bin/vim vim /usr/bin/nvim 60
sudo update-alternatives --config vim
sudo update-alternatives --install /usr/bin/editor editor /usr/bin/nvim 60
sudo update-alternatives --config editor
```


## Reference

- [Installing Neovim · neovim/neovim Wiki · GitHub](https://github.com/neovim/neovim/wiki/Installing-Neovim)