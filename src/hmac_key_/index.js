import { crypto } from '../crypto/index.js'
/**
 * @param {import('../_types').digest__algorithm_T}algorithm
 * @param {string|BufferSource}key
 * @returns {Promise<CryptoKey>}
 * @see https://lukasmurdock.com/web-hmac/
 * @private
 */
export function hmac_key_(
	algorithm,
	key
) {
	if (typeof key === 'string') {
		const encoder = new TextEncoder()
		key = encoder.encode(key)
	}
	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey
	 */
	return crypto.subtle.importKey(
		'raw',
		key,
		{
			name: 'HMAC',
			hash: algorithm
		},
		true,
		['sign', 'verify'])
}
