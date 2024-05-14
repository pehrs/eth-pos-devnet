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

## Genesis contract

1. `0x4242424242424242424242424242424242424242` the deposit contract
2. `0x4e59b44847b379578588920ca78fbf26c0b4956c` the create2 deployer
3. `0x000F3df6D732807Ef1319fB7B8bB8522d0Beac02` and its deployer`0x0B799C86a49DEeb90402691F1041aa3AF2d3C875` the EIP-4788 Beacon Roots contract.

## The fee recipient address for testing

**Note: Do NOT send real ETH to the address.**

```
Address 0x123463a4b065722e99115d6c222f267d9cabb524
The private key 2e0834786285daccd064ca17f1654f67b4aef298acbb82cef9ec422fb4975622
```
