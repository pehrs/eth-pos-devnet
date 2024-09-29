# Ethereum Proof-of-Stake Devnet

Fork from https://github.com/islishude/eth-pos-devnet (https://github.com/OffchainLabs/eth-pos-devnet)

Refer to https://docs.prylabs.network/docs/advanced/proof-of-stake-devnet for the details

## Prerequisites

- A recent version of [docker](https://docs.docker.com/engine/install/)

## Quick start

**Clean and reset all data**

```
make clean
```

**Init genesis**

If you would like to fund an address you have, just use the following enviroment variables when running `make init`

```

GENESIS_ADDRESS=0x63a37a13FF3C47a3d3DA555ec2702BE4B266D1f8 \
    GENESIS_BALANCE_default=0xfffffffffffffffffffff \
    make init

```

And the resulting [genesis.json](data/geth/genesis.json) will contain:

```json
{
  "63a37a13FF3C47a3d3DA555ec2702BE4B266D1f8": {
    "balance": "0xfffffffffffffffffffff"
  }
}
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
2. `0x4e59b44847b379578588920ca78fbf26c0b4956c` the [deterministic create2 deployer](https://github.com/Arachnid/deterministic-deployment-proxy)
3. `0x13b0D85CcB8bf860b6b79AF3029fCA081AE9beF2` the [create2 deployer](https://github.com/pcaversaccio/create2deployer) without ownership
4. `0x000F3df6D732807Ef1319fB7B8bB8522d0Beac02` the EIP-4788 Beacon Roots contract
5. `0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24` the EIP-1820 Pseudo-introspection Registry Contract

## Custom block pruducing period

Update it in the `config/config.yml`

```
SECONDS_PER_SLOT: 3
SLOTS_PER_EPOCH: 6
```

## The fee recipient address for testing

```
WARNING: These accounts, and their private keys, are publicly known.
Any funds sent to them on Mainnet or any other live network WILL BE LOST.

Mnemonic

test test test test test test test test test test test junk

Address

0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

key

0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff8
```
