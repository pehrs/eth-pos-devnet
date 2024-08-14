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
GENESIS_ADDRESS=0x0001aEBC06288F578Eb01002a99E854cED86bC4F
# the default balance
GENESIS_BALANCE_default=0xfffffffffffffffffffff
GENESIS_BALANCE_0x0001aEBC06288F578Eb01002a99E854cED86bC4F=0x64
GENESIS_NONCE_0x0002538C7BB308B5042f279e2C10b466b80797C9=0x1
GENESIS_CODE_0x0002538C7BB308B5042f279e2C10b466b80797C9=0x363d3d373d3d3d363d73bebebebebebebebebebebebebebebebebebebebe5af43d82803e903d91602b57fd5bf3
```

And the result will be

```json
{
  "0001aebc06288f578eb01002a99e854ced86bc4f": {
    "balance": "0x64"
  },
  "0002538c7bb308b5042f279e2c10b466b80797c9": {
    "nonce": "0x1",
    "code": "0x363d3d373d3d3d363d73bebebebebebebebebebebebebebebebebebebebe5af43d82803e903d91602b57fd5bf3",
    "balance": "0x0"
  },
  "000352a341aac0a2437c33edceada93bf4908fd8": {
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
