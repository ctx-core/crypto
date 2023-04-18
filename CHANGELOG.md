# @ctx-core/crypto

## 1.2.14

### Patch Changes

- @ctx-core/dev-tools: 8.1.94 -> 8.1.107
- @pnpm/list: ^9.0.2 -> ^9.0.3
- @ctx-core/queue: ^7.5.1 -> ^7.5.13
- pnpm: 8.2.0 -> 8.3.0
- @ctx-core/build: 1.0.281 -> 1.0.295
- @ctx-core/git-tools: ^7.0.45 -> ^7.0.57
- @ctx-core/monorepo: ^20.1.0 -> ^20.2.1
- @pnpm/sort-packages: ^5.0.0 -> ^5.0.1

## 1.2.0

### Minor Changes

- crypto: globalThis.crypto only: - import('node:crypto').then($=>$.webcrypto)
- - crypto\_(): return globalThis.crypto || import('node:crypto').then($=>$.webcrypto)

## 1.1.2

### Patch Changes

- crypto: fix: fallback to await import('node:crypto').then($=>$.webcrypto)

## 1.1.1

### Patch Changes

- crypto: - node:crypto: only use globalThis.crypto

## 1.1.0

### Minor Changes

- - crypto**sign**algorithm_T
- - sign
- - digest\_\_algorithm_T
- - hex\_\_digest
- - hmac\_
- - buffer\__hex_
- - hmac*key*

## 1.0.1

### Patch Changes

- attribution

## 1.0.0

### Major Changes

- - crypto
