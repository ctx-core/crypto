import { crypto } from '../crypto/index.js'
/**
 * @param {import('./index.d.ts').crypto__sign__algorithm_T}algorithm
 * @param {CryptoKey}key
 * @param {BufferSource}data
 * @returns {Promise<ArrayBuffer>}
 */
export async function sign(
	algorithm,
	key,
	data
) {
	if (typeof data === 'string') {
		data = new TextEncoder().encode(data)
	}
	return crypto.subtle.sign(algorithm, key, data)
}
