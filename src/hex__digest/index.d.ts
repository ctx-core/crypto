import type { digest__algorithm_T } from '../_types'
export declare function hex__digest(
	algorithm:digest__algorithm_T,
	message:string|BufferSource
):Promise<string>
