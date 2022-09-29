# How to build Unigraph locally on Windows Subsystem for Linux

## Install Windows Subsystem for Linux

### Modern way

```bash
wsl --install ubuntu
```

Now open Windows Terminal and enter `ubuntu` to enter your WSL.

check by entering

```bash
lsb_release -a
```

and you should see something like this:

```bash
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 20.04.3 LTS
Release:        20.04
Codename:       focal
```

### Traditional and deprecated way

First turn on Windows Subsystem for Linux in Control Panel > Programs > Programs and Features > Turn Windows feature on and off

![img](How%20to%20build%20Unigraph%20locally%20on%20Windows%20Subsystem%20for%20Linux/CW%7DX4NE$%7BJME86%5DU8MH2%60H.png)

![img](How%20to%20build%20Unigraph%20locally%20on%20Windows%20Subsystem%20for%20Linux/SASZ6RXJR%60J%5D01EM2F3%25U.png)

Be sure to turn on `Windows Subsystem for Linux` and `Virtual Machine Platform`

![img](How%20to%20build%20Unigraph%20locally%20on%20Windows%20Subsystem%20for%20Linux/ODB2%7D6ULT7QNTI%7BC6VCUJ%7BJ.png)

The following steps can be found in [Manual installation steps for older versions of WSL | Microsoft Docs](https://docs.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)

Of course, you can also install WSL through `wsl --isntall`, which is also recommended by Microsoft, but I haven’t tried it, so I can provide with you no help. Maybe you can take a look at [Install WSL | Microsoft Docs](https://docs.microsoft.com/en-us/windows/wsl/install)

## Install dependencies

### Change repos

You may want to change the notoriously old Ubuntu default repos[^1] , and I am gonna change them to sources provided by 163.

```bash
sudo vim /etc/apt/sources.list
```

Add the following lines.

```
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb http://mirrors.163.com/ubuntu/ focal main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ focal-security main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ focal-updates main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ focal-backports main restricted universe multiverse
# deb-src http://mirrors.163.com/ubuntu/ focal main restricted universe multiverse
# deb-src http://mirrors.163.com/ubuntu/ focal-security main restricted universe multiverse
# deb-src http://mirrors.163.com/ubuntu/ focal-updates main restricted universe multiverse
# deb-src http://mirrors.163.com/ubuntu/ focal-backports main restricted universe multiverse
# 预发布软件源，不建议启用
# deb http://mirrors.163.com/ubuntu/ focal-proposed main restricted universe multiverse
# deb-src http://mirrors.163.com/ubuntu/ focal-proposed main restricted universe multiverse
```

And do the updates.

```bash
sudo apt-get update
sudo apt-get upgrade
```

### Install Docker

#### Desktop Engine

Download and install [Docker Desktop 2.3.0.2](https://desktop.docker.com/win/main/amd64/Docker Desktop Installer.exe)

Be sure to turn on these options:

![image-20211206193153668](How%20to%20build%20Unigraph%20locally%20on%20Windows%20Subsystem%20for%20Linux/image-20211206193153668.png)

![image-20211206193243794](How%20to%20build%20Unigraph%20locally%20on%20Windows%20Subsystem%20for%20Linux/image-20211206193243794.png)

#### Install Docker Engine-Community

Install dependencies.

```bash
sudo apt install apt-transport-https ca-certificates curl gnupg2 software-properties-common
```

Add GPG keys:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Or maybe you wang a mirror source from Aliyun if you are in China?

```bash
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
```

For amd64 machines, add the official repository:

```bash
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) \
  stable"
```

Or a mirror repository from Tsinghua University:

```bash
sudo add-apt-repository \
   "deb [arch=amd64] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

Or from Aliyun:

```bash
sudo add-apt-repository \
    "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \
    $(lsb_release -cs) \
    stable"
```

For arm machines, please run:

```bash
echo "deb [arch=armhf] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu \
     $(lsb_release -cs) stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list
```

Update apt package index:

```bash
sudo apt update
```

Install Docker Engine-Community:

```bash
sudo apt install docker-ce
```

As your use is not in the docker group by default, you should add your user into the docker group by doing this:[^2]

```bash
sudo usermod -aG docker youruser && newgrp docker
```

**where `youruser` should be changed into your own username.** Otherwise you may face this:

```bash
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/version": dial unix /var/run/docker.sock: connect: permission denied
```

Start docker service.

**As you are using WSL, you should use `sysvinit` instead of `systemctl`** 

```bash
sudo service docker start
```

Don’t forget to do this again after restart!

Now check if everything’s right:

```bash
docker version
```

If you are getting things like this, everything’s going well:

```bash
jerrywcy@USER-20210911EH:~$ docker version
Client: Docker Engine - Community
 Version:           20.10.11
 API version:       1.41
 Go version:        go1.16.9
 Git commit:        dea9396
 Built:             Thu Nov 18 00:37:06 2021
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true

Server: Docker Engine - Community
 Engine:
  Version:          20.10.11
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.16.9
  Git commit:       847da18
  Built:            Thu Nov 18 00:35:15 2021
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.4.12
  GitCommit:        7b11cfaabd73bb80907dd23182b9347b4245eb5d
 runc:
  Version:          1.0.2
  GitCommit:        v1.0.2-0-g52b36a2
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```

### Install other dependencies

```bash
sudo apt install golang gcc g++ make yarn
```

## Build Dgraph

Thanks to great @101stWow, instead of building a custom dgraph binary from https://github.com/unigraph-dev/dgraph , we can now simply use Docker Compose to set up the required dgraph environment.

```bash
vim docker-compose.yml
```

And copy the contents below into `docker-compose.yml`:

```yaml
version: '3.3'
services:
  dgraph-zero:
    ports:
      - '5080:5080'
      - '6080:6080'
    restart: unless-stopped
    image: ebdm/unigraph-dgraph
    command: dgraph zero --my=dgraph-zero:5080
  dgraph-alpha:
    ports:
      - '9080:9080'
      - '8080:8080'
    restart: unless-stopped
    image: ebdm/unigraph-dgraph
    command: dgraph alpha --my=dgraph-alpha:7080 --zero=dgraph-zero:5080 --whitelist="172.22.0.0/24"
networks:
  default:
    driver: bridge
    ipam:
      driver: default
      config:
        - subnet: "172.22.0.0/24"
          gateway: "172.22.0.1"
```

Then simply 

```bash
sudo docker compose up
```

put my log here:

```bash
jerrywcy-dgraph-alpha-1  | [Decoder]: Using assembly version of decoder
jerrywcy-dgraph-zero-1   | [Decoder]: Using assembly version of decoder
jerrywcy-dgraph-alpha-1  | Page Size: 4096
jerrywcy-dgraph-alpha-1  | [Sentry] 2021/12/11 04:14:16 Integration installed: ContextifyFrames
jerrywcy-dgraph-alpha-1  | [Sentry] 2021/12/11 04:14:16 Integration installed: Environment
jerrywcy-dgraph-alpha-1  | [Sentry] 2021/12/11 04:14:16 Integration installed: Modules
jerrywcy-dgraph-alpha-1  | [Sentry] 2021/12/11 04:14:16 Integration installed: IgnoreErrors
jerrywcy-dgraph-zero-1   | Page Size: 4096
jerrywcy-dgraph-zero-1   | [Sentry] 2021/12/11 04:14:16 Integration installed: ContextifyFrames
jerrywcy-dgraph-zero-1   | [Sentry] 2021/12/11 04:14:16 Integration installed: Environment
jerrywcy-dgraph-zero-1   | [Sentry] 2021/12/11 04:14:16 Integration installed: Modules
jerrywcy-dgraph-zero-1   | [Sentry] 2021/12/11 04:14:16 Integration installed: IgnoreErrors
jerrywcy-dgraph-alpha-1  | [Decoder]: Using assembly version of decoder
jerrywcy-dgraph-zero-1   | [Decoder]: Using assembly version of decoder
jerrywcy-dgraph-alpha-1  | Page Size: 4096
jerrywcy-dgraph-alpha-1  | [Sentry] 2021/12/11 04:14:17 Integration installed: ContextifyFrames
jerrywcy-dgraph-alpha-1  | [Sentry] 2021/12/11 04:14:17 Integration installed: Environment
jerrywcy-dgraph-alpha-1  | [Sentry] 2021/12/11 04:14:17 Integration installed: Modules
jerrywcy-dgraph-alpha-1  | [Sentry] 2021/12/11 04:14:17 Integration installed: IgnoreErrors
jerrywcy-dgraph-zero-1   | Page Size: 4096
jerrywcy-dgraph-zero-1   | [Sentry] 2021/12/11 04:14:17 Integration installed: ContextifyFrames
jerrywcy-dgraph-zero-1   | [Sentry] 2021/12/11 04:14:17 Integration installed: Environment
jerrywcy-dgraph-zero-1   | [Sentry] 2021/12/11 04:14:17 Integration installed: Modules
jerrywcy-dgraph-zero-1   | [Sentry] 2021/12/11 04:14:17 Integration installed: IgnoreErrors
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.204845      16 sentry_integration.go:48] This instance of Dgraph will send anonymous reports of panics back to Dgraph Labs via Sentry. No confidential information is sent. These reports help improve Dgraph. To opt-out, restart your instance with the --enable-sentry=false flag. For more info, see https://dgraph.io/docs/howto/#data-handling.
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.207180      16 util_ee.go:126] KeyReader instantiated of type <nil>
jerrywcy-dgraph-zero-1   | I1211 04:14:17.334430      16 sentry_integration.go:48] This instance of Dgraph will send anonymous reports of panics back to Dgraph Labs via Sentry. No confidential information is sent. These reports help improve Dgraph. To opt-out, restart your instance with the --enable-sentry=false flag. For more info, see https://dgraph.io/docs/howto/#data-handling.
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.353246      16 init.go:107]
jerrywcy-dgraph-alpha-1  |
jerrywcy-dgraph-alpha-1  | Dgraph version   : v20.11.0-gd72652e17
jerrywcy-dgraph-alpha-1  | Dgraph codename  : unnamed-mod
jerrywcy-dgraph-alpha-1  | Dgraph SHA-256   : 528ea41f3f6bc0f221c1d52986fa49af662449c42ec8003871ec4f55431f3647
jerrywcy-dgraph-alpha-1  | Commit SHA-1     : d72652e17
jerrywcy-dgraph-alpha-1  | Commit timestamp : 2021-11-23 15:20:40 +0000
jerrywcy-dgraph-alpha-1  | Branch           : master
jerrywcy-dgraph-alpha-1  | Go version       : go1.17.3
jerrywcy-dgraph-alpha-1  | jemalloc enabled : true
jerrywcy-dgraph-alpha-1  |
jerrywcy-dgraph-alpha-1  | For Dgraph official documentation, visit https://dgraph.io/docs/.
jerrywcy-dgraph-alpha-1  | For discussions about Dgraph     , visit https://discuss.dgraph.io.
jerrywcy-dgraph-alpha-1  |
jerrywcy-dgraph-alpha-1  | Licensed variously under the Apache Public License 2.0 and Dgraph Community License.
jerrywcy-dgraph-alpha-1  | Copyright 2015-2020 Dgraph Labs, Inc.
jerrywcy-dgraph-alpha-1  |
jerrywcy-dgraph-alpha-1  |
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.353288      16 run.go:683] x.Config: {PortOffset:0 QueryEdgeLimit:1000000 NormalizeNodeLimit:10000 MutationsNQuadLimit:1000000 PollInterval:1s GraphqlExtension:true GraphqlDebug:false GraphqlLambdaUrl:}
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.353320      16 run.go:684] x.WorkerConfig: {ExportPath:export NumPendingProposals:256 Tracing:0.01 MyAddr:dgraph-alpha:7080 ZeroAddr:[dgraph-zero:5080] TLSClientConfig:<nil> TLSServerConfig:<nil> ExpandEdge:true RaftId:0 WhiteListedIPRanges:[{Lower:172.22.0.0 Upper:172.22.0.255}] MaxRetries:-1 StrictMutations:false AclEnabled:false AbortOlderThan:5m0s SnapshotAfter:10000 ProposedGroupId:0 StartTime:2021-12-11 04:14:16.9080857 +0000 UTC m=+0.017130701 LudicrousMode:false LudicrousConcurrency:2000 EncryptionKey:**** LogRequest:0 HardSync:false}
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.353351      16 run.go:685] worker.Config: {PostingDir:p PostingDirCompression:1 PostingDirCompressionLevel:0 WALDir:w MutationsMode:0 AuthToken: PBlockCacheSize:697932185 PIndexCacheSize:375809638 WalCache:0 HmacSecret:**** AccessJwtTtl:0s RefreshJwtTtl:0s CachePercentage:0,65,35,0 CacheMb:0}
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.354719      16 storage.go:120] Init Raft Storage with snap: 0, first: 1, last: 0
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.354881      16 server_state.go:76] Setting Posting Dir Compression Level: 0
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.354917      16 server_state.go:120] Opening postings BadgerDB with options: {Dir:p ValueDir:p SyncWrites:false NumVersionsToKeep:2147483647 ReadOnly:false Logger:0x297c378 Compression:1 InMemory:false MemTableSize:67108864 BaseTableSize:2097152 BaseLevelSize:10485760 LevelSizeMultiplier:10 TableSizeMultiplier:2 MaxLevels:7 ValueThreshold:1024 NumMemtables:5 BlockSize:4096 BloomFalsePositive:0.01 BlockCacheSize:697932185 IndexCacheSize:375809638 NumLevelZeroTables:5 NumLevelZeroTablesStall:15 ValueLogFileSize:1073741823 ValueLogMaxEntries:1000000 NumCompactors:4 CompactL0OnClose:false ZSTDCompressionLevel:0 VerifyValueChecksum:false EncryptionKey:[] EncryptionKeyRotationDuration:240h0m0s BypassLockGuard:false ChecksumVerificationMode:0 DetectConflicts:false managedTxns:false maxBatchCount:0 maxBatchSize:0}
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.386123      16 log.go:34] All 0 tables opened in 0s
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.388966      16 log.go:34] Discard stats nextEmptySlot: 0
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.389034      16 log.go:34] Set nextTxnTs to 0
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.390395      16 groups.go:99] Current Raft Id: 0x0
jerrywcy-dgraph-alpha-1  | E1211 04:14:17.390404      16 groups.go:1137] Error during SubscribeForUpdates for prefix "\x00\x00\vdgraph.cors\x00": Unable to find any servers for group: 1. closer err: <nil>
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.390502      16 worker.go:104] Worker listening at address: [::]:7080
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.392052      16 run.go:515] Bringing up GraphQL HTTP API at 0.0.0.0:8080/graphql
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.392082      16 run.go:516] Bringing up GraphQL HTTP admin API at 0.0.0.0:8080/admin
jerrywcy-dgraph-alpha-1  | E1211 04:14:17.392130      16 groups.go:1137] Error during SubscribeForUpdates for prefix "\x00\x00\x15dgraph.graphql.schema\x00": Unable to find any servers for group: 1. closer err: <nil>
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.392250      16 run.go:548] gRPC server started.  Listening on port 9080
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.392257      16 run.go:549] HTTP server started.  Listening on port 8080
jerrywcy-dgraph-zero-1   | I1211 04:14:17.482930      16 init.go:107]
jerrywcy-dgraph-zero-1   |
jerrywcy-dgraph-zero-1   | Dgraph version   : v20.11.0-gd72652e17
jerrywcy-dgraph-zero-1   | Dgraph codename  : unnamed-mod
jerrywcy-dgraph-zero-1   | Dgraph SHA-256   : 528ea41f3f6bc0f221c1d52986fa49af662449c42ec8003871ec4f55431f3647
jerrywcy-dgraph-zero-1   | Commit SHA-1     : d72652e17
jerrywcy-dgraph-zero-1   | Commit timestamp : 2021-11-23 15:20:40 +0000
jerrywcy-dgraph-zero-1   | Branch           : master
jerrywcy-dgraph-zero-1   | Go version       : go1.17.3
jerrywcy-dgraph-zero-1   | jemalloc enabled : true
jerrywcy-dgraph-zero-1   |
jerrywcy-dgraph-zero-1   | For Dgraph official documentation, visit https://dgraph.io/docs/.
jerrywcy-dgraph-zero-1   | For discussions about Dgraph     , visit https://discuss.dgraph.io.
jerrywcy-dgraph-zero-1   |
jerrywcy-dgraph-zero-1   | Licensed variously under the Apache Public License 2.0 and Dgraph Community License.
jerrywcy-dgraph-zero-1   | Copyright 2015-2020 Dgraph Labs, Inc.
jerrywcy-dgraph-zero-1   |
jerrywcy-dgraph-zero-1   |
jerrywcy-dgraph-zero-1   | I1211 04:14:17.483054      16 run.go:185] Setting Config to: {bindall:true portOffset:0 nodeId:1 numReplicas:1 peer: w:zw rebalanceInterval:480000000000 tlsClientConfig:<nil>}
jerrywcy-dgraph-zero-1   | I1211 04:14:17.483524      16 run.go:98] Setting up grpc listener at: 0.0.0.0:5080
jerrywcy-dgraph-zero-1   | I1211 04:14:17.484506      16 run.go:98] Setting up http listener at: 0.0.0.0:6080
jerrywcy-dgraph-zero-1   | I1211 04:14:17.486239      16 storage.go:120] Init Raft Storage with snap: 0, first: 1, last: 0
jerrywcy-dgraph-zero-1   | I1211 04:14:17.486461      16 node.go:152] Setting raft.Config to: &{ID:1 peers:[] learners:[] ElectionTick:20 HeartbeatTick:1 Storage:0xc00030b540 Applied:0 MaxSizePerMsg:262144 MaxCommittedSizePerReady:67108864 MaxUncommittedEntriesSize:0 MaxInflightMsgs:256 CheckQuorum:false PreVote:true ReadOnlyOption:0 Logger:0x297c378 DisableProposalForwarding:false}
jerrywcy-dgraph-alpha-1  | I1211 04:14:17.490963      16 pool.go:162] CONNECTING to dgraph-zero:5080
jerrywcy-dgraph-zero-1   | I1211 04:14:17.494466      16 node.go:326] Group 0 found 0 entries
jerrywcy-dgraph-zero-1   | I1211 04:14:17.494534      16 raft.go:575] Starting a brand new node
jerrywcy-dgraph-zero-1   | I1211 04:14:17.494557      16 log.go:34] 1 became follower at term 0
jerrywcy-dgraph-zero-1   | I1211 04:14:17.494567      16 log.go:34] newRaft 1 [peers: [], term: 0, commit: 0, applied: 0, lastindex: 0, lastterm: 0]
jerrywcy-dgraph-zero-1   | I1211 04:14:17.494575      16 log.go:34] 1 became follower at term 1
jerrywcy-dgraph-zero-1   | I1211 04:14:17.494942      16 run.go:304] Running Dgraph Zero...
jerrywcy-dgraph-zero-1   | I1211 04:14:17.494929      16 node.go:189] Setting conf state to nodes:1
jerrywcy-dgraph-zero-1   | I1211 04:14:17.496525      16 raft.go:767] Done applying conf change at 0x1
jerrywcy-dgraph-zero-1   | E1211 04:14:17.496659      16 raft.go:458] While proposing CID: Not Zero leader. Aborting proposal: cid:"8386c319-4556-4f46-8fd7-2123993b7852" . Retrying...
jerrywcy-dgraph-zero-1   | I1211 04:14:17.501428      16 zero.go:429] Got connection request: cluster_info_only:true
jerrywcy-dgraph-zero-1   | I1211 04:14:17.501573      16 log.go:34] 1 no leader at term 1; dropping index reading msg
jerrywcy-dgraph-alpha-1  | E1211 04:14:18.391149      16 groups.go:1137] Error during SubscribeForUpdates for prefix "\x00\x00\vdgraph.cors\x00": Unable to find any servers for group: 1. closer err: <nil>
jerrywcy-dgraph-alpha-1  | E1211 04:14:18.392379      16 groups.go:1137] Error during SubscribeForUpdates for prefix "\x00\x00\x15dgraph.graphql.schema\x00": Unable to find any servers for group: 1. closer err: <nil>
jerrywcy-dgraph-alpha-1  | E1211 04:14:19.391628      16 groups.go:1137] Error during SubscribeForUpdates for prefix "\x00\x00\vdgraph.cors\x00": Unable to find any servers for group: 1. closer err: <nil>
jerrywcy-dgraph-alpha-1  | E1211 04:14:19.392827      16 groups.go:1137] Error during SubscribeForUpdates for prefix "\x00\x00\x15dgraph.graphql.schema\x00": Unable to find any servers for group: 1. closer err: <nil>
jerrywcy-dgraph-zero-1   | W1211 04:14:19.502464      16 node.go:681] [0x1] Read index context timed out
jerrywcy-dgraph-zero-1   | I1211 04:14:19.502532      16 log.go:34] 1 no leader at term 1; dropping index reading msg
jerrywcy-dgraph-zero-1   | I1211 04:14:19.695537      16 log.go:34] 1 is starting a new election at term 1
jerrywcy-dgraph-zero-1   | I1211 04:14:19.695603      16 log.go:34] 1 became pre-candidate at term 1
jerrywcy-dgraph-zero-1   | I1211 04:14:19.695608      16 log.go:34] 1 received MsgPreVoteResp from 1 at term 1
jerrywcy-dgraph-zero-1   | I1211 04:14:19.695641      16 log.go:34] 1 became candidate at term 2
jerrywcy-dgraph-zero-1   | I1211 04:14:19.695643      16 log.go:34] 1 received MsgVoteResp from 1 at term 2
jerrywcy-dgraph-zero-1   | I1211 04:14:19.695650      16 log.go:34] 1 became leader at term 2
jerrywcy-dgraph-zero-1   | I1211 04:14:19.695653      16 log.go:34] raft.node: 1 elected leader 1 at term 2
jerrywcy-dgraph-zero-1   | I1211 04:14:19.695692      16 raft.go:732] I've become the leader, updating leases.
jerrywcy-dgraph-zero-1   | I1211 04:14:19.695698      16 assign.go:42] Updated Lease id: 1. Txn Ts: 1
jerrywcy-dgraph-alpha-1  | E1211 04:14:20.392481      16 groups.go:1137] Error during SubscribeForUpdates for prefix "\x00\x00\vdgraph.cors\x00": Unable to find any servers for group: 1. closer err: <nil>
jerrywcy-dgraph-alpha-1  | E1211 04:14:20.393704      16 groups.go:1137] Error during SubscribeForUpdates for prefix "\x00\x00\x15dgraph.graphql.schema\x00": Unable to find any servers for group: 1. closer err: <nil>
jerrywcy-dgraph-zero-1   | E1211 04:14:20.499481      16 raft.go:458] While proposing CID: Not Zero leader. Aborting proposal: cid:"a04b420f-64d9-425a-a203-e44b6378e9d5" . Retrying...
jerrywcy-dgraph-alpha-1  | E1211 04:14:21.393400      16 groups.go:1137] Error during SubscribeForUpdates for prefix "\x00\x00\vdgraph.cors\x00": Unable to find any servers for group: 1. closer err: <nil>
jerrywcy-dgraph-alpha-1  | E1211 04:14:21.394548      16 groups.go:1137] Error during SubscribeForUpdates for prefix "\x00\x00\x15dgraph.graphql.schema\x00": Unable to find any servers for group: 1. closer err: <nil>
jerrywcy-dgraph-zero-1   | W1211 04:14:21.503173      16 node.go:681] [0x1] Read index context timed out
jerrywcy-dgraph-zero-1   | I1211 04:14:21.503381      16 zero.go:447] Connected: cluster_info_only:true
jerrywcy-dgraph-zero-1   | I1211 04:14:21.503947      16 zero.go:429] Got connection request: addr:"dgraph-alpha:7080"
jerrywcy-dgraph-zero-1   | I1211 04:14:21.504146      16 pool.go:162] CONNECTING to dgraph-alpha:7080
jerrywcy-dgraph-zero-1   | I1211 04:14:21.504242      16 zero.go:581] Connected: id:1 group_id:1 addr:"dgraph-alpha:7080"
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.504548      16 groups.go:127] Connected to group zero. Assigned group: 1
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.504576      16 groups.go:129] Raft Id after connection to Zero: 0x1
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.504587      16 draft.go:227] Node ID: 0x1 with GroupID: 1
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.504624      16 node.go:152] Setting raft.Config to: &{ID:1 peers:[] learners:[] ElectionTick:20 HeartbeatTick:1 Storage:0xc00012a050 Applied:0 MaxSizePerMsg:262144 MaxCommittedSizePerReady:67108864 MaxUncommittedEntriesSize:0 MaxInflightMsgs:256 CheckQuorum:false PreVote:true ReadOnlyOption:0 Logger:0x297c378 DisableProposalForwarding:false}
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.504682      16 node.go:326] Group 1 found 0 entries
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.504689      16 draft.go:1690] New Node for group: 1
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.504699      16 log.go:34] 1 became follower at term 0
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.504703      16 log.go:34] newRaft 1 [peers: [], term: 0, commit: 0, applied: 0, lastindex: 0, lastterm: 0]
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.504706      16 log.go:34] 1 became follower at term 1
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.504755      16 draft.go:177] Operation started with id: opRollup
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.504792      16 groups.go:149] Server is ready
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.504901      16 draft.go:1067] Found Raft progress: 0
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.505008      16 groups.go:801] Got address of a Zero leader: dgraph-zero:5080
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.505111      16 groups.go:815] Starting a new membership stream receive from dgraph-zero:5080.
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.505227      16 node.go:189] Setting conf state to nodes:1
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.505330      16 log.go:34] 1 is starting a new election at term 1
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.505377      16 log.go:34] 1 became pre-candidate at term 1
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.505382      16 log.go:34] 1 received MsgPreVoteResp from 1 at term 1
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.505393      16 log.go:34] 1 became candidate at term 2
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.505395      16 log.go:34] 1 received MsgVoteResp from 1 at term 2
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.505401      16 log.go:34] 1 became leader at term 2
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.505405      16 log.go:34] raft.node: 1 elected leader 1 at term 2
jerrywcy-dgraph-alpha-1  | I1211 04:14:21.506245      16 groups.go:832] Received first state update from Zero: counter:3 groups:<key:1 value:<members:<key:1 value:<id:1 group_id:1 addr:"dgraph-alpha:7080" > > > > zeros:<key:1 value:<id:1 addr:"dgraph-zero:5080" leader:true > > maxRaftId:1
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.393642      16 pool.go:162] CONNECTING to dgraph-alpha:7080
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.396432      16 admin.go:688] No GraphQL schema in Dgraph; serving empty GraphQL API
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.505632      16 groups.go:887] Leader idx=0x1 of group=1 is connecting to Zero for txn updates
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.505713      16 groups.go:899] Got Zero leader: dgraph-zero:5080
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.507489      16 groups.go:482] Serving tablet for: _predicate_
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.507592      16 draft.go:177] Operation started with id: opIndexing
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.507618      16 index.go:777] Deleting indexes for _predicate_
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.507658      16 draft.go:121] Operation completed with id: opRollup
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.530178      16 log.go:34] Rebuilding index for predicate _predicate_ (1/2): Created batch of size: 11 B in 49.6µs.
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.530236      16 log.go:34] Rebuilding index for predicate _predicate_ (1/2): Sent 0 keys
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.544952      16 draft.go:121] Operation completed with id: opIndexing
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.547088      16 groups.go:482] Serving tablet for: dgraph.cors
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.547226      16 draft.go:177] Operation started with id: opIndexing
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.547255      16 index.go:887] Computing prefix index for attr dgraph.cors and tokenizers []
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.547259      16 index.go:905] Deleting index for attr dgraph.cors and tokenizers [exact]
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.547284      16 index.go:777] Deleting indexes for dgraph.cors
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.547293      16 log.go:34] DropPrefix called for [
                                                                                           dgraph.cors 
    dgraph.cors
                  dgraph.cors 
                                 dgraph.cors]
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.547301      16 log.go:34] Writes flushed. Stopping compactions now...
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.569124      16 log.go:34] DropPrefix done
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.569198      16 log.go:34] Resuming writes
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.588583      16 log.go:34] Rebuilding index for predicate dgraph.cors (1/2): Created batch of size: 11 B in 15.3µs.
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.590102      16 log.go:34] Rebuilding index for predicate dgraph.cors (1/2): Sent 0 keys
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.598664      16 index.go:940] Rebuilding index for attr dgraph.cors and tokenizers [exact]
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.600319      16 groups.go:482] Serving tablet for: dgraph.type
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.613392      16 log.go:34] Rebuilding index for predicate dgraph.cors (1/2): Created batch of size: 11 B in 12.4µs.
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.613427      16 log.go:34] Rebuilding index for predicate dgraph.cors (1/2): Sent 0 keys
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.619520      16 mutation.go:188] Done schema update predicate:"dgraph.cors" value_type:STRING directive:INDEX tokenizer:"exact" list:true upsert:true
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.619662      16 draft.go:121] Operation completed with id: opIndexing
jerrywcy-dgraph-alpha-1  | E1211 04:14:22.619650      16 draft.go:704] Applying proposal. Error: operation opIndexing is already running. Proposal: "mutations:<group_id:1 start_ts:4 schema:<predicate:\"dgraph.type\" value_type:STRING directive:INDEX tokenizer:\"exact\" list:true > > key:\"01-5113849841247627159\" index:11 ".
jerrywcy-dgraph-alpha-1  | E1211 04:14:22.619937      16 groups.go:255] Error while proposing initial schema: operation opIndexing is already running
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.720503      16 draft.go:177] Operation started with id: opIndexing
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.720556      16 index.go:887] Computing prefix index for attr dgraph.type and tokenizers []
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.720560      16 index.go:905] Deleting index for attr dgraph.type and tokenizers [exact]
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.720623      16 index.go:777] Deleting indexes for dgraph.type
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.720629      16 log.go:34] DropPrefix called for [
                                                                                           dgraph.type 
    dgraph.type
                  dgraph.type 
                                 dgraph.type]
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.720638      16 log.go:34] Writes flushed. Stopping compactions now...
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.732823      16 log.go:34] DropPrefix done
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.732864      16 log.go:34] Resuming writes
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.746640      16 log.go:34] Rebuilding index for predicate dgraph.type (1/2): Created batch of size: 11 B in 13.7µs.
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.746674      16 log.go:34] Rebuilding index for predicate dgraph.type (1/2): Sent 0 keys
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.754604      16 index.go:940] Rebuilding index for attr dgraph.type and tokenizers [exact]
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.760460      16 groups.go:482] Serving tablet for: dgraph.drop.op
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.770982      16 log.go:34] Rebuilding index for predicate dgraph.type (1/2): Created batch of size: 11 B in 37.6µs.
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.771063      16 log.go:34] Rebuilding index for predicate dgraph.type (1/2): Sent 0 keys
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.777687      16 mutation.go:188] Done schema update predicate:"dgraph.type" value_type:STRING directive:INDEX tokenizer:"exact" list:true
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.777788      16 draft.go:121] Operation completed with id: opIndexing
jerrywcy-dgraph-alpha-1  | E1211 04:14:22.777782      16 draft.go:704] Applying proposal. Error: operation opIndexing is already running. Proposal: "mutations:<group_id:1 start_ts:5 schema:<predicate:\"dgraph.drop.op\" value_type:STRING > > key:\"01-17099267115193405001\" index:15 ".
jerrywcy-dgraph-alpha-1  | E1211 04:14:22.777894      16 groups.go:255] Error while proposing initial schema: operation opIndexing is already running
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.878638      16 draft.go:177] Operation started with id: opIndexing
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.878683      16 index.go:777] Deleting indexes for dgraph.drop.op
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.878729      16 draft.go:121] Operation completed with id: opIndexing
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.880428      16 groups.go:482] Serving tablet for: dgraph.graphql.schema
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.880518      16 draft.go:177] Operation started with id: opIndexing
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.880539      16 index.go:777] Deleting indexes for dgraph.graphql.schema
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.880584      16 draft.go:121] Operation completed with id: opIndexing
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.881697      16 groups.go:482] Serving tablet for: dgraph.graphql.xid
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.881778      16 draft.go:177] Operation started with id: opIndexing
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.881793      16 index.go:887] Computing prefix index for attr dgraph.graphql.xid and tokenizers []
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.881796      16 index.go:905] Deleting index for attr dgraph.graphql.xid and tokenizers [exact]
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.881819      16 index.go:777] Deleting indexes for dgraph.graphql.xid
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.881823      16 log.go:34] DropPrefix called for [dgraph.graphql.xid dgraph.graphql.xid dgraph.graphql.xid dgraph.graphql.xid]
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.881830      16 log.go:34] Writes flushed. Stopping compactions now...
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.894950      16 log.go:34] DropPrefix done
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.895009      16 log.go:34] Resuming writes
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.895064      16 index.go:940] Rebuilding index for attr dgraph.graphql.xid and tokenizers [exact]
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.896327      16 groups.go:482] Serving tablet for: dgraph.graphql.schema_history
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.909184      16 log.go:34] Rebuilding index for predicate dgraph.graphql.xid (1/2): Created batch of size: 11 B in 12.6µs.
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.909245      16 log.go:34] Rebuilding index for predicate dgraph.graphql.xid (1/2): Sent 0 keys
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.917229      16 mutation.go:188] Done schema update predicate:"dgraph.graphql.xid" value_type:STRING directive:INDEX tokenizer:"exact" upsert:true
jerrywcy-dgraph-alpha-1  | E1211 04:14:22.917322      16 draft.go:704] Applying proposal. Error: operation opIndexing is already running. Proposal: "mutations:<group_id:1 start_ts:8 schema:<predicate:\"dgraph.graphql.schema_history\" value_type:STRING > > key:\"01-3410066306186783340\" index:25 ".
jerrywcy-dgraph-alpha-1  | I1211 04:14:22.917344      16 draft.go:121] Operation completed with id: opIndexing
jerrywcy-dgraph-alpha-1  | E1211 04:14:22.917379      16 groups.go:255] Error while proposing initial schema: operation opIndexing is already running
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.017977      16 draft.go:177] Operation started with id: opIndexing
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.018053      16 index.go:777] Deleting indexes for dgraph.graphql.schema_history
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.018103      16 draft.go:121] Operation completed with id: opIndexing
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.041398      16 groups.go:482] Serving tablet for: dgraph.graphql.schema_created_at
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.041575      16 draft.go:177] Operation started with id: opIndexing
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.041620      16 index.go:777] Deleting indexes for dgraph.graphql.schema_created_at
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.041693      16 draft.go:121] Operation completed with id: opIndexing
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.043141      16 groups.go:482] Serving tablet for: dgraph.graphql.p_query
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.043259      16 draft.go:177] Operation started with id: opIndexing
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.043282      16 index.go:777] Deleting indexes for dgraph.graphql.p_query
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.043330      16 draft.go:121] Operation completed with id: opIndexing
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.044498      16 groups.go:482] Serving tablet for: dgraph.graphql.p_sha256hash
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.044628      16 draft.go:177] Operation started with id: opIndexing
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.044652      16 index.go:887] Computing prefix index for attr dgraph.graphql.p_sha256hash and tokenizers []
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.044655      16 index.go:905] Deleting index for attr dgraph.graphql.p_sha256hash and tokenizers [exact]
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.044683      16 index.go:777] Deleting indexes for dgraph.graphql.p_sha256hash
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.044688      16 log.go:34] DropPrefix called for [graph.graphql.p_sha256hash graph.graphql.p_sha256hash graph.graphql.p_sha256hash graph.graphql.p_sha256hash]
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.044696      16 log.go:34] Writes flushed. Stopping compactions now...
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.213359      16 log.go:34] DropPrefix done
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.213424      16 log.go:34] Resuming writes
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.213520      16 index.go:940] Rebuilding index for attr dgraph.graphql.p_sha256hash and tokenizers [exact]
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.224472      16 access_ee.go:389] ResetAcl closed
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.224496      16 access_ee.go:311] RefreshAcls closed
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.249112      16 log.go:34] Rebuilding index for predicate dgraph.graphql.p_sha256hash (1/2): Created batch of size: 11 B in 12.8µs.
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.249148      16 log.go:34] Rebuilding index for predicate dgraph.graphql.p_sha256hash (1/2): Sent 0 keys
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.261037      16 mutation.go:188] Done schema update predicate:"dgraph.graphql.p_sha256hash" value_type:STRING directive:INDEX tokenizer:"exact"
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.261244      16 draft.go:121] Operation completed with id: opIndexing
jerrywcy-dgraph-zero-1   | I1211 04:14:23.500914      16 raft.go:451] CID set for cluster: f8275f13-e763-4897-a3c1-2716cc2fd566
jerrywcy-dgraph-zero-1   | I1211 04:14:23.501006      16 license_ee.go:45] Enterprise trial license proposed to the cluster: key:"z1-11914236309491430818" license:<maxNodes:18446744073709551615 expiryTs:1641788063 >
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.527918      16 graphql.go:39] ResetCors closed
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.527974      16 run.go:799] Updating cors from subscription.
jerrywcy-dgraph-alpha-1  | I1211 04:14:23.527983      16 run.go:823] Updating cors origins: [*]
jerrywcy-dgraph-alpha-1  | I1211 04:14:32.545381      16 draft.go:177] Operation started with id: opRollup
jerrywcy-dgraph-alpha-1  | I1211 04:14:33.046404      16 run.go:799] Updating cors from subscription.
jerrywcy-dgraph-alpha-1  | I1211 04:14:33.046441      16 run.go:823] Updating cors origins: [*]
jerrywcy-dgraph-alpha-1  | I1211 04:15:21.506589      16 draft.go:603] Creating snapshot at index: 45. ReadTs: 16.
jerrywcy-dgraph-zero-1   | I1211 04:15:27.507004      16 oracle.go:124] Purged below ts:16, len(o.commits):0, keyCommit: [before: {NextPage:3 NumNodes:2 NumLeafNodes:1 NumLeafKeys:3 Bytes:8192 Occupancy:0.7843137254901961 FreePages:0}, after: {NextPage:3 NumNodes:2 NumLeafNodes:1 NumLeafKeys:3 Bytes:8192 Occupancy:0.7843137254901961 FreePages:0}]
```

Now open up another window for WSL, run the commands below in window #2.

## Install nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

## Install node v15.14.0

```bash
sudo nvm install 15.14.0
sudo nvm use 15.14.0
```

## Install yarn

```bash
npm i -g corepack
corepack enable
yarn --version
```

and you should see

```bash
1.22.15
```

or something like that



## set up Unigraph

```bash
git clone https://github.com/unigraph-dev/unigraph-dev.git
cd unigraph-dev/
```

and 

```bash
yarn
yarn run build-deps && yarn run backend-start
```

Now open up another window for WSL, run the commands below in window #3.

```bash
yarn run explorer-start
```

and a explorer window should pop up.

## Debugging

### 1

#### Problem met

```bash
jerrywcy@USER-20210911EH:~$ sudo docker compose up
[sudo] password for jerrywcy:
Attaching to jerrywcy-dgraph-alpha-1, jerrywcy-dgraph-zero-1
Error response from daemon: Ports are not available: listen tcp 0.0.0.0:6080: bind: An attempt was made to access a socket in a way forbidden by its access permissions.
```



## Reference

- [Docker Desktop WSL 2 backend | Docker Documentation](https://docs.docker.com/desktop/windows/wsl/)
- [ubuntu20.04 LTS 更换国内163源、阿里源、清华源、中科大源 - zqifa - 博客园 (cnblogs.com)](https://www.cnblogs.com/zqifa/p/12910989.html)
- [ubuntu 20.04 LTS 安装docker - 进步号无人货运飞船 - 博客园 (cnblogs.com)](https://www.cnblogs.com/songxi/p/12788249.html)
- [[Fixed\] "System has not been booted with systemd as init system" Error (linuxhandbook.com)](https://linuxhandbook.com/system-has-not-been-booted-with-systemd/)



[^1]: According to @101stArrow
[^2]: thanks to @JMP

