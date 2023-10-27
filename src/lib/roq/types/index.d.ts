/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model equipment
 *
 */
export type equipment = $Result.DefaultSelection<Prisma.$equipmentPayload>;
/**
 * Model invoice
 *
 */
export type invoice = $Result.DefaultSelection<Prisma.$invoicePayload>;
/**
 * Model payment
 *
 */
export type payment = $Result.DefaultSelection<Prisma.$paymentPayload>;
/**
 * Model rental
 *
 */
export type rental = $Result.DefaultSelection<Prisma.$rentalPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **equipment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Equipment
   * const equipment = await prisma.equipment.findMany()
   * ```
   */
  get equipment(): Prisma.equipmentDelegate<ExtArgs>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **invoice** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Invoices
   * const invoices = await prisma.invoice.findMany()
   * ```
   */
  get invoice(): Prisma.invoiceDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **payment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Payments
   * const payments = await prisma.payment.findMany()
   * ```
   */
  get payment(): Prisma.paymentDelegate<ExtArgs>;

  /**
   * `prisma.rental`: Exposes CRUD operations for the **rental** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Rentals
   * const rentals = await prisma.rental.findMany()
   * ```
   */
  get rental(): Prisma.rentalDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    company: 'company';
    equipment: 'equipment';
    invoice: 'invoice';
    payment: 'payment';
    rental: 'rental';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'equipment' | 'invoice' | 'payment' | 'rental' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      equipment: {
        payload: Prisma.$equipmentPayload<ExtArgs>;
        fields: Prisma.equipmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.equipmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.equipmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload>;
          };
          findFirst: {
            args: Prisma.equipmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.equipmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload>;
          };
          findMany: {
            args: Prisma.equipmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload>[];
          };
          create: {
            args: Prisma.equipmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload>;
          };
          createMany: {
            args: Prisma.equipmentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.equipmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload>;
          };
          update: {
            args: Prisma.equipmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload>;
          };
          deleteMany: {
            args: Prisma.equipmentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.equipmentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.equipmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$equipmentPayload>;
          };
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEquipment>;
          };
          groupBy: {
            args: Prisma.equipmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EquipmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.equipmentCountArgs<ExtArgs>;
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number;
          };
        };
      };
      invoice: {
        payload: Prisma.$invoicePayload<ExtArgs>;
        fields: Prisma.invoiceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.invoiceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.invoiceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>;
          };
          findFirst: {
            args: Prisma.invoiceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.invoiceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>;
          };
          findMany: {
            args: Prisma.invoiceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>[];
          };
          create: {
            args: Prisma.invoiceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>;
          };
          createMany: {
            args: Prisma.invoiceCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.invoiceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>;
          };
          update: {
            args: Prisma.invoiceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>;
          };
          deleteMany: {
            args: Prisma.invoiceDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.invoiceUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.invoiceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>;
          };
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInvoice>;
          };
          groupBy: {
            args: Prisma.invoiceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InvoiceGroupByOutputType>[];
          };
          count: {
            args: Prisma.invoiceCountArgs<ExtArgs>;
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number;
          };
        };
      };
      payment: {
        payload: Prisma.$paymentPayload<ExtArgs>;
        fields: Prisma.paymentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.paymentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.paymentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          findFirst: {
            args: Prisma.paymentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.paymentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          findMany: {
            args: Prisma.paymentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[];
          };
          create: {
            args: Prisma.paymentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          createMany: {
            args: Prisma.paymentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.paymentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          update: {
            args: Prisma.paymentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          deleteMany: {
            args: Prisma.paymentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.paymentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.paymentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePayment>;
          };
          groupBy: {
            args: Prisma.paymentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PaymentGroupByOutputType>[];
          };
          count: {
            args: Prisma.paymentCountArgs<ExtArgs>;
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number;
          };
        };
      };
      rental: {
        payload: Prisma.$rentalPayload<ExtArgs>;
        fields: Prisma.rentalFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.rentalFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.rentalFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          findFirst: {
            args: Prisma.rentalFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.rentalFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          findMany: {
            args: Prisma.rentalFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>[];
          };
          create: {
            args: Prisma.rentalCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          createMany: {
            args: Prisma.rentalCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.rentalDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          update: {
            args: Prisma.rentalUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          deleteMany: {
            args: Prisma.rentalDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.rentalUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.rentalUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rentalPayload>;
          };
          aggregate: {
            args: Prisma.RentalAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRental>;
          };
          groupBy: {
            args: Prisma.rentalGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RentalGroupByOutputType>[];
          };
          count: {
            args: Prisma.rentalCountArgs<ExtArgs>;
            result: $Utils.Optional<RentalCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    equipment: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | CompanyCountOutputTypeCountEquipmentArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountEquipmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: equipmentWhereInput;
  };

  /**
   * Count Type EquipmentCountOutputType
   */

  export type EquipmentCountOutputType = {
    rental: number;
  };

  export type EquipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | EquipmentCountOutputTypeCountRentalArgs;
  };

  // Custom InputTypes

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the EquipmentCountOutputType
       */
      select?: EquipmentCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountRentalArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: rentalWhereInput;
  };

  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    payment: number;
  };

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | InvoiceCountOutputTypeCountPaymentArgs;
  };

  // Custom InputTypes

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountPaymentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: paymentWhereInput;
  };

  /**
   * Count Type RentalCountOutputType
   */

  export type RentalCountOutputType = {
    invoice: number;
  };

  export type RentalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | RentalCountOutputTypeCountInvoiceArgs;
  };

  // Custom InputTypes

  /**
   * RentalCountOutputType without action
   */
  export type RentalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalCountOutputType
     */
    select?: RentalCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * RentalCountOutputType without action
   */
  export type RentalCountOutputTypeCountInvoiceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: invoiceWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    company: number;
    equipment: number;
    invoice: number;
    payment: number;
    rental: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    equipment?: boolean | UserCountOutputTypeCountEquipmentArgs;
    invoice?: boolean | UserCountOutputTypeCountInvoiceArgs;
    payment?: boolean | UserCountOutputTypeCountPaymentArgs;
    rental?: boolean | UserCountOutputTypeCountRentalArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEquipmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: equipmentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: invoiceWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: paymentWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    zip_code: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      city?: boolean;
      state?: boolean;
      zip_code?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      equipment?: boolean | company$equipmentArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    equipment?: boolean | company$equipmentArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      equipment: Prisma.$equipmentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        zip_code: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    equipment<T extends company$equipmentArgs<ExtArgs> = {}>(
      args?: Subset<T, company$equipmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly city: FieldRef<'company', 'String'>;
    readonly state: FieldRef<'company', 'String'>;
    readonly zip_code: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.equipment
   */
  export type company$equipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: equipmentInclude<ExtArgs> | null;
    where?: equipmentWhereInput;
    orderBy?: equipmentOrderByWithRelationInput | equipmentOrderByWithRelationInput[];
    cursor?: equipmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null;
    _min: EquipmentMinAggregateOutputType | null;
    _max: EquipmentMaxAggregateOutputType | null;
  };

  export type EquipmentMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: string | null;
    status: string | null;
    location: string | null;
    company_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EquipmentMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: string | null;
    status: string | null;
    location: string | null;
    company_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EquipmentCountAggregateOutputType = {
    id: number;
    name: number;
    type: number;
    status: number;
    location: number;
    company_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EquipmentMinAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    status?: true;
    location?: true;
    company_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EquipmentMaxAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    status?: true;
    location?: true;
    company_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EquipmentCountAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    status?: true;
    location?: true;
    company_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which equipment to aggregate.
     */
    where?: equipmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of equipment to fetch.
     */
    orderBy?: equipmentOrderByWithRelationInput | equipmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: equipmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` equipment from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` equipment.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned equipment
     **/
    _count?: true | EquipmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EquipmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EquipmentMaxAggregateInputType;
  };

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
    [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>;
  };

  export type equipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: equipmentWhereInput;
    orderBy?: equipmentOrderByWithAggregationInput | equipmentOrderByWithAggregationInput[];
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum;
    having?: equipmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EquipmentCountAggregateInputType | true;
    _min?: EquipmentMinAggregateInputType;
    _max?: EquipmentMaxAggregateInputType;
  };

  export type EquipmentGroupByOutputType = {
    id: string;
    name: string;
    type: string;
    status: string;
    location: string;
    company_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: EquipmentCountAggregateOutputType | null;
    _min: EquipmentMinAggregateOutputType | null;
    _max: EquipmentMaxAggregateOutputType | null;
  };

  type GetEquipmentGroupByPayload<T extends equipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof EquipmentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
          : GetScalarType<T[P], EquipmentGroupByOutputType[P]>;
      }
    >
  >;

  export type equipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        type?: boolean;
        status?: boolean;
        location?: boolean;
        company_id?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        rental?: boolean | equipment$rentalArgs<ExtArgs>;
        _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['equipment']
    >;

  export type equipmentSelectScalar = {
    id?: boolean;
    name?: boolean;
    type?: boolean;
    status?: boolean;
    location?: boolean;
    company_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type equipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    rental?: boolean | equipment$rentalArgs<ExtArgs>;
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $equipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'equipment';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      rental: Prisma.$rentalPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        type: string;
        status: string;
        location: string;
        company_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['equipment']
    >;
    composites: {};
  };

  type equipmentGetPayload<S extends boolean | null | undefined | equipmentDefaultArgs> = $Result.GetResult<
    Prisma.$equipmentPayload,
    S
  >;

  type equipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    equipmentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: EquipmentCountAggregateInputType | true;
  };

  export interface equipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['equipment']; meta: { name: 'equipment' } };
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {equipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends equipmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, equipmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__equipmentClient<
      $Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Equipment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {equipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends equipmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, equipmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__equipmentClient<
      $Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends equipmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, equipmentFindFirstArgs<ExtArgs>>,
    ): Prisma__equipmentClient<
      $Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends equipmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, equipmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__equipmentClient<
      $Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     *
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends equipmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, equipmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Equipment.
     * @param {equipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     *
     **/
    create<T extends equipmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, equipmentCreateArgs<ExtArgs>>,
    ): Prisma__equipmentClient<$Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Equipment.
     *     @param {equipmentCreateManyArgs} args - Arguments to create many Equipment.
     *     @example
     *     // Create many Equipment
     *     const equipment = await prisma.equipment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends equipmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, equipmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Equipment.
     * @param {equipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     *
     **/
    delete<T extends equipmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, equipmentDeleteArgs<ExtArgs>>,
    ): Prisma__equipmentClient<$Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Equipment.
     * @param {equipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends equipmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, equipmentUpdateArgs<ExtArgs>>,
    ): Prisma__equipmentClient<$Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Equipment.
     * @param {equipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends equipmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, equipmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends equipmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, equipmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Equipment.
     * @param {equipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
     **/
    upsert<T extends equipmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, equipmentUpsertArgs<ExtArgs>>,
    ): Prisma__equipmentClient<$Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
     **/
    count<T extends equipmentCountArgs>(
      args?: Subset<T, equipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EquipmentAggregateArgs>(
      args: Subset<T, EquipmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>;

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends equipmentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: equipmentGroupByArgs['orderBy'] }
        : { orderBy?: equipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, equipmentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the equipment model
     */
    readonly fields: equipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__equipmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    rental<T extends equipment$rentalArgs<ExtArgs> = {}>(
      args?: Subset<T, equipment$rentalArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the equipment model
   */
  interface equipmentFieldRefs {
    readonly id: FieldRef<'equipment', 'String'>;
    readonly name: FieldRef<'equipment', 'String'>;
    readonly type: FieldRef<'equipment', 'String'>;
    readonly status: FieldRef<'equipment', 'String'>;
    readonly location: FieldRef<'equipment', 'String'>;
    readonly company_id: FieldRef<'equipment', 'String'>;
    readonly user_id: FieldRef<'equipment', 'String'>;
    readonly created_at: FieldRef<'equipment', 'DateTime'>;
    readonly updated_at: FieldRef<'equipment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * equipment findUnique
   */
  export type equipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: equipmentInclude<ExtArgs> | null;
    /**
     * Filter, which equipment to fetch.
     */
    where: equipmentWhereUniqueInput;
  };

  /**
   * equipment findUniqueOrThrow
   */
  export type equipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: equipmentInclude<ExtArgs> | null;
    /**
     * Filter, which equipment to fetch.
     */
    where: equipmentWhereUniqueInput;
  };

  /**
   * equipment findFirst
   */
  export type equipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: equipmentInclude<ExtArgs> | null;
    /**
     * Filter, which equipment to fetch.
     */
    where?: equipmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of equipment to fetch.
     */
    orderBy?: equipmentOrderByWithRelationInput | equipmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for equipment.
     */
    cursor?: equipmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` equipment from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` equipment.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[];
  };

  /**
   * equipment findFirstOrThrow
   */
  export type equipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: equipmentInclude<ExtArgs> | null;
    /**
     * Filter, which equipment to fetch.
     */
    where?: equipmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of equipment to fetch.
     */
    orderBy?: equipmentOrderByWithRelationInput | equipmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for equipment.
     */
    cursor?: equipmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` equipment from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` equipment.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[];
  };

  /**
   * equipment findMany
   */
  export type equipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: equipmentInclude<ExtArgs> | null;
    /**
     * Filter, which equipment to fetch.
     */
    where?: equipmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of equipment to fetch.
     */
    orderBy?: equipmentOrderByWithRelationInput | equipmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing equipment.
     */
    cursor?: equipmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` equipment from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` equipment.
     */
    skip?: number;
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[];
  };

  /**
   * equipment create
   */
  export type equipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: equipmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a equipment.
     */
    data: XOR<equipmentCreateInput, equipmentUncheckedCreateInput>;
  };

  /**
   * equipment createMany
   */
  export type equipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many equipment.
     */
    data: equipmentCreateManyInput | equipmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * equipment update
   */
  export type equipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: equipmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a equipment.
     */
    data: XOR<equipmentUpdateInput, equipmentUncheckedUpdateInput>;
    /**
     * Choose, which equipment to update.
     */
    where: equipmentWhereUniqueInput;
  };

  /**
   * equipment updateMany
   */
  export type equipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update equipment.
     */
    data: XOR<equipmentUpdateManyMutationInput, equipmentUncheckedUpdateManyInput>;
    /**
     * Filter which equipment to update
     */
    where?: equipmentWhereInput;
  };

  /**
   * equipment upsert
   */
  export type equipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: equipmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the equipment to update in case it exists.
     */
    where: equipmentWhereUniqueInput;
    /**
     * In case the equipment found by the `where` argument doesn't exist, create a new equipment with this data.
     */
    create: XOR<equipmentCreateInput, equipmentUncheckedCreateInput>;
    /**
     * In case the equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<equipmentUpdateInput, equipmentUncheckedUpdateInput>;
  };

  /**
   * equipment delete
   */
  export type equipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: equipmentInclude<ExtArgs> | null;
    /**
     * Filter which equipment to delete.
     */
    where: equipmentWhereUniqueInput;
  };

  /**
   * equipment deleteMany
   */
  export type equipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which equipment to delete
     */
    where?: equipmentWhereInput;
  };

  /**
   * equipment.rental
   */
  export type equipment$rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    where?: rentalWhereInput;
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    cursor?: rentalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * equipment without action
   */
  export type equipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: equipmentInclude<ExtArgs> | null;
  };

  /**
   * Model invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
  };

  export type InvoiceAvgAggregateOutputType = {
    total_amount: number | null;
  };

  export type InvoiceSumAggregateOutputType = {
    total_amount: number | null;
  };

  export type InvoiceMinAggregateOutputType = {
    id: string | null;
    invoice_number: string | null;
    invoice_date: Date | null;
    due_date: Date | null;
    total_amount: number | null;
    user_id: string | null;
    rental_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InvoiceMaxAggregateOutputType = {
    id: string | null;
    invoice_number: string | null;
    invoice_date: Date | null;
    due_date: Date | null;
    total_amount: number | null;
    user_id: string | null;
    rental_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InvoiceCountAggregateOutputType = {
    id: number;
    invoice_number: number;
    invoice_date: number;
    due_date: number;
    total_amount: number;
    user_id: number;
    rental_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type InvoiceAvgAggregateInputType = {
    total_amount?: true;
  };

  export type InvoiceSumAggregateInputType = {
    total_amount?: true;
  };

  export type InvoiceMinAggregateInputType = {
    id?: true;
    invoice_number?: true;
    invoice_date?: true;
    due_date?: true;
    total_amount?: true;
    user_id?: true;
    rental_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InvoiceMaxAggregateInputType = {
    id?: true;
    invoice_number?: true;
    invoice_date?: true;
    due_date?: true;
    total_amount?: true;
    user_id?: true;
    rental_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InvoiceCountAggregateInputType = {
    id?: true;
    invoice_number?: true;
    invoice_date?: true;
    due_date?: true;
    total_amount?: true;
    user_id?: true;
    rental_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice to aggregate.
     */
    where?: invoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: invoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned invoices
     **/
    _count?: true | InvoiceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: InvoiceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: InvoiceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InvoiceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InvoiceMaxAggregateInputType;
  };

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>;
  };

  export type invoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoiceWhereInput;
    orderBy?: invoiceOrderByWithAggregationInput | invoiceOrderByWithAggregationInput[];
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum;
    having?: invoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvoiceCountAggregateInputType | true;
    _avg?: InvoiceAvgAggregateInputType;
    _sum?: InvoiceSumAggregateInputType;
    _min?: InvoiceMinAggregateInputType;
    _max?: InvoiceMaxAggregateInputType;
  };

  export type InvoiceGroupByOutputType = {
    id: string;
    invoice_number: string;
    invoice_date: Date;
    due_date: Date;
    total_amount: number;
    user_id: string;
    rental_id: string;
    created_at: Date;
    updated_at: Date;
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
  };

  type GetInvoiceGroupByPayload<T extends invoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof InvoiceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
          : GetScalarType<T[P], InvoiceGroupByOutputType[P]>;
      }
    >
  >;

  export type invoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      invoice_number?: boolean;
      invoice_date?: boolean;
      due_date?: boolean;
      total_amount?: boolean;
      user_id?: boolean;
      rental_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      rental?: boolean | rentalDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      payment?: boolean | invoice$paymentArgs<ExtArgs>;
      _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['invoice']
  >;

  export type invoiceSelectScalar = {
    id?: boolean;
    invoice_number?: boolean;
    invoice_date?: boolean;
    due_date?: boolean;
    total_amount?: boolean;
    user_id?: boolean;
    rental_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type invoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rental?: boolean | rentalDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    payment?: boolean | invoice$paymentArgs<ExtArgs>;
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $invoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'invoice';
    objects: {
      rental: Prisma.$rentalPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      payment: Prisma.$paymentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        invoice_number: string;
        invoice_date: Date;
        due_date: Date;
        total_amount: number;
        user_id: string;
        rental_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['invoice']
    >;
    composites: {};
  };

  type invoiceGetPayload<S extends boolean | null | undefined | invoiceDefaultArgs> = $Result.GetResult<
    Prisma.$invoicePayload,
    S
  >;

  type invoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    invoiceFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: InvoiceCountAggregateInputType | true;
  };

  export interface invoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoice']; meta: { name: 'invoice' } };
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {invoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends invoiceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceFindUniqueArgs<ExtArgs>>,
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Invoice that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {invoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends invoiceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__invoiceClient<
      $Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends invoiceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceFindFirstArgs<ExtArgs>>,
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends invoiceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     *
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends invoiceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Invoice.
     * @param {invoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     *
     **/
    create<T extends invoiceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceCreateArgs<ExtArgs>>,
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Invoices.
     *     @param {invoiceCreateManyArgs} args - Arguments to create many Invoices.
     *     @example
     *     // Create many Invoices
     *     const invoice = await prisma.invoice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends invoiceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Invoice.
     * @param {invoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     *
     **/
    delete<T extends invoiceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceDeleteArgs<ExtArgs>>,
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Invoice.
     * @param {invoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends invoiceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceUpdateArgs<ExtArgs>>,
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Invoices.
     * @param {invoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends invoiceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends invoiceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Invoice.
     * @param {invoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     **/
    upsert<T extends invoiceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceUpsertArgs<ExtArgs>>,
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
     **/
    count<T extends invoiceCountArgs>(
      args?: Subset<T, invoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends InvoiceAggregateArgs>(
      args: Subset<T, InvoiceAggregateArgs>,
    ): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>;

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends invoiceGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoiceGroupByArgs['orderBy'] }
        : { orderBy?: invoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, invoiceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the invoice model
     */
    readonly fields: invoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoiceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rental<T extends rentalDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, rentalDefaultArgs<ExtArgs>>,
    ): Prisma__rentalClient<
      $Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    payment<T extends invoice$paymentArgs<ExtArgs> = {}>(
      args?: Subset<T, invoice$paymentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the invoice model
   */
  interface invoiceFieldRefs {
    readonly id: FieldRef<'invoice', 'String'>;
    readonly invoice_number: FieldRef<'invoice', 'String'>;
    readonly invoice_date: FieldRef<'invoice', 'DateTime'>;
    readonly due_date: FieldRef<'invoice', 'DateTime'>;
    readonly total_amount: FieldRef<'invoice', 'Int'>;
    readonly user_id: FieldRef<'invoice', 'String'>;
    readonly rental_id: FieldRef<'invoice', 'String'>;
    readonly created_at: FieldRef<'invoice', 'DateTime'>;
    readonly updated_at: FieldRef<'invoice', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * invoice findUnique
   */
  export type invoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * Filter, which invoice to fetch.
     */
    where: invoiceWhereUniqueInput;
  };

  /**
   * invoice findUniqueOrThrow
   */
  export type invoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * Filter, which invoice to fetch.
     */
    where: invoiceWhereUniqueInput;
  };

  /**
   * invoice findFirst
   */
  export type invoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * Filter, which invoice to fetch.
     */
    where?: invoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for invoices.
     */
    cursor?: invoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[];
  };

  /**
   * invoice findFirstOrThrow
   */
  export type invoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * Filter, which invoice to fetch.
     */
    where?: invoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for invoices.
     */
    cursor?: invoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[];
  };

  /**
   * invoice findMany
   */
  export type invoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing invoices.
     */
    cursor?: invoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` invoices.
     */
    skip?: number;
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[];
  };

  /**
   * invoice create
   */
  export type invoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * The data needed to create a invoice.
     */
    data: XOR<invoiceCreateInput, invoiceUncheckedCreateInput>;
  };

  /**
   * invoice createMany
   */
  export type invoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoices.
     */
    data: invoiceCreateManyInput | invoiceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * invoice update
   */
  export type invoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * The data needed to update a invoice.
     */
    data: XOR<invoiceUpdateInput, invoiceUncheckedUpdateInput>;
    /**
     * Choose, which invoice to update.
     */
    where: invoiceWhereUniqueInput;
  };

  /**
   * invoice updateMany
   */
  export type invoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoices.
     */
    data: XOR<invoiceUpdateManyMutationInput, invoiceUncheckedUpdateManyInput>;
    /**
     * Filter which invoices to update
     */
    where?: invoiceWhereInput;
  };

  /**
   * invoice upsert
   */
  export type invoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * The filter to search for the invoice to update in case it exists.
     */
    where: invoiceWhereUniqueInput;
    /**
     * In case the invoice found by the `where` argument doesn't exist, create a new invoice with this data.
     */
    create: XOR<invoiceCreateInput, invoiceUncheckedCreateInput>;
    /**
     * In case the invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoiceUpdateInput, invoiceUncheckedUpdateInput>;
  };

  /**
   * invoice delete
   */
  export type invoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * Filter which invoice to delete.
     */
    where: invoiceWhereUniqueInput;
  };

  /**
   * invoice deleteMany
   */
  export type invoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to delete
     */
    where?: invoiceWhereInput;
  };

  /**
   * invoice.payment
   */
  export type invoice$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    where?: paymentWhereInput;
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    cursor?: paymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * invoice without action
   */
  export type invoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
  };

  /**
   * Model payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  export type PaymentAvgAggregateOutputType = {
    amount: number | null;
  };

  export type PaymentSumAggregateOutputType = {
    amount: number | null;
  };

  export type PaymentMinAggregateOutputType = {
    id: string | null;
    payment_date: Date | null;
    amount: number | null;
    payment_method: string | null;
    user_id: string | null;
    invoice_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PaymentMaxAggregateOutputType = {
    id: string | null;
    payment_date: Date | null;
    amount: number | null;
    payment_method: string | null;
    user_id: string | null;
    invoice_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PaymentCountAggregateOutputType = {
    id: number;
    payment_date: number;
    amount: number;
    payment_method: number;
    user_id: number;
    invoice_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PaymentAvgAggregateInputType = {
    amount?: true;
  };

  export type PaymentSumAggregateInputType = {
    amount?: true;
  };

  export type PaymentMinAggregateInputType = {
    id?: true;
    payment_date?: true;
    amount?: true;
    payment_method?: true;
    user_id?: true;
    invoice_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PaymentMaxAggregateInputType = {
    id?: true;
    payment_date?: true;
    amount?: true;
    payment_method?: true;
    user_id?: true;
    invoice_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PaymentCountAggregateInputType = {
    id?: true;
    payment_date?: true;
    amount?: true;
    payment_method?: true;
    user_id?: true;
    invoice_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment to aggregate.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned payments
     **/
    _count?: true | PaymentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PaymentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PaymentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PaymentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PaymentMaxAggregateInputType;
  };

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>;
  };

  export type paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput;
    orderBy?: paymentOrderByWithAggregationInput | paymentOrderByWithAggregationInput[];
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum;
    having?: paymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentCountAggregateInputType | true;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
  };

  export type PaymentGroupByOutputType = {
    id: string;
    payment_date: Date;
    amount: number;
    payment_method: string;
    user_id: string;
    invoice_id: string;
    created_at: Date;
    updated_at: Date;
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  type GetPaymentGroupByPayload<T extends paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PaymentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
          : GetScalarType<T[P], PaymentGroupByOutputType[P]>;
      }
    >
  >;

  export type paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      payment_date?: boolean;
      amount?: boolean;
      payment_method?: boolean;
      user_id?: boolean;
      invoice_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      invoice?: boolean | invoiceDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['payment']
  >;

  export type paymentSelectScalar = {
    id?: boolean;
    payment_date?: boolean;
    amount?: boolean;
    payment_method?: boolean;
    user_id?: boolean;
    invoice_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type paymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | invoiceDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'payment';
    objects: {
      invoice: Prisma.$invoicePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        payment_date: Date;
        amount: number;
        payment_method: string;
        user_id: string;
        invoice_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['payment']
    >;
    composites: {};
  };

  type paymentGetPayload<S extends boolean | null | undefined | paymentDefaultArgs> = $Result.GetResult<
    Prisma.$paymentPayload,
    S
  >;

  type paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    paymentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: PaymentCountAggregateInputType | true;
  };

  export interface paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment']; meta: { name: 'payment' } };
    /**
     * Find zero or one Payment that matches the filter.
     * @param {paymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends paymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, paymentFindUniqueArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Payment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {paymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends paymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__paymentClient<
      $Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends paymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindFirstArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends paymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     *
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends paymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Payment.
     * @param {paymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     *
     **/
    create<T extends paymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, paymentCreateArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Payments.
     *     @param {paymentCreateManyArgs} args - Arguments to create many Payments.
     *     @example
     *     // Create many Payments
     *     const payment = await prisma.payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends paymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Payment.
     * @param {paymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     *
     **/
    delete<T extends paymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, paymentDeleteArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Payment.
     * @param {paymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends paymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, paymentUpdateArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Payments.
     * @param {paymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends paymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends paymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, paymentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Payment.
     * @param {paymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     **/
    upsert<T extends paymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, paymentUpsertArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
     **/
    count<T extends paymentCountArgs>(
      args?: Subset<T, paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PaymentAggregateArgs>(
      args: Subset<T, PaymentAggregateArgs>,
    ): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends paymentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentGroupByArgs['orderBy'] }
        : { orderBy?: paymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, paymentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the payment model
     */
    readonly fields: paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    invoice<T extends invoiceDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, invoiceDefaultArgs<ExtArgs>>,
    ): Prisma__invoiceClient<
      $Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the payment model
   */
  interface paymentFieldRefs {
    readonly id: FieldRef<'payment', 'String'>;
    readonly payment_date: FieldRef<'payment', 'DateTime'>;
    readonly amount: FieldRef<'payment', 'Int'>;
    readonly payment_method: FieldRef<'payment', 'String'>;
    readonly user_id: FieldRef<'payment', 'String'>;
    readonly invoice_id: FieldRef<'payment', 'String'>;
    readonly created_at: FieldRef<'payment', 'DateTime'>;
    readonly updated_at: FieldRef<'payment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * payment findUnique
   */
  export type paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment findUniqueOrThrow
   */
  export type paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment findFirst
   */
  export type paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * payment findFirstOrThrow
   */
  export type paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * payment findMany
   */
  export type paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing payments.
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * payment create
   */
  export type paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * The data needed to create a payment.
     */
    data: XOR<paymentCreateInput, paymentUncheckedCreateInput>;
  };

  /**
   * payment createMany
   */
  export type paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * payment update
   */
  export type paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * The data needed to update a payment.
     */
    data: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>;
    /**
     * Choose, which payment to update.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment updateMany
   */
  export type paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>;
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput;
  };

  /**
   * payment upsert
   */
  export type paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * The filter to search for the payment to update in case it exists.
     */
    where: paymentWhereUniqueInput;
    /**
     * In case the payment found by the `where` argument doesn't exist, create a new payment with this data.
     */
    create: XOR<paymentCreateInput, paymentUncheckedCreateInput>;
    /**
     * In case the payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>;
  };

  /**
   * payment delete
   */
  export type paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter which payment to delete.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment deleteMany
   */
  export type paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentWhereInput;
  };

  /**
   * payment without action
   */
  export type paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
  };

  /**
   * Model rental
   */

  export type AggregateRental = {
    _count: RentalCountAggregateOutputType | null;
    _avg: RentalAvgAggregateOutputType | null;
    _sum: RentalSumAggregateOutputType | null;
    _min: RentalMinAggregateOutputType | null;
    _max: RentalMaxAggregateOutputType | null;
  };

  export type RentalAvgAggregateOutputType = {
    total_price: number | null;
  };

  export type RentalSumAggregateOutputType = {
    total_price: number | null;
  };

  export type RentalMinAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    total_price: number | null;
    user_id: string | null;
    equipment_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RentalMaxAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    total_price: number | null;
    user_id: string | null;
    equipment_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RentalCountAggregateOutputType = {
    id: number;
    start_date: number;
    end_date: number;
    total_price: number;
    user_id: number;
    equipment_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type RentalAvgAggregateInputType = {
    total_price?: true;
  };

  export type RentalSumAggregateInputType = {
    total_price?: true;
  };

  export type RentalMinAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    total_price?: true;
    user_id?: true;
    equipment_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RentalMaxAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    total_price?: true;
    user_id?: true;
    equipment_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RentalCountAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    total_price?: true;
    user_id?: true;
    equipment_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type RentalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rental to aggregate.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned rentals
     **/
    _count?: true | RentalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RentalAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RentalSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RentalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RentalMaxAggregateInputType;
  };

  export type GetRentalAggregateType<T extends RentalAggregateArgs> = {
    [P in keyof T & keyof AggregateRental]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRental[P]>
      : GetScalarType<T[P], AggregateRental[P]>;
  };

  export type rentalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentalWhereInput;
    orderBy?: rentalOrderByWithAggregationInput | rentalOrderByWithAggregationInput[];
    by: RentalScalarFieldEnum[] | RentalScalarFieldEnum;
    having?: rentalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RentalCountAggregateInputType | true;
    _avg?: RentalAvgAggregateInputType;
    _sum?: RentalSumAggregateInputType;
    _min?: RentalMinAggregateInputType;
    _max?: RentalMaxAggregateInputType;
  };

  export type RentalGroupByOutputType = {
    id: string;
    start_date: Date;
    end_date: Date;
    total_price: number;
    user_id: string;
    equipment_id: string;
    created_at: Date;
    updated_at: Date;
    _count: RentalCountAggregateOutputType | null;
    _avg: RentalAvgAggregateOutputType | null;
    _sum: RentalSumAggregateOutputType | null;
    _min: RentalMinAggregateOutputType | null;
    _max: RentalMaxAggregateOutputType | null;
  };

  type GetRentalGroupByPayload<T extends rentalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RentalGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RentalGroupByOutputType[P]>
          : GetScalarType<T[P], RentalGroupByOutputType[P]>;
      }
    >
  >;

  export type rentalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      total_price?: boolean;
      user_id?: boolean;
      equipment_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      invoice?: boolean | rental$invoiceArgs<ExtArgs>;
      equipment?: boolean | equipmentDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | RentalCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['rental']
  >;

  export type rentalSelectScalar = {
    id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    total_price?: boolean;
    user_id?: boolean;
    equipment_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type rentalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | rental$invoiceArgs<ExtArgs>;
    equipment?: boolean | equipmentDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | RentalCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $rentalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'rental';
    objects: {
      invoice: Prisma.$invoicePayload<ExtArgs>[];
      equipment: Prisma.$equipmentPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        start_date: Date;
        end_date: Date;
        total_price: number;
        user_id: string;
        equipment_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['rental']
    >;
    composites: {};
  };

  type rentalGetPayload<S extends boolean | null | undefined | rentalDefaultArgs> = $Result.GetResult<
    Prisma.$rentalPayload,
    S
  >;

  type rentalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    rentalFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: RentalCountAggregateInputType | true;
  };

  export interface rentalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rental']; meta: { name: 'rental' } };
    /**
     * Find zero or one Rental that matches the filter.
     * @param {rentalFindUniqueArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends rentalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, rentalFindUniqueArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Rental that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {rentalFindUniqueOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends rentalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Rental that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindFirstArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends rentalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindFirstArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Rental that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindFirstOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends rentalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rentals
     * const rentals = await prisma.rental.findMany()
     *
     * // Get first 10 Rentals
     * const rentals = await prisma.rental.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const rentalWithIdOnly = await prisma.rental.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends rentalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Rental.
     * @param {rentalCreateArgs} args - Arguments to create a Rental.
     * @example
     * // Create one Rental
     * const Rental = await prisma.rental.create({
     *   data: {
     *     // ... data to create a Rental
     *   }
     * })
     *
     **/
    create<T extends rentalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, rentalCreateArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Rentals.
     *     @param {rentalCreateManyArgs} args - Arguments to create many Rentals.
     *     @example
     *     // Create many Rentals
     *     const rental = await prisma.rental.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends rentalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Rental.
     * @param {rentalDeleteArgs} args - Arguments to delete one Rental.
     * @example
     * // Delete one Rental
     * const Rental = await prisma.rental.delete({
     *   where: {
     *     // ... filter to delete one Rental
     *   }
     * })
     *
     **/
    delete<T extends rentalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, rentalDeleteArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Rental.
     * @param {rentalUpdateArgs} args - Arguments to update one Rental.
     * @example
     * // Update one Rental
     * const rental = await prisma.rental.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends rentalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, rentalUpdateArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Rentals.
     * @param {rentalDeleteManyArgs} args - Arguments to filter Rentals to delete.
     * @example
     * // Delete a few Rentals
     * const { count } = await prisma.rental.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends rentalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rentalDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rentals
     * const rental = await prisma.rental.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends rentalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, rentalUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Rental.
     * @param {rentalUpsertArgs} args - Arguments to update or create a Rental.
     * @example
     * // Update or create a Rental
     * const rental = await prisma.rental.upsert({
     *   create: {
     *     // ... data to create a Rental
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rental we want to update
     *   }
     * })
     **/
    upsert<T extends rentalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, rentalUpsertArgs<ExtArgs>>,
    ): Prisma__rentalClient<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalCountArgs} args - Arguments to filter Rentals to count.
     * @example
     * // Count the number of Rentals
     * const count = await prisma.rental.count({
     *   where: {
     *     // ... the filter for the Rentals we want to count
     *   }
     * })
     **/
    count<T extends rentalCountArgs>(
      args?: Subset<T, rentalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RentalAggregateArgs>(
      args: Subset<T, RentalAggregateArgs>,
    ): Prisma.PrismaPromise<GetRentalAggregateType<T>>;

    /**
     * Group by Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends rentalGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rentalGroupByArgs['orderBy'] }
        : { orderBy?: rentalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, rentalGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetRentalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the rental model
     */
    readonly fields: rentalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rental.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rentalClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    invoice<T extends rental$invoiceArgs<ExtArgs> = {}>(
      args?: Subset<T, rental$invoiceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findMany'> | Null>;

    equipment<T extends equipmentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, equipmentDefaultArgs<ExtArgs>>,
    ): Prisma__equipmentClient<
      $Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the rental model
   */
  interface rentalFieldRefs {
    readonly id: FieldRef<'rental', 'String'>;
    readonly start_date: FieldRef<'rental', 'DateTime'>;
    readonly end_date: FieldRef<'rental', 'DateTime'>;
    readonly total_price: FieldRef<'rental', 'Int'>;
    readonly user_id: FieldRef<'rental', 'String'>;
    readonly equipment_id: FieldRef<'rental', 'String'>;
    readonly created_at: FieldRef<'rental', 'DateTime'>;
    readonly updated_at: FieldRef<'rental', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * rental findUnique
   */
  export type rentalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental findUniqueOrThrow
   */
  export type rentalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental findFirst
   */
  export type rentalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rentals.
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * rental findFirstOrThrow
   */
  export type rentalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rental to fetch.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rentals.
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * rental findMany
   */
  export type rentalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter, which rentals to fetch.
     */
    where?: rentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rentals to fetch.
     */
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing rentals.
     */
    cursor?: rentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rentals.
     */
    skip?: number;
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * rental create
   */
  export type rentalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * The data needed to create a rental.
     */
    data: XOR<rentalCreateInput, rentalUncheckedCreateInput>;
  };

  /**
   * rental createMany
   */
  export type rentalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rentals.
     */
    data: rentalCreateManyInput | rentalCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * rental update
   */
  export type rentalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * The data needed to update a rental.
     */
    data: XOR<rentalUpdateInput, rentalUncheckedUpdateInput>;
    /**
     * Choose, which rental to update.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental updateMany
   */
  export type rentalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rentals.
     */
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyInput>;
    /**
     * Filter which rentals to update
     */
    where?: rentalWhereInput;
  };

  /**
   * rental upsert
   */
  export type rentalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * The filter to search for the rental to update in case it exists.
     */
    where: rentalWhereUniqueInput;
    /**
     * In case the rental found by the `where` argument doesn't exist, create a new rental with this data.
     */
    create: XOR<rentalCreateInput, rentalUncheckedCreateInput>;
    /**
     * In case the rental was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rentalUpdateInput, rentalUncheckedUpdateInput>;
  };

  /**
   * rental delete
   */
  export type rentalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    /**
     * Filter which rental to delete.
     */
    where: rentalWhereUniqueInput;
  };

  /**
   * rental deleteMany
   */
  export type rentalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rentals to delete
     */
    where?: rentalWhereInput;
  };

  /**
   * rental.invoice
   */
  export type rental$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    where?: invoiceWhereInput;
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[];
    cursor?: invoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[];
  };

  /**
   * rental without action
   */
  export type rentalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
      equipment?: boolean | user$equipmentArgs<ExtArgs>;
      invoice?: boolean | user$invoiceArgs<ExtArgs>;
      payment?: boolean | user$paymentArgs<ExtArgs>;
      rental?: boolean | user$rentalArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
    equipment?: boolean | user$equipmentArgs<ExtArgs>;
    invoice?: boolean | user$invoiceArgs<ExtArgs>;
    payment?: boolean | user$paymentArgs<ExtArgs>;
    rental?: boolean | user$rentalArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[];
      equipment: Prisma.$equipmentPayload<ExtArgs>[];
      invoice: Prisma.$invoicePayload<ExtArgs>[];
      payment: Prisma.$paymentPayload<ExtArgs>[];
      rental: Prisma.$rentalPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    equipment<T extends user$equipmentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$equipmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    invoice<T extends user$invoiceArgs<ExtArgs> = {}>(
      args?: Subset<T, user$invoiceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findMany'> | Null>;

    payment<T extends user$paymentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$paymentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findMany'> | Null>;

    rental<T extends user$rentalArgs<ExtArgs> = {}>(
      args?: Subset<T, user$rentalArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentalPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.equipment
   */
  export type user$equipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipment
     */
    select?: equipmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: equipmentInclude<ExtArgs> | null;
    where?: equipmentWhereInput;
    orderBy?: equipmentOrderByWithRelationInput | equipmentOrderByWithRelationInput[];
    cursor?: equipmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[];
  };

  /**
   * user.invoice
   */
  export type user$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    where?: invoiceWhereInput;
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[];
    cursor?: invoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[];
  };

  /**
   * user.payment
   */
  export type user$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    where?: paymentWhereInput;
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    cursor?: paymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * user.rental
   */
  export type user$rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rental
     */
    select?: rentalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rentalInclude<ExtArgs> | null;
    where?: rentalWhereInput;
    orderBy?: rentalOrderByWithRelationInput | rentalOrderByWithRelationInput[];
    cursor?: rentalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    zip_code: 'zip_code';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const EquipmentScalarFieldEnum: {
    id: 'id';
    name: 'name';
    type: 'type';
    status: 'status';
    location: 'location';
    company_id: 'company_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum];

  export const InvoiceScalarFieldEnum: {
    id: 'id';
    invoice_number: 'invoice_number';
    invoice_date: 'invoice_date';
    due_date: 'due_date';
    total_amount: 'total_amount';
    user_id: 'user_id';
    rental_id: 'rental_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum];

  export const PaymentScalarFieldEnum: {
    id: 'id';
    payment_date: 'payment_date';
    amount: 'amount';
    payment_method: 'payment_method';
    user_id: 'user_id';
    invoice_id: 'invoice_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];

  export const RentalScalarFieldEnum: {
    id: 'id';
    start_date: 'start_date';
    end_date: 'end_date';
    total_price: 'total_price';
    user_id: 'user_id';
    equipment_id: 'equipment_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type RentalScalarFieldEnum = (typeof RentalScalarFieldEnum)[keyof typeof RentalScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    city?: StringNullableFilter<'company'> | string | null;
    state?: StringNullableFilter<'company'> | string | null;
    zip_code?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    equipment?: EquipmentListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    equipment?: equipmentOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      city?: StringNullableFilter<'company'> | string | null;
      state?: StringNullableFilter<'company'> | string | null;
      zip_code?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      equipment?: EquipmentListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    city?: StringNullableWithAggregatesFilter<'company'> | string | null;
    state?: StringNullableWithAggregatesFilter<'company'> | string | null;
    zip_code?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type equipmentWhereInput = {
    AND?: equipmentWhereInput | equipmentWhereInput[];
    OR?: equipmentWhereInput[];
    NOT?: equipmentWhereInput | equipmentWhereInput[];
    id?: UuidFilter<'equipment'> | string;
    name?: StringFilter<'equipment'> | string;
    type?: StringFilter<'equipment'> | string;
    status?: StringFilter<'equipment'> | string;
    location?: StringFilter<'equipment'> | string;
    company_id?: UuidFilter<'equipment'> | string;
    user_id?: UuidFilter<'equipment'> | string;
    created_at?: DateTimeFilter<'equipment'> | Date | string;
    updated_at?: DateTimeFilter<'equipment'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    rental?: RentalListRelationFilter;
  };

  export type equipmentOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    location?: SortOrder;
    company_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    rental?: rentalOrderByRelationAggregateInput;
  };

  export type equipmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: equipmentWhereInput | equipmentWhereInput[];
      OR?: equipmentWhereInput[];
      NOT?: equipmentWhereInput | equipmentWhereInput[];
      name?: StringFilter<'equipment'> | string;
      type?: StringFilter<'equipment'> | string;
      status?: StringFilter<'equipment'> | string;
      location?: StringFilter<'equipment'> | string;
      company_id?: UuidFilter<'equipment'> | string;
      user_id?: UuidFilter<'equipment'> | string;
      created_at?: DateTimeFilter<'equipment'> | Date | string;
      updated_at?: DateTimeFilter<'equipment'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      rental?: RentalListRelationFilter;
    },
    'id'
  >;

  export type equipmentOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    location?: SortOrder;
    company_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: equipmentCountOrderByAggregateInput;
    _max?: equipmentMaxOrderByAggregateInput;
    _min?: equipmentMinOrderByAggregateInput;
  };

  export type equipmentScalarWhereWithAggregatesInput = {
    AND?: equipmentScalarWhereWithAggregatesInput | equipmentScalarWhereWithAggregatesInput[];
    OR?: equipmentScalarWhereWithAggregatesInput[];
    NOT?: equipmentScalarWhereWithAggregatesInput | equipmentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'equipment'> | string;
    name?: StringWithAggregatesFilter<'equipment'> | string;
    type?: StringWithAggregatesFilter<'equipment'> | string;
    status?: StringWithAggregatesFilter<'equipment'> | string;
    location?: StringWithAggregatesFilter<'equipment'> | string;
    company_id?: UuidWithAggregatesFilter<'equipment'> | string;
    user_id?: UuidWithAggregatesFilter<'equipment'> | string;
    created_at?: DateTimeWithAggregatesFilter<'equipment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'equipment'> | Date | string;
  };

  export type invoiceWhereInput = {
    AND?: invoiceWhereInput | invoiceWhereInput[];
    OR?: invoiceWhereInput[];
    NOT?: invoiceWhereInput | invoiceWhereInput[];
    id?: UuidFilter<'invoice'> | string;
    invoice_number?: StringFilter<'invoice'> | string;
    invoice_date?: DateTimeFilter<'invoice'> | Date | string;
    due_date?: DateTimeFilter<'invoice'> | Date | string;
    total_amount?: IntFilter<'invoice'> | number;
    user_id?: UuidFilter<'invoice'> | string;
    rental_id?: UuidFilter<'invoice'> | string;
    created_at?: DateTimeFilter<'invoice'> | Date | string;
    updated_at?: DateTimeFilter<'invoice'> | Date | string;
    rental?: XOR<RentalRelationFilter, rentalWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    payment?: PaymentListRelationFilter;
  };

  export type invoiceOrderByWithRelationInput = {
    id?: SortOrder;
    invoice_number?: SortOrder;
    invoice_date?: SortOrder;
    due_date?: SortOrder;
    total_amount?: SortOrder;
    user_id?: SortOrder;
    rental_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    rental?: rentalOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    payment?: paymentOrderByRelationAggregateInput;
  };

  export type invoiceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: invoiceWhereInput | invoiceWhereInput[];
      OR?: invoiceWhereInput[];
      NOT?: invoiceWhereInput | invoiceWhereInput[];
      invoice_number?: StringFilter<'invoice'> | string;
      invoice_date?: DateTimeFilter<'invoice'> | Date | string;
      due_date?: DateTimeFilter<'invoice'> | Date | string;
      total_amount?: IntFilter<'invoice'> | number;
      user_id?: UuidFilter<'invoice'> | string;
      rental_id?: UuidFilter<'invoice'> | string;
      created_at?: DateTimeFilter<'invoice'> | Date | string;
      updated_at?: DateTimeFilter<'invoice'> | Date | string;
      rental?: XOR<RentalRelationFilter, rentalWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      payment?: PaymentListRelationFilter;
    },
    'id'
  >;

  export type invoiceOrderByWithAggregationInput = {
    id?: SortOrder;
    invoice_number?: SortOrder;
    invoice_date?: SortOrder;
    due_date?: SortOrder;
    total_amount?: SortOrder;
    user_id?: SortOrder;
    rental_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: invoiceCountOrderByAggregateInput;
    _avg?: invoiceAvgOrderByAggregateInput;
    _max?: invoiceMaxOrderByAggregateInput;
    _min?: invoiceMinOrderByAggregateInput;
    _sum?: invoiceSumOrderByAggregateInput;
  };

  export type invoiceScalarWhereWithAggregatesInput = {
    AND?: invoiceScalarWhereWithAggregatesInput | invoiceScalarWhereWithAggregatesInput[];
    OR?: invoiceScalarWhereWithAggregatesInput[];
    NOT?: invoiceScalarWhereWithAggregatesInput | invoiceScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'invoice'> | string;
    invoice_number?: StringWithAggregatesFilter<'invoice'> | string;
    invoice_date?: DateTimeWithAggregatesFilter<'invoice'> | Date | string;
    due_date?: DateTimeWithAggregatesFilter<'invoice'> | Date | string;
    total_amount?: IntWithAggregatesFilter<'invoice'> | number;
    user_id?: UuidWithAggregatesFilter<'invoice'> | string;
    rental_id?: UuidWithAggregatesFilter<'invoice'> | string;
    created_at?: DateTimeWithAggregatesFilter<'invoice'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'invoice'> | Date | string;
  };

  export type paymentWhereInput = {
    AND?: paymentWhereInput | paymentWhereInput[];
    OR?: paymentWhereInput[];
    NOT?: paymentWhereInput | paymentWhereInput[];
    id?: UuidFilter<'payment'> | string;
    payment_date?: DateTimeFilter<'payment'> | Date | string;
    amount?: IntFilter<'payment'> | number;
    payment_method?: StringFilter<'payment'> | string;
    user_id?: UuidFilter<'payment'> | string;
    invoice_id?: UuidFilter<'payment'> | string;
    created_at?: DateTimeFilter<'payment'> | Date | string;
    updated_at?: DateTimeFilter<'payment'> | Date | string;
    invoice?: XOR<InvoiceRelationFilter, invoiceWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type paymentOrderByWithRelationInput = {
    id?: SortOrder;
    payment_date?: SortOrder;
    amount?: SortOrder;
    payment_method?: SortOrder;
    user_id?: SortOrder;
    invoice_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    invoice?: invoiceOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type paymentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: paymentWhereInput | paymentWhereInput[];
      OR?: paymentWhereInput[];
      NOT?: paymentWhereInput | paymentWhereInput[];
      payment_date?: DateTimeFilter<'payment'> | Date | string;
      amount?: IntFilter<'payment'> | number;
      payment_method?: StringFilter<'payment'> | string;
      user_id?: UuidFilter<'payment'> | string;
      invoice_id?: UuidFilter<'payment'> | string;
      created_at?: DateTimeFilter<'payment'> | Date | string;
      updated_at?: DateTimeFilter<'payment'> | Date | string;
      invoice?: XOR<InvoiceRelationFilter, invoiceWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type paymentOrderByWithAggregationInput = {
    id?: SortOrder;
    payment_date?: SortOrder;
    amount?: SortOrder;
    payment_method?: SortOrder;
    user_id?: SortOrder;
    invoice_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: paymentCountOrderByAggregateInput;
    _avg?: paymentAvgOrderByAggregateInput;
    _max?: paymentMaxOrderByAggregateInput;
    _min?: paymentMinOrderByAggregateInput;
    _sum?: paymentSumOrderByAggregateInput;
  };

  export type paymentScalarWhereWithAggregatesInput = {
    AND?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[];
    OR?: paymentScalarWhereWithAggregatesInput[];
    NOT?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'payment'> | string;
    payment_date?: DateTimeWithAggregatesFilter<'payment'> | Date | string;
    amount?: IntWithAggregatesFilter<'payment'> | number;
    payment_method?: StringWithAggregatesFilter<'payment'> | string;
    user_id?: UuidWithAggregatesFilter<'payment'> | string;
    invoice_id?: UuidWithAggregatesFilter<'payment'> | string;
    created_at?: DateTimeWithAggregatesFilter<'payment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'payment'> | Date | string;
  };

  export type rentalWhereInput = {
    AND?: rentalWhereInput | rentalWhereInput[];
    OR?: rentalWhereInput[];
    NOT?: rentalWhereInput | rentalWhereInput[];
    id?: UuidFilter<'rental'> | string;
    start_date?: DateTimeFilter<'rental'> | Date | string;
    end_date?: DateTimeFilter<'rental'> | Date | string;
    total_price?: IntFilter<'rental'> | number;
    user_id?: UuidFilter<'rental'> | string;
    equipment_id?: UuidFilter<'rental'> | string;
    created_at?: DateTimeFilter<'rental'> | Date | string;
    updated_at?: DateTimeFilter<'rental'> | Date | string;
    invoice?: InvoiceListRelationFilter;
    equipment?: XOR<EquipmentRelationFilter, equipmentWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type rentalOrderByWithRelationInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    user_id?: SortOrder;
    equipment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    invoice?: invoiceOrderByRelationAggregateInput;
    equipment?: equipmentOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type rentalWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: rentalWhereInput | rentalWhereInput[];
      OR?: rentalWhereInput[];
      NOT?: rentalWhereInput | rentalWhereInput[];
      start_date?: DateTimeFilter<'rental'> | Date | string;
      end_date?: DateTimeFilter<'rental'> | Date | string;
      total_price?: IntFilter<'rental'> | number;
      user_id?: UuidFilter<'rental'> | string;
      equipment_id?: UuidFilter<'rental'> | string;
      created_at?: DateTimeFilter<'rental'> | Date | string;
      updated_at?: DateTimeFilter<'rental'> | Date | string;
      invoice?: InvoiceListRelationFilter;
      equipment?: XOR<EquipmentRelationFilter, equipmentWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type rentalOrderByWithAggregationInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    user_id?: SortOrder;
    equipment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: rentalCountOrderByAggregateInput;
    _avg?: rentalAvgOrderByAggregateInput;
    _max?: rentalMaxOrderByAggregateInput;
    _min?: rentalMinOrderByAggregateInput;
    _sum?: rentalSumOrderByAggregateInput;
  };

  export type rentalScalarWhereWithAggregatesInput = {
    AND?: rentalScalarWhereWithAggregatesInput | rentalScalarWhereWithAggregatesInput[];
    OR?: rentalScalarWhereWithAggregatesInput[];
    NOT?: rentalScalarWhereWithAggregatesInput | rentalScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'rental'> | string;
    start_date?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
    end_date?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
    total_price?: IntWithAggregatesFilter<'rental'> | number;
    user_id?: UuidWithAggregatesFilter<'rental'> | string;
    equipment_id?: UuidWithAggregatesFilter<'rental'> | string;
    created_at?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'rental'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: CompanyListRelationFilter;
    equipment?: EquipmentListRelationFilter;
    invoice?: InvoiceListRelationFilter;
    payment?: PaymentListRelationFilter;
    rental?: RentalListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByRelationAggregateInput;
    equipment?: equipmentOrderByRelationAggregateInput;
    invoice?: invoiceOrderByRelationAggregateInput;
    payment?: paymentOrderByRelationAggregateInput;
    rental?: rentalOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: CompanyListRelationFilter;
      equipment?: EquipmentListRelationFilter;
      invoice?: InvoiceListRelationFilter;
      payment?: PaymentListRelationFilter;
      rental?: RentalListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    equipment?: equipmentCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    equipment?: equipmentUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    equipment?: equipmentUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    equipment?: equipmentUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type equipmentCreateInput = {
    id?: string;
    name: string;
    type: string;
    status: string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutEquipmentInput;
    user: userCreateNestedOneWithoutEquipmentInput;
    rental?: rentalCreateNestedManyWithoutEquipmentInput;
  };

  export type equipmentUncheckedCreateInput = {
    id?: string;
    name: string;
    type: string;
    status: string;
    location: string;
    company_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalUncheckedCreateNestedManyWithoutEquipmentInput;
  };

  export type equipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutEquipmentNestedInput;
    user?: userUpdateOneRequiredWithoutEquipmentNestedInput;
    rental?: rentalUpdateManyWithoutEquipmentNestedInput;
  };

  export type equipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUncheckedUpdateManyWithoutEquipmentNestedInput;
  };

  export type equipmentCreateManyInput = {
    id?: string;
    name: string;
    type: string;
    status: string;
    location: string;
    company_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type equipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type equipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type invoiceCreateInput = {
    id?: string;
    invoice_number: string;
    invoice_date: Date | string;
    due_date: Date | string;
    total_amount: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental: rentalCreateNestedOneWithoutInvoiceInput;
    user: userCreateNestedOneWithoutInvoiceInput;
    payment?: paymentCreateNestedManyWithoutInvoiceInput;
  };

  export type invoiceUncheckedCreateInput = {
    id?: string;
    invoice_number: string;
    invoice_date: Date | string;
    due_date: Date | string;
    total_amount: number;
    user_id: string;
    rental_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutInvoiceInput;
  };

  export type invoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    invoice_number?: StringFieldUpdateOperationsInput | string;
    invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUpdateOneRequiredWithoutInvoiceNestedInput;
    user?: userUpdateOneRequiredWithoutInvoiceNestedInput;
    payment?: paymentUpdateManyWithoutInvoiceNestedInput;
  };

  export type invoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    invoice_number?: StringFieldUpdateOperationsInput | string;
    invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    rental_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutInvoiceNestedInput;
  };

  export type invoiceCreateManyInput = {
    id?: string;
    invoice_number: string;
    invoice_date: Date | string;
    due_date: Date | string;
    total_amount: number;
    user_id: string;
    rental_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type invoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    invoice_number?: StringFieldUpdateOperationsInput | string;
    invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type invoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    invoice_number?: StringFieldUpdateOperationsInput | string;
    invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    rental_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentCreateInput = {
    id?: string;
    payment_date: Date | string;
    amount: number;
    payment_method: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoice: invoiceCreateNestedOneWithoutPaymentInput;
    user: userCreateNestedOneWithoutPaymentInput;
  };

  export type paymentUncheckedCreateInput = {
    id?: string;
    payment_date: Date | string;
    amount: number;
    payment_method: string;
    user_id: string;
    invoice_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: invoiceUpdateOneRequiredWithoutPaymentNestedInput;
    user?: userUpdateOneRequiredWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    invoice_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentCreateManyInput = {
    id?: string;
    payment_date: Date | string;
    amount: number;
    payment_method: string;
    user_id: string;
    invoice_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    invoice_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoice?: invoiceCreateNestedManyWithoutRentalInput;
    equipment: equipmentCreateNestedOneWithoutRentalInput;
    user: userCreateNestedOneWithoutRentalInput;
  };

  export type rentalUncheckedCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    user_id: string;
    equipment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoice?: invoiceUncheckedCreateNestedManyWithoutRentalInput;
  };

  export type rentalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: invoiceUpdateManyWithoutRentalNestedInput;
    equipment?: equipmentUpdateOneRequiredWithoutRentalNestedInput;
    user?: userUpdateOneRequiredWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    equipment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: invoiceUncheckedUpdateManyWithoutRentalNestedInput;
  };

  export type rentalCreateManyInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    user_id: string;
    equipment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    equipment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    equipment?: equipmentCreateNestedManyWithoutUserInput;
    invoice?: invoiceCreateNestedManyWithoutUserInput;
    payment?: paymentCreateNestedManyWithoutUserInput;
    rental?: rentalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    equipment?: equipmentUncheckedCreateNestedManyWithoutUserInput;
    invoice?: invoiceUncheckedCreateNestedManyWithoutUserInput;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    equipment?: equipmentUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUpdateManyWithoutUserNestedInput;
    payment?: paymentUpdateManyWithoutUserNestedInput;
    rental?: rentalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    equipment?: equipmentUncheckedUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUncheckedUpdateManyWithoutUserNestedInput;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type EquipmentListRelationFilter = {
    every?: equipmentWhereInput;
    some?: equipmentWhereInput;
    none?: equipmentWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type equipmentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type RentalListRelationFilter = {
    every?: rentalWhereInput;
    some?: rentalWhereInput;
    none?: rentalWhereInput;
  };

  export type rentalOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type equipmentCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    location?: SortOrder;
    company_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type equipmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    location?: SortOrder;
    company_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type equipmentMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    location?: SortOrder;
    company_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type RentalRelationFilter = {
    is?: rentalWhereInput;
    isNot?: rentalWhereInput;
  };

  export type PaymentListRelationFilter = {
    every?: paymentWhereInput;
    some?: paymentWhereInput;
    none?: paymentWhereInput;
  };

  export type paymentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type invoiceCountOrderByAggregateInput = {
    id?: SortOrder;
    invoice_number?: SortOrder;
    invoice_date?: SortOrder;
    due_date?: SortOrder;
    total_amount?: SortOrder;
    user_id?: SortOrder;
    rental_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type invoiceAvgOrderByAggregateInput = {
    total_amount?: SortOrder;
  };

  export type invoiceMaxOrderByAggregateInput = {
    id?: SortOrder;
    invoice_number?: SortOrder;
    invoice_date?: SortOrder;
    due_date?: SortOrder;
    total_amount?: SortOrder;
    user_id?: SortOrder;
    rental_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type invoiceMinOrderByAggregateInput = {
    id?: SortOrder;
    invoice_number?: SortOrder;
    invoice_date?: SortOrder;
    due_date?: SortOrder;
    total_amount?: SortOrder;
    user_id?: SortOrder;
    rental_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type invoiceSumOrderByAggregateInput = {
    total_amount?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type InvoiceRelationFilter = {
    is?: invoiceWhereInput;
    isNot?: invoiceWhereInput;
  };

  export type paymentCountOrderByAggregateInput = {
    id?: SortOrder;
    payment_date?: SortOrder;
    amount?: SortOrder;
    payment_method?: SortOrder;
    user_id?: SortOrder;
    invoice_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type paymentAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type paymentMaxOrderByAggregateInput = {
    id?: SortOrder;
    payment_date?: SortOrder;
    amount?: SortOrder;
    payment_method?: SortOrder;
    user_id?: SortOrder;
    invoice_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type paymentMinOrderByAggregateInput = {
    id?: SortOrder;
    payment_date?: SortOrder;
    amount?: SortOrder;
    payment_method?: SortOrder;
    user_id?: SortOrder;
    invoice_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type paymentSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type InvoiceListRelationFilter = {
    every?: invoiceWhereInput;
    some?: invoiceWhereInput;
    none?: invoiceWhereInput;
  };

  export type EquipmentRelationFilter = {
    is?: equipmentWhereInput;
    isNot?: equipmentWhereInput;
  };

  export type invoiceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type rentalCountOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    user_id?: SortOrder;
    equipment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type rentalAvgOrderByAggregateInput = {
    total_price?: SortOrder;
  };

  export type rentalMaxOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    user_id?: SortOrder;
    equipment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type rentalMinOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    user_id?: SortOrder;
    equipment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type rentalSumOrderByAggregateInput = {
    total_price?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type equipmentCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<equipmentCreateWithoutCompanyInput, equipmentUncheckedCreateWithoutCompanyInput>
      | equipmentCreateWithoutCompanyInput[]
      | equipmentUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: equipmentCreateOrConnectWithoutCompanyInput | equipmentCreateOrConnectWithoutCompanyInput[];
    createMany?: equipmentCreateManyCompanyInputEnvelope;
    connect?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
  };

  export type equipmentUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<equipmentCreateWithoutCompanyInput, equipmentUncheckedCreateWithoutCompanyInput>
      | equipmentCreateWithoutCompanyInput[]
      | equipmentUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: equipmentCreateOrConnectWithoutCompanyInput | equipmentCreateOrConnectWithoutCompanyInput[];
    createMany?: equipmentCreateManyCompanyInputEnvelope;
    connect?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type equipmentUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<equipmentCreateWithoutCompanyInput, equipmentUncheckedCreateWithoutCompanyInput>
      | equipmentCreateWithoutCompanyInput[]
      | equipmentUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: equipmentCreateOrConnectWithoutCompanyInput | equipmentCreateOrConnectWithoutCompanyInput[];
    upsert?: equipmentUpsertWithWhereUniqueWithoutCompanyInput | equipmentUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: equipmentCreateManyCompanyInputEnvelope;
    set?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
    disconnect?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
    delete?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
    connect?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
    update?: equipmentUpdateWithWhereUniqueWithoutCompanyInput | equipmentUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: equipmentUpdateManyWithWhereWithoutCompanyInput | equipmentUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: equipmentScalarWhereInput | equipmentScalarWhereInput[];
  };

  export type equipmentUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<equipmentCreateWithoutCompanyInput, equipmentUncheckedCreateWithoutCompanyInput>
      | equipmentCreateWithoutCompanyInput[]
      | equipmentUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: equipmentCreateOrConnectWithoutCompanyInput | equipmentCreateOrConnectWithoutCompanyInput[];
    upsert?: equipmentUpsertWithWhereUniqueWithoutCompanyInput | equipmentUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: equipmentCreateManyCompanyInputEnvelope;
    set?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
    disconnect?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
    delete?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
    connect?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
    update?: equipmentUpdateWithWhereUniqueWithoutCompanyInput | equipmentUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: equipmentUpdateManyWithWhereWithoutCompanyInput | equipmentUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: equipmentScalarWhereInput | equipmentScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutEquipmentInput = {
    create?: XOR<companyCreateWithoutEquipmentInput, companyUncheckedCreateWithoutEquipmentInput>;
    connectOrCreate?: companyCreateOrConnectWithoutEquipmentInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutEquipmentInput = {
    create?: XOR<userCreateWithoutEquipmentInput, userUncheckedCreateWithoutEquipmentInput>;
    connectOrCreate?: userCreateOrConnectWithoutEquipmentInput;
    connect?: userWhereUniqueInput;
  };

  export type rentalCreateNestedManyWithoutEquipmentInput = {
    create?:
      | XOR<rentalCreateWithoutEquipmentInput, rentalUncheckedCreateWithoutEquipmentInput>
      | rentalCreateWithoutEquipmentInput[]
      | rentalUncheckedCreateWithoutEquipmentInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutEquipmentInput | rentalCreateOrConnectWithoutEquipmentInput[];
    createMany?: rentalCreateManyEquipmentInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type rentalUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?:
      | XOR<rentalCreateWithoutEquipmentInput, rentalUncheckedCreateWithoutEquipmentInput>
      | rentalCreateWithoutEquipmentInput[]
      | rentalUncheckedCreateWithoutEquipmentInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutEquipmentInput | rentalCreateOrConnectWithoutEquipmentInput[];
    createMany?: rentalCreateManyEquipmentInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type companyUpdateOneRequiredWithoutEquipmentNestedInput = {
    create?: XOR<companyCreateWithoutEquipmentInput, companyUncheckedCreateWithoutEquipmentInput>;
    connectOrCreate?: companyCreateOrConnectWithoutEquipmentInput;
    upsert?: companyUpsertWithoutEquipmentInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutEquipmentInput, companyUpdateWithoutEquipmentInput>,
      companyUncheckedUpdateWithoutEquipmentInput
    >;
  };

  export type userUpdateOneRequiredWithoutEquipmentNestedInput = {
    create?: XOR<userCreateWithoutEquipmentInput, userUncheckedCreateWithoutEquipmentInput>;
    connectOrCreate?: userCreateOrConnectWithoutEquipmentInput;
    upsert?: userUpsertWithoutEquipmentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutEquipmentInput, userUpdateWithoutEquipmentInput>,
      userUncheckedUpdateWithoutEquipmentInput
    >;
  };

  export type rentalUpdateManyWithoutEquipmentNestedInput = {
    create?:
      | XOR<rentalCreateWithoutEquipmentInput, rentalUncheckedCreateWithoutEquipmentInput>
      | rentalCreateWithoutEquipmentInput[]
      | rentalUncheckedCreateWithoutEquipmentInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutEquipmentInput | rentalCreateOrConnectWithoutEquipmentInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutEquipmentInput | rentalUpsertWithWhereUniqueWithoutEquipmentInput[];
    createMany?: rentalCreateManyEquipmentInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutEquipmentInput | rentalUpdateWithWhereUniqueWithoutEquipmentInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutEquipmentInput | rentalUpdateManyWithWhereWithoutEquipmentInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type rentalUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?:
      | XOR<rentalCreateWithoutEquipmentInput, rentalUncheckedCreateWithoutEquipmentInput>
      | rentalCreateWithoutEquipmentInput[]
      | rentalUncheckedCreateWithoutEquipmentInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutEquipmentInput | rentalCreateOrConnectWithoutEquipmentInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutEquipmentInput | rentalUpsertWithWhereUniqueWithoutEquipmentInput[];
    createMany?: rentalCreateManyEquipmentInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutEquipmentInput | rentalUpdateWithWhereUniqueWithoutEquipmentInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutEquipmentInput | rentalUpdateManyWithWhereWithoutEquipmentInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type rentalCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<rentalCreateWithoutInvoiceInput, rentalUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: rentalCreateOrConnectWithoutInvoiceInput;
    connect?: rentalWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<userCreateWithoutInvoiceInput, userUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: userCreateOrConnectWithoutInvoiceInput;
    connect?: userWhereUniqueInput;
  };

  export type paymentCreateNestedManyWithoutInvoiceInput = {
    create?:
      | XOR<paymentCreateWithoutInvoiceInput, paymentUncheckedCreateWithoutInvoiceInput>
      | paymentCreateWithoutInvoiceInput[]
      | paymentUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutInvoiceInput | paymentCreateOrConnectWithoutInvoiceInput[];
    createMany?: paymentCreateManyInvoiceInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type paymentUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?:
      | XOR<paymentCreateWithoutInvoiceInput, paymentUncheckedCreateWithoutInvoiceInput>
      | paymentCreateWithoutInvoiceInput[]
      | paymentUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutInvoiceInput | paymentCreateOrConnectWithoutInvoiceInput[];
    createMany?: paymentCreateManyInvoiceInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type rentalUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<rentalCreateWithoutInvoiceInput, rentalUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: rentalCreateOrConnectWithoutInvoiceInput;
    upsert?: rentalUpsertWithoutInvoiceInput;
    connect?: rentalWhereUniqueInput;
    update?: XOR<
      XOR<rentalUpdateToOneWithWhereWithoutInvoiceInput, rentalUpdateWithoutInvoiceInput>,
      rentalUncheckedUpdateWithoutInvoiceInput
    >;
  };

  export type userUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<userCreateWithoutInvoiceInput, userUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: userCreateOrConnectWithoutInvoiceInput;
    upsert?: userUpsertWithoutInvoiceInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutInvoiceInput, userUpdateWithoutInvoiceInput>,
      userUncheckedUpdateWithoutInvoiceInput
    >;
  };

  export type paymentUpdateManyWithoutInvoiceNestedInput = {
    create?:
      | XOR<paymentCreateWithoutInvoiceInput, paymentUncheckedCreateWithoutInvoiceInput>
      | paymentCreateWithoutInvoiceInput[]
      | paymentUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutInvoiceInput | paymentCreateOrConnectWithoutInvoiceInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutInvoiceInput | paymentUpsertWithWhereUniqueWithoutInvoiceInput[];
    createMany?: paymentCreateManyInvoiceInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutInvoiceInput | paymentUpdateWithWhereUniqueWithoutInvoiceInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutInvoiceInput | paymentUpdateManyWithWhereWithoutInvoiceInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type paymentUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?:
      | XOR<paymentCreateWithoutInvoiceInput, paymentUncheckedCreateWithoutInvoiceInput>
      | paymentCreateWithoutInvoiceInput[]
      | paymentUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutInvoiceInput | paymentCreateOrConnectWithoutInvoiceInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutInvoiceInput | paymentUpsertWithWhereUniqueWithoutInvoiceInput[];
    createMany?: paymentCreateManyInvoiceInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutInvoiceInput | paymentUpdateWithWhereUniqueWithoutInvoiceInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutInvoiceInput | paymentUpdateManyWithWhereWithoutInvoiceInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type invoiceCreateNestedOneWithoutPaymentInput = {
    create?: XOR<invoiceCreateWithoutPaymentInput, invoiceUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: invoiceCreateOrConnectWithoutPaymentInput;
    connect?: invoiceWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutPaymentInput = {
    create?: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: userCreateOrConnectWithoutPaymentInput;
    connect?: userWhereUniqueInput;
  };

  export type invoiceUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<invoiceCreateWithoutPaymentInput, invoiceUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: invoiceCreateOrConnectWithoutPaymentInput;
    upsert?: invoiceUpsertWithoutPaymentInput;
    connect?: invoiceWhereUniqueInput;
    update?: XOR<
      XOR<invoiceUpdateToOneWithWhereWithoutPaymentInput, invoiceUpdateWithoutPaymentInput>,
      invoiceUncheckedUpdateWithoutPaymentInput
    >;
  };

  export type userUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: userCreateOrConnectWithoutPaymentInput;
    upsert?: userUpsertWithoutPaymentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutPaymentInput, userUpdateWithoutPaymentInput>,
      userUncheckedUpdateWithoutPaymentInput
    >;
  };

  export type invoiceCreateNestedManyWithoutRentalInput = {
    create?:
      | XOR<invoiceCreateWithoutRentalInput, invoiceUncheckedCreateWithoutRentalInput>
      | invoiceCreateWithoutRentalInput[]
      | invoiceUncheckedCreateWithoutRentalInput[];
    connectOrCreate?: invoiceCreateOrConnectWithoutRentalInput | invoiceCreateOrConnectWithoutRentalInput[];
    createMany?: invoiceCreateManyRentalInputEnvelope;
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
  };

  export type equipmentCreateNestedOneWithoutRentalInput = {
    create?: XOR<equipmentCreateWithoutRentalInput, equipmentUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: equipmentCreateOrConnectWithoutRentalInput;
    connect?: equipmentWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutRentalInput = {
    create?: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: userCreateOrConnectWithoutRentalInput;
    connect?: userWhereUniqueInput;
  };

  export type invoiceUncheckedCreateNestedManyWithoutRentalInput = {
    create?:
      | XOR<invoiceCreateWithoutRentalInput, invoiceUncheckedCreateWithoutRentalInput>
      | invoiceCreateWithoutRentalInput[]
      | invoiceUncheckedCreateWithoutRentalInput[];
    connectOrCreate?: invoiceCreateOrConnectWithoutRentalInput | invoiceCreateOrConnectWithoutRentalInput[];
    createMany?: invoiceCreateManyRentalInputEnvelope;
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
  };

  export type invoiceUpdateManyWithoutRentalNestedInput = {
    create?:
      | XOR<invoiceCreateWithoutRentalInput, invoiceUncheckedCreateWithoutRentalInput>
      | invoiceCreateWithoutRentalInput[]
      | invoiceUncheckedCreateWithoutRentalInput[];
    connectOrCreate?: invoiceCreateOrConnectWithoutRentalInput | invoiceCreateOrConnectWithoutRentalInput[];
    upsert?: invoiceUpsertWithWhereUniqueWithoutRentalInput | invoiceUpsertWithWhereUniqueWithoutRentalInput[];
    createMany?: invoiceCreateManyRentalInputEnvelope;
    set?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    disconnect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    delete?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    update?: invoiceUpdateWithWhereUniqueWithoutRentalInput | invoiceUpdateWithWhereUniqueWithoutRentalInput[];
    updateMany?: invoiceUpdateManyWithWhereWithoutRentalInput | invoiceUpdateManyWithWhereWithoutRentalInput[];
    deleteMany?: invoiceScalarWhereInput | invoiceScalarWhereInput[];
  };

  export type equipmentUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<equipmentCreateWithoutRentalInput, equipmentUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: equipmentCreateOrConnectWithoutRentalInput;
    upsert?: equipmentUpsertWithoutRentalInput;
    connect?: equipmentWhereUniqueInput;
    update?: XOR<
      XOR<equipmentUpdateToOneWithWhereWithoutRentalInput, equipmentUpdateWithoutRentalInput>,
      equipmentUncheckedUpdateWithoutRentalInput
    >;
  };

  export type userUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
    connectOrCreate?: userCreateOrConnectWithoutRentalInput;
    upsert?: userUpsertWithoutRentalInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutRentalInput, userUpdateWithoutRentalInput>,
      userUncheckedUpdateWithoutRentalInput
    >;
  };

  export type invoiceUncheckedUpdateManyWithoutRentalNestedInput = {
    create?:
      | XOR<invoiceCreateWithoutRentalInput, invoiceUncheckedCreateWithoutRentalInput>
      | invoiceCreateWithoutRentalInput[]
      | invoiceUncheckedCreateWithoutRentalInput[];
    connectOrCreate?: invoiceCreateOrConnectWithoutRentalInput | invoiceCreateOrConnectWithoutRentalInput[];
    upsert?: invoiceUpsertWithWhereUniqueWithoutRentalInput | invoiceUpsertWithWhereUniqueWithoutRentalInput[];
    createMany?: invoiceCreateManyRentalInputEnvelope;
    set?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    disconnect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    delete?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    update?: invoiceUpdateWithWhereUniqueWithoutRentalInput | invoiceUpdateWithWhereUniqueWithoutRentalInput[];
    updateMany?: invoiceUpdateManyWithWhereWithoutRentalInput | invoiceUpdateManyWithWhereWithoutRentalInput[];
    deleteMany?: invoiceScalarWhereInput | invoiceScalarWhereInput[];
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type equipmentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<equipmentCreateWithoutUserInput, equipmentUncheckedCreateWithoutUserInput>
      | equipmentCreateWithoutUserInput[]
      | equipmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: equipmentCreateOrConnectWithoutUserInput | equipmentCreateOrConnectWithoutUserInput[];
    createMany?: equipmentCreateManyUserInputEnvelope;
    connect?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
  };

  export type invoiceCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput>
      | invoiceCreateWithoutUserInput[]
      | invoiceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: invoiceCreateOrConnectWithoutUserInput | invoiceCreateOrConnectWithoutUserInput[];
    createMany?: invoiceCreateManyUserInputEnvelope;
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
  };

  export type paymentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type rentalCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type equipmentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<equipmentCreateWithoutUserInput, equipmentUncheckedCreateWithoutUserInput>
      | equipmentCreateWithoutUserInput[]
      | equipmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: equipmentCreateOrConnectWithoutUserInput | equipmentCreateOrConnectWithoutUserInput[];
    createMany?: equipmentCreateManyUserInputEnvelope;
    connect?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
  };

  export type invoiceUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput>
      | invoiceCreateWithoutUserInput[]
      | invoiceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: invoiceCreateOrConnectWithoutUserInput | invoiceCreateOrConnectWithoutUserInput[];
    createMany?: invoiceCreateManyUserInputEnvelope;
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
  };

  export type paymentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type rentalUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type equipmentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<equipmentCreateWithoutUserInput, equipmentUncheckedCreateWithoutUserInput>
      | equipmentCreateWithoutUserInput[]
      | equipmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: equipmentCreateOrConnectWithoutUserInput | equipmentCreateOrConnectWithoutUserInput[];
    upsert?: equipmentUpsertWithWhereUniqueWithoutUserInput | equipmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: equipmentCreateManyUserInputEnvelope;
    set?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
    disconnect?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
    delete?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
    connect?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
    update?: equipmentUpdateWithWhereUniqueWithoutUserInput | equipmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: equipmentUpdateManyWithWhereWithoutUserInput | equipmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: equipmentScalarWhereInput | equipmentScalarWhereInput[];
  };

  export type invoiceUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput>
      | invoiceCreateWithoutUserInput[]
      | invoiceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: invoiceCreateOrConnectWithoutUserInput | invoiceCreateOrConnectWithoutUserInput[];
    upsert?: invoiceUpsertWithWhereUniqueWithoutUserInput | invoiceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: invoiceCreateManyUserInputEnvelope;
    set?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    disconnect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    delete?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    update?: invoiceUpdateWithWhereUniqueWithoutUserInput | invoiceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: invoiceUpdateManyWithWhereWithoutUserInput | invoiceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: invoiceScalarWhereInput | invoiceScalarWhereInput[];
  };

  export type paymentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutUserInput | paymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutUserInput | paymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutUserInput | paymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type rentalUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutUserInput | rentalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutUserInput | rentalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutUserInput | rentalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type equipmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<equipmentCreateWithoutUserInput, equipmentUncheckedCreateWithoutUserInput>
      | equipmentCreateWithoutUserInput[]
      | equipmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: equipmentCreateOrConnectWithoutUserInput | equipmentCreateOrConnectWithoutUserInput[];
    upsert?: equipmentUpsertWithWhereUniqueWithoutUserInput | equipmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: equipmentCreateManyUserInputEnvelope;
    set?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
    disconnect?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
    delete?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
    connect?: equipmentWhereUniqueInput | equipmentWhereUniqueInput[];
    update?: equipmentUpdateWithWhereUniqueWithoutUserInput | equipmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: equipmentUpdateManyWithWhereWithoutUserInput | equipmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: equipmentScalarWhereInput | equipmentScalarWhereInput[];
  };

  export type invoiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput>
      | invoiceCreateWithoutUserInput[]
      | invoiceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: invoiceCreateOrConnectWithoutUserInput | invoiceCreateOrConnectWithoutUserInput[];
    upsert?: invoiceUpsertWithWhereUniqueWithoutUserInput | invoiceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: invoiceCreateManyUserInputEnvelope;
    set?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    disconnect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    delete?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    update?: invoiceUpdateWithWhereUniqueWithoutUserInput | invoiceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: invoiceUpdateManyWithWhereWithoutUserInput | invoiceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: invoiceScalarWhereInput | invoiceScalarWhereInput[];
  };

  export type paymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutUserInput | paymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutUserInput | paymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutUserInput | paymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type rentalUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>
      | rentalCreateWithoutUserInput[]
      | rentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: rentalCreateOrConnectWithoutUserInput | rentalCreateOrConnectWithoutUserInput[];
    upsert?: rentalUpsertWithWhereUniqueWithoutUserInput | rentalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: rentalCreateManyUserInputEnvelope;
    set?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    disconnect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    delete?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    connect?: rentalWhereUniqueInput | rentalWhereUniqueInput[];
    update?: rentalUpdateWithWhereUniqueWithoutUserInput | rentalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: rentalUpdateManyWithWhereWithoutUserInput | rentalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: rentalScalarWhereInput | rentalScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    equipment?: equipmentCreateNestedManyWithoutUserInput;
    invoice?: invoiceCreateNestedManyWithoutUserInput;
    payment?: paymentCreateNestedManyWithoutUserInput;
    rental?: rentalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    equipment?: equipmentUncheckedCreateNestedManyWithoutUserInput;
    invoice?: invoiceUncheckedCreateNestedManyWithoutUserInput;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type equipmentCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    type: string;
    status: string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutEquipmentInput;
    rental?: rentalCreateNestedManyWithoutEquipmentInput;
  };

  export type equipmentUncheckedCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    type: string;
    status: string;
    location: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalUncheckedCreateNestedManyWithoutEquipmentInput;
  };

  export type equipmentCreateOrConnectWithoutCompanyInput = {
    where: equipmentWhereUniqueInput;
    create: XOR<equipmentCreateWithoutCompanyInput, equipmentUncheckedCreateWithoutCompanyInput>;
  };

  export type equipmentCreateManyCompanyInputEnvelope = {
    data: equipmentCreateManyCompanyInput | equipmentCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    equipment?: equipmentUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUpdateManyWithoutUserNestedInput;
    payment?: paymentUpdateManyWithoutUserNestedInput;
    rental?: rentalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    equipment?: equipmentUncheckedUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUncheckedUpdateManyWithoutUserNestedInput;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type equipmentUpsertWithWhereUniqueWithoutCompanyInput = {
    where: equipmentWhereUniqueInput;
    update: XOR<equipmentUpdateWithoutCompanyInput, equipmentUncheckedUpdateWithoutCompanyInput>;
    create: XOR<equipmentCreateWithoutCompanyInput, equipmentUncheckedCreateWithoutCompanyInput>;
  };

  export type equipmentUpdateWithWhereUniqueWithoutCompanyInput = {
    where: equipmentWhereUniqueInput;
    data: XOR<equipmentUpdateWithoutCompanyInput, equipmentUncheckedUpdateWithoutCompanyInput>;
  };

  export type equipmentUpdateManyWithWhereWithoutCompanyInput = {
    where: equipmentScalarWhereInput;
    data: XOR<equipmentUpdateManyMutationInput, equipmentUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type equipmentScalarWhereInput = {
    AND?: equipmentScalarWhereInput | equipmentScalarWhereInput[];
    OR?: equipmentScalarWhereInput[];
    NOT?: equipmentScalarWhereInput | equipmentScalarWhereInput[];
    id?: UuidFilter<'equipment'> | string;
    name?: StringFilter<'equipment'> | string;
    type?: StringFilter<'equipment'> | string;
    status?: StringFilter<'equipment'> | string;
    location?: StringFilter<'equipment'> | string;
    company_id?: UuidFilter<'equipment'> | string;
    user_id?: UuidFilter<'equipment'> | string;
    created_at?: DateTimeFilter<'equipment'> | Date | string;
    updated_at?: DateTimeFilter<'equipment'> | Date | string;
  };

  export type companyCreateWithoutEquipmentInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutEquipmentInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutEquipmentInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutEquipmentInput, companyUncheckedCreateWithoutEquipmentInput>;
  };

  export type userCreateWithoutEquipmentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    invoice?: invoiceCreateNestedManyWithoutUserInput;
    payment?: paymentCreateNestedManyWithoutUserInput;
    rental?: rentalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutEquipmentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    invoice?: invoiceUncheckedCreateNestedManyWithoutUserInput;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutEquipmentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutEquipmentInput, userUncheckedCreateWithoutEquipmentInput>;
  };

  export type rentalCreateWithoutEquipmentInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoice?: invoiceCreateNestedManyWithoutRentalInput;
    user: userCreateNestedOneWithoutRentalInput;
  };

  export type rentalUncheckedCreateWithoutEquipmentInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoice?: invoiceUncheckedCreateNestedManyWithoutRentalInput;
  };

  export type rentalCreateOrConnectWithoutEquipmentInput = {
    where: rentalWhereUniqueInput;
    create: XOR<rentalCreateWithoutEquipmentInput, rentalUncheckedCreateWithoutEquipmentInput>;
  };

  export type rentalCreateManyEquipmentInputEnvelope = {
    data: rentalCreateManyEquipmentInput | rentalCreateManyEquipmentInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithoutEquipmentInput = {
    update: XOR<companyUpdateWithoutEquipmentInput, companyUncheckedUpdateWithoutEquipmentInput>;
    create: XOR<companyCreateWithoutEquipmentInput, companyUncheckedCreateWithoutEquipmentInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutEquipmentInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutEquipmentInput, companyUncheckedUpdateWithoutEquipmentInput>;
  };

  export type companyUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userUpsertWithoutEquipmentInput = {
    update: XOR<userUpdateWithoutEquipmentInput, userUncheckedUpdateWithoutEquipmentInput>;
    create: XOR<userCreateWithoutEquipmentInput, userUncheckedCreateWithoutEquipmentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutEquipmentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutEquipmentInput, userUncheckedUpdateWithoutEquipmentInput>;
  };

  export type userUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUpdateManyWithoutUserNestedInput;
    payment?: paymentUpdateManyWithoutUserNestedInput;
    rental?: rentalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUncheckedUpdateManyWithoutUserNestedInput;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type rentalUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: rentalWhereUniqueInput;
    update: XOR<rentalUpdateWithoutEquipmentInput, rentalUncheckedUpdateWithoutEquipmentInput>;
    create: XOR<rentalCreateWithoutEquipmentInput, rentalUncheckedCreateWithoutEquipmentInput>;
  };

  export type rentalUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: rentalWhereUniqueInput;
    data: XOR<rentalUpdateWithoutEquipmentInput, rentalUncheckedUpdateWithoutEquipmentInput>;
  };

  export type rentalUpdateManyWithWhereWithoutEquipmentInput = {
    where: rentalScalarWhereInput;
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyWithoutEquipmentInput>;
  };

  export type rentalScalarWhereInput = {
    AND?: rentalScalarWhereInput | rentalScalarWhereInput[];
    OR?: rentalScalarWhereInput[];
    NOT?: rentalScalarWhereInput | rentalScalarWhereInput[];
    id?: UuidFilter<'rental'> | string;
    start_date?: DateTimeFilter<'rental'> | Date | string;
    end_date?: DateTimeFilter<'rental'> | Date | string;
    total_price?: IntFilter<'rental'> | number;
    user_id?: UuidFilter<'rental'> | string;
    equipment_id?: UuidFilter<'rental'> | string;
    created_at?: DateTimeFilter<'rental'> | Date | string;
    updated_at?: DateTimeFilter<'rental'> | Date | string;
  };

  export type rentalCreateWithoutInvoiceInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    equipment: equipmentCreateNestedOneWithoutRentalInput;
    user: userCreateNestedOneWithoutRentalInput;
  };

  export type rentalUncheckedCreateWithoutInvoiceInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    user_id: string;
    equipment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalCreateOrConnectWithoutInvoiceInput = {
    where: rentalWhereUniqueInput;
    create: XOR<rentalCreateWithoutInvoiceInput, rentalUncheckedCreateWithoutInvoiceInput>;
  };

  export type userCreateWithoutInvoiceInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    equipment?: equipmentCreateNestedManyWithoutUserInput;
    payment?: paymentCreateNestedManyWithoutUserInput;
    rental?: rentalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutInvoiceInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    equipment?: equipmentUncheckedCreateNestedManyWithoutUserInput;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutInvoiceInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutInvoiceInput, userUncheckedCreateWithoutInvoiceInput>;
  };

  export type paymentCreateWithoutInvoiceInput = {
    id?: string;
    payment_date: Date | string;
    amount: number;
    payment_method: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutPaymentInput;
  };

  export type paymentUncheckedCreateWithoutInvoiceInput = {
    id?: string;
    payment_date: Date | string;
    amount: number;
    payment_method: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentCreateOrConnectWithoutInvoiceInput = {
    where: paymentWhereUniqueInput;
    create: XOR<paymentCreateWithoutInvoiceInput, paymentUncheckedCreateWithoutInvoiceInput>;
  };

  export type paymentCreateManyInvoiceInputEnvelope = {
    data: paymentCreateManyInvoiceInput | paymentCreateManyInvoiceInput[];
    skipDuplicates?: boolean;
  };

  export type rentalUpsertWithoutInvoiceInput = {
    update: XOR<rentalUpdateWithoutInvoiceInput, rentalUncheckedUpdateWithoutInvoiceInput>;
    create: XOR<rentalCreateWithoutInvoiceInput, rentalUncheckedCreateWithoutInvoiceInput>;
    where?: rentalWhereInput;
  };

  export type rentalUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: rentalWhereInput;
    data: XOR<rentalUpdateWithoutInvoiceInput, rentalUncheckedUpdateWithoutInvoiceInput>;
  };

  export type rentalUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    equipment?: equipmentUpdateOneRequiredWithoutRentalNestedInput;
    user?: userUpdateOneRequiredWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    equipment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutInvoiceInput = {
    update: XOR<userUpdateWithoutInvoiceInput, userUncheckedUpdateWithoutInvoiceInput>;
    create: XOR<userCreateWithoutInvoiceInput, userUncheckedCreateWithoutInvoiceInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutInvoiceInput, userUncheckedUpdateWithoutInvoiceInput>;
  };

  export type userUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    equipment?: equipmentUpdateManyWithoutUserNestedInput;
    payment?: paymentUpdateManyWithoutUserNestedInput;
    rental?: rentalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    equipment?: equipmentUncheckedUpdateManyWithoutUserNestedInput;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type paymentUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: paymentWhereUniqueInput;
    update: XOR<paymentUpdateWithoutInvoiceInput, paymentUncheckedUpdateWithoutInvoiceInput>;
    create: XOR<paymentCreateWithoutInvoiceInput, paymentUncheckedCreateWithoutInvoiceInput>;
  };

  export type paymentUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: paymentWhereUniqueInput;
    data: XOR<paymentUpdateWithoutInvoiceInput, paymentUncheckedUpdateWithoutInvoiceInput>;
  };

  export type paymentUpdateManyWithWhereWithoutInvoiceInput = {
    where: paymentScalarWhereInput;
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutInvoiceInput>;
  };

  export type paymentScalarWhereInput = {
    AND?: paymentScalarWhereInput | paymentScalarWhereInput[];
    OR?: paymentScalarWhereInput[];
    NOT?: paymentScalarWhereInput | paymentScalarWhereInput[];
    id?: UuidFilter<'payment'> | string;
    payment_date?: DateTimeFilter<'payment'> | Date | string;
    amount?: IntFilter<'payment'> | number;
    payment_method?: StringFilter<'payment'> | string;
    user_id?: UuidFilter<'payment'> | string;
    invoice_id?: UuidFilter<'payment'> | string;
    created_at?: DateTimeFilter<'payment'> | Date | string;
    updated_at?: DateTimeFilter<'payment'> | Date | string;
  };

  export type invoiceCreateWithoutPaymentInput = {
    id?: string;
    invoice_number: string;
    invoice_date: Date | string;
    due_date: Date | string;
    total_amount: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental: rentalCreateNestedOneWithoutInvoiceInput;
    user: userCreateNestedOneWithoutInvoiceInput;
  };

  export type invoiceUncheckedCreateWithoutPaymentInput = {
    id?: string;
    invoice_number: string;
    invoice_date: Date | string;
    due_date: Date | string;
    total_amount: number;
    user_id: string;
    rental_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type invoiceCreateOrConnectWithoutPaymentInput = {
    where: invoiceWhereUniqueInput;
    create: XOR<invoiceCreateWithoutPaymentInput, invoiceUncheckedCreateWithoutPaymentInput>;
  };

  export type userCreateWithoutPaymentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    equipment?: equipmentCreateNestedManyWithoutUserInput;
    invoice?: invoiceCreateNestedManyWithoutUserInput;
    rental?: rentalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPaymentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    equipment?: equipmentUncheckedCreateNestedManyWithoutUserInput;
    invoice?: invoiceUncheckedCreateNestedManyWithoutUserInput;
    rental?: rentalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPaymentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
  };

  export type invoiceUpsertWithoutPaymentInput = {
    update: XOR<invoiceUpdateWithoutPaymentInput, invoiceUncheckedUpdateWithoutPaymentInput>;
    create: XOR<invoiceCreateWithoutPaymentInput, invoiceUncheckedCreateWithoutPaymentInput>;
    where?: invoiceWhereInput;
  };

  export type invoiceUpdateToOneWithWhereWithoutPaymentInput = {
    where?: invoiceWhereInput;
    data: XOR<invoiceUpdateWithoutPaymentInput, invoiceUncheckedUpdateWithoutPaymentInput>;
  };

  export type invoiceUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    invoice_number?: StringFieldUpdateOperationsInput | string;
    invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUpdateOneRequiredWithoutInvoiceNestedInput;
    user?: userUpdateOneRequiredWithoutInvoiceNestedInput;
  };

  export type invoiceUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    invoice_number?: StringFieldUpdateOperationsInput | string;
    invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    rental_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutPaymentInput = {
    update: XOR<userUpdateWithoutPaymentInput, userUncheckedUpdateWithoutPaymentInput>;
    create: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPaymentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutPaymentInput, userUncheckedUpdateWithoutPaymentInput>;
  };

  export type userUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    equipment?: equipmentUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUpdateManyWithoutUserNestedInput;
    rental?: rentalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    equipment?: equipmentUncheckedUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUncheckedUpdateManyWithoutUserNestedInput;
    rental?: rentalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type invoiceCreateWithoutRentalInput = {
    id?: string;
    invoice_number: string;
    invoice_date: Date | string;
    due_date: Date | string;
    total_amount: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutInvoiceInput;
    payment?: paymentCreateNestedManyWithoutInvoiceInput;
  };

  export type invoiceUncheckedCreateWithoutRentalInput = {
    id?: string;
    invoice_number: string;
    invoice_date: Date | string;
    due_date: Date | string;
    total_amount: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutInvoiceInput;
  };

  export type invoiceCreateOrConnectWithoutRentalInput = {
    where: invoiceWhereUniqueInput;
    create: XOR<invoiceCreateWithoutRentalInput, invoiceUncheckedCreateWithoutRentalInput>;
  };

  export type invoiceCreateManyRentalInputEnvelope = {
    data: invoiceCreateManyRentalInput | invoiceCreateManyRentalInput[];
    skipDuplicates?: boolean;
  };

  export type equipmentCreateWithoutRentalInput = {
    id?: string;
    name: string;
    type: string;
    status: string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutEquipmentInput;
    user: userCreateNestedOneWithoutEquipmentInput;
  };

  export type equipmentUncheckedCreateWithoutRentalInput = {
    id?: string;
    name: string;
    type: string;
    status: string;
    location: string;
    company_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type equipmentCreateOrConnectWithoutRentalInput = {
    where: equipmentWhereUniqueInput;
    create: XOR<equipmentCreateWithoutRentalInput, equipmentUncheckedCreateWithoutRentalInput>;
  };

  export type userCreateWithoutRentalInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    equipment?: equipmentCreateNestedManyWithoutUserInput;
    invoice?: invoiceCreateNestedManyWithoutUserInput;
    payment?: paymentCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutRentalInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    equipment?: equipmentUncheckedCreateNestedManyWithoutUserInput;
    invoice?: invoiceUncheckedCreateNestedManyWithoutUserInput;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutRentalInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
  };

  export type invoiceUpsertWithWhereUniqueWithoutRentalInput = {
    where: invoiceWhereUniqueInput;
    update: XOR<invoiceUpdateWithoutRentalInput, invoiceUncheckedUpdateWithoutRentalInput>;
    create: XOR<invoiceCreateWithoutRentalInput, invoiceUncheckedCreateWithoutRentalInput>;
  };

  export type invoiceUpdateWithWhereUniqueWithoutRentalInput = {
    where: invoiceWhereUniqueInput;
    data: XOR<invoiceUpdateWithoutRentalInput, invoiceUncheckedUpdateWithoutRentalInput>;
  };

  export type invoiceUpdateManyWithWhereWithoutRentalInput = {
    where: invoiceScalarWhereInput;
    data: XOR<invoiceUpdateManyMutationInput, invoiceUncheckedUpdateManyWithoutRentalInput>;
  };

  export type invoiceScalarWhereInput = {
    AND?: invoiceScalarWhereInput | invoiceScalarWhereInput[];
    OR?: invoiceScalarWhereInput[];
    NOT?: invoiceScalarWhereInput | invoiceScalarWhereInput[];
    id?: UuidFilter<'invoice'> | string;
    invoice_number?: StringFilter<'invoice'> | string;
    invoice_date?: DateTimeFilter<'invoice'> | Date | string;
    due_date?: DateTimeFilter<'invoice'> | Date | string;
    total_amount?: IntFilter<'invoice'> | number;
    user_id?: UuidFilter<'invoice'> | string;
    rental_id?: UuidFilter<'invoice'> | string;
    created_at?: DateTimeFilter<'invoice'> | Date | string;
    updated_at?: DateTimeFilter<'invoice'> | Date | string;
  };

  export type equipmentUpsertWithoutRentalInput = {
    update: XOR<equipmentUpdateWithoutRentalInput, equipmentUncheckedUpdateWithoutRentalInput>;
    create: XOR<equipmentCreateWithoutRentalInput, equipmentUncheckedCreateWithoutRentalInput>;
    where?: equipmentWhereInput;
  };

  export type equipmentUpdateToOneWithWhereWithoutRentalInput = {
    where?: equipmentWhereInput;
    data: XOR<equipmentUpdateWithoutRentalInput, equipmentUncheckedUpdateWithoutRentalInput>;
  };

  export type equipmentUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutEquipmentNestedInput;
    user?: userUpdateOneRequiredWithoutEquipmentNestedInput;
  };

  export type equipmentUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutRentalInput = {
    update: XOR<userUpdateWithoutRentalInput, userUncheckedUpdateWithoutRentalInput>;
    create: XOR<userCreateWithoutRentalInput, userUncheckedCreateWithoutRentalInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutRentalInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutRentalInput, userUncheckedUpdateWithoutRentalInput>;
  };

  export type userUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    equipment?: equipmentUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUpdateManyWithoutUserNestedInput;
    payment?: paymentUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    equipment?: equipmentUncheckedUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUncheckedUpdateManyWithoutUserNestedInput;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    equipment?: equipmentCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    equipment?: equipmentUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type equipmentCreateWithoutUserInput = {
    id?: string;
    name: string;
    type: string;
    status: string;
    location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutEquipmentInput;
    rental?: rentalCreateNestedManyWithoutEquipmentInput;
  };

  export type equipmentUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    type: string;
    status: string;
    location: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental?: rentalUncheckedCreateNestedManyWithoutEquipmentInput;
  };

  export type equipmentCreateOrConnectWithoutUserInput = {
    where: equipmentWhereUniqueInput;
    create: XOR<equipmentCreateWithoutUserInput, equipmentUncheckedCreateWithoutUserInput>;
  };

  export type equipmentCreateManyUserInputEnvelope = {
    data: equipmentCreateManyUserInput | equipmentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type invoiceCreateWithoutUserInput = {
    id?: string;
    invoice_number: string;
    invoice_date: Date | string;
    due_date: Date | string;
    total_amount: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    rental: rentalCreateNestedOneWithoutInvoiceInput;
    payment?: paymentCreateNestedManyWithoutInvoiceInput;
  };

  export type invoiceUncheckedCreateWithoutUserInput = {
    id?: string;
    invoice_number: string;
    invoice_date: Date | string;
    due_date: Date | string;
    total_amount: number;
    rental_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutInvoiceInput;
  };

  export type invoiceCreateOrConnectWithoutUserInput = {
    where: invoiceWhereUniqueInput;
    create: XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput>;
  };

  export type invoiceCreateManyUserInputEnvelope = {
    data: invoiceCreateManyUserInput | invoiceCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type paymentCreateWithoutUserInput = {
    id?: string;
    payment_date: Date | string;
    amount: number;
    payment_method: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoice: invoiceCreateNestedOneWithoutPaymentInput;
  };

  export type paymentUncheckedCreateWithoutUserInput = {
    id?: string;
    payment_date: Date | string;
    amount: number;
    payment_method: string;
    invoice_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentCreateOrConnectWithoutUserInput = {
    where: paymentWhereUniqueInput;
    create: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>;
  };

  export type paymentCreateManyUserInputEnvelope = {
    data: paymentCreateManyUserInput | paymentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type rentalCreateWithoutUserInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoice?: invoiceCreateNestedManyWithoutRentalInput;
    equipment: equipmentCreateNestedOneWithoutRentalInput;
  };

  export type rentalUncheckedCreateWithoutUserInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    equipment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoice?: invoiceUncheckedCreateNestedManyWithoutRentalInput;
  };

  export type rentalCreateOrConnectWithoutUserInput = {
    where: rentalWhereUniqueInput;
    create: XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>;
  };

  export type rentalCreateManyUserInputEnvelope = {
    data: rentalCreateManyUserInput | rentalCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    city?: StringNullableFilter<'company'> | string | null;
    state?: StringNullableFilter<'company'> | string | null;
    zip_code?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type equipmentUpsertWithWhereUniqueWithoutUserInput = {
    where: equipmentWhereUniqueInput;
    update: XOR<equipmentUpdateWithoutUserInput, equipmentUncheckedUpdateWithoutUserInput>;
    create: XOR<equipmentCreateWithoutUserInput, equipmentUncheckedCreateWithoutUserInput>;
  };

  export type equipmentUpdateWithWhereUniqueWithoutUserInput = {
    where: equipmentWhereUniqueInput;
    data: XOR<equipmentUpdateWithoutUserInput, equipmentUncheckedUpdateWithoutUserInput>;
  };

  export type equipmentUpdateManyWithWhereWithoutUserInput = {
    where: equipmentScalarWhereInput;
    data: XOR<equipmentUpdateManyMutationInput, equipmentUncheckedUpdateManyWithoutUserInput>;
  };

  export type invoiceUpsertWithWhereUniqueWithoutUserInput = {
    where: invoiceWhereUniqueInput;
    update: XOR<invoiceUpdateWithoutUserInput, invoiceUncheckedUpdateWithoutUserInput>;
    create: XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput>;
  };

  export type invoiceUpdateWithWhereUniqueWithoutUserInput = {
    where: invoiceWhereUniqueInput;
    data: XOR<invoiceUpdateWithoutUserInput, invoiceUncheckedUpdateWithoutUserInput>;
  };

  export type invoiceUpdateManyWithWhereWithoutUserInput = {
    where: invoiceScalarWhereInput;
    data: XOR<invoiceUpdateManyMutationInput, invoiceUncheckedUpdateManyWithoutUserInput>;
  };

  export type paymentUpsertWithWhereUniqueWithoutUserInput = {
    where: paymentWhereUniqueInput;
    update: XOR<paymentUpdateWithoutUserInput, paymentUncheckedUpdateWithoutUserInput>;
    create: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>;
  };

  export type paymentUpdateWithWhereUniqueWithoutUserInput = {
    where: paymentWhereUniqueInput;
    data: XOR<paymentUpdateWithoutUserInput, paymentUncheckedUpdateWithoutUserInput>;
  };

  export type paymentUpdateManyWithWhereWithoutUserInput = {
    where: paymentScalarWhereInput;
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutUserInput>;
  };

  export type rentalUpsertWithWhereUniqueWithoutUserInput = {
    where: rentalWhereUniqueInput;
    update: XOR<rentalUpdateWithoutUserInput, rentalUncheckedUpdateWithoutUserInput>;
    create: XOR<rentalCreateWithoutUserInput, rentalUncheckedCreateWithoutUserInput>;
  };

  export type rentalUpdateWithWhereUniqueWithoutUserInput = {
    where: rentalWhereUniqueInput;
    data: XOR<rentalUpdateWithoutUserInput, rentalUncheckedUpdateWithoutUserInput>;
  };

  export type rentalUpdateManyWithWhereWithoutUserInput = {
    where: rentalScalarWhereInput;
    data: XOR<rentalUpdateManyMutationInput, rentalUncheckedUpdateManyWithoutUserInput>;
  };

  export type equipmentCreateManyCompanyInput = {
    id?: string;
    name: string;
    type: string;
    status: string;
    location: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type equipmentUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutEquipmentNestedInput;
    rental?: rentalUpdateManyWithoutEquipmentNestedInput;
  };

  export type equipmentUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUncheckedUpdateManyWithoutEquipmentNestedInput;
  };

  export type equipmentUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalCreateManyEquipmentInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: invoiceUpdateManyWithoutRentalNestedInput;
    user?: userUpdateOneRequiredWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: invoiceUncheckedUpdateManyWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateManyWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentCreateManyInvoiceInput = {
    id?: string;
    payment_date: Date | string;
    amount: number;
    payment_method: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type invoiceCreateManyRentalInput = {
    id?: string;
    invoice_number: string;
    invoice_date: Date | string;
    due_date: Date | string;
    total_amount: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type invoiceUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    invoice_number?: StringFieldUpdateOperationsInput | string;
    invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutInvoiceNestedInput;
    payment?: paymentUpdateManyWithoutInvoiceNestedInput;
  };

  export type invoiceUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    invoice_number?: StringFieldUpdateOperationsInput | string;
    invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutInvoiceNestedInput;
  };

  export type invoiceUncheckedUpdateManyWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    invoice_number?: StringFieldUpdateOperationsInput | string;
    invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type equipmentCreateManyUserInput = {
    id?: string;
    name: string;
    type: string;
    status: string;
    location: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type invoiceCreateManyUserInput = {
    id?: string;
    invoice_number: string;
    invoice_date: Date | string;
    due_date: Date | string;
    total_amount: number;
    rental_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentCreateManyUserInput = {
    id?: string;
    payment_date: Date | string;
    amount: number;
    payment_method: string;
    invoice_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type rentalCreateManyUserInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    equipment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    equipment?: equipmentUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    equipment?: equipmentUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type equipmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutEquipmentNestedInput;
    rental?: rentalUpdateManyWithoutEquipmentNestedInput;
  };

  export type equipmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUncheckedUpdateManyWithoutEquipmentNestedInput;
  };

  export type equipmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type invoiceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    invoice_number?: StringFieldUpdateOperationsInput | string;
    invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rental?: rentalUpdateOneRequiredWithoutInvoiceNestedInput;
    payment?: paymentUpdateManyWithoutInvoiceNestedInput;
  };

  export type invoiceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    invoice_number?: StringFieldUpdateOperationsInput | string;
    invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    rental_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutInvoiceNestedInput;
  };

  export type invoiceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    invoice_number?: StringFieldUpdateOperationsInput | string;
    invoice_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    rental_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: invoiceUpdateOneRequiredWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    invoice_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: StringFieldUpdateOperationsInput | string;
    invoice_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type rentalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: invoiceUpdateManyWithoutRentalNestedInput;
    equipment?: equipmentUpdateOneRequiredWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    equipment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: invoiceUncheckedUpdateManyWithoutRentalNestedInput;
  };

  export type rentalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    equipment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use EquipmentCountOutputTypeDefaultArgs instead
   */
  export type EquipmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    EquipmentCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use InvoiceCountOutputTypeDefaultArgs instead
   */
  export type InvoiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    InvoiceCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use RentalCountOutputTypeDefaultArgs instead
   */
  export type RentalCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    RentalCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use equipmentDefaultArgs instead
   */
  export type equipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    equipmentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use invoiceDefaultArgs instead
   */
  export type invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    invoiceDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use paymentDefaultArgs instead
   */
  export type paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    paymentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use rentalDefaultArgs instead
   */
  export type rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    rentalDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
