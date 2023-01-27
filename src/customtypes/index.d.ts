import { email } from './email';
import { enumerable } from './enumerable';
import { guid } from './guid';
import { phone } from './phone';
import { regex } from './regex';
import { url } from './url';

export declare interface CustomTypes {
	email: ReturnType<typeof email>;
	enumerable: ReturnType<typeof enumerable>;
	guid: ReturnType<typeof guid>;
	phone: ReturnType<typeof phone>;
	regex: ReturnType<typeof regex>;
	url: ReturnType<typeof url>;
}
