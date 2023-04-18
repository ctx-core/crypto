# @ctx-core/crypto

## 1.2.19

### Patch Changes

- @ctx-core/monorepo: ^20.3.1 -> ^20.3.2
- @ctx-core/dev-tools: 8.1.111 -> 8.1.112
- @ctx-core/function: ^21.17.16 -> ^21.17.17
- @ctx-core/queue: ^7.5.18 -> ^7.5.19
- @ctx-core/git-tools: ^7.0.61 -> ^7.0.62
- @ctx-core/build: 1.0.299 -> 1.0.300
- @ctx-core/ctx-core-package-tools: ^8.0.191 -> ^8.0.192

## 1.2.18

### Patch Changes

- @ctx-core/monorepo: ^20.3.0 -> ^20.3.1
- @ctx-core/git-tools: ^7.0.60 -> ^7.0.61
- @ctx-core/function: ^21.17.15 -> ^21.17.16
- @ctx-core/dev-tools: 8.1.110 -> 8.1.111
- @ctx-core/build: 1.0.298 -> 1.0.299
- @ctx-core/ctx-core-package-tools: ^8.0.190 -> ^8.0.191
- @ctx-core/queue: ^7.5.17 -> ^7.5.18

## 1.2.17

### Patch Changes

- @ctx-core/queue: ^7.5.16 -> ^7.5.17
- @ctx-core/dev-tools: 8.1.109 -> 8.1.110
- @ctx-core/git-tools: ^7.0.59 -> ^7.0.60
- @ctx-core/monorepo: ^20.2.3 -> ^20.3.0
- @ctx-core/ctx-core-package-tools: ^8.0.189 -> ^8.0.190
- @ctx-core/build: 1.0.297 -> 1.0.298
- @ctx-core/function: ^21.17.14 -> ^21.17.15

## 1.2.16

### Patch Changes

- @ctx-core/git-tools: ^7.0.58 -> ^7.0.59
- @ctx-core/queue: ^7.5.15 -> ^7.5.16
- @ctx-core/build: 1.0.296 -> 1.0.297
- @ctx-core/monorepo: ^20.2.2 -> ^20.2.3
- @ctx-core/ctx-core-package-tools: ^8.0.188 -> ^8.0.189
- @ctx-core/dev-tools: 8.1.108 -> 8.1.109
- @ctx-core/function: ^21.17.13 -> ^21.17.14

## 1.2.15

### Patch Changes

- @ctx-core/dev-tools: 8.1.107 -> 8.1.108
- @ctx-core/build: 1.0.295 -> 1.0.296
- @ctx-core/git-tools: ^7.0.57 -> ^7.0.58
- @ctx-core/ctx-core-package-tools: ^8.0.187 -> ^8.0.188
- @ctx-core/monorepo: ^20.2.1 -> ^20.2.2
- @ctx-core/function: ^21.17.12 -> ^21.17.13
- @ctx-core/queue: ^7.5.13 -> ^7.5.15

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
