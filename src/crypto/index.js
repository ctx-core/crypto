/**
 * @type {Crypto}
 * @see {@link https://stackoverflow.com/a/70981544/142571}
 */
export const crypto =
	globalThis.crypto
	|| await import('node:crypto').then($=>$.webcrypto)
