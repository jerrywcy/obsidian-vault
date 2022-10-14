To get a default installation of Lua and LuaRocks under `/usr/local`:

First, ensure that you have development tools installed on your system, otherwise run the command below to install them.

```bash
 -$ sudo apt install build-essential libreadline-dev unzip
```

Then to build and install Lua, run the following commands to download the package tar ball, extract, build and install it.

```bash
-$ curl -R -O http://www.lua.org/ftp/lua-5.3.5.tar.gz
-$ tar -zxf lua-5.3.5.tar.gz
-$ cd lua-5.3.5
-$ make linux test
-$ sudo make install`
```

now Lua is installed.

Download and unpack the LuaRocks tarball using following commands.

```bash
-$ wget https://luarocks.org/releases/luarocks-3.8.0.tar.gz
-$ tar zxpf luarocks-3.8.0.tar.gz
-$ cd luarocks-3.8.0
```

Run `./configure --with-lua-include=/usr/local/include`. (This will attempt to detect your installation of Lua. If you get any error messages, see the section "Customizing your settings", below.)

Run `make`.

As superuser, run `make install`.