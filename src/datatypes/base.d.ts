declare interface DataType<T extends object> {
	name: string;
	parse(key: keyof T, value: unknown): unknown;
	requiredCheck(key: keyof T, value: unknown): boolean;
	strictCheck(): boolean;
	validCheck(): boolean;
	default(value: unknown): any;
	from(key: keyof T, options: Record<string, unknown>): any;
	nullable(): any;
	required(): any;
	strict(): any;
	transform(fn: (value: unknown) => unknown, type: 'post' | 'pre'): any;
}

export declare function base<T extends object>(): DataType<T>;
