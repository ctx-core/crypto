import type { crypto__sign__algorithm_T } from '../_types'
export declare function sign(
	algorithm:crypto__sign__algorithm_T,
	key:CryptoKey,
	data:BufferSource|string
):Promise<ArrayBuffer>
