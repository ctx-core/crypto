import type { digest__algorithm_T } from '../_types'
export declare function hmac_(
	algorithm:digest__algorithm_T,
	key:string|BufferSource|CryptoKey,
	data:string|BufferSource
):Promise<string>
