# Ethereum Proof-of-Stake Devnet

Fork from https://github.com/OffchainLabs/eth-pos-devnet and support cancun/deneb fork

Refer to https://docs.prylabs.network/docs/advanced/proof-of-stake-devnet for the details

## Prerequisites

- the `latest` docker-compose, the compose file requires version 2.24.0

## Quick start

**Clean and reset all data**

```
make clean
```

**Init genesis**

If you would like to fund address you have, just add `.env` file with following configurations

```
# comma separated address
GENESIS_ADDRESS=
# funding amount
GENESIS_AMOUNT=0xfffffffffffffffffffff
```

```
make init
```

**Start**

```
make start
```

## The fee recipient address for testing

**Note: Do NOT send real ETH to the address.**

```
Address 0x123463a4b065722e99115d6c222f267d9cabb524
The private key 2e0834786285daccd064ca17f1654f67b4aef298acbb82cef9ec422fb4975622
```
