# @ctx-core/crypto

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
