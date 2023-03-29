import type { digest__algorithm_T } from '../_types'
export declare function hmac_key_(
	algorithm:digest__algorithm_T,
	key:string|BufferSource
):Promise<CryptoKey>
