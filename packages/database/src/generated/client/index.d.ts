
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Site
 * 
 */
export type Site = $Result.DefaultSelection<Prisma.$SitePayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model Equipment
 * 
 */
export type Equipment = $Result.DefaultSelection<Prisma.$EquipmentPayload>
/**
 * Model ManpowerRole
 * 
 */
export type ManpowerRole = $Result.DefaultSelection<Prisma.$ManpowerRolePayload>
/**
 * Model Production
 * 
 */
export type Production = $Result.DefaultSelection<Prisma.$ProductionPayload>
/**
 * Model Dispatch
 * 
 */
export type Dispatch = $Result.DefaultSelection<Prisma.$DispatchPayload>
/**
 * Model ReceivedMaterial
 * 
 */
export type ReceivedMaterial = $Result.DefaultSelection<Prisma.$ReceivedMaterialPayload>
/**
 * Model EquipmentLog
 * 
 */
export type EquipmentLog = $Result.DefaultSelection<Prisma.$EquipmentLogPayload>
/**
 * Model ManpowerLog
 * 
 */
export type ManpowerLog = $Result.DefaultSelection<Prisma.$ManpowerLogPayload>
/**
 * Model InventorySnapshot
 * 
 */
export type InventorySnapshot = $Result.DefaultSelection<Prisma.$InventorySnapshotPayload>
/**
 * Model ExportJob
 * 
 */
export type ExportJob = $Result.DefaultSelection<Prisma.$ExportJobPayload>
/**
 * Model ExportAudit
 * 
 */
export type ExportAudit = $Result.DefaultSelection<Prisma.$ExportAuditPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sites
 * const sites = await prisma.site.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sites
   * const sites = await prisma.site.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.site`: Exposes CRUD operations for the **Site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.site.findMany()
    * ```
    */
  get site(): Prisma.SiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.EquipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manpowerRole`: Exposes CRUD operations for the **ManpowerRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ManpowerRoles
    * const manpowerRoles = await prisma.manpowerRole.findMany()
    * ```
    */
  get manpowerRole(): Prisma.ManpowerRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.production`: Exposes CRUD operations for the **Production** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productions
    * const productions = await prisma.production.findMany()
    * ```
    */
  get production(): Prisma.ProductionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dispatch`: Exposes CRUD operations for the **Dispatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dispatches
    * const dispatches = await prisma.dispatch.findMany()
    * ```
    */
  get dispatch(): Prisma.DispatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receivedMaterial`: Exposes CRUD operations for the **ReceivedMaterial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceivedMaterials
    * const receivedMaterials = await prisma.receivedMaterial.findMany()
    * ```
    */
  get receivedMaterial(): Prisma.ReceivedMaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipmentLog`: Exposes CRUD operations for the **EquipmentLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquipmentLogs
    * const equipmentLogs = await prisma.equipmentLog.findMany()
    * ```
    */
  get equipmentLog(): Prisma.EquipmentLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manpowerLog`: Exposes CRUD operations for the **ManpowerLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ManpowerLogs
    * const manpowerLogs = await prisma.manpowerLog.findMany()
    * ```
    */
  get manpowerLog(): Prisma.ManpowerLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventorySnapshot`: Exposes CRUD operations for the **InventorySnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventorySnapshots
    * const inventorySnapshots = await prisma.inventorySnapshot.findMany()
    * ```
    */
  get inventorySnapshot(): Prisma.InventorySnapshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exportJob`: Exposes CRUD operations for the **ExportJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExportJobs
    * const exportJobs = await prisma.exportJob.findMany()
    * ```
    */
  get exportJob(): Prisma.ExportJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exportAudit`: Exposes CRUD operations for the **ExportAudit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExportAudits
    * const exportAudits = await prisma.exportAudit.findMany()
    * ```
    */
  get exportAudit(): Prisma.ExportAuditDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Site: 'Site',
    Material: 'Material',
    Equipment: 'Equipment',
    ManpowerRole: 'ManpowerRole',
    Production: 'Production',
    Dispatch: 'Dispatch',
    ReceivedMaterial: 'ReceivedMaterial',
    EquipmentLog: 'EquipmentLog',
    ManpowerLog: 'ManpowerLog',
    InventorySnapshot: 'InventorySnapshot',
    ExportJob: 'ExportJob',
    ExportAudit: 'ExportAudit'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "site" | "material" | "equipment" | "manpowerRole" | "production" | "dispatch" | "receivedMaterial" | "equipmentLog" | "manpowerLog" | "inventorySnapshot" | "exportJob" | "exportAudit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Site: {
        payload: Prisma.$SitePayload<ExtArgs>
        fields: Prisma.SiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findFirst: {
            args: Prisma.SiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findMany: {
            args: Prisma.SiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          create: {
            args: Prisma.SiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          createMany: {
            args: Prisma.SiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          delete: {
            args: Prisma.SiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          update: {
            args: Prisma.SiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          deleteMany: {
            args: Prisma.SiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          upsert: {
            args: Prisma.SiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          aggregate: {
            args: Prisma.SiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSite>
          }
          groupBy: {
            args: Prisma.SiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteCountArgs<ExtArgs>
            result: $Utils.Optional<SiteCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      Equipment: {
        payload: Prisma.$EquipmentPayload<ExtArgs>
        fields: Prisma.EquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findFirst: {
            args: Prisma.EquipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findMany: {
            args: Prisma.EquipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          create: {
            args: Prisma.EquipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          createMany: {
            args: Prisma.EquipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          delete: {
            args: Prisma.EquipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          update: {
            args: Prisma.EquipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.EquipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
          }
        }
      }
      ManpowerRole: {
        payload: Prisma.$ManpowerRolePayload<ExtArgs>
        fields: Prisma.ManpowerRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManpowerRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManpowerRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerRolePayload>
          }
          findFirst: {
            args: Prisma.ManpowerRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManpowerRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerRolePayload>
          }
          findMany: {
            args: Prisma.ManpowerRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerRolePayload>[]
          }
          create: {
            args: Prisma.ManpowerRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerRolePayload>
          }
          createMany: {
            args: Prisma.ManpowerRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManpowerRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerRolePayload>[]
          }
          delete: {
            args: Prisma.ManpowerRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerRolePayload>
          }
          update: {
            args: Prisma.ManpowerRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerRolePayload>
          }
          deleteMany: {
            args: Prisma.ManpowerRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManpowerRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ManpowerRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerRolePayload>[]
          }
          upsert: {
            args: Prisma.ManpowerRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerRolePayload>
          }
          aggregate: {
            args: Prisma.ManpowerRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManpowerRole>
          }
          groupBy: {
            args: Prisma.ManpowerRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManpowerRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManpowerRoleCountArgs<ExtArgs>
            result: $Utils.Optional<ManpowerRoleCountAggregateOutputType> | number
          }
        }
      }
      Production: {
        payload: Prisma.$ProductionPayload<ExtArgs>
        fields: Prisma.ProductionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          findFirst: {
            args: Prisma.ProductionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          findMany: {
            args: Prisma.ProductionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>[]
          }
          create: {
            args: Prisma.ProductionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          createMany: {
            args: Prisma.ProductionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>[]
          }
          delete: {
            args: Prisma.ProductionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          update: {
            args: Prisma.ProductionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          deleteMany: {
            args: Prisma.ProductionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>[]
          }
          upsert: {
            args: Prisma.ProductionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionPayload>
          }
          aggregate: {
            args: Prisma.ProductionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduction>
          }
          groupBy: {
            args: Prisma.ProductionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductionCountArgs<ExtArgs>
            result: $Utils.Optional<ProductionCountAggregateOutputType> | number
          }
        }
      }
      Dispatch: {
        payload: Prisma.$DispatchPayload<ExtArgs>
        fields: Prisma.DispatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DispatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DispatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          findFirst: {
            args: Prisma.DispatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DispatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          findMany: {
            args: Prisma.DispatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>[]
          }
          create: {
            args: Prisma.DispatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          createMany: {
            args: Prisma.DispatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DispatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>[]
          }
          delete: {
            args: Prisma.DispatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          update: {
            args: Prisma.DispatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          deleteMany: {
            args: Prisma.DispatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DispatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DispatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>[]
          }
          upsert: {
            args: Prisma.DispatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          aggregate: {
            args: Prisma.DispatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDispatch>
          }
          groupBy: {
            args: Prisma.DispatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<DispatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.DispatchCountArgs<ExtArgs>
            result: $Utils.Optional<DispatchCountAggregateOutputType> | number
          }
        }
      }
      ReceivedMaterial: {
        payload: Prisma.$ReceivedMaterialPayload<ExtArgs>
        fields: Prisma.ReceivedMaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceivedMaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedMaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceivedMaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedMaterialPayload>
          }
          findFirst: {
            args: Prisma.ReceivedMaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedMaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceivedMaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedMaterialPayload>
          }
          findMany: {
            args: Prisma.ReceivedMaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedMaterialPayload>[]
          }
          create: {
            args: Prisma.ReceivedMaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedMaterialPayload>
          }
          createMany: {
            args: Prisma.ReceivedMaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceivedMaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedMaterialPayload>[]
          }
          delete: {
            args: Prisma.ReceivedMaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedMaterialPayload>
          }
          update: {
            args: Prisma.ReceivedMaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedMaterialPayload>
          }
          deleteMany: {
            args: Prisma.ReceivedMaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceivedMaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceivedMaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedMaterialPayload>[]
          }
          upsert: {
            args: Prisma.ReceivedMaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedMaterialPayload>
          }
          aggregate: {
            args: Prisma.ReceivedMaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceivedMaterial>
          }
          groupBy: {
            args: Prisma.ReceivedMaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceivedMaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceivedMaterialCountArgs<ExtArgs>
            result: $Utils.Optional<ReceivedMaterialCountAggregateOutputType> | number
          }
        }
      }
      EquipmentLog: {
        payload: Prisma.$EquipmentLogPayload<ExtArgs>
        fields: Prisma.EquipmentLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentLogPayload>
          }
          findFirst: {
            args: Prisma.EquipmentLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentLogPayload>
          }
          findMany: {
            args: Prisma.EquipmentLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentLogPayload>[]
          }
          create: {
            args: Prisma.EquipmentLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentLogPayload>
          }
          createMany: {
            args: Prisma.EquipmentLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentLogPayload>[]
          }
          delete: {
            args: Prisma.EquipmentLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentLogPayload>
          }
          update: {
            args: Prisma.EquipmentLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentLogPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentLogPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentLogPayload>
          }
          aggregate: {
            args: Prisma.EquipmentLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipmentLog>
          }
          groupBy: {
            args: Prisma.EquipmentLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentLogCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentLogCountAggregateOutputType> | number
          }
        }
      }
      ManpowerLog: {
        payload: Prisma.$ManpowerLogPayload<ExtArgs>
        fields: Prisma.ManpowerLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManpowerLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManpowerLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerLogPayload>
          }
          findFirst: {
            args: Prisma.ManpowerLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManpowerLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerLogPayload>
          }
          findMany: {
            args: Prisma.ManpowerLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerLogPayload>[]
          }
          create: {
            args: Prisma.ManpowerLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerLogPayload>
          }
          createMany: {
            args: Prisma.ManpowerLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManpowerLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerLogPayload>[]
          }
          delete: {
            args: Prisma.ManpowerLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerLogPayload>
          }
          update: {
            args: Prisma.ManpowerLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerLogPayload>
          }
          deleteMany: {
            args: Prisma.ManpowerLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManpowerLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ManpowerLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerLogPayload>[]
          }
          upsert: {
            args: Prisma.ManpowerLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManpowerLogPayload>
          }
          aggregate: {
            args: Prisma.ManpowerLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManpowerLog>
          }
          groupBy: {
            args: Prisma.ManpowerLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManpowerLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManpowerLogCountArgs<ExtArgs>
            result: $Utils.Optional<ManpowerLogCountAggregateOutputType> | number
          }
        }
      }
      InventorySnapshot: {
        payload: Prisma.$InventorySnapshotPayload<ExtArgs>
        fields: Prisma.InventorySnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventorySnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventorySnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventorySnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventorySnapshotPayload>
          }
          findFirst: {
            args: Prisma.InventorySnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventorySnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventorySnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventorySnapshotPayload>
          }
          findMany: {
            args: Prisma.InventorySnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventorySnapshotPayload>[]
          }
          create: {
            args: Prisma.InventorySnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventorySnapshotPayload>
          }
          createMany: {
            args: Prisma.InventorySnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventorySnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventorySnapshotPayload>[]
          }
          delete: {
            args: Prisma.InventorySnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventorySnapshotPayload>
          }
          update: {
            args: Prisma.InventorySnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventorySnapshotPayload>
          }
          deleteMany: {
            args: Prisma.InventorySnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventorySnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventorySnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventorySnapshotPayload>[]
          }
          upsert: {
            args: Prisma.InventorySnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventorySnapshotPayload>
          }
          aggregate: {
            args: Prisma.InventorySnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventorySnapshot>
          }
          groupBy: {
            args: Prisma.InventorySnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventorySnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventorySnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<InventorySnapshotCountAggregateOutputType> | number
          }
        }
      }
      ExportJob: {
        payload: Prisma.$ExportJobPayload<ExtArgs>
        fields: Prisma.ExportJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExportJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExportJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          findFirst: {
            args: Prisma.ExportJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExportJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          findMany: {
            args: Prisma.ExportJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>[]
          }
          create: {
            args: Prisma.ExportJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          createMany: {
            args: Prisma.ExportJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExportJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>[]
          }
          delete: {
            args: Prisma.ExportJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          update: {
            args: Prisma.ExportJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          deleteMany: {
            args: Prisma.ExportJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExportJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExportJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>[]
          }
          upsert: {
            args: Prisma.ExportJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportJobPayload>
          }
          aggregate: {
            args: Prisma.ExportJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExportJob>
          }
          groupBy: {
            args: Prisma.ExportJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExportJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExportJobCountArgs<ExtArgs>
            result: $Utils.Optional<ExportJobCountAggregateOutputType> | number
          }
        }
      }
      ExportAudit: {
        payload: Prisma.$ExportAuditPayload<ExtArgs>
        fields: Prisma.ExportAuditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExportAuditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportAuditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExportAuditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportAuditPayload>
          }
          findFirst: {
            args: Prisma.ExportAuditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportAuditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExportAuditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportAuditPayload>
          }
          findMany: {
            args: Prisma.ExportAuditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportAuditPayload>[]
          }
          create: {
            args: Prisma.ExportAuditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportAuditPayload>
          }
          createMany: {
            args: Prisma.ExportAuditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExportAuditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportAuditPayload>[]
          }
          delete: {
            args: Prisma.ExportAuditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportAuditPayload>
          }
          update: {
            args: Prisma.ExportAuditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportAuditPayload>
          }
          deleteMany: {
            args: Prisma.ExportAuditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExportAuditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExportAuditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportAuditPayload>[]
          }
          upsert: {
            args: Prisma.ExportAuditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportAuditPayload>
          }
          aggregate: {
            args: Prisma.ExportAuditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExportAudit>
          }
          groupBy: {
            args: Prisma.ExportAuditGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExportAuditGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExportAuditCountArgs<ExtArgs>
            result: $Utils.Optional<ExportAuditCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    site?: SiteOmit
    material?: MaterialOmit
    equipment?: EquipmentOmit
    manpowerRole?: ManpowerRoleOmit
    production?: ProductionOmit
    dispatch?: DispatchOmit
    receivedMaterial?: ReceivedMaterialOmit
    equipmentLog?: EquipmentLogOmit
    manpowerLog?: ManpowerLogOmit
    inventorySnapshot?: InventorySnapshotOmit
    exportJob?: ExportJobOmit
    exportAudit?: ExportAuditOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SiteCountOutputType
   */

  export type SiteCountOutputType = {
    productions: number
    dispatches: number
    receivedMaterials: number
    equipmentLogs: number
    manpowerLogs: number
    inventorySnapshots: number
    exportJobs: number
    exportAudits: number
  }

  export type SiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productions?: boolean | SiteCountOutputTypeCountProductionsArgs
    dispatches?: boolean | SiteCountOutputTypeCountDispatchesArgs
    receivedMaterials?: boolean | SiteCountOutputTypeCountReceivedMaterialsArgs
    equipmentLogs?: boolean | SiteCountOutputTypeCountEquipmentLogsArgs
    manpowerLogs?: boolean | SiteCountOutputTypeCountManpowerLogsArgs
    inventorySnapshots?: boolean | SiteCountOutputTypeCountInventorySnapshotsArgs
    exportJobs?: boolean | SiteCountOutputTypeCountExportJobsArgs
    exportAudits?: boolean | SiteCountOutputTypeCountExportAuditsArgs
  }

  // Custom InputTypes
  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteCountOutputType
     */
    select?: SiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountProductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountDispatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispatchWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountReceivedMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceivedMaterialWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountEquipmentLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentLogWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountManpowerLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManpowerLogWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountInventorySnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventorySnapshotWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountExportJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExportJobWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountExportAuditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExportAuditWhereInput
  }


  /**
   * Count Type MaterialCountOutputType
   */

  export type MaterialCountOutputType = {
    productions: number
    dispatches: number
    receivedMaterials: number
    inventorySnapshots: number
  }

  export type MaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productions?: boolean | MaterialCountOutputTypeCountProductionsArgs
    dispatches?: boolean | MaterialCountOutputTypeCountDispatchesArgs
    receivedMaterials?: boolean | MaterialCountOutputTypeCountReceivedMaterialsArgs
    inventorySnapshots?: boolean | MaterialCountOutputTypeCountInventorySnapshotsArgs
  }

  // Custom InputTypes
  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCountOutputType
     */
    select?: MaterialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountProductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountDispatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispatchWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountReceivedMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceivedMaterialWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountInventorySnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventorySnapshotWhereInput
  }


  /**
   * Count Type EquipmentCountOutputType
   */

  export type EquipmentCountOutputType = {
    equipmentLogs: number
  }

  export type EquipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipmentLogs?: boolean | EquipmentCountOutputTypeCountEquipmentLogsArgs
  }

  // Custom InputTypes
  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCountOutputType
     */
    select?: EquipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountEquipmentLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentLogWhereInput
  }


  /**
   * Count Type ManpowerRoleCountOutputType
   */

  export type ManpowerRoleCountOutputType = {
    manpowerLogs: number
  }

  export type ManpowerRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manpowerLogs?: boolean | ManpowerRoleCountOutputTypeCountManpowerLogsArgs
  }

  // Custom InputTypes
  /**
   * ManpowerRoleCountOutputType without action
   */
  export type ManpowerRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerRoleCountOutputType
     */
    select?: ManpowerRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ManpowerRoleCountOutputType without action
   */
  export type ManpowerRoleCountOutputTypeCountManpowerLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManpowerLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Site
   */

  export type AggregateSite = {
    _count: SiteCountAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  export type SiteMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    location: string | null
    timezone: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    location: string | null
    timezone: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteCountAggregateOutputType = {
    id: number
    code: number
    name: number
    location: number
    timezone: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SiteMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    location?: true
    timezone?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    location?: true
    timezone?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    location?: true
    timezone?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Site to aggregate.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sites
    **/
    _count?: true | SiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMaxAggregateInputType
  }

  export type GetSiteAggregateType<T extends SiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSite[P]>
      : GetScalarType<T[P], AggregateSite[P]>
  }




  export type SiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithAggregationInput | SiteOrderByWithAggregationInput[]
    by: SiteScalarFieldEnum[] | SiteScalarFieldEnum
    having?: SiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteCountAggregateInputType | true
    _min?: SiteMinAggregateInputType
    _max?: SiteMaxAggregateInputType
  }

  export type SiteGroupByOutputType = {
    id: string
    code: string
    name: string
    location: string | null
    timezone: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SiteCountAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  type GetSiteGroupByPayload<T extends SiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteGroupByOutputType[P]>
        }
      >
    >


  export type SiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    location?: boolean
    timezone?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productions?: boolean | Site$productionsArgs<ExtArgs>
    dispatches?: boolean | Site$dispatchesArgs<ExtArgs>
    receivedMaterials?: boolean | Site$receivedMaterialsArgs<ExtArgs>
    equipmentLogs?: boolean | Site$equipmentLogsArgs<ExtArgs>
    manpowerLogs?: boolean | Site$manpowerLogsArgs<ExtArgs>
    inventorySnapshots?: boolean | Site$inventorySnapshotsArgs<ExtArgs>
    exportJobs?: boolean | Site$exportJobsArgs<ExtArgs>
    exportAudits?: boolean | Site$exportAuditsArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    location?: boolean
    timezone?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["site"]>

  export type SiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    location?: boolean
    timezone?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["site"]>

  export type SiteSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    location?: boolean
    timezone?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "location" | "timezone" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["site"]>
  export type SiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productions?: boolean | Site$productionsArgs<ExtArgs>
    dispatches?: boolean | Site$dispatchesArgs<ExtArgs>
    receivedMaterials?: boolean | Site$receivedMaterialsArgs<ExtArgs>
    equipmentLogs?: boolean | Site$equipmentLogsArgs<ExtArgs>
    manpowerLogs?: boolean | Site$manpowerLogsArgs<ExtArgs>
    inventorySnapshots?: boolean | Site$inventorySnapshotsArgs<ExtArgs>
    exportJobs?: boolean | Site$exportJobsArgs<ExtArgs>
    exportAudits?: boolean | Site$exportAuditsArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Site"
    objects: {
      productions: Prisma.$ProductionPayload<ExtArgs>[]
      dispatches: Prisma.$DispatchPayload<ExtArgs>[]
      receivedMaterials: Prisma.$ReceivedMaterialPayload<ExtArgs>[]
      equipmentLogs: Prisma.$EquipmentLogPayload<ExtArgs>[]
      manpowerLogs: Prisma.$ManpowerLogPayload<ExtArgs>[]
      inventorySnapshots: Prisma.$InventorySnapshotPayload<ExtArgs>[]
      exportJobs: Prisma.$ExportJobPayload<ExtArgs>[]
      exportAudits: Prisma.$ExportAuditPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      location: string | null
      timezone: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["site"]>
    composites: {}
  }

  type SiteGetPayload<S extends boolean | null | undefined | SiteDefaultArgs> = $Result.GetResult<Prisma.$SitePayload, S>

  type SiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteCountAggregateInputType | true
    }

  export interface SiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Site'], meta: { name: 'Site' } }
    /**
     * Find zero or one Site that matches the filter.
     * @param {SiteFindUniqueArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteFindUniqueArgs>(args: SelectSubset<T, SiteFindUniqueArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Site that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteFindUniqueOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteFindFirstArgs>(args?: SelectSubset<T, SiteFindFirstArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.site.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.site.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteWithIdOnly = await prisma.site.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteFindManyArgs>(args?: SelectSubset<T, SiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Site.
     * @param {SiteCreateArgs} args - Arguments to create a Site.
     * @example
     * // Create one Site
     * const Site = await prisma.site.create({
     *   data: {
     *     // ... data to create a Site
     *   }
     * })
     * 
     */
    create<T extends SiteCreateArgs>(args: SelectSubset<T, SiteCreateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sites.
     * @param {SiteCreateManyArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteCreateManyArgs>(args?: SelectSubset<T, SiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sites and returns the data saved in the database.
     * @param {SiteCreateManyAndReturnArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Site.
     * @param {SiteDeleteArgs} args - Arguments to delete one Site.
     * @example
     * // Delete one Site
     * const Site = await prisma.site.delete({
     *   where: {
     *     // ... filter to delete one Site
     *   }
     * })
     * 
     */
    delete<T extends SiteDeleteArgs>(args: SelectSubset<T, SiteDeleteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Site.
     * @param {SiteUpdateArgs} args - Arguments to update one Site.
     * @example
     * // Update one Site
     * const site = await prisma.site.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteUpdateArgs>(args: SelectSubset<T, SiteUpdateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sites.
     * @param {SiteDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.site.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteDeleteManyArgs>(args?: SelectSubset<T, SiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteUpdateManyArgs>(args: SelectSubset<T, SiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites and returns the data updated in the database.
     * @param {SiteUpdateManyAndReturnArgs} args - Arguments to update many Sites.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Site.
     * @param {SiteUpsertArgs} args - Arguments to update or create a Site.
     * @example
     * // Update or create a Site
     * const site = await prisma.site.upsert({
     *   create: {
     *     // ... data to create a Site
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Site we want to update
     *   }
     * })
     */
    upsert<T extends SiteUpsertArgs>(args: SelectSubset<T, SiteUpsertArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.site.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends SiteCountArgs>(
      args?: Subset<T, SiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteAggregateArgs>(args: Subset<T, SiteAggregateArgs>): Prisma.PrismaPromise<GetSiteAggregateType<T>>

    /**
     * Group by Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteGroupByArgs} args - Group by arguments.
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
      T extends SiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteGroupByArgs['orderBy'] }
        : { orderBy?: SiteGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Site model
   */
  readonly fields: SiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productions<T extends Site$productionsArgs<ExtArgs> = {}>(args?: Subset<T, Site$productionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dispatches<T extends Site$dispatchesArgs<ExtArgs> = {}>(args?: Subset<T, Site$dispatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMaterials<T extends Site$receivedMaterialsArgs<ExtArgs> = {}>(args?: Subset<T, Site$receivedMaterialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivedMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipmentLogs<T extends Site$equipmentLogsArgs<ExtArgs> = {}>(args?: Subset<T, Site$equipmentLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    manpowerLogs<T extends Site$manpowerLogsArgs<ExtArgs> = {}>(args?: Subset<T, Site$manpowerLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManpowerLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventorySnapshots<T extends Site$inventorySnapshotsArgs<ExtArgs> = {}>(args?: Subset<T, Site$inventorySnapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventorySnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exportJobs<T extends Site$exportJobsArgs<ExtArgs> = {}>(args?: Subset<T, Site$exportJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exportAudits<T extends Site$exportAuditsArgs<ExtArgs> = {}>(args?: Subset<T, Site$exportAuditsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportAuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Site model
   */
  interface SiteFieldRefs {
    readonly id: FieldRef<"Site", 'String'>
    readonly code: FieldRef<"Site", 'String'>
    readonly name: FieldRef<"Site", 'String'>
    readonly location: FieldRef<"Site", 'String'>
    readonly timezone: FieldRef<"Site", 'String'>
    readonly isActive: FieldRef<"Site", 'Boolean'>
    readonly createdAt: FieldRef<"Site", 'DateTime'>
    readonly updatedAt: FieldRef<"Site", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Site findUnique
   */
  export type SiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findUniqueOrThrow
   */
  export type SiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findFirst
   */
  export type SiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findFirstOrThrow
   */
  export type SiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findMany
   */
  export type SiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Sites to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site create
   */
  export type SiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Site.
     */
    data: XOR<SiteCreateInput, SiteUncheckedCreateInput>
  }

  /**
   * Site createMany
   */
  export type SiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Site createManyAndReturn
   */
  export type SiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Site update
   */
  export type SiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Site.
     */
    data: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
    /**
     * Choose, which Site to update.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site updateMany
   */
  export type SiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site updateManyAndReturn
   */
  export type SiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site upsert
   */
  export type SiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Site to update in case it exists.
     */
    where: SiteWhereUniqueInput
    /**
     * In case the Site found by the `where` argument doesn't exist, create a new Site with this data.
     */
    create: XOR<SiteCreateInput, SiteUncheckedCreateInput>
    /**
     * In case the Site was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
  }

  /**
   * Site delete
   */
  export type SiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter which Site to delete.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site deleteMany
   */
  export type SiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sites to delete
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to delete.
     */
    limit?: number
  }

  /**
   * Site.productions
   */
  export type Site$productionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    where?: ProductionWhereInput
    orderBy?: ProductionOrderByWithRelationInput | ProductionOrderByWithRelationInput[]
    cursor?: ProductionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionScalarFieldEnum | ProductionScalarFieldEnum[]
  }

  /**
   * Site.dispatches
   */
  export type Site$dispatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    where?: DispatchWhereInput
    orderBy?: DispatchOrderByWithRelationInput | DispatchOrderByWithRelationInput[]
    cursor?: DispatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DispatchScalarFieldEnum | DispatchScalarFieldEnum[]
  }

  /**
   * Site.receivedMaterials
   */
  export type Site$receivedMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivedMaterial
     */
    select?: ReceivedMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivedMaterial
     */
    omit?: ReceivedMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedMaterialInclude<ExtArgs> | null
    where?: ReceivedMaterialWhereInput
    orderBy?: ReceivedMaterialOrderByWithRelationInput | ReceivedMaterialOrderByWithRelationInput[]
    cursor?: ReceivedMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceivedMaterialScalarFieldEnum | ReceivedMaterialScalarFieldEnum[]
  }

  /**
   * Site.equipmentLogs
   */
  export type Site$equipmentLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentLog
     */
    select?: EquipmentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentLog
     */
    omit?: EquipmentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentLogInclude<ExtArgs> | null
    where?: EquipmentLogWhereInput
    orderBy?: EquipmentLogOrderByWithRelationInput | EquipmentLogOrderByWithRelationInput[]
    cursor?: EquipmentLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentLogScalarFieldEnum | EquipmentLogScalarFieldEnum[]
  }

  /**
   * Site.manpowerLogs
   */
  export type Site$manpowerLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerLog
     */
    select?: ManpowerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerLog
     */
    omit?: ManpowerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerLogInclude<ExtArgs> | null
    where?: ManpowerLogWhereInput
    orderBy?: ManpowerLogOrderByWithRelationInput | ManpowerLogOrderByWithRelationInput[]
    cursor?: ManpowerLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManpowerLogScalarFieldEnum | ManpowerLogScalarFieldEnum[]
  }

  /**
   * Site.inventorySnapshots
   */
  export type Site$inventorySnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventorySnapshot
     */
    select?: InventorySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventorySnapshot
     */
    omit?: InventorySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorySnapshotInclude<ExtArgs> | null
    where?: InventorySnapshotWhereInput
    orderBy?: InventorySnapshotOrderByWithRelationInput | InventorySnapshotOrderByWithRelationInput[]
    cursor?: InventorySnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventorySnapshotScalarFieldEnum | InventorySnapshotScalarFieldEnum[]
  }

  /**
   * Site.exportJobs
   */
  export type Site$exportJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    where?: ExportJobWhereInput
    orderBy?: ExportJobOrderByWithRelationInput | ExportJobOrderByWithRelationInput[]
    cursor?: ExportJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExportJobScalarFieldEnum | ExportJobScalarFieldEnum[]
  }

  /**
   * Site.exportAudits
   */
  export type Site$exportAuditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportAudit
     */
    select?: ExportAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportAudit
     */
    omit?: ExportAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportAuditInclude<ExtArgs> | null
    where?: ExportAuditWhereInput
    orderBy?: ExportAuditOrderByWithRelationInput | ExportAuditOrderByWithRelationInput[]
    cursor?: ExportAuditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExportAuditScalarFieldEnum | ExportAuditScalarFieldEnum[]
  }

  /**
   * Site without action
   */
  export type SiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialMinAggregateOutputType = {
    id: string | null
    code: string | null
    type: string | null
    name: string | null
    category: string | null
    uom: string | null
    isFinal: boolean | null
    notes: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: string | null
    code: string | null
    type: string | null
    name: string | null
    category: string | null
    uom: string | null
    isFinal: boolean | null
    notes: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    code: number
    type: number
    name: number
    category: number
    uom: number
    isFinal: number
    notes: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaterialMinAggregateInputType = {
    id?: true
    code?: true
    type?: true
    name?: true
    category?: true
    uom?: true
    isFinal?: true
    notes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    code?: true
    type?: true
    name?: true
    category?: true
    uom?: true
    isFinal?: true
    notes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    code?: true
    type?: true
    name?: true
    category?: true
    uom?: true
    isFinal?: true
    notes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: string
    code: string
    type: string
    name: string
    category: string
    uom: string
    isFinal: boolean
    notes: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: MaterialCountAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    name?: boolean
    category?: boolean
    uom?: boolean
    isFinal?: boolean
    notes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productions?: boolean | Material$productionsArgs<ExtArgs>
    dispatches?: boolean | Material$dispatchesArgs<ExtArgs>
    receivedMaterials?: boolean | Material$receivedMaterialsArgs<ExtArgs>
    inventorySnapshots?: boolean | Material$inventorySnapshotsArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    name?: boolean
    category?: boolean
    uom?: boolean
    isFinal?: boolean
    notes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    name?: boolean
    category?: boolean
    uom?: boolean
    isFinal?: boolean
    notes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectScalar = {
    id?: boolean
    code?: boolean
    type?: boolean
    name?: boolean
    category?: boolean
    uom?: boolean
    isFinal?: boolean
    notes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "type" | "name" | "category" | "uom" | "isFinal" | "notes" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["material"]>
  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productions?: boolean | Material$productionsArgs<ExtArgs>
    dispatches?: boolean | Material$dispatchesArgs<ExtArgs>
    receivedMaterials?: boolean | Material$receivedMaterialsArgs<ExtArgs>
    inventorySnapshots?: boolean | Material$inventorySnapshotsArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      productions: Prisma.$ProductionPayload<ExtArgs>[]
      dispatches: Prisma.$DispatchPayload<ExtArgs>[]
      receivedMaterials: Prisma.$ReceivedMaterialPayload<ExtArgs>[]
      inventorySnapshots: Prisma.$InventorySnapshotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      type: string
      name: string
      category: string
      uom: string
      isFinal: boolean
      notes: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {MaterialUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
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
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productions<T extends Material$productionsArgs<ExtArgs> = {}>(args?: Subset<T, Material$productionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dispatches<T extends Material$dispatchesArgs<ExtArgs> = {}>(args?: Subset<T, Material$dispatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMaterials<T extends Material$receivedMaterialsArgs<ExtArgs> = {}>(args?: Subset<T, Material$receivedMaterialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivedMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventorySnapshots<T extends Material$inventorySnapshotsArgs<ExtArgs> = {}>(args?: Subset<T, Material$inventorySnapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventorySnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Material model
   */
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'String'>
    readonly code: FieldRef<"Material", 'String'>
    readonly type: FieldRef<"Material", 'String'>
    readonly name: FieldRef<"Material", 'String'>
    readonly category: FieldRef<"Material", 'String'>
    readonly uom: FieldRef<"Material", 'String'>
    readonly isFinal: FieldRef<"Material", 'Boolean'>
    readonly notes: FieldRef<"Material", 'String'>
    readonly isActive: FieldRef<"Material", 'Boolean'>
    readonly createdAt: FieldRef<"Material", 'DateTime'>
    readonly updatedAt: FieldRef<"Material", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material createManyAndReturn
   */
  export type MaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material updateManyAndReturn
   */
  export type MaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Material.productions
   */
  export type Material$productionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    where?: ProductionWhereInput
    orderBy?: ProductionOrderByWithRelationInput | ProductionOrderByWithRelationInput[]
    cursor?: ProductionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductionScalarFieldEnum | ProductionScalarFieldEnum[]
  }

  /**
   * Material.dispatches
   */
  export type Material$dispatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    where?: DispatchWhereInput
    orderBy?: DispatchOrderByWithRelationInput | DispatchOrderByWithRelationInput[]
    cursor?: DispatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DispatchScalarFieldEnum | DispatchScalarFieldEnum[]
  }

  /**
   * Material.receivedMaterials
   */
  export type Material$receivedMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivedMaterial
     */
    select?: ReceivedMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivedMaterial
     */
    omit?: ReceivedMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedMaterialInclude<ExtArgs> | null
    where?: ReceivedMaterialWhereInput
    orderBy?: ReceivedMaterialOrderByWithRelationInput | ReceivedMaterialOrderByWithRelationInput[]
    cursor?: ReceivedMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceivedMaterialScalarFieldEnum | ReceivedMaterialScalarFieldEnum[]
  }

  /**
   * Material.inventorySnapshots
   */
  export type Material$inventorySnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventorySnapshot
     */
    select?: InventorySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventorySnapshot
     */
    omit?: InventorySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorySnapshotInclude<ExtArgs> | null
    where?: InventorySnapshotWhereInput
    orderBy?: InventorySnapshotOrderByWithRelationInput | InventorySnapshotOrderByWithRelationInput[]
    cursor?: InventorySnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventorySnapshotScalarFieldEnum | InventorySnapshotScalarFieldEnum[]
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
  }


  /**
   * Model Equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    type: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    type: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    code: number
    name: number
    type: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EquipmentMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type EquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithAggregationInput | EquipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }

  export type EquipmentGroupByOutputType = {
    id: string
    code: string
    name: string
    type: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: EquipmentCountAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipmentLogs?: boolean | Equipment$equipmentLogsArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EquipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "type" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["equipment"]>
  export type EquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipmentLogs?: boolean | Equipment$equipmentLogsArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EquipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {
      equipmentLogs: Prisma.$EquipmentLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      type: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }

  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipment'], meta: { name: 'Equipment' } }
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {EquipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentFindUniqueArgs>(args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentFindFirstArgs>(args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends EquipmentFindManyArgs>(args?: SelectSubset<T, EquipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipment.
     * @param {EquipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
     */
    create<T extends EquipmentCreateArgs>(args: SelectSubset<T, EquipmentCreateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipment.
     * @param {EquipmentCreateManyArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentCreateManyArgs>(args?: SelectSubset<T, EquipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipment and returns the data saved in the database.
     * @param {EquipmentCreateManyAndReturnArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipment.
     * @param {EquipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
     */
    delete<T extends EquipmentDeleteArgs>(args: SelectSubset<T, EquipmentDeleteArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipment.
     * @param {EquipmentUpdateArgs} args - Arguments to update one Equipment.
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
     */
    update<T extends EquipmentUpdateArgs>(args: SelectSubset<T, EquipmentUpdateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipment.
     * @param {EquipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentDeleteManyArgs>(args?: SelectSubset<T, EquipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends EquipmentUpdateManyArgs>(args: SelectSubset<T, EquipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment and returns the data updated in the database.
     * @param {EquipmentUpdateManyAndReturnArgs} args - Arguments to update many Equipment.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipment.
     * @param {EquipmentUpsertArgs} args - Arguments to update or create a Equipment.
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
     */
    upsert<T extends EquipmentUpsertArgs>(args: SelectSubset<T, EquipmentUpsertArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCountArgs>(
      args?: Subset<T, EquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentGroupByArgs} args - Group by arguments.
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
      T extends EquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipment model
   */
  readonly fields: EquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipmentLogs<T extends Equipment$equipmentLogsArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$equipmentLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipment model
   */
  interface EquipmentFieldRefs {
    readonly id: FieldRef<"Equipment", 'String'>
    readonly code: FieldRef<"Equipment", 'String'>
    readonly name: FieldRef<"Equipment", 'String'>
    readonly type: FieldRef<"Equipment", 'String'>
    readonly isActive: FieldRef<"Equipment", 'Boolean'>
    readonly createdAt: FieldRef<"Equipment", 'DateTime'>
    readonly updatedAt: FieldRef<"Equipment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Equipment findUnique
   */
  export type EquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findFirst
   */
  export type EquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }

  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment createManyAndReturn
   */
  export type EquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     */
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment updateManyAndReturn
   */
  export type EquipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     */
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     */
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }

  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to delete.
     */
    limit?: number
  }

  /**
   * Equipment.equipmentLogs
   */
  export type Equipment$equipmentLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentLog
     */
    select?: EquipmentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentLog
     */
    omit?: EquipmentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentLogInclude<ExtArgs> | null
    where?: EquipmentLogWhereInput
    orderBy?: EquipmentLogOrderByWithRelationInput | EquipmentLogOrderByWithRelationInput[]
    cursor?: EquipmentLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentLogScalarFieldEnum | EquipmentLogScalarFieldEnum[]
  }

  /**
   * Equipment without action
   */
  export type EquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
  }


  /**
   * Model ManpowerRole
   */

  export type AggregateManpowerRole = {
    _count: ManpowerRoleCountAggregateOutputType | null
    _min: ManpowerRoleMinAggregateOutputType | null
    _max: ManpowerRoleMaxAggregateOutputType | null
  }

  export type ManpowerRoleMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ManpowerRoleMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ManpowerRoleCountAggregateOutputType = {
    id: number
    code: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ManpowerRoleMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ManpowerRoleMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ManpowerRoleCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ManpowerRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManpowerRole to aggregate.
     */
    where?: ManpowerRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManpowerRoles to fetch.
     */
    orderBy?: ManpowerRoleOrderByWithRelationInput | ManpowerRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManpowerRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManpowerRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManpowerRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ManpowerRoles
    **/
    _count?: true | ManpowerRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManpowerRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManpowerRoleMaxAggregateInputType
  }

  export type GetManpowerRoleAggregateType<T extends ManpowerRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateManpowerRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManpowerRole[P]>
      : GetScalarType<T[P], AggregateManpowerRole[P]>
  }




  export type ManpowerRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManpowerRoleWhereInput
    orderBy?: ManpowerRoleOrderByWithAggregationInput | ManpowerRoleOrderByWithAggregationInput[]
    by: ManpowerRoleScalarFieldEnum[] | ManpowerRoleScalarFieldEnum
    having?: ManpowerRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManpowerRoleCountAggregateInputType | true
    _min?: ManpowerRoleMinAggregateInputType
    _max?: ManpowerRoleMaxAggregateInputType
  }

  export type ManpowerRoleGroupByOutputType = {
    id: string
    code: string
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ManpowerRoleCountAggregateOutputType | null
    _min: ManpowerRoleMinAggregateOutputType | null
    _max: ManpowerRoleMaxAggregateOutputType | null
  }

  type GetManpowerRoleGroupByPayload<T extends ManpowerRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManpowerRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManpowerRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManpowerRoleGroupByOutputType[P]>
            : GetScalarType<T[P], ManpowerRoleGroupByOutputType[P]>
        }
      >
    >


  export type ManpowerRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    manpowerLogs?: boolean | ManpowerRole$manpowerLogsArgs<ExtArgs>
    _count?: boolean | ManpowerRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manpowerRole"]>

  export type ManpowerRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["manpowerRole"]>

  export type ManpowerRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["manpowerRole"]>

  export type ManpowerRoleSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ManpowerRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["manpowerRole"]>
  export type ManpowerRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manpowerLogs?: boolean | ManpowerRole$manpowerLogsArgs<ExtArgs>
    _count?: boolean | ManpowerRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ManpowerRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ManpowerRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ManpowerRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ManpowerRole"
    objects: {
      manpowerLogs: Prisma.$ManpowerLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["manpowerRole"]>
    composites: {}
  }

  type ManpowerRoleGetPayload<S extends boolean | null | undefined | ManpowerRoleDefaultArgs> = $Result.GetResult<Prisma.$ManpowerRolePayload, S>

  type ManpowerRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManpowerRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManpowerRoleCountAggregateInputType | true
    }

  export interface ManpowerRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ManpowerRole'], meta: { name: 'ManpowerRole' } }
    /**
     * Find zero or one ManpowerRole that matches the filter.
     * @param {ManpowerRoleFindUniqueArgs} args - Arguments to find a ManpowerRole
     * @example
     * // Get one ManpowerRole
     * const manpowerRole = await prisma.manpowerRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManpowerRoleFindUniqueArgs>(args: SelectSubset<T, ManpowerRoleFindUniqueArgs<ExtArgs>>): Prisma__ManpowerRoleClient<$Result.GetResult<Prisma.$ManpowerRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ManpowerRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManpowerRoleFindUniqueOrThrowArgs} args - Arguments to find a ManpowerRole
     * @example
     * // Get one ManpowerRole
     * const manpowerRole = await prisma.manpowerRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManpowerRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, ManpowerRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManpowerRoleClient<$Result.GetResult<Prisma.$ManpowerRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManpowerRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManpowerRoleFindFirstArgs} args - Arguments to find a ManpowerRole
     * @example
     * // Get one ManpowerRole
     * const manpowerRole = await prisma.manpowerRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManpowerRoleFindFirstArgs>(args?: SelectSubset<T, ManpowerRoleFindFirstArgs<ExtArgs>>): Prisma__ManpowerRoleClient<$Result.GetResult<Prisma.$ManpowerRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManpowerRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManpowerRoleFindFirstOrThrowArgs} args - Arguments to find a ManpowerRole
     * @example
     * // Get one ManpowerRole
     * const manpowerRole = await prisma.manpowerRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManpowerRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, ManpowerRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManpowerRoleClient<$Result.GetResult<Prisma.$ManpowerRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ManpowerRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManpowerRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManpowerRoles
     * const manpowerRoles = await prisma.manpowerRole.findMany()
     * 
     * // Get first 10 ManpowerRoles
     * const manpowerRoles = await prisma.manpowerRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const manpowerRoleWithIdOnly = await prisma.manpowerRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManpowerRoleFindManyArgs>(args?: SelectSubset<T, ManpowerRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManpowerRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ManpowerRole.
     * @param {ManpowerRoleCreateArgs} args - Arguments to create a ManpowerRole.
     * @example
     * // Create one ManpowerRole
     * const ManpowerRole = await prisma.manpowerRole.create({
     *   data: {
     *     // ... data to create a ManpowerRole
     *   }
     * })
     * 
     */
    create<T extends ManpowerRoleCreateArgs>(args: SelectSubset<T, ManpowerRoleCreateArgs<ExtArgs>>): Prisma__ManpowerRoleClient<$Result.GetResult<Prisma.$ManpowerRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ManpowerRoles.
     * @param {ManpowerRoleCreateManyArgs} args - Arguments to create many ManpowerRoles.
     * @example
     * // Create many ManpowerRoles
     * const manpowerRole = await prisma.manpowerRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManpowerRoleCreateManyArgs>(args?: SelectSubset<T, ManpowerRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ManpowerRoles and returns the data saved in the database.
     * @param {ManpowerRoleCreateManyAndReturnArgs} args - Arguments to create many ManpowerRoles.
     * @example
     * // Create many ManpowerRoles
     * const manpowerRole = await prisma.manpowerRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ManpowerRoles and only return the `id`
     * const manpowerRoleWithIdOnly = await prisma.manpowerRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManpowerRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, ManpowerRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManpowerRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ManpowerRole.
     * @param {ManpowerRoleDeleteArgs} args - Arguments to delete one ManpowerRole.
     * @example
     * // Delete one ManpowerRole
     * const ManpowerRole = await prisma.manpowerRole.delete({
     *   where: {
     *     // ... filter to delete one ManpowerRole
     *   }
     * })
     * 
     */
    delete<T extends ManpowerRoleDeleteArgs>(args: SelectSubset<T, ManpowerRoleDeleteArgs<ExtArgs>>): Prisma__ManpowerRoleClient<$Result.GetResult<Prisma.$ManpowerRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ManpowerRole.
     * @param {ManpowerRoleUpdateArgs} args - Arguments to update one ManpowerRole.
     * @example
     * // Update one ManpowerRole
     * const manpowerRole = await prisma.manpowerRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManpowerRoleUpdateArgs>(args: SelectSubset<T, ManpowerRoleUpdateArgs<ExtArgs>>): Prisma__ManpowerRoleClient<$Result.GetResult<Prisma.$ManpowerRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ManpowerRoles.
     * @param {ManpowerRoleDeleteManyArgs} args - Arguments to filter ManpowerRoles to delete.
     * @example
     * // Delete a few ManpowerRoles
     * const { count } = await prisma.manpowerRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManpowerRoleDeleteManyArgs>(args?: SelectSubset<T, ManpowerRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManpowerRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManpowerRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManpowerRoles
     * const manpowerRole = await prisma.manpowerRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManpowerRoleUpdateManyArgs>(args: SelectSubset<T, ManpowerRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManpowerRoles and returns the data updated in the database.
     * @param {ManpowerRoleUpdateManyAndReturnArgs} args - Arguments to update many ManpowerRoles.
     * @example
     * // Update many ManpowerRoles
     * const manpowerRole = await prisma.manpowerRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ManpowerRoles and only return the `id`
     * const manpowerRoleWithIdOnly = await prisma.manpowerRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ManpowerRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, ManpowerRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManpowerRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ManpowerRole.
     * @param {ManpowerRoleUpsertArgs} args - Arguments to update or create a ManpowerRole.
     * @example
     * // Update or create a ManpowerRole
     * const manpowerRole = await prisma.manpowerRole.upsert({
     *   create: {
     *     // ... data to create a ManpowerRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManpowerRole we want to update
     *   }
     * })
     */
    upsert<T extends ManpowerRoleUpsertArgs>(args: SelectSubset<T, ManpowerRoleUpsertArgs<ExtArgs>>): Prisma__ManpowerRoleClient<$Result.GetResult<Prisma.$ManpowerRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ManpowerRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManpowerRoleCountArgs} args - Arguments to filter ManpowerRoles to count.
     * @example
     * // Count the number of ManpowerRoles
     * const count = await prisma.manpowerRole.count({
     *   where: {
     *     // ... the filter for the ManpowerRoles we want to count
     *   }
     * })
    **/
    count<T extends ManpowerRoleCountArgs>(
      args?: Subset<T, ManpowerRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManpowerRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ManpowerRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManpowerRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManpowerRoleAggregateArgs>(args: Subset<T, ManpowerRoleAggregateArgs>): Prisma.PrismaPromise<GetManpowerRoleAggregateType<T>>

    /**
     * Group by ManpowerRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManpowerRoleGroupByArgs} args - Group by arguments.
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
      T extends ManpowerRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManpowerRoleGroupByArgs['orderBy'] }
        : { orderBy?: ManpowerRoleGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManpowerRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManpowerRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ManpowerRole model
   */
  readonly fields: ManpowerRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ManpowerRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManpowerRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manpowerLogs<T extends ManpowerRole$manpowerLogsArgs<ExtArgs> = {}>(args?: Subset<T, ManpowerRole$manpowerLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManpowerLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ManpowerRole model
   */
  interface ManpowerRoleFieldRefs {
    readonly id: FieldRef<"ManpowerRole", 'String'>
    readonly code: FieldRef<"ManpowerRole", 'String'>
    readonly name: FieldRef<"ManpowerRole", 'String'>
    readonly isActive: FieldRef<"ManpowerRole", 'Boolean'>
    readonly createdAt: FieldRef<"ManpowerRole", 'DateTime'>
    readonly updatedAt: FieldRef<"ManpowerRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ManpowerRole findUnique
   */
  export type ManpowerRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerRole
     */
    select?: ManpowerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerRole
     */
    omit?: ManpowerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerRoleInclude<ExtArgs> | null
    /**
     * Filter, which ManpowerRole to fetch.
     */
    where: ManpowerRoleWhereUniqueInput
  }

  /**
   * ManpowerRole findUniqueOrThrow
   */
  export type ManpowerRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerRole
     */
    select?: ManpowerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerRole
     */
    omit?: ManpowerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerRoleInclude<ExtArgs> | null
    /**
     * Filter, which ManpowerRole to fetch.
     */
    where: ManpowerRoleWhereUniqueInput
  }

  /**
   * ManpowerRole findFirst
   */
  export type ManpowerRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerRole
     */
    select?: ManpowerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerRole
     */
    omit?: ManpowerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerRoleInclude<ExtArgs> | null
    /**
     * Filter, which ManpowerRole to fetch.
     */
    where?: ManpowerRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManpowerRoles to fetch.
     */
    orderBy?: ManpowerRoleOrderByWithRelationInput | ManpowerRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManpowerRoles.
     */
    cursor?: ManpowerRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManpowerRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManpowerRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManpowerRoles.
     */
    distinct?: ManpowerRoleScalarFieldEnum | ManpowerRoleScalarFieldEnum[]
  }

  /**
   * ManpowerRole findFirstOrThrow
   */
  export type ManpowerRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerRole
     */
    select?: ManpowerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerRole
     */
    omit?: ManpowerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerRoleInclude<ExtArgs> | null
    /**
     * Filter, which ManpowerRole to fetch.
     */
    where?: ManpowerRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManpowerRoles to fetch.
     */
    orderBy?: ManpowerRoleOrderByWithRelationInput | ManpowerRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManpowerRoles.
     */
    cursor?: ManpowerRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManpowerRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManpowerRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManpowerRoles.
     */
    distinct?: ManpowerRoleScalarFieldEnum | ManpowerRoleScalarFieldEnum[]
  }

  /**
   * ManpowerRole findMany
   */
  export type ManpowerRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerRole
     */
    select?: ManpowerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerRole
     */
    omit?: ManpowerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerRoleInclude<ExtArgs> | null
    /**
     * Filter, which ManpowerRoles to fetch.
     */
    where?: ManpowerRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManpowerRoles to fetch.
     */
    orderBy?: ManpowerRoleOrderByWithRelationInput | ManpowerRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ManpowerRoles.
     */
    cursor?: ManpowerRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManpowerRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManpowerRoles.
     */
    skip?: number
    distinct?: ManpowerRoleScalarFieldEnum | ManpowerRoleScalarFieldEnum[]
  }

  /**
   * ManpowerRole create
   */
  export type ManpowerRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerRole
     */
    select?: ManpowerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerRole
     */
    omit?: ManpowerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a ManpowerRole.
     */
    data: XOR<ManpowerRoleCreateInput, ManpowerRoleUncheckedCreateInput>
  }

  /**
   * ManpowerRole createMany
   */
  export type ManpowerRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManpowerRoles.
     */
    data: ManpowerRoleCreateManyInput | ManpowerRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManpowerRole createManyAndReturn
   */
  export type ManpowerRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerRole
     */
    select?: ManpowerRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerRole
     */
    omit?: ManpowerRoleOmit<ExtArgs> | null
    /**
     * The data used to create many ManpowerRoles.
     */
    data: ManpowerRoleCreateManyInput | ManpowerRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManpowerRole update
   */
  export type ManpowerRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerRole
     */
    select?: ManpowerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerRole
     */
    omit?: ManpowerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a ManpowerRole.
     */
    data: XOR<ManpowerRoleUpdateInput, ManpowerRoleUncheckedUpdateInput>
    /**
     * Choose, which ManpowerRole to update.
     */
    where: ManpowerRoleWhereUniqueInput
  }

  /**
   * ManpowerRole updateMany
   */
  export type ManpowerRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ManpowerRoles.
     */
    data: XOR<ManpowerRoleUpdateManyMutationInput, ManpowerRoleUncheckedUpdateManyInput>
    /**
     * Filter which ManpowerRoles to update
     */
    where?: ManpowerRoleWhereInput
    /**
     * Limit how many ManpowerRoles to update.
     */
    limit?: number
  }

  /**
   * ManpowerRole updateManyAndReturn
   */
  export type ManpowerRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerRole
     */
    select?: ManpowerRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerRole
     */
    omit?: ManpowerRoleOmit<ExtArgs> | null
    /**
     * The data used to update ManpowerRoles.
     */
    data: XOR<ManpowerRoleUpdateManyMutationInput, ManpowerRoleUncheckedUpdateManyInput>
    /**
     * Filter which ManpowerRoles to update
     */
    where?: ManpowerRoleWhereInput
    /**
     * Limit how many ManpowerRoles to update.
     */
    limit?: number
  }

  /**
   * ManpowerRole upsert
   */
  export type ManpowerRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerRole
     */
    select?: ManpowerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerRole
     */
    omit?: ManpowerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the ManpowerRole to update in case it exists.
     */
    where: ManpowerRoleWhereUniqueInput
    /**
     * In case the ManpowerRole found by the `where` argument doesn't exist, create a new ManpowerRole with this data.
     */
    create: XOR<ManpowerRoleCreateInput, ManpowerRoleUncheckedCreateInput>
    /**
     * In case the ManpowerRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManpowerRoleUpdateInput, ManpowerRoleUncheckedUpdateInput>
  }

  /**
   * ManpowerRole delete
   */
  export type ManpowerRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerRole
     */
    select?: ManpowerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerRole
     */
    omit?: ManpowerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerRoleInclude<ExtArgs> | null
    /**
     * Filter which ManpowerRole to delete.
     */
    where: ManpowerRoleWhereUniqueInput
  }

  /**
   * ManpowerRole deleteMany
   */
  export type ManpowerRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManpowerRoles to delete
     */
    where?: ManpowerRoleWhereInput
    /**
     * Limit how many ManpowerRoles to delete.
     */
    limit?: number
  }

  /**
   * ManpowerRole.manpowerLogs
   */
  export type ManpowerRole$manpowerLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerLog
     */
    select?: ManpowerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerLog
     */
    omit?: ManpowerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerLogInclude<ExtArgs> | null
    where?: ManpowerLogWhereInput
    orderBy?: ManpowerLogOrderByWithRelationInput | ManpowerLogOrderByWithRelationInput[]
    cursor?: ManpowerLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManpowerLogScalarFieldEnum | ManpowerLogScalarFieldEnum[]
  }

  /**
   * ManpowerRole without action
   */
  export type ManpowerRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerRole
     */
    select?: ManpowerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerRole
     */
    omit?: ManpowerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerRoleInclude<ExtArgs> | null
  }


  /**
   * Model Production
   */

  export type AggregateProduction = {
    _count: ProductionCountAggregateOutputType | null
    _avg: ProductionAvgAggregateOutputType | null
    _sum: ProductionSumAggregateOutputType | null
    _min: ProductionMinAggregateOutputType | null
    _max: ProductionMaxAggregateOutputType | null
  }

  export type ProductionAvgAggregateOutputType = {
    qtyTon: Decimal | null
  }

  export type ProductionSumAggregateOutputType = {
    qtyTon: Decimal | null
  }

  export type ProductionMinAggregateOutputType = {
    id: string | null
    siteId: string | null
    date: Date | null
    shift: string | null
    materialId: string | null
    qtyTon: Decimal | null
    operation: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
  }

  export type ProductionMaxAggregateOutputType = {
    id: string | null
    siteId: string | null
    date: Date | null
    shift: string | null
    materialId: string | null
    qtyTon: Decimal | null
    operation: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
  }

  export type ProductionCountAggregateOutputType = {
    id: number
    siteId: number
    date: number
    shift: number
    materialId: number
    qtyTon: number
    operation: number
    notes: number
    createdAt: number
    updatedAt: number
    createdBy: number
    _all: number
  }


  export type ProductionAvgAggregateInputType = {
    qtyTon?: true
  }

  export type ProductionSumAggregateInputType = {
    qtyTon?: true
  }

  export type ProductionMinAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    shift?: true
    materialId?: true
    qtyTon?: true
    operation?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type ProductionMaxAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    shift?: true
    materialId?: true
    qtyTon?: true
    operation?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type ProductionCountAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    shift?: true
    materialId?: true
    qtyTon?: true
    operation?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    _all?: true
  }

  export type ProductionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Production to aggregate.
     */
    where?: ProductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productions to fetch.
     */
    orderBy?: ProductionOrderByWithRelationInput | ProductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productions
    **/
    _count?: true | ProductionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductionMaxAggregateInputType
  }

  export type GetProductionAggregateType<T extends ProductionAggregateArgs> = {
        [P in keyof T & keyof AggregateProduction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduction[P]>
      : GetScalarType<T[P], AggregateProduction[P]>
  }




  export type ProductionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionWhereInput
    orderBy?: ProductionOrderByWithAggregationInput | ProductionOrderByWithAggregationInput[]
    by: ProductionScalarFieldEnum[] | ProductionScalarFieldEnum
    having?: ProductionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductionCountAggregateInputType | true
    _avg?: ProductionAvgAggregateInputType
    _sum?: ProductionSumAggregateInputType
    _min?: ProductionMinAggregateInputType
    _max?: ProductionMaxAggregateInputType
  }

  export type ProductionGroupByOutputType = {
    id: string
    siteId: string
    date: Date
    shift: string | null
    materialId: string
    qtyTon: Decimal
    operation: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    createdBy: string | null
    _count: ProductionCountAggregateOutputType | null
    _avg: ProductionAvgAggregateOutputType | null
    _sum: ProductionSumAggregateOutputType | null
    _min: ProductionMinAggregateOutputType | null
    _max: ProductionMaxAggregateOutputType | null
  }

  type GetProductionGroupByPayload<T extends ProductionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductionGroupByOutputType[P]>
            : GetScalarType<T[P], ProductionGroupByOutputType[P]>
        }
      >
    >


  export type ProductionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    shift?: boolean
    materialId?: boolean
    qtyTon?: boolean
    operation?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["production"]>

  export type ProductionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    shift?: boolean
    materialId?: boolean
    qtyTon?: boolean
    operation?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["production"]>

  export type ProductionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    shift?: boolean
    materialId?: boolean
    qtyTon?: boolean
    operation?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["production"]>

  export type ProductionSelectScalar = {
    id?: boolean
    siteId?: boolean
    date?: boolean
    shift?: boolean
    materialId?: boolean
    qtyTon?: boolean
    operation?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
  }

  export type ProductionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siteId" | "date" | "shift" | "materialId" | "qtyTon" | "operation" | "notes" | "createdAt" | "updatedAt" | "createdBy", ExtArgs["result"]["production"]>
  export type ProductionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type ProductionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type ProductionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $ProductionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Production"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      material: Prisma.$MaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      siteId: string
      date: Date
      shift: string | null
      materialId: string
      qtyTon: Prisma.Decimal
      operation: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
      createdBy: string | null
    }, ExtArgs["result"]["production"]>
    composites: {}
  }

  type ProductionGetPayload<S extends boolean | null | undefined | ProductionDefaultArgs> = $Result.GetResult<Prisma.$ProductionPayload, S>

  type ProductionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductionCountAggregateInputType | true
    }

  export interface ProductionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Production'], meta: { name: 'Production' } }
    /**
     * Find zero or one Production that matches the filter.
     * @param {ProductionFindUniqueArgs} args - Arguments to find a Production
     * @example
     * // Get one Production
     * const production = await prisma.production.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductionFindUniqueArgs>(args: SelectSubset<T, ProductionFindUniqueArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Production that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductionFindUniqueOrThrowArgs} args - Arguments to find a Production
     * @example
     * // Get one Production
     * const production = await prisma.production.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Production that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionFindFirstArgs} args - Arguments to find a Production
     * @example
     * // Get one Production
     * const production = await prisma.production.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductionFindFirstArgs>(args?: SelectSubset<T, ProductionFindFirstArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Production that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionFindFirstOrThrowArgs} args - Arguments to find a Production
     * @example
     * // Get one Production
     * const production = await prisma.production.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productions
     * const productions = await prisma.production.findMany()
     * 
     * // Get first 10 Productions
     * const productions = await prisma.production.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productionWithIdOnly = await prisma.production.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductionFindManyArgs>(args?: SelectSubset<T, ProductionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Production.
     * @param {ProductionCreateArgs} args - Arguments to create a Production.
     * @example
     * // Create one Production
     * const Production = await prisma.production.create({
     *   data: {
     *     // ... data to create a Production
     *   }
     * })
     * 
     */
    create<T extends ProductionCreateArgs>(args: SelectSubset<T, ProductionCreateArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productions.
     * @param {ProductionCreateManyArgs} args - Arguments to create many Productions.
     * @example
     * // Create many Productions
     * const production = await prisma.production.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductionCreateManyArgs>(args?: SelectSubset<T, ProductionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productions and returns the data saved in the database.
     * @param {ProductionCreateManyAndReturnArgs} args - Arguments to create many Productions.
     * @example
     * // Create many Productions
     * const production = await prisma.production.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productions and only return the `id`
     * const productionWithIdOnly = await prisma.production.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Production.
     * @param {ProductionDeleteArgs} args - Arguments to delete one Production.
     * @example
     * // Delete one Production
     * const Production = await prisma.production.delete({
     *   where: {
     *     // ... filter to delete one Production
     *   }
     * })
     * 
     */
    delete<T extends ProductionDeleteArgs>(args: SelectSubset<T, ProductionDeleteArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Production.
     * @param {ProductionUpdateArgs} args - Arguments to update one Production.
     * @example
     * // Update one Production
     * const production = await prisma.production.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductionUpdateArgs>(args: SelectSubset<T, ProductionUpdateArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productions.
     * @param {ProductionDeleteManyArgs} args - Arguments to filter Productions to delete.
     * @example
     * // Delete a few Productions
     * const { count } = await prisma.production.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductionDeleteManyArgs>(args?: SelectSubset<T, ProductionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productions
     * const production = await prisma.production.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductionUpdateManyArgs>(args: SelectSubset<T, ProductionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productions and returns the data updated in the database.
     * @param {ProductionUpdateManyAndReturnArgs} args - Arguments to update many Productions.
     * @example
     * // Update many Productions
     * const production = await prisma.production.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productions and only return the `id`
     * const productionWithIdOnly = await prisma.production.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Production.
     * @param {ProductionUpsertArgs} args - Arguments to update or create a Production.
     * @example
     * // Update or create a Production
     * const production = await prisma.production.upsert({
     *   create: {
     *     // ... data to create a Production
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Production we want to update
     *   }
     * })
     */
    upsert<T extends ProductionUpsertArgs>(args: SelectSubset<T, ProductionUpsertArgs<ExtArgs>>): Prisma__ProductionClient<$Result.GetResult<Prisma.$ProductionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionCountArgs} args - Arguments to filter Productions to count.
     * @example
     * // Count the number of Productions
     * const count = await prisma.production.count({
     *   where: {
     *     // ... the filter for the Productions we want to count
     *   }
     * })
    **/
    count<T extends ProductionCountArgs>(
      args?: Subset<T, ProductionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Production.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductionAggregateArgs>(args: Subset<T, ProductionAggregateArgs>): Prisma.PrismaPromise<GetProductionAggregateType<T>>

    /**
     * Group by Production.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionGroupByArgs} args - Group by arguments.
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
      T extends ProductionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductionGroupByArgs['orderBy'] }
        : { orderBy?: ProductionGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Production model
   */
  readonly fields: ProductionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Production.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Production model
   */
  interface ProductionFieldRefs {
    readonly id: FieldRef<"Production", 'String'>
    readonly siteId: FieldRef<"Production", 'String'>
    readonly date: FieldRef<"Production", 'DateTime'>
    readonly shift: FieldRef<"Production", 'String'>
    readonly materialId: FieldRef<"Production", 'String'>
    readonly qtyTon: FieldRef<"Production", 'Decimal'>
    readonly operation: FieldRef<"Production", 'String'>
    readonly notes: FieldRef<"Production", 'String'>
    readonly createdAt: FieldRef<"Production", 'DateTime'>
    readonly updatedAt: FieldRef<"Production", 'DateTime'>
    readonly createdBy: FieldRef<"Production", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Production findUnique
   */
  export type ProductionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter, which Production to fetch.
     */
    where: ProductionWhereUniqueInput
  }

  /**
   * Production findUniqueOrThrow
   */
  export type ProductionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter, which Production to fetch.
     */
    where: ProductionWhereUniqueInput
  }

  /**
   * Production findFirst
   */
  export type ProductionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter, which Production to fetch.
     */
    where?: ProductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productions to fetch.
     */
    orderBy?: ProductionOrderByWithRelationInput | ProductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productions.
     */
    cursor?: ProductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productions.
     */
    distinct?: ProductionScalarFieldEnum | ProductionScalarFieldEnum[]
  }

  /**
   * Production findFirstOrThrow
   */
  export type ProductionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter, which Production to fetch.
     */
    where?: ProductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productions to fetch.
     */
    orderBy?: ProductionOrderByWithRelationInput | ProductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productions.
     */
    cursor?: ProductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productions.
     */
    distinct?: ProductionScalarFieldEnum | ProductionScalarFieldEnum[]
  }

  /**
   * Production findMany
   */
  export type ProductionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter, which Productions to fetch.
     */
    where?: ProductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productions to fetch.
     */
    orderBy?: ProductionOrderByWithRelationInput | ProductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productions.
     */
    cursor?: ProductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productions.
     */
    skip?: number
    distinct?: ProductionScalarFieldEnum | ProductionScalarFieldEnum[]
  }

  /**
   * Production create
   */
  export type ProductionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * The data needed to create a Production.
     */
    data: XOR<ProductionCreateInput, ProductionUncheckedCreateInput>
  }

  /**
   * Production createMany
   */
  export type ProductionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productions.
     */
    data: ProductionCreateManyInput | ProductionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Production createManyAndReturn
   */
  export type ProductionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * The data used to create many Productions.
     */
    data: ProductionCreateManyInput | ProductionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Production update
   */
  export type ProductionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * The data needed to update a Production.
     */
    data: XOR<ProductionUpdateInput, ProductionUncheckedUpdateInput>
    /**
     * Choose, which Production to update.
     */
    where: ProductionWhereUniqueInput
  }

  /**
   * Production updateMany
   */
  export type ProductionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productions.
     */
    data: XOR<ProductionUpdateManyMutationInput, ProductionUncheckedUpdateManyInput>
    /**
     * Filter which Productions to update
     */
    where?: ProductionWhereInput
    /**
     * Limit how many Productions to update.
     */
    limit?: number
  }

  /**
   * Production updateManyAndReturn
   */
  export type ProductionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * The data used to update Productions.
     */
    data: XOR<ProductionUpdateManyMutationInput, ProductionUncheckedUpdateManyInput>
    /**
     * Filter which Productions to update
     */
    where?: ProductionWhereInput
    /**
     * Limit how many Productions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Production upsert
   */
  export type ProductionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * The filter to search for the Production to update in case it exists.
     */
    where: ProductionWhereUniqueInput
    /**
     * In case the Production found by the `where` argument doesn't exist, create a new Production with this data.
     */
    create: XOR<ProductionCreateInput, ProductionUncheckedCreateInput>
    /**
     * In case the Production was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductionUpdateInput, ProductionUncheckedUpdateInput>
  }

  /**
   * Production delete
   */
  export type ProductionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
    /**
     * Filter which Production to delete.
     */
    where: ProductionWhereUniqueInput
  }

  /**
   * Production deleteMany
   */
  export type ProductionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productions to delete
     */
    where?: ProductionWhereInput
    /**
     * Limit how many Productions to delete.
     */
    limit?: number
  }

  /**
   * Production without action
   */
  export type ProductionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Production
     */
    select?: ProductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Production
     */
    omit?: ProductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionInclude<ExtArgs> | null
  }


  /**
   * Model Dispatch
   */

  export type AggregateDispatch = {
    _count: DispatchCountAggregateOutputType | null
    _avg: DispatchAvgAggregateOutputType | null
    _sum: DispatchSumAggregateOutputType | null
    _min: DispatchMinAggregateOutputType | null
    _max: DispatchMaxAggregateOutputType | null
  }

  export type DispatchAvgAggregateOutputType = {
    qtyTon: Decimal | null
    trips: number | null
  }

  export type DispatchSumAggregateOutputType = {
    qtyTon: Decimal | null
    trips: number | null
  }

  export type DispatchMinAggregateOutputType = {
    id: string | null
    siteId: string | null
    date: Date | null
    materialId: string | null
    qtyTon: Decimal | null
    trips: number | null
    owner: string | null
    reference: string | null
    operation: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
  }

  export type DispatchMaxAggregateOutputType = {
    id: string | null
    siteId: string | null
    date: Date | null
    materialId: string | null
    qtyTon: Decimal | null
    trips: number | null
    owner: string | null
    reference: string | null
    operation: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
  }

  export type DispatchCountAggregateOutputType = {
    id: number
    siteId: number
    date: number
    materialId: number
    qtyTon: number
    trips: number
    owner: number
    reference: number
    operation: number
    notes: number
    createdAt: number
    updatedAt: number
    createdBy: number
    _all: number
  }


  export type DispatchAvgAggregateInputType = {
    qtyTon?: true
    trips?: true
  }

  export type DispatchSumAggregateInputType = {
    qtyTon?: true
    trips?: true
  }

  export type DispatchMinAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    materialId?: true
    qtyTon?: true
    trips?: true
    owner?: true
    reference?: true
    operation?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type DispatchMaxAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    materialId?: true
    qtyTon?: true
    trips?: true
    owner?: true
    reference?: true
    operation?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type DispatchCountAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    materialId?: true
    qtyTon?: true
    trips?: true
    owner?: true
    reference?: true
    operation?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    _all?: true
  }

  export type DispatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispatch to aggregate.
     */
    where?: DispatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispatches to fetch.
     */
    orderBy?: DispatchOrderByWithRelationInput | DispatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DispatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dispatches
    **/
    _count?: true | DispatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DispatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DispatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DispatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DispatchMaxAggregateInputType
  }

  export type GetDispatchAggregateType<T extends DispatchAggregateArgs> = {
        [P in keyof T & keyof AggregateDispatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispatch[P]>
      : GetScalarType<T[P], AggregateDispatch[P]>
  }




  export type DispatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispatchWhereInput
    orderBy?: DispatchOrderByWithAggregationInput | DispatchOrderByWithAggregationInput[]
    by: DispatchScalarFieldEnum[] | DispatchScalarFieldEnum
    having?: DispatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DispatchCountAggregateInputType | true
    _avg?: DispatchAvgAggregateInputType
    _sum?: DispatchSumAggregateInputType
    _min?: DispatchMinAggregateInputType
    _max?: DispatchMaxAggregateInputType
  }

  export type DispatchGroupByOutputType = {
    id: string
    siteId: string
    date: Date
    materialId: string
    qtyTon: Decimal
    trips: number | null
    owner: string | null
    reference: string | null
    operation: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    createdBy: string | null
    _count: DispatchCountAggregateOutputType | null
    _avg: DispatchAvgAggregateOutputType | null
    _sum: DispatchSumAggregateOutputType | null
    _min: DispatchMinAggregateOutputType | null
    _max: DispatchMaxAggregateOutputType | null
  }

  type GetDispatchGroupByPayload<T extends DispatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DispatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DispatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DispatchGroupByOutputType[P]>
            : GetScalarType<T[P], DispatchGroupByOutputType[P]>
        }
      >
    >


  export type DispatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    materialId?: boolean
    qtyTon?: boolean
    trips?: boolean
    owner?: boolean
    reference?: boolean
    operation?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispatch"]>

  export type DispatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    materialId?: boolean
    qtyTon?: boolean
    trips?: boolean
    owner?: boolean
    reference?: boolean
    operation?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispatch"]>

  export type DispatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    materialId?: boolean
    qtyTon?: boolean
    trips?: boolean
    owner?: boolean
    reference?: boolean
    operation?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispatch"]>

  export type DispatchSelectScalar = {
    id?: boolean
    siteId?: boolean
    date?: boolean
    materialId?: boolean
    qtyTon?: boolean
    trips?: boolean
    owner?: boolean
    reference?: boolean
    operation?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
  }

  export type DispatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siteId" | "date" | "materialId" | "qtyTon" | "trips" | "owner" | "reference" | "operation" | "notes" | "createdAt" | "updatedAt" | "createdBy", ExtArgs["result"]["dispatch"]>
  export type DispatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type DispatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type DispatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $DispatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dispatch"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      material: Prisma.$MaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      siteId: string
      date: Date
      materialId: string
      qtyTon: Prisma.Decimal
      trips: number | null
      owner: string | null
      reference: string | null
      operation: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
      createdBy: string | null
    }, ExtArgs["result"]["dispatch"]>
    composites: {}
  }

  type DispatchGetPayload<S extends boolean | null | undefined | DispatchDefaultArgs> = $Result.GetResult<Prisma.$DispatchPayload, S>

  type DispatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DispatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DispatchCountAggregateInputType | true
    }

  export interface DispatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dispatch'], meta: { name: 'Dispatch' } }
    /**
     * Find zero or one Dispatch that matches the filter.
     * @param {DispatchFindUniqueArgs} args - Arguments to find a Dispatch
     * @example
     * // Get one Dispatch
     * const dispatch = await prisma.dispatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DispatchFindUniqueArgs>(args: SelectSubset<T, DispatchFindUniqueArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dispatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DispatchFindUniqueOrThrowArgs} args - Arguments to find a Dispatch
     * @example
     * // Get one Dispatch
     * const dispatch = await prisma.dispatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DispatchFindUniqueOrThrowArgs>(args: SelectSubset<T, DispatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchFindFirstArgs} args - Arguments to find a Dispatch
     * @example
     * // Get one Dispatch
     * const dispatch = await prisma.dispatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DispatchFindFirstArgs>(args?: SelectSubset<T, DispatchFindFirstArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchFindFirstOrThrowArgs} args - Arguments to find a Dispatch
     * @example
     * // Get one Dispatch
     * const dispatch = await prisma.dispatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DispatchFindFirstOrThrowArgs>(args?: SelectSubset<T, DispatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dispatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dispatches
     * const dispatches = await prisma.dispatch.findMany()
     * 
     * // Get first 10 Dispatches
     * const dispatches = await prisma.dispatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dispatchWithIdOnly = await prisma.dispatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DispatchFindManyArgs>(args?: SelectSubset<T, DispatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dispatch.
     * @param {DispatchCreateArgs} args - Arguments to create a Dispatch.
     * @example
     * // Create one Dispatch
     * const Dispatch = await prisma.dispatch.create({
     *   data: {
     *     // ... data to create a Dispatch
     *   }
     * })
     * 
     */
    create<T extends DispatchCreateArgs>(args: SelectSubset<T, DispatchCreateArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dispatches.
     * @param {DispatchCreateManyArgs} args - Arguments to create many Dispatches.
     * @example
     * // Create many Dispatches
     * const dispatch = await prisma.dispatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DispatchCreateManyArgs>(args?: SelectSubset<T, DispatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dispatches and returns the data saved in the database.
     * @param {DispatchCreateManyAndReturnArgs} args - Arguments to create many Dispatches.
     * @example
     * // Create many Dispatches
     * const dispatch = await prisma.dispatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dispatches and only return the `id`
     * const dispatchWithIdOnly = await prisma.dispatch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DispatchCreateManyAndReturnArgs>(args?: SelectSubset<T, DispatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dispatch.
     * @param {DispatchDeleteArgs} args - Arguments to delete one Dispatch.
     * @example
     * // Delete one Dispatch
     * const Dispatch = await prisma.dispatch.delete({
     *   where: {
     *     // ... filter to delete one Dispatch
     *   }
     * })
     * 
     */
    delete<T extends DispatchDeleteArgs>(args: SelectSubset<T, DispatchDeleteArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dispatch.
     * @param {DispatchUpdateArgs} args - Arguments to update one Dispatch.
     * @example
     * // Update one Dispatch
     * const dispatch = await prisma.dispatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DispatchUpdateArgs>(args: SelectSubset<T, DispatchUpdateArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dispatches.
     * @param {DispatchDeleteManyArgs} args - Arguments to filter Dispatches to delete.
     * @example
     * // Delete a few Dispatches
     * const { count } = await prisma.dispatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DispatchDeleteManyArgs>(args?: SelectSubset<T, DispatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dispatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dispatches
     * const dispatch = await prisma.dispatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DispatchUpdateManyArgs>(args: SelectSubset<T, DispatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dispatches and returns the data updated in the database.
     * @param {DispatchUpdateManyAndReturnArgs} args - Arguments to update many Dispatches.
     * @example
     * // Update many Dispatches
     * const dispatch = await prisma.dispatch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dispatches and only return the `id`
     * const dispatchWithIdOnly = await prisma.dispatch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DispatchUpdateManyAndReturnArgs>(args: SelectSubset<T, DispatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dispatch.
     * @param {DispatchUpsertArgs} args - Arguments to update or create a Dispatch.
     * @example
     * // Update or create a Dispatch
     * const dispatch = await prisma.dispatch.upsert({
     *   create: {
     *     // ... data to create a Dispatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dispatch we want to update
     *   }
     * })
     */
    upsert<T extends DispatchUpsertArgs>(args: SelectSubset<T, DispatchUpsertArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dispatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchCountArgs} args - Arguments to filter Dispatches to count.
     * @example
     * // Count the number of Dispatches
     * const count = await prisma.dispatch.count({
     *   where: {
     *     // ... the filter for the Dispatches we want to count
     *   }
     * })
    **/
    count<T extends DispatchCountArgs>(
      args?: Subset<T, DispatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DispatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dispatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DispatchAggregateArgs>(args: Subset<T, DispatchAggregateArgs>): Prisma.PrismaPromise<GetDispatchAggregateType<T>>

    /**
     * Group by Dispatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchGroupByArgs} args - Group by arguments.
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
      T extends DispatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DispatchGroupByArgs['orderBy'] }
        : { orderBy?: DispatchGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DispatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDispatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dispatch model
   */
  readonly fields: DispatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dispatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DispatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dispatch model
   */
  interface DispatchFieldRefs {
    readonly id: FieldRef<"Dispatch", 'String'>
    readonly siteId: FieldRef<"Dispatch", 'String'>
    readonly date: FieldRef<"Dispatch", 'DateTime'>
    readonly materialId: FieldRef<"Dispatch", 'String'>
    readonly qtyTon: FieldRef<"Dispatch", 'Decimal'>
    readonly trips: FieldRef<"Dispatch", 'Int'>
    readonly owner: FieldRef<"Dispatch", 'String'>
    readonly reference: FieldRef<"Dispatch", 'String'>
    readonly operation: FieldRef<"Dispatch", 'String'>
    readonly notes: FieldRef<"Dispatch", 'String'>
    readonly createdAt: FieldRef<"Dispatch", 'DateTime'>
    readonly updatedAt: FieldRef<"Dispatch", 'DateTime'>
    readonly createdBy: FieldRef<"Dispatch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dispatch findUnique
   */
  export type DispatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter, which Dispatch to fetch.
     */
    where: DispatchWhereUniqueInput
  }

  /**
   * Dispatch findUniqueOrThrow
   */
  export type DispatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter, which Dispatch to fetch.
     */
    where: DispatchWhereUniqueInput
  }

  /**
   * Dispatch findFirst
   */
  export type DispatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter, which Dispatch to fetch.
     */
    where?: DispatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispatches to fetch.
     */
    orderBy?: DispatchOrderByWithRelationInput | DispatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispatches.
     */
    cursor?: DispatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispatches.
     */
    distinct?: DispatchScalarFieldEnum | DispatchScalarFieldEnum[]
  }

  /**
   * Dispatch findFirstOrThrow
   */
  export type DispatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter, which Dispatch to fetch.
     */
    where?: DispatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispatches to fetch.
     */
    orderBy?: DispatchOrderByWithRelationInput | DispatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispatches.
     */
    cursor?: DispatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispatches.
     */
    distinct?: DispatchScalarFieldEnum | DispatchScalarFieldEnum[]
  }

  /**
   * Dispatch findMany
   */
  export type DispatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter, which Dispatches to fetch.
     */
    where?: DispatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispatches to fetch.
     */
    orderBy?: DispatchOrderByWithRelationInput | DispatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dispatches.
     */
    cursor?: DispatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispatches.
     */
    skip?: number
    distinct?: DispatchScalarFieldEnum | DispatchScalarFieldEnum[]
  }

  /**
   * Dispatch create
   */
  export type DispatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Dispatch.
     */
    data: XOR<DispatchCreateInput, DispatchUncheckedCreateInput>
  }

  /**
   * Dispatch createMany
   */
  export type DispatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dispatches.
     */
    data: DispatchCreateManyInput | DispatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dispatch createManyAndReturn
   */
  export type DispatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * The data used to create many Dispatches.
     */
    data: DispatchCreateManyInput | DispatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dispatch update
   */
  export type DispatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Dispatch.
     */
    data: XOR<DispatchUpdateInput, DispatchUncheckedUpdateInput>
    /**
     * Choose, which Dispatch to update.
     */
    where: DispatchWhereUniqueInput
  }

  /**
   * Dispatch updateMany
   */
  export type DispatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dispatches.
     */
    data: XOR<DispatchUpdateManyMutationInput, DispatchUncheckedUpdateManyInput>
    /**
     * Filter which Dispatches to update
     */
    where?: DispatchWhereInput
    /**
     * Limit how many Dispatches to update.
     */
    limit?: number
  }

  /**
   * Dispatch updateManyAndReturn
   */
  export type DispatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * The data used to update Dispatches.
     */
    data: XOR<DispatchUpdateManyMutationInput, DispatchUncheckedUpdateManyInput>
    /**
     * Filter which Dispatches to update
     */
    where?: DispatchWhereInput
    /**
     * Limit how many Dispatches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dispatch upsert
   */
  export type DispatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Dispatch to update in case it exists.
     */
    where: DispatchWhereUniqueInput
    /**
     * In case the Dispatch found by the `where` argument doesn't exist, create a new Dispatch with this data.
     */
    create: XOR<DispatchCreateInput, DispatchUncheckedCreateInput>
    /**
     * In case the Dispatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DispatchUpdateInput, DispatchUncheckedUpdateInput>
  }

  /**
   * Dispatch delete
   */
  export type DispatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter which Dispatch to delete.
     */
    where: DispatchWhereUniqueInput
  }

  /**
   * Dispatch deleteMany
   */
  export type DispatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispatches to delete
     */
    where?: DispatchWhereInput
    /**
     * Limit how many Dispatches to delete.
     */
    limit?: number
  }

  /**
   * Dispatch without action
   */
  export type DispatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
  }


  /**
   * Model ReceivedMaterial
   */

  export type AggregateReceivedMaterial = {
    _count: ReceivedMaterialCountAggregateOutputType | null
    _avg: ReceivedMaterialAvgAggregateOutputType | null
    _sum: ReceivedMaterialSumAggregateOutputType | null
    _min: ReceivedMaterialMinAggregateOutputType | null
    _max: ReceivedMaterialMaxAggregateOutputType | null
  }

  export type ReceivedMaterialAvgAggregateOutputType = {
    qtyTon: Decimal | null
  }

  export type ReceivedMaterialSumAggregateOutputType = {
    qtyTon: Decimal | null
  }

  export type ReceivedMaterialMinAggregateOutputType = {
    id: string | null
    siteId: string | null
    date: Date | null
    materialId: string | null
    qtyTon: Decimal | null
    source: string | null
    vehicleRef: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
  }

  export type ReceivedMaterialMaxAggregateOutputType = {
    id: string | null
    siteId: string | null
    date: Date | null
    materialId: string | null
    qtyTon: Decimal | null
    source: string | null
    vehicleRef: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
  }

  export type ReceivedMaterialCountAggregateOutputType = {
    id: number
    siteId: number
    date: number
    materialId: number
    qtyTon: number
    source: number
    vehicleRef: number
    notes: number
    createdAt: number
    updatedAt: number
    createdBy: number
    _all: number
  }


  export type ReceivedMaterialAvgAggregateInputType = {
    qtyTon?: true
  }

  export type ReceivedMaterialSumAggregateInputType = {
    qtyTon?: true
  }

  export type ReceivedMaterialMinAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    materialId?: true
    qtyTon?: true
    source?: true
    vehicleRef?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type ReceivedMaterialMaxAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    materialId?: true
    qtyTon?: true
    source?: true
    vehicleRef?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type ReceivedMaterialCountAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    materialId?: true
    qtyTon?: true
    source?: true
    vehicleRef?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    _all?: true
  }

  export type ReceivedMaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceivedMaterial to aggregate.
     */
    where?: ReceivedMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivedMaterials to fetch.
     */
    orderBy?: ReceivedMaterialOrderByWithRelationInput | ReceivedMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceivedMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivedMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivedMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReceivedMaterials
    **/
    _count?: true | ReceivedMaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceivedMaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceivedMaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceivedMaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceivedMaterialMaxAggregateInputType
  }

  export type GetReceivedMaterialAggregateType<T extends ReceivedMaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateReceivedMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceivedMaterial[P]>
      : GetScalarType<T[P], AggregateReceivedMaterial[P]>
  }




  export type ReceivedMaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceivedMaterialWhereInput
    orderBy?: ReceivedMaterialOrderByWithAggregationInput | ReceivedMaterialOrderByWithAggregationInput[]
    by: ReceivedMaterialScalarFieldEnum[] | ReceivedMaterialScalarFieldEnum
    having?: ReceivedMaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceivedMaterialCountAggregateInputType | true
    _avg?: ReceivedMaterialAvgAggregateInputType
    _sum?: ReceivedMaterialSumAggregateInputType
    _min?: ReceivedMaterialMinAggregateInputType
    _max?: ReceivedMaterialMaxAggregateInputType
  }

  export type ReceivedMaterialGroupByOutputType = {
    id: string
    siteId: string
    date: Date
    materialId: string
    qtyTon: Decimal
    source: string | null
    vehicleRef: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    createdBy: string | null
    _count: ReceivedMaterialCountAggregateOutputType | null
    _avg: ReceivedMaterialAvgAggregateOutputType | null
    _sum: ReceivedMaterialSumAggregateOutputType | null
    _min: ReceivedMaterialMinAggregateOutputType | null
    _max: ReceivedMaterialMaxAggregateOutputType | null
  }

  type GetReceivedMaterialGroupByPayload<T extends ReceivedMaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceivedMaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceivedMaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceivedMaterialGroupByOutputType[P]>
            : GetScalarType<T[P], ReceivedMaterialGroupByOutputType[P]>
        }
      >
    >


  export type ReceivedMaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    materialId?: boolean
    qtyTon?: boolean
    source?: boolean
    vehicleRef?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receivedMaterial"]>

  export type ReceivedMaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    materialId?: boolean
    qtyTon?: boolean
    source?: boolean
    vehicleRef?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receivedMaterial"]>

  export type ReceivedMaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    materialId?: boolean
    qtyTon?: boolean
    source?: boolean
    vehicleRef?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receivedMaterial"]>

  export type ReceivedMaterialSelectScalar = {
    id?: boolean
    siteId?: boolean
    date?: boolean
    materialId?: boolean
    qtyTon?: boolean
    source?: boolean
    vehicleRef?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
  }

  export type ReceivedMaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siteId" | "date" | "materialId" | "qtyTon" | "source" | "vehicleRef" | "notes" | "createdAt" | "updatedAt" | "createdBy", ExtArgs["result"]["receivedMaterial"]>
  export type ReceivedMaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type ReceivedMaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type ReceivedMaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $ReceivedMaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReceivedMaterial"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      material: Prisma.$MaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      siteId: string
      date: Date
      materialId: string
      qtyTon: Prisma.Decimal
      source: string | null
      vehicleRef: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      createdBy: string | null
    }, ExtArgs["result"]["receivedMaterial"]>
    composites: {}
  }

  type ReceivedMaterialGetPayload<S extends boolean | null | undefined | ReceivedMaterialDefaultArgs> = $Result.GetResult<Prisma.$ReceivedMaterialPayload, S>

  type ReceivedMaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceivedMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceivedMaterialCountAggregateInputType | true
    }

  export interface ReceivedMaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReceivedMaterial'], meta: { name: 'ReceivedMaterial' } }
    /**
     * Find zero or one ReceivedMaterial that matches the filter.
     * @param {ReceivedMaterialFindUniqueArgs} args - Arguments to find a ReceivedMaterial
     * @example
     * // Get one ReceivedMaterial
     * const receivedMaterial = await prisma.receivedMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceivedMaterialFindUniqueArgs>(args: SelectSubset<T, ReceivedMaterialFindUniqueArgs<ExtArgs>>): Prisma__ReceivedMaterialClient<$Result.GetResult<Prisma.$ReceivedMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceivedMaterial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceivedMaterialFindUniqueOrThrowArgs} args - Arguments to find a ReceivedMaterial
     * @example
     * // Get one ReceivedMaterial
     * const receivedMaterial = await prisma.receivedMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceivedMaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceivedMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceivedMaterialClient<$Result.GetResult<Prisma.$ReceivedMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceivedMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivedMaterialFindFirstArgs} args - Arguments to find a ReceivedMaterial
     * @example
     * // Get one ReceivedMaterial
     * const receivedMaterial = await prisma.receivedMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceivedMaterialFindFirstArgs>(args?: SelectSubset<T, ReceivedMaterialFindFirstArgs<ExtArgs>>): Prisma__ReceivedMaterialClient<$Result.GetResult<Prisma.$ReceivedMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceivedMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivedMaterialFindFirstOrThrowArgs} args - Arguments to find a ReceivedMaterial
     * @example
     * // Get one ReceivedMaterial
     * const receivedMaterial = await prisma.receivedMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceivedMaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceivedMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceivedMaterialClient<$Result.GetResult<Prisma.$ReceivedMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceivedMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivedMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceivedMaterials
     * const receivedMaterials = await prisma.receivedMaterial.findMany()
     * 
     * // Get first 10 ReceivedMaterials
     * const receivedMaterials = await prisma.receivedMaterial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receivedMaterialWithIdOnly = await prisma.receivedMaterial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceivedMaterialFindManyArgs>(args?: SelectSubset<T, ReceivedMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivedMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceivedMaterial.
     * @param {ReceivedMaterialCreateArgs} args - Arguments to create a ReceivedMaterial.
     * @example
     * // Create one ReceivedMaterial
     * const ReceivedMaterial = await prisma.receivedMaterial.create({
     *   data: {
     *     // ... data to create a ReceivedMaterial
     *   }
     * })
     * 
     */
    create<T extends ReceivedMaterialCreateArgs>(args: SelectSubset<T, ReceivedMaterialCreateArgs<ExtArgs>>): Prisma__ReceivedMaterialClient<$Result.GetResult<Prisma.$ReceivedMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceivedMaterials.
     * @param {ReceivedMaterialCreateManyArgs} args - Arguments to create many ReceivedMaterials.
     * @example
     * // Create many ReceivedMaterials
     * const receivedMaterial = await prisma.receivedMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceivedMaterialCreateManyArgs>(args?: SelectSubset<T, ReceivedMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReceivedMaterials and returns the data saved in the database.
     * @param {ReceivedMaterialCreateManyAndReturnArgs} args - Arguments to create many ReceivedMaterials.
     * @example
     * // Create many ReceivedMaterials
     * const receivedMaterial = await prisma.receivedMaterial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReceivedMaterials and only return the `id`
     * const receivedMaterialWithIdOnly = await prisma.receivedMaterial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceivedMaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceivedMaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivedMaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReceivedMaterial.
     * @param {ReceivedMaterialDeleteArgs} args - Arguments to delete one ReceivedMaterial.
     * @example
     * // Delete one ReceivedMaterial
     * const ReceivedMaterial = await prisma.receivedMaterial.delete({
     *   where: {
     *     // ... filter to delete one ReceivedMaterial
     *   }
     * })
     * 
     */
    delete<T extends ReceivedMaterialDeleteArgs>(args: SelectSubset<T, ReceivedMaterialDeleteArgs<ExtArgs>>): Prisma__ReceivedMaterialClient<$Result.GetResult<Prisma.$ReceivedMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceivedMaterial.
     * @param {ReceivedMaterialUpdateArgs} args - Arguments to update one ReceivedMaterial.
     * @example
     * // Update one ReceivedMaterial
     * const receivedMaterial = await prisma.receivedMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceivedMaterialUpdateArgs>(args: SelectSubset<T, ReceivedMaterialUpdateArgs<ExtArgs>>): Prisma__ReceivedMaterialClient<$Result.GetResult<Prisma.$ReceivedMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceivedMaterials.
     * @param {ReceivedMaterialDeleteManyArgs} args - Arguments to filter ReceivedMaterials to delete.
     * @example
     * // Delete a few ReceivedMaterials
     * const { count } = await prisma.receivedMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceivedMaterialDeleteManyArgs>(args?: SelectSubset<T, ReceivedMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceivedMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivedMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceivedMaterials
     * const receivedMaterial = await prisma.receivedMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceivedMaterialUpdateManyArgs>(args: SelectSubset<T, ReceivedMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceivedMaterials and returns the data updated in the database.
     * @param {ReceivedMaterialUpdateManyAndReturnArgs} args - Arguments to update many ReceivedMaterials.
     * @example
     * // Update many ReceivedMaterials
     * const receivedMaterial = await prisma.receivedMaterial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReceivedMaterials and only return the `id`
     * const receivedMaterialWithIdOnly = await prisma.receivedMaterial.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReceivedMaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceivedMaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivedMaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReceivedMaterial.
     * @param {ReceivedMaterialUpsertArgs} args - Arguments to update or create a ReceivedMaterial.
     * @example
     * // Update or create a ReceivedMaterial
     * const receivedMaterial = await prisma.receivedMaterial.upsert({
     *   create: {
     *     // ... data to create a ReceivedMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceivedMaterial we want to update
     *   }
     * })
     */
    upsert<T extends ReceivedMaterialUpsertArgs>(args: SelectSubset<T, ReceivedMaterialUpsertArgs<ExtArgs>>): Prisma__ReceivedMaterialClient<$Result.GetResult<Prisma.$ReceivedMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceivedMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivedMaterialCountArgs} args - Arguments to filter ReceivedMaterials to count.
     * @example
     * // Count the number of ReceivedMaterials
     * const count = await prisma.receivedMaterial.count({
     *   where: {
     *     // ... the filter for the ReceivedMaterials we want to count
     *   }
     * })
    **/
    count<T extends ReceivedMaterialCountArgs>(
      args?: Subset<T, ReceivedMaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceivedMaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceivedMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivedMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReceivedMaterialAggregateArgs>(args: Subset<T, ReceivedMaterialAggregateArgs>): Prisma.PrismaPromise<GetReceivedMaterialAggregateType<T>>

    /**
     * Group by ReceivedMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivedMaterialGroupByArgs} args - Group by arguments.
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
      T extends ReceivedMaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceivedMaterialGroupByArgs['orderBy'] }
        : { orderBy?: ReceivedMaterialGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReceivedMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceivedMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReceivedMaterial model
   */
  readonly fields: ReceivedMaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReceivedMaterial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceivedMaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReceivedMaterial model
   */
  interface ReceivedMaterialFieldRefs {
    readonly id: FieldRef<"ReceivedMaterial", 'String'>
    readonly siteId: FieldRef<"ReceivedMaterial", 'String'>
    readonly date: FieldRef<"ReceivedMaterial", 'DateTime'>
    readonly materialId: FieldRef<"ReceivedMaterial", 'String'>
    readonly qtyTon: FieldRef<"ReceivedMaterial", 'Decimal'>
    readonly source: FieldRef<"ReceivedMaterial", 'String'>
    readonly vehicleRef: FieldRef<"ReceivedMaterial", 'String'>
    readonly notes: FieldRef<"ReceivedMaterial", 'String'>
    readonly createdAt: FieldRef<"ReceivedMaterial", 'DateTime'>
    readonly updatedAt: FieldRef<"ReceivedMaterial", 'DateTime'>
    readonly createdBy: FieldRef<"ReceivedMaterial", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReceivedMaterial findUnique
   */
  export type ReceivedMaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivedMaterial
     */
    select?: ReceivedMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivedMaterial
     */
    omit?: ReceivedMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ReceivedMaterial to fetch.
     */
    where: ReceivedMaterialWhereUniqueInput
  }

  /**
   * ReceivedMaterial findUniqueOrThrow
   */
  export type ReceivedMaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivedMaterial
     */
    select?: ReceivedMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivedMaterial
     */
    omit?: ReceivedMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ReceivedMaterial to fetch.
     */
    where: ReceivedMaterialWhereUniqueInput
  }

  /**
   * ReceivedMaterial findFirst
   */
  export type ReceivedMaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivedMaterial
     */
    select?: ReceivedMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivedMaterial
     */
    omit?: ReceivedMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ReceivedMaterial to fetch.
     */
    where?: ReceivedMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivedMaterials to fetch.
     */
    orderBy?: ReceivedMaterialOrderByWithRelationInput | ReceivedMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceivedMaterials.
     */
    cursor?: ReceivedMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivedMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivedMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceivedMaterials.
     */
    distinct?: ReceivedMaterialScalarFieldEnum | ReceivedMaterialScalarFieldEnum[]
  }

  /**
   * ReceivedMaterial findFirstOrThrow
   */
  export type ReceivedMaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivedMaterial
     */
    select?: ReceivedMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivedMaterial
     */
    omit?: ReceivedMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ReceivedMaterial to fetch.
     */
    where?: ReceivedMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivedMaterials to fetch.
     */
    orderBy?: ReceivedMaterialOrderByWithRelationInput | ReceivedMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceivedMaterials.
     */
    cursor?: ReceivedMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivedMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivedMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceivedMaterials.
     */
    distinct?: ReceivedMaterialScalarFieldEnum | ReceivedMaterialScalarFieldEnum[]
  }

  /**
   * ReceivedMaterial findMany
   */
  export type ReceivedMaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivedMaterial
     */
    select?: ReceivedMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivedMaterial
     */
    omit?: ReceivedMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedMaterialInclude<ExtArgs> | null
    /**
     * Filter, which ReceivedMaterials to fetch.
     */
    where?: ReceivedMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivedMaterials to fetch.
     */
    orderBy?: ReceivedMaterialOrderByWithRelationInput | ReceivedMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReceivedMaterials.
     */
    cursor?: ReceivedMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivedMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivedMaterials.
     */
    skip?: number
    distinct?: ReceivedMaterialScalarFieldEnum | ReceivedMaterialScalarFieldEnum[]
  }

  /**
   * ReceivedMaterial create
   */
  export type ReceivedMaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivedMaterial
     */
    select?: ReceivedMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivedMaterial
     */
    omit?: ReceivedMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedMaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a ReceivedMaterial.
     */
    data: XOR<ReceivedMaterialCreateInput, ReceivedMaterialUncheckedCreateInput>
  }

  /**
   * ReceivedMaterial createMany
   */
  export type ReceivedMaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReceivedMaterials.
     */
    data: ReceivedMaterialCreateManyInput | ReceivedMaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReceivedMaterial createManyAndReturn
   */
  export type ReceivedMaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivedMaterial
     */
    select?: ReceivedMaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivedMaterial
     */
    omit?: ReceivedMaterialOmit<ExtArgs> | null
    /**
     * The data used to create many ReceivedMaterials.
     */
    data: ReceivedMaterialCreateManyInput | ReceivedMaterialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedMaterialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceivedMaterial update
   */
  export type ReceivedMaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivedMaterial
     */
    select?: ReceivedMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivedMaterial
     */
    omit?: ReceivedMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedMaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a ReceivedMaterial.
     */
    data: XOR<ReceivedMaterialUpdateInput, ReceivedMaterialUncheckedUpdateInput>
    /**
     * Choose, which ReceivedMaterial to update.
     */
    where: ReceivedMaterialWhereUniqueInput
  }

  /**
   * ReceivedMaterial updateMany
   */
  export type ReceivedMaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReceivedMaterials.
     */
    data: XOR<ReceivedMaterialUpdateManyMutationInput, ReceivedMaterialUncheckedUpdateManyInput>
    /**
     * Filter which ReceivedMaterials to update
     */
    where?: ReceivedMaterialWhereInput
    /**
     * Limit how many ReceivedMaterials to update.
     */
    limit?: number
  }

  /**
   * ReceivedMaterial updateManyAndReturn
   */
  export type ReceivedMaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivedMaterial
     */
    select?: ReceivedMaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivedMaterial
     */
    omit?: ReceivedMaterialOmit<ExtArgs> | null
    /**
     * The data used to update ReceivedMaterials.
     */
    data: XOR<ReceivedMaterialUpdateManyMutationInput, ReceivedMaterialUncheckedUpdateManyInput>
    /**
     * Filter which ReceivedMaterials to update
     */
    where?: ReceivedMaterialWhereInput
    /**
     * Limit how many ReceivedMaterials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedMaterialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceivedMaterial upsert
   */
  export type ReceivedMaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivedMaterial
     */
    select?: ReceivedMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivedMaterial
     */
    omit?: ReceivedMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedMaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the ReceivedMaterial to update in case it exists.
     */
    where: ReceivedMaterialWhereUniqueInput
    /**
     * In case the ReceivedMaterial found by the `where` argument doesn't exist, create a new ReceivedMaterial with this data.
     */
    create: XOR<ReceivedMaterialCreateInput, ReceivedMaterialUncheckedCreateInput>
    /**
     * In case the ReceivedMaterial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceivedMaterialUpdateInput, ReceivedMaterialUncheckedUpdateInput>
  }

  /**
   * ReceivedMaterial delete
   */
  export type ReceivedMaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivedMaterial
     */
    select?: ReceivedMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivedMaterial
     */
    omit?: ReceivedMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedMaterialInclude<ExtArgs> | null
    /**
     * Filter which ReceivedMaterial to delete.
     */
    where: ReceivedMaterialWhereUniqueInput
  }

  /**
   * ReceivedMaterial deleteMany
   */
  export type ReceivedMaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceivedMaterials to delete
     */
    where?: ReceivedMaterialWhereInput
    /**
     * Limit how many ReceivedMaterials to delete.
     */
    limit?: number
  }

  /**
   * ReceivedMaterial without action
   */
  export type ReceivedMaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivedMaterial
     */
    select?: ReceivedMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivedMaterial
     */
    omit?: ReceivedMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedMaterialInclude<ExtArgs> | null
  }


  /**
   * Model EquipmentLog
   */

  export type AggregateEquipmentLog = {
    _count: EquipmentLogCountAggregateOutputType | null
    _avg: EquipmentLogAvgAggregateOutputType | null
    _sum: EquipmentLogSumAggregateOutputType | null
    _min: EquipmentLogMinAggregateOutputType | null
    _max: EquipmentLogMaxAggregateOutputType | null
  }

  export type EquipmentLogAvgAggregateOutputType = {
    hours: Decimal | null
    count: number | null
  }

  export type EquipmentLogSumAggregateOutputType = {
    hours: Decimal | null
    count: number | null
  }

  export type EquipmentLogMinAggregateOutputType = {
    id: string | null
    siteId: string | null
    date: Date | null
    equipmentId: string | null
    hours: Decimal | null
    count: number | null
    shift: string | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
  }

  export type EquipmentLogMaxAggregateOutputType = {
    id: string | null
    siteId: string | null
    date: Date | null
    equipmentId: string | null
    hours: Decimal | null
    count: number | null
    shift: string | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
  }

  export type EquipmentLogCountAggregateOutputType = {
    id: number
    siteId: number
    date: number
    equipmentId: number
    hours: number
    count: number
    shift: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    createdBy: number
    _all: number
  }


  export type EquipmentLogAvgAggregateInputType = {
    hours?: true
    count?: true
  }

  export type EquipmentLogSumAggregateInputType = {
    hours?: true
    count?: true
  }

  export type EquipmentLogMinAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    equipmentId?: true
    hours?: true
    count?: true
    shift?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type EquipmentLogMaxAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    equipmentId?: true
    hours?: true
    count?: true
    shift?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type EquipmentLogCountAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    equipmentId?: true
    hours?: true
    count?: true
    shift?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    _all?: true
  }

  export type EquipmentLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentLog to aggregate.
     */
    where?: EquipmentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentLogs to fetch.
     */
    orderBy?: EquipmentLogOrderByWithRelationInput | EquipmentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquipmentLogs
    **/
    _count?: true | EquipmentLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentLogMaxAggregateInputType
  }

  export type GetEquipmentLogAggregateType<T extends EquipmentLogAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipmentLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipmentLog[P]>
      : GetScalarType<T[P], AggregateEquipmentLog[P]>
  }




  export type EquipmentLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentLogWhereInput
    orderBy?: EquipmentLogOrderByWithAggregationInput | EquipmentLogOrderByWithAggregationInput[]
    by: EquipmentLogScalarFieldEnum[] | EquipmentLogScalarFieldEnum
    having?: EquipmentLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentLogCountAggregateInputType | true
    _avg?: EquipmentLogAvgAggregateInputType
    _sum?: EquipmentLogSumAggregateInputType
    _min?: EquipmentLogMinAggregateInputType
    _max?: EquipmentLogMaxAggregateInputType
  }

  export type EquipmentLogGroupByOutputType = {
    id: string
    siteId: string
    date: Date
    equipmentId: string
    hours: Decimal
    count: number
    shift: string | null
    status: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    createdBy: string | null
    _count: EquipmentLogCountAggregateOutputType | null
    _avg: EquipmentLogAvgAggregateOutputType | null
    _sum: EquipmentLogSumAggregateOutputType | null
    _min: EquipmentLogMinAggregateOutputType | null
    _max: EquipmentLogMaxAggregateOutputType | null
  }

  type GetEquipmentLogGroupByPayload<T extends EquipmentLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentLogGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentLogGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    equipmentId?: boolean
    hours?: boolean
    count?: boolean
    shift?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentLog"]>

  export type EquipmentLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    equipmentId?: boolean
    hours?: boolean
    count?: boolean
    shift?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentLog"]>

  export type EquipmentLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    equipmentId?: boolean
    hours?: boolean
    count?: boolean
    shift?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentLog"]>

  export type EquipmentLogSelectScalar = {
    id?: boolean
    siteId?: boolean
    date?: boolean
    equipmentId?: boolean
    hours?: boolean
    count?: boolean
    shift?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
  }

  export type EquipmentLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siteId" | "date" | "equipmentId" | "hours" | "count" | "shift" | "status" | "notes" | "createdAt" | "updatedAt" | "createdBy", ExtArgs["result"]["equipmentLog"]>
  export type EquipmentLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
  }
  export type EquipmentLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
  }
  export type EquipmentLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
  }

  export type $EquipmentLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquipmentLog"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      equipment: Prisma.$EquipmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      siteId: string
      date: Date
      equipmentId: string
      hours: Prisma.Decimal
      count: number
      shift: string | null
      status: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      createdBy: string | null
    }, ExtArgs["result"]["equipmentLog"]>
    composites: {}
  }

  type EquipmentLogGetPayload<S extends boolean | null | undefined | EquipmentLogDefaultArgs> = $Result.GetResult<Prisma.$EquipmentLogPayload, S>

  type EquipmentLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentLogCountAggregateInputType | true
    }

  export interface EquipmentLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquipmentLog'], meta: { name: 'EquipmentLog' } }
    /**
     * Find zero or one EquipmentLog that matches the filter.
     * @param {EquipmentLogFindUniqueArgs} args - Arguments to find a EquipmentLog
     * @example
     * // Get one EquipmentLog
     * const equipmentLog = await prisma.equipmentLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentLogFindUniqueArgs>(args: SelectSubset<T, EquipmentLogFindUniqueArgs<ExtArgs>>): Prisma__EquipmentLogClient<$Result.GetResult<Prisma.$EquipmentLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EquipmentLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentLogFindUniqueOrThrowArgs} args - Arguments to find a EquipmentLog
     * @example
     * // Get one EquipmentLog
     * const equipmentLog = await prisma.equipmentLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentLogFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentLogClient<$Result.GetResult<Prisma.$EquipmentLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentLogFindFirstArgs} args - Arguments to find a EquipmentLog
     * @example
     * // Get one EquipmentLog
     * const equipmentLog = await prisma.equipmentLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentLogFindFirstArgs>(args?: SelectSubset<T, EquipmentLogFindFirstArgs<ExtArgs>>): Prisma__EquipmentLogClient<$Result.GetResult<Prisma.$EquipmentLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentLogFindFirstOrThrowArgs} args - Arguments to find a EquipmentLog
     * @example
     * // Get one EquipmentLog
     * const equipmentLog = await prisma.equipmentLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentLogFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentLogClient<$Result.GetResult<Prisma.$EquipmentLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EquipmentLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquipmentLogs
     * const equipmentLogs = await prisma.equipmentLog.findMany()
     * 
     * // Get first 10 EquipmentLogs
     * const equipmentLogs = await prisma.equipmentLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentLogWithIdOnly = await prisma.equipmentLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentLogFindManyArgs>(args?: SelectSubset<T, EquipmentLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EquipmentLog.
     * @param {EquipmentLogCreateArgs} args - Arguments to create a EquipmentLog.
     * @example
     * // Create one EquipmentLog
     * const EquipmentLog = await prisma.equipmentLog.create({
     *   data: {
     *     // ... data to create a EquipmentLog
     *   }
     * })
     * 
     */
    create<T extends EquipmentLogCreateArgs>(args: SelectSubset<T, EquipmentLogCreateArgs<ExtArgs>>): Prisma__EquipmentLogClient<$Result.GetResult<Prisma.$EquipmentLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EquipmentLogs.
     * @param {EquipmentLogCreateManyArgs} args - Arguments to create many EquipmentLogs.
     * @example
     * // Create many EquipmentLogs
     * const equipmentLog = await prisma.equipmentLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentLogCreateManyArgs>(args?: SelectSubset<T, EquipmentLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EquipmentLogs and returns the data saved in the database.
     * @param {EquipmentLogCreateManyAndReturnArgs} args - Arguments to create many EquipmentLogs.
     * @example
     * // Create many EquipmentLogs
     * const equipmentLog = await prisma.equipmentLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EquipmentLogs and only return the `id`
     * const equipmentLogWithIdOnly = await prisma.equipmentLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentLogCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EquipmentLog.
     * @param {EquipmentLogDeleteArgs} args - Arguments to delete one EquipmentLog.
     * @example
     * // Delete one EquipmentLog
     * const EquipmentLog = await prisma.equipmentLog.delete({
     *   where: {
     *     // ... filter to delete one EquipmentLog
     *   }
     * })
     * 
     */
    delete<T extends EquipmentLogDeleteArgs>(args: SelectSubset<T, EquipmentLogDeleteArgs<ExtArgs>>): Prisma__EquipmentLogClient<$Result.GetResult<Prisma.$EquipmentLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EquipmentLog.
     * @param {EquipmentLogUpdateArgs} args - Arguments to update one EquipmentLog.
     * @example
     * // Update one EquipmentLog
     * const equipmentLog = await prisma.equipmentLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentLogUpdateArgs>(args: SelectSubset<T, EquipmentLogUpdateArgs<ExtArgs>>): Prisma__EquipmentLogClient<$Result.GetResult<Prisma.$EquipmentLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EquipmentLogs.
     * @param {EquipmentLogDeleteManyArgs} args - Arguments to filter EquipmentLogs to delete.
     * @example
     * // Delete a few EquipmentLogs
     * const { count } = await prisma.equipmentLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentLogDeleteManyArgs>(args?: SelectSubset<T, EquipmentLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquipmentLogs
     * const equipmentLog = await prisma.equipmentLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentLogUpdateManyArgs>(args: SelectSubset<T, EquipmentLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentLogs and returns the data updated in the database.
     * @param {EquipmentLogUpdateManyAndReturnArgs} args - Arguments to update many EquipmentLogs.
     * @example
     * // Update many EquipmentLogs
     * const equipmentLog = await prisma.equipmentLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EquipmentLogs and only return the `id`
     * const equipmentLogWithIdOnly = await prisma.equipmentLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentLogUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EquipmentLog.
     * @param {EquipmentLogUpsertArgs} args - Arguments to update or create a EquipmentLog.
     * @example
     * // Update or create a EquipmentLog
     * const equipmentLog = await prisma.equipmentLog.upsert({
     *   create: {
     *     // ... data to create a EquipmentLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquipmentLog we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentLogUpsertArgs>(args: SelectSubset<T, EquipmentLogUpsertArgs<ExtArgs>>): Prisma__EquipmentLogClient<$Result.GetResult<Prisma.$EquipmentLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EquipmentLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentLogCountArgs} args - Arguments to filter EquipmentLogs to count.
     * @example
     * // Count the number of EquipmentLogs
     * const count = await prisma.equipmentLog.count({
     *   where: {
     *     // ... the filter for the EquipmentLogs we want to count
     *   }
     * })
    **/
    count<T extends EquipmentLogCountArgs>(
      args?: Subset<T, EquipmentLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquipmentLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipmentLogAggregateArgs>(args: Subset<T, EquipmentLogAggregateArgs>): Prisma.PrismaPromise<GetEquipmentLogAggregateType<T>>

    /**
     * Group by EquipmentLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentLogGroupByArgs} args - Group by arguments.
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
      T extends EquipmentLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentLogGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentLogGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquipmentLog model
   */
  readonly fields: EquipmentLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquipmentLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipment<T extends EquipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentDefaultArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EquipmentLog model
   */
  interface EquipmentLogFieldRefs {
    readonly id: FieldRef<"EquipmentLog", 'String'>
    readonly siteId: FieldRef<"EquipmentLog", 'String'>
    readonly date: FieldRef<"EquipmentLog", 'DateTime'>
    readonly equipmentId: FieldRef<"EquipmentLog", 'String'>
    readonly hours: FieldRef<"EquipmentLog", 'Decimal'>
    readonly count: FieldRef<"EquipmentLog", 'Int'>
    readonly shift: FieldRef<"EquipmentLog", 'String'>
    readonly status: FieldRef<"EquipmentLog", 'String'>
    readonly notes: FieldRef<"EquipmentLog", 'String'>
    readonly createdAt: FieldRef<"EquipmentLog", 'DateTime'>
    readonly updatedAt: FieldRef<"EquipmentLog", 'DateTime'>
    readonly createdBy: FieldRef<"EquipmentLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EquipmentLog findUnique
   */
  export type EquipmentLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentLog
     */
    select?: EquipmentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentLog
     */
    omit?: EquipmentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentLogInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentLog to fetch.
     */
    where: EquipmentLogWhereUniqueInput
  }

  /**
   * EquipmentLog findUniqueOrThrow
   */
  export type EquipmentLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentLog
     */
    select?: EquipmentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentLog
     */
    omit?: EquipmentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentLogInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentLog to fetch.
     */
    where: EquipmentLogWhereUniqueInput
  }

  /**
   * EquipmentLog findFirst
   */
  export type EquipmentLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentLog
     */
    select?: EquipmentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentLog
     */
    omit?: EquipmentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentLogInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentLog to fetch.
     */
    where?: EquipmentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentLogs to fetch.
     */
    orderBy?: EquipmentLogOrderByWithRelationInput | EquipmentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentLogs.
     */
    cursor?: EquipmentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentLogs.
     */
    distinct?: EquipmentLogScalarFieldEnum | EquipmentLogScalarFieldEnum[]
  }

  /**
   * EquipmentLog findFirstOrThrow
   */
  export type EquipmentLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentLog
     */
    select?: EquipmentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentLog
     */
    omit?: EquipmentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentLogInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentLog to fetch.
     */
    where?: EquipmentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentLogs to fetch.
     */
    orderBy?: EquipmentLogOrderByWithRelationInput | EquipmentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentLogs.
     */
    cursor?: EquipmentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentLogs.
     */
    distinct?: EquipmentLogScalarFieldEnum | EquipmentLogScalarFieldEnum[]
  }

  /**
   * EquipmentLog findMany
   */
  export type EquipmentLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentLog
     */
    select?: EquipmentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentLog
     */
    omit?: EquipmentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentLogInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentLogs to fetch.
     */
    where?: EquipmentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentLogs to fetch.
     */
    orderBy?: EquipmentLogOrderByWithRelationInput | EquipmentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquipmentLogs.
     */
    cursor?: EquipmentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentLogs.
     */
    skip?: number
    distinct?: EquipmentLogScalarFieldEnum | EquipmentLogScalarFieldEnum[]
  }

  /**
   * EquipmentLog create
   */
  export type EquipmentLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentLog
     */
    select?: EquipmentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentLog
     */
    omit?: EquipmentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentLogInclude<ExtArgs> | null
    /**
     * The data needed to create a EquipmentLog.
     */
    data: XOR<EquipmentLogCreateInput, EquipmentLogUncheckedCreateInput>
  }

  /**
   * EquipmentLog createMany
   */
  export type EquipmentLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquipmentLogs.
     */
    data: EquipmentLogCreateManyInput | EquipmentLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentLog createManyAndReturn
   */
  export type EquipmentLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentLog
     */
    select?: EquipmentLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentLog
     */
    omit?: EquipmentLogOmit<ExtArgs> | null
    /**
     * The data used to create many EquipmentLogs.
     */
    data: EquipmentLogCreateManyInput | EquipmentLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipmentLog update
   */
  export type EquipmentLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentLog
     */
    select?: EquipmentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentLog
     */
    omit?: EquipmentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentLogInclude<ExtArgs> | null
    /**
     * The data needed to update a EquipmentLog.
     */
    data: XOR<EquipmentLogUpdateInput, EquipmentLogUncheckedUpdateInput>
    /**
     * Choose, which EquipmentLog to update.
     */
    where: EquipmentLogWhereUniqueInput
  }

  /**
   * EquipmentLog updateMany
   */
  export type EquipmentLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquipmentLogs.
     */
    data: XOR<EquipmentLogUpdateManyMutationInput, EquipmentLogUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentLogs to update
     */
    where?: EquipmentLogWhereInput
    /**
     * Limit how many EquipmentLogs to update.
     */
    limit?: number
  }

  /**
   * EquipmentLog updateManyAndReturn
   */
  export type EquipmentLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentLog
     */
    select?: EquipmentLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentLog
     */
    omit?: EquipmentLogOmit<ExtArgs> | null
    /**
     * The data used to update EquipmentLogs.
     */
    data: XOR<EquipmentLogUpdateManyMutationInput, EquipmentLogUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentLogs to update
     */
    where?: EquipmentLogWhereInput
    /**
     * Limit how many EquipmentLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipmentLog upsert
   */
  export type EquipmentLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentLog
     */
    select?: EquipmentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentLog
     */
    omit?: EquipmentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentLogInclude<ExtArgs> | null
    /**
     * The filter to search for the EquipmentLog to update in case it exists.
     */
    where: EquipmentLogWhereUniqueInput
    /**
     * In case the EquipmentLog found by the `where` argument doesn't exist, create a new EquipmentLog with this data.
     */
    create: XOR<EquipmentLogCreateInput, EquipmentLogUncheckedCreateInput>
    /**
     * In case the EquipmentLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentLogUpdateInput, EquipmentLogUncheckedUpdateInput>
  }

  /**
   * EquipmentLog delete
   */
  export type EquipmentLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentLog
     */
    select?: EquipmentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentLog
     */
    omit?: EquipmentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentLogInclude<ExtArgs> | null
    /**
     * Filter which EquipmentLog to delete.
     */
    where: EquipmentLogWhereUniqueInput
  }

  /**
   * EquipmentLog deleteMany
   */
  export type EquipmentLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentLogs to delete
     */
    where?: EquipmentLogWhereInput
    /**
     * Limit how many EquipmentLogs to delete.
     */
    limit?: number
  }

  /**
   * EquipmentLog without action
   */
  export type EquipmentLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentLog
     */
    select?: EquipmentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentLog
     */
    omit?: EquipmentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentLogInclude<ExtArgs> | null
  }


  /**
   * Model ManpowerLog
   */

  export type AggregateManpowerLog = {
    _count: ManpowerLogCountAggregateOutputType | null
    _avg: ManpowerLogAvgAggregateOutputType | null
    _sum: ManpowerLogSumAggregateOutputType | null
    _min: ManpowerLogMinAggregateOutputType | null
    _max: ManpowerLogMaxAggregateOutputType | null
  }

  export type ManpowerLogAvgAggregateOutputType = {
    headcount: number | null
    hours: Decimal | null
  }

  export type ManpowerLogSumAggregateOutputType = {
    headcount: number | null
    hours: Decimal | null
  }

  export type ManpowerLogMinAggregateOutputType = {
    id: string | null
    siteId: string | null
    date: Date | null
    roleId: string | null
    headcount: number | null
    hours: Decimal | null
    shift: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
  }

  export type ManpowerLogMaxAggregateOutputType = {
    id: string | null
    siteId: string | null
    date: Date | null
    roleId: string | null
    headcount: number | null
    hours: Decimal | null
    shift: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
  }

  export type ManpowerLogCountAggregateOutputType = {
    id: number
    siteId: number
    date: number
    roleId: number
    headcount: number
    hours: number
    shift: number
    notes: number
    createdAt: number
    updatedAt: number
    createdBy: number
    _all: number
  }


  export type ManpowerLogAvgAggregateInputType = {
    headcount?: true
    hours?: true
  }

  export type ManpowerLogSumAggregateInputType = {
    headcount?: true
    hours?: true
  }

  export type ManpowerLogMinAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    roleId?: true
    headcount?: true
    hours?: true
    shift?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type ManpowerLogMaxAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    roleId?: true
    headcount?: true
    hours?: true
    shift?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type ManpowerLogCountAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    roleId?: true
    headcount?: true
    hours?: true
    shift?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    _all?: true
  }

  export type ManpowerLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManpowerLog to aggregate.
     */
    where?: ManpowerLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManpowerLogs to fetch.
     */
    orderBy?: ManpowerLogOrderByWithRelationInput | ManpowerLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManpowerLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManpowerLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManpowerLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ManpowerLogs
    **/
    _count?: true | ManpowerLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManpowerLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManpowerLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManpowerLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManpowerLogMaxAggregateInputType
  }

  export type GetManpowerLogAggregateType<T extends ManpowerLogAggregateArgs> = {
        [P in keyof T & keyof AggregateManpowerLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManpowerLog[P]>
      : GetScalarType<T[P], AggregateManpowerLog[P]>
  }




  export type ManpowerLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManpowerLogWhereInput
    orderBy?: ManpowerLogOrderByWithAggregationInput | ManpowerLogOrderByWithAggregationInput[]
    by: ManpowerLogScalarFieldEnum[] | ManpowerLogScalarFieldEnum
    having?: ManpowerLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManpowerLogCountAggregateInputType | true
    _avg?: ManpowerLogAvgAggregateInputType
    _sum?: ManpowerLogSumAggregateInputType
    _min?: ManpowerLogMinAggregateInputType
    _max?: ManpowerLogMaxAggregateInputType
  }

  export type ManpowerLogGroupByOutputType = {
    id: string
    siteId: string
    date: Date
    roleId: string
    headcount: number
    hours: Decimal
    shift: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    createdBy: string | null
    _count: ManpowerLogCountAggregateOutputType | null
    _avg: ManpowerLogAvgAggregateOutputType | null
    _sum: ManpowerLogSumAggregateOutputType | null
    _min: ManpowerLogMinAggregateOutputType | null
    _max: ManpowerLogMaxAggregateOutputType | null
  }

  type GetManpowerLogGroupByPayload<T extends ManpowerLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManpowerLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManpowerLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManpowerLogGroupByOutputType[P]>
            : GetScalarType<T[P], ManpowerLogGroupByOutputType[P]>
        }
      >
    >


  export type ManpowerLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    roleId?: boolean
    headcount?: boolean
    hours?: boolean
    shift?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    role?: boolean | ManpowerRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manpowerLog"]>

  export type ManpowerLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    roleId?: boolean
    headcount?: boolean
    hours?: boolean
    shift?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    role?: boolean | ManpowerRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manpowerLog"]>

  export type ManpowerLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    roleId?: boolean
    headcount?: boolean
    hours?: boolean
    shift?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    role?: boolean | ManpowerRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manpowerLog"]>

  export type ManpowerLogSelectScalar = {
    id?: boolean
    siteId?: boolean
    date?: boolean
    roleId?: boolean
    headcount?: boolean
    hours?: boolean
    shift?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
  }

  export type ManpowerLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siteId" | "date" | "roleId" | "headcount" | "hours" | "shift" | "notes" | "createdAt" | "updatedAt" | "createdBy", ExtArgs["result"]["manpowerLog"]>
  export type ManpowerLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    role?: boolean | ManpowerRoleDefaultArgs<ExtArgs>
  }
  export type ManpowerLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    role?: boolean | ManpowerRoleDefaultArgs<ExtArgs>
  }
  export type ManpowerLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    role?: boolean | ManpowerRoleDefaultArgs<ExtArgs>
  }

  export type $ManpowerLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ManpowerLog"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      role: Prisma.$ManpowerRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      siteId: string
      date: Date
      roleId: string
      headcount: number
      hours: Prisma.Decimal
      shift: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      createdBy: string | null
    }, ExtArgs["result"]["manpowerLog"]>
    composites: {}
  }

  type ManpowerLogGetPayload<S extends boolean | null | undefined | ManpowerLogDefaultArgs> = $Result.GetResult<Prisma.$ManpowerLogPayload, S>

  type ManpowerLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManpowerLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManpowerLogCountAggregateInputType | true
    }

  export interface ManpowerLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ManpowerLog'], meta: { name: 'ManpowerLog' } }
    /**
     * Find zero or one ManpowerLog that matches the filter.
     * @param {ManpowerLogFindUniqueArgs} args - Arguments to find a ManpowerLog
     * @example
     * // Get one ManpowerLog
     * const manpowerLog = await prisma.manpowerLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManpowerLogFindUniqueArgs>(args: SelectSubset<T, ManpowerLogFindUniqueArgs<ExtArgs>>): Prisma__ManpowerLogClient<$Result.GetResult<Prisma.$ManpowerLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ManpowerLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManpowerLogFindUniqueOrThrowArgs} args - Arguments to find a ManpowerLog
     * @example
     * // Get one ManpowerLog
     * const manpowerLog = await prisma.manpowerLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManpowerLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ManpowerLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManpowerLogClient<$Result.GetResult<Prisma.$ManpowerLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManpowerLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManpowerLogFindFirstArgs} args - Arguments to find a ManpowerLog
     * @example
     * // Get one ManpowerLog
     * const manpowerLog = await prisma.manpowerLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManpowerLogFindFirstArgs>(args?: SelectSubset<T, ManpowerLogFindFirstArgs<ExtArgs>>): Prisma__ManpowerLogClient<$Result.GetResult<Prisma.$ManpowerLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManpowerLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManpowerLogFindFirstOrThrowArgs} args - Arguments to find a ManpowerLog
     * @example
     * // Get one ManpowerLog
     * const manpowerLog = await prisma.manpowerLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManpowerLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ManpowerLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManpowerLogClient<$Result.GetResult<Prisma.$ManpowerLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ManpowerLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManpowerLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManpowerLogs
     * const manpowerLogs = await prisma.manpowerLog.findMany()
     * 
     * // Get first 10 ManpowerLogs
     * const manpowerLogs = await prisma.manpowerLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const manpowerLogWithIdOnly = await prisma.manpowerLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManpowerLogFindManyArgs>(args?: SelectSubset<T, ManpowerLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManpowerLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ManpowerLog.
     * @param {ManpowerLogCreateArgs} args - Arguments to create a ManpowerLog.
     * @example
     * // Create one ManpowerLog
     * const ManpowerLog = await prisma.manpowerLog.create({
     *   data: {
     *     // ... data to create a ManpowerLog
     *   }
     * })
     * 
     */
    create<T extends ManpowerLogCreateArgs>(args: SelectSubset<T, ManpowerLogCreateArgs<ExtArgs>>): Prisma__ManpowerLogClient<$Result.GetResult<Prisma.$ManpowerLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ManpowerLogs.
     * @param {ManpowerLogCreateManyArgs} args - Arguments to create many ManpowerLogs.
     * @example
     * // Create many ManpowerLogs
     * const manpowerLog = await prisma.manpowerLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManpowerLogCreateManyArgs>(args?: SelectSubset<T, ManpowerLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ManpowerLogs and returns the data saved in the database.
     * @param {ManpowerLogCreateManyAndReturnArgs} args - Arguments to create many ManpowerLogs.
     * @example
     * // Create many ManpowerLogs
     * const manpowerLog = await prisma.manpowerLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ManpowerLogs and only return the `id`
     * const manpowerLogWithIdOnly = await prisma.manpowerLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManpowerLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ManpowerLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManpowerLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ManpowerLog.
     * @param {ManpowerLogDeleteArgs} args - Arguments to delete one ManpowerLog.
     * @example
     * // Delete one ManpowerLog
     * const ManpowerLog = await prisma.manpowerLog.delete({
     *   where: {
     *     // ... filter to delete one ManpowerLog
     *   }
     * })
     * 
     */
    delete<T extends ManpowerLogDeleteArgs>(args: SelectSubset<T, ManpowerLogDeleteArgs<ExtArgs>>): Prisma__ManpowerLogClient<$Result.GetResult<Prisma.$ManpowerLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ManpowerLog.
     * @param {ManpowerLogUpdateArgs} args - Arguments to update one ManpowerLog.
     * @example
     * // Update one ManpowerLog
     * const manpowerLog = await prisma.manpowerLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManpowerLogUpdateArgs>(args: SelectSubset<T, ManpowerLogUpdateArgs<ExtArgs>>): Prisma__ManpowerLogClient<$Result.GetResult<Prisma.$ManpowerLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ManpowerLogs.
     * @param {ManpowerLogDeleteManyArgs} args - Arguments to filter ManpowerLogs to delete.
     * @example
     * // Delete a few ManpowerLogs
     * const { count } = await prisma.manpowerLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManpowerLogDeleteManyArgs>(args?: SelectSubset<T, ManpowerLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManpowerLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManpowerLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManpowerLogs
     * const manpowerLog = await prisma.manpowerLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManpowerLogUpdateManyArgs>(args: SelectSubset<T, ManpowerLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManpowerLogs and returns the data updated in the database.
     * @param {ManpowerLogUpdateManyAndReturnArgs} args - Arguments to update many ManpowerLogs.
     * @example
     * // Update many ManpowerLogs
     * const manpowerLog = await prisma.manpowerLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ManpowerLogs and only return the `id`
     * const manpowerLogWithIdOnly = await prisma.manpowerLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ManpowerLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ManpowerLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManpowerLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ManpowerLog.
     * @param {ManpowerLogUpsertArgs} args - Arguments to update or create a ManpowerLog.
     * @example
     * // Update or create a ManpowerLog
     * const manpowerLog = await prisma.manpowerLog.upsert({
     *   create: {
     *     // ... data to create a ManpowerLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManpowerLog we want to update
     *   }
     * })
     */
    upsert<T extends ManpowerLogUpsertArgs>(args: SelectSubset<T, ManpowerLogUpsertArgs<ExtArgs>>): Prisma__ManpowerLogClient<$Result.GetResult<Prisma.$ManpowerLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ManpowerLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManpowerLogCountArgs} args - Arguments to filter ManpowerLogs to count.
     * @example
     * // Count the number of ManpowerLogs
     * const count = await prisma.manpowerLog.count({
     *   where: {
     *     // ... the filter for the ManpowerLogs we want to count
     *   }
     * })
    **/
    count<T extends ManpowerLogCountArgs>(
      args?: Subset<T, ManpowerLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManpowerLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ManpowerLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManpowerLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManpowerLogAggregateArgs>(args: Subset<T, ManpowerLogAggregateArgs>): Prisma.PrismaPromise<GetManpowerLogAggregateType<T>>

    /**
     * Group by ManpowerLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManpowerLogGroupByArgs} args - Group by arguments.
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
      T extends ManpowerLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManpowerLogGroupByArgs['orderBy'] }
        : { orderBy?: ManpowerLogGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManpowerLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManpowerLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ManpowerLog model
   */
  readonly fields: ManpowerLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ManpowerLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManpowerLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends ManpowerRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ManpowerRoleDefaultArgs<ExtArgs>>): Prisma__ManpowerRoleClient<$Result.GetResult<Prisma.$ManpowerRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ManpowerLog model
   */
  interface ManpowerLogFieldRefs {
    readonly id: FieldRef<"ManpowerLog", 'String'>
    readonly siteId: FieldRef<"ManpowerLog", 'String'>
    readonly date: FieldRef<"ManpowerLog", 'DateTime'>
    readonly roleId: FieldRef<"ManpowerLog", 'String'>
    readonly headcount: FieldRef<"ManpowerLog", 'Int'>
    readonly hours: FieldRef<"ManpowerLog", 'Decimal'>
    readonly shift: FieldRef<"ManpowerLog", 'String'>
    readonly notes: FieldRef<"ManpowerLog", 'String'>
    readonly createdAt: FieldRef<"ManpowerLog", 'DateTime'>
    readonly updatedAt: FieldRef<"ManpowerLog", 'DateTime'>
    readonly createdBy: FieldRef<"ManpowerLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ManpowerLog findUnique
   */
  export type ManpowerLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerLog
     */
    select?: ManpowerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerLog
     */
    omit?: ManpowerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerLogInclude<ExtArgs> | null
    /**
     * Filter, which ManpowerLog to fetch.
     */
    where: ManpowerLogWhereUniqueInput
  }

  /**
   * ManpowerLog findUniqueOrThrow
   */
  export type ManpowerLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerLog
     */
    select?: ManpowerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerLog
     */
    omit?: ManpowerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerLogInclude<ExtArgs> | null
    /**
     * Filter, which ManpowerLog to fetch.
     */
    where: ManpowerLogWhereUniqueInput
  }

  /**
   * ManpowerLog findFirst
   */
  export type ManpowerLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerLog
     */
    select?: ManpowerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerLog
     */
    omit?: ManpowerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerLogInclude<ExtArgs> | null
    /**
     * Filter, which ManpowerLog to fetch.
     */
    where?: ManpowerLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManpowerLogs to fetch.
     */
    orderBy?: ManpowerLogOrderByWithRelationInput | ManpowerLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManpowerLogs.
     */
    cursor?: ManpowerLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManpowerLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManpowerLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManpowerLogs.
     */
    distinct?: ManpowerLogScalarFieldEnum | ManpowerLogScalarFieldEnum[]
  }

  /**
   * ManpowerLog findFirstOrThrow
   */
  export type ManpowerLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerLog
     */
    select?: ManpowerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerLog
     */
    omit?: ManpowerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerLogInclude<ExtArgs> | null
    /**
     * Filter, which ManpowerLog to fetch.
     */
    where?: ManpowerLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManpowerLogs to fetch.
     */
    orderBy?: ManpowerLogOrderByWithRelationInput | ManpowerLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManpowerLogs.
     */
    cursor?: ManpowerLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManpowerLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManpowerLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManpowerLogs.
     */
    distinct?: ManpowerLogScalarFieldEnum | ManpowerLogScalarFieldEnum[]
  }

  /**
   * ManpowerLog findMany
   */
  export type ManpowerLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerLog
     */
    select?: ManpowerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerLog
     */
    omit?: ManpowerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerLogInclude<ExtArgs> | null
    /**
     * Filter, which ManpowerLogs to fetch.
     */
    where?: ManpowerLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManpowerLogs to fetch.
     */
    orderBy?: ManpowerLogOrderByWithRelationInput | ManpowerLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ManpowerLogs.
     */
    cursor?: ManpowerLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManpowerLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManpowerLogs.
     */
    skip?: number
    distinct?: ManpowerLogScalarFieldEnum | ManpowerLogScalarFieldEnum[]
  }

  /**
   * ManpowerLog create
   */
  export type ManpowerLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerLog
     */
    select?: ManpowerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerLog
     */
    omit?: ManpowerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ManpowerLog.
     */
    data: XOR<ManpowerLogCreateInput, ManpowerLogUncheckedCreateInput>
  }

  /**
   * ManpowerLog createMany
   */
  export type ManpowerLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManpowerLogs.
     */
    data: ManpowerLogCreateManyInput | ManpowerLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManpowerLog createManyAndReturn
   */
  export type ManpowerLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerLog
     */
    select?: ManpowerLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerLog
     */
    omit?: ManpowerLogOmit<ExtArgs> | null
    /**
     * The data used to create many ManpowerLogs.
     */
    data: ManpowerLogCreateManyInput | ManpowerLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ManpowerLog update
   */
  export type ManpowerLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerLog
     */
    select?: ManpowerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerLog
     */
    omit?: ManpowerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ManpowerLog.
     */
    data: XOR<ManpowerLogUpdateInput, ManpowerLogUncheckedUpdateInput>
    /**
     * Choose, which ManpowerLog to update.
     */
    where: ManpowerLogWhereUniqueInput
  }

  /**
   * ManpowerLog updateMany
   */
  export type ManpowerLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ManpowerLogs.
     */
    data: XOR<ManpowerLogUpdateManyMutationInput, ManpowerLogUncheckedUpdateManyInput>
    /**
     * Filter which ManpowerLogs to update
     */
    where?: ManpowerLogWhereInput
    /**
     * Limit how many ManpowerLogs to update.
     */
    limit?: number
  }

  /**
   * ManpowerLog updateManyAndReturn
   */
  export type ManpowerLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerLog
     */
    select?: ManpowerLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerLog
     */
    omit?: ManpowerLogOmit<ExtArgs> | null
    /**
     * The data used to update ManpowerLogs.
     */
    data: XOR<ManpowerLogUpdateManyMutationInput, ManpowerLogUncheckedUpdateManyInput>
    /**
     * Filter which ManpowerLogs to update
     */
    where?: ManpowerLogWhereInput
    /**
     * Limit how many ManpowerLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ManpowerLog upsert
   */
  export type ManpowerLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerLog
     */
    select?: ManpowerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerLog
     */
    omit?: ManpowerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ManpowerLog to update in case it exists.
     */
    where: ManpowerLogWhereUniqueInput
    /**
     * In case the ManpowerLog found by the `where` argument doesn't exist, create a new ManpowerLog with this data.
     */
    create: XOR<ManpowerLogCreateInput, ManpowerLogUncheckedCreateInput>
    /**
     * In case the ManpowerLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManpowerLogUpdateInput, ManpowerLogUncheckedUpdateInput>
  }

  /**
   * ManpowerLog delete
   */
  export type ManpowerLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerLog
     */
    select?: ManpowerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerLog
     */
    omit?: ManpowerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerLogInclude<ExtArgs> | null
    /**
     * Filter which ManpowerLog to delete.
     */
    where: ManpowerLogWhereUniqueInput
  }

  /**
   * ManpowerLog deleteMany
   */
  export type ManpowerLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManpowerLogs to delete
     */
    where?: ManpowerLogWhereInput
    /**
     * Limit how many ManpowerLogs to delete.
     */
    limit?: number
  }

  /**
   * ManpowerLog without action
   */
  export type ManpowerLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManpowerLog
     */
    select?: ManpowerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManpowerLog
     */
    omit?: ManpowerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManpowerLogInclude<ExtArgs> | null
  }


  /**
   * Model InventorySnapshot
   */

  export type AggregateInventorySnapshot = {
    _count: InventorySnapshotCountAggregateOutputType | null
    _avg: InventorySnapshotAvgAggregateOutputType | null
    _sum: InventorySnapshotSumAggregateOutputType | null
    _min: InventorySnapshotMinAggregateOutputType | null
    _max: InventorySnapshotMaxAggregateOutputType | null
  }

  export type InventorySnapshotAvgAggregateOutputType = {
    openingTon: Decimal | null
    producedTon: Decimal | null
    receivedTon: Decimal | null
    dispatchedTon: Decimal | null
    adjustmentTon: Decimal | null
    closingTon: Decimal | null
  }

  export type InventorySnapshotSumAggregateOutputType = {
    openingTon: Decimal | null
    producedTon: Decimal | null
    receivedTon: Decimal | null
    dispatchedTon: Decimal | null
    adjustmentTon: Decimal | null
    closingTon: Decimal | null
  }

  export type InventorySnapshotMinAggregateOutputType = {
    id: string | null
    siteId: string | null
    date: Date | null
    materialId: string | null
    openingTon: Decimal | null
    producedTon: Decimal | null
    receivedTon: Decimal | null
    dispatchedTon: Decimal | null
    adjustmentTon: Decimal | null
    closingTon: Decimal | null
    isCalculated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
  }

  export type InventorySnapshotMaxAggregateOutputType = {
    id: string | null
    siteId: string | null
    date: Date | null
    materialId: string | null
    openingTon: Decimal | null
    producedTon: Decimal | null
    receivedTon: Decimal | null
    dispatchedTon: Decimal | null
    adjustmentTon: Decimal | null
    closingTon: Decimal | null
    isCalculated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
  }

  export type InventorySnapshotCountAggregateOutputType = {
    id: number
    siteId: number
    date: number
    materialId: number
    openingTon: number
    producedTon: number
    receivedTon: number
    dispatchedTon: number
    adjustmentTon: number
    closingTon: number
    isCalculated: number
    createdAt: number
    updatedAt: number
    createdBy: number
    _all: number
  }


  export type InventorySnapshotAvgAggregateInputType = {
    openingTon?: true
    producedTon?: true
    receivedTon?: true
    dispatchedTon?: true
    adjustmentTon?: true
    closingTon?: true
  }

  export type InventorySnapshotSumAggregateInputType = {
    openingTon?: true
    producedTon?: true
    receivedTon?: true
    dispatchedTon?: true
    adjustmentTon?: true
    closingTon?: true
  }

  export type InventorySnapshotMinAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    materialId?: true
    openingTon?: true
    producedTon?: true
    receivedTon?: true
    dispatchedTon?: true
    adjustmentTon?: true
    closingTon?: true
    isCalculated?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type InventorySnapshotMaxAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    materialId?: true
    openingTon?: true
    producedTon?: true
    receivedTon?: true
    dispatchedTon?: true
    adjustmentTon?: true
    closingTon?: true
    isCalculated?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type InventorySnapshotCountAggregateInputType = {
    id?: true
    siteId?: true
    date?: true
    materialId?: true
    openingTon?: true
    producedTon?: true
    receivedTon?: true
    dispatchedTon?: true
    adjustmentTon?: true
    closingTon?: true
    isCalculated?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    _all?: true
  }

  export type InventorySnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventorySnapshot to aggregate.
     */
    where?: InventorySnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventorySnapshots to fetch.
     */
    orderBy?: InventorySnapshotOrderByWithRelationInput | InventorySnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventorySnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventorySnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventorySnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventorySnapshots
    **/
    _count?: true | InventorySnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventorySnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventorySnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventorySnapshotMaxAggregateInputType
  }

  export type GetInventorySnapshotAggregateType<T extends InventorySnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateInventorySnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventorySnapshot[P]>
      : GetScalarType<T[P], AggregateInventorySnapshot[P]>
  }




  export type InventorySnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventorySnapshotWhereInput
    orderBy?: InventorySnapshotOrderByWithAggregationInput | InventorySnapshotOrderByWithAggregationInput[]
    by: InventorySnapshotScalarFieldEnum[] | InventorySnapshotScalarFieldEnum
    having?: InventorySnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventorySnapshotCountAggregateInputType | true
    _avg?: InventorySnapshotAvgAggregateInputType
    _sum?: InventorySnapshotSumAggregateInputType
    _min?: InventorySnapshotMinAggregateInputType
    _max?: InventorySnapshotMaxAggregateInputType
  }

  export type InventorySnapshotGroupByOutputType = {
    id: string
    siteId: string
    date: Date
    materialId: string
    openingTon: Decimal
    producedTon: Decimal
    receivedTon: Decimal
    dispatchedTon: Decimal
    adjustmentTon: Decimal
    closingTon: Decimal
    isCalculated: boolean
    createdAt: Date
    updatedAt: Date
    createdBy: string | null
    _count: InventorySnapshotCountAggregateOutputType | null
    _avg: InventorySnapshotAvgAggregateOutputType | null
    _sum: InventorySnapshotSumAggregateOutputType | null
    _min: InventorySnapshotMinAggregateOutputType | null
    _max: InventorySnapshotMaxAggregateOutputType | null
  }

  type GetInventorySnapshotGroupByPayload<T extends InventorySnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventorySnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventorySnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventorySnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], InventorySnapshotGroupByOutputType[P]>
        }
      >
    >


  export type InventorySnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    materialId?: boolean
    openingTon?: boolean
    producedTon?: boolean
    receivedTon?: boolean
    dispatchedTon?: boolean
    adjustmentTon?: boolean
    closingTon?: boolean
    isCalculated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventorySnapshot"]>

  export type InventorySnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    materialId?: boolean
    openingTon?: boolean
    producedTon?: boolean
    receivedTon?: boolean
    dispatchedTon?: boolean
    adjustmentTon?: boolean
    closingTon?: boolean
    isCalculated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventorySnapshot"]>

  export type InventorySnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    date?: boolean
    materialId?: boolean
    openingTon?: boolean
    producedTon?: boolean
    receivedTon?: boolean
    dispatchedTon?: boolean
    adjustmentTon?: boolean
    closingTon?: boolean
    isCalculated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventorySnapshot"]>

  export type InventorySnapshotSelectScalar = {
    id?: boolean
    siteId?: boolean
    date?: boolean
    materialId?: boolean
    openingTon?: boolean
    producedTon?: boolean
    receivedTon?: boolean
    dispatchedTon?: boolean
    adjustmentTon?: boolean
    closingTon?: boolean
    isCalculated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
  }

  export type InventorySnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siteId" | "date" | "materialId" | "openingTon" | "producedTon" | "receivedTon" | "dispatchedTon" | "adjustmentTon" | "closingTon" | "isCalculated" | "createdAt" | "updatedAt" | "createdBy", ExtArgs["result"]["inventorySnapshot"]>
  export type InventorySnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type InventorySnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type InventorySnapshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $InventorySnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventorySnapshot"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      material: Prisma.$MaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      siteId: string
      date: Date
      materialId: string
      openingTon: Prisma.Decimal
      producedTon: Prisma.Decimal
      receivedTon: Prisma.Decimal
      dispatchedTon: Prisma.Decimal
      adjustmentTon: Prisma.Decimal
      closingTon: Prisma.Decimal
      isCalculated: boolean
      createdAt: Date
      updatedAt: Date
      createdBy: string | null
    }, ExtArgs["result"]["inventorySnapshot"]>
    composites: {}
  }

  type InventorySnapshotGetPayload<S extends boolean | null | undefined | InventorySnapshotDefaultArgs> = $Result.GetResult<Prisma.$InventorySnapshotPayload, S>

  type InventorySnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventorySnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventorySnapshotCountAggregateInputType | true
    }

  export interface InventorySnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventorySnapshot'], meta: { name: 'InventorySnapshot' } }
    /**
     * Find zero or one InventorySnapshot that matches the filter.
     * @param {InventorySnapshotFindUniqueArgs} args - Arguments to find a InventorySnapshot
     * @example
     * // Get one InventorySnapshot
     * const inventorySnapshot = await prisma.inventorySnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventorySnapshotFindUniqueArgs>(args: SelectSubset<T, InventorySnapshotFindUniqueArgs<ExtArgs>>): Prisma__InventorySnapshotClient<$Result.GetResult<Prisma.$InventorySnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventorySnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventorySnapshotFindUniqueOrThrowArgs} args - Arguments to find a InventorySnapshot
     * @example
     * // Get one InventorySnapshot
     * const inventorySnapshot = await prisma.inventorySnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventorySnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, InventorySnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventorySnapshotClient<$Result.GetResult<Prisma.$InventorySnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventorySnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventorySnapshotFindFirstArgs} args - Arguments to find a InventorySnapshot
     * @example
     * // Get one InventorySnapshot
     * const inventorySnapshot = await prisma.inventorySnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventorySnapshotFindFirstArgs>(args?: SelectSubset<T, InventorySnapshotFindFirstArgs<ExtArgs>>): Prisma__InventorySnapshotClient<$Result.GetResult<Prisma.$InventorySnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventorySnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventorySnapshotFindFirstOrThrowArgs} args - Arguments to find a InventorySnapshot
     * @example
     * // Get one InventorySnapshot
     * const inventorySnapshot = await prisma.inventorySnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventorySnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, InventorySnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventorySnapshotClient<$Result.GetResult<Prisma.$InventorySnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventorySnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventorySnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventorySnapshots
     * const inventorySnapshots = await prisma.inventorySnapshot.findMany()
     * 
     * // Get first 10 InventorySnapshots
     * const inventorySnapshots = await prisma.inventorySnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventorySnapshotWithIdOnly = await prisma.inventorySnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventorySnapshotFindManyArgs>(args?: SelectSubset<T, InventorySnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventorySnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventorySnapshot.
     * @param {InventorySnapshotCreateArgs} args - Arguments to create a InventorySnapshot.
     * @example
     * // Create one InventorySnapshot
     * const InventorySnapshot = await prisma.inventorySnapshot.create({
     *   data: {
     *     // ... data to create a InventorySnapshot
     *   }
     * })
     * 
     */
    create<T extends InventorySnapshotCreateArgs>(args: SelectSubset<T, InventorySnapshotCreateArgs<ExtArgs>>): Prisma__InventorySnapshotClient<$Result.GetResult<Prisma.$InventorySnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventorySnapshots.
     * @param {InventorySnapshotCreateManyArgs} args - Arguments to create many InventorySnapshots.
     * @example
     * // Create many InventorySnapshots
     * const inventorySnapshot = await prisma.inventorySnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventorySnapshotCreateManyArgs>(args?: SelectSubset<T, InventorySnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventorySnapshots and returns the data saved in the database.
     * @param {InventorySnapshotCreateManyAndReturnArgs} args - Arguments to create many InventorySnapshots.
     * @example
     * // Create many InventorySnapshots
     * const inventorySnapshot = await prisma.inventorySnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventorySnapshots and only return the `id`
     * const inventorySnapshotWithIdOnly = await prisma.inventorySnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventorySnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, InventorySnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventorySnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventorySnapshot.
     * @param {InventorySnapshotDeleteArgs} args - Arguments to delete one InventorySnapshot.
     * @example
     * // Delete one InventorySnapshot
     * const InventorySnapshot = await prisma.inventorySnapshot.delete({
     *   where: {
     *     // ... filter to delete one InventorySnapshot
     *   }
     * })
     * 
     */
    delete<T extends InventorySnapshotDeleteArgs>(args: SelectSubset<T, InventorySnapshotDeleteArgs<ExtArgs>>): Prisma__InventorySnapshotClient<$Result.GetResult<Prisma.$InventorySnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventorySnapshot.
     * @param {InventorySnapshotUpdateArgs} args - Arguments to update one InventorySnapshot.
     * @example
     * // Update one InventorySnapshot
     * const inventorySnapshot = await prisma.inventorySnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventorySnapshotUpdateArgs>(args: SelectSubset<T, InventorySnapshotUpdateArgs<ExtArgs>>): Prisma__InventorySnapshotClient<$Result.GetResult<Prisma.$InventorySnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventorySnapshots.
     * @param {InventorySnapshotDeleteManyArgs} args - Arguments to filter InventorySnapshots to delete.
     * @example
     * // Delete a few InventorySnapshots
     * const { count } = await prisma.inventorySnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventorySnapshotDeleteManyArgs>(args?: SelectSubset<T, InventorySnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventorySnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventorySnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventorySnapshots
     * const inventorySnapshot = await prisma.inventorySnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventorySnapshotUpdateManyArgs>(args: SelectSubset<T, InventorySnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventorySnapshots and returns the data updated in the database.
     * @param {InventorySnapshotUpdateManyAndReturnArgs} args - Arguments to update many InventorySnapshots.
     * @example
     * // Update many InventorySnapshots
     * const inventorySnapshot = await prisma.inventorySnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventorySnapshots and only return the `id`
     * const inventorySnapshotWithIdOnly = await prisma.inventorySnapshot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventorySnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, InventorySnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventorySnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventorySnapshot.
     * @param {InventorySnapshotUpsertArgs} args - Arguments to update or create a InventorySnapshot.
     * @example
     * // Update or create a InventorySnapshot
     * const inventorySnapshot = await prisma.inventorySnapshot.upsert({
     *   create: {
     *     // ... data to create a InventorySnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventorySnapshot we want to update
     *   }
     * })
     */
    upsert<T extends InventorySnapshotUpsertArgs>(args: SelectSubset<T, InventorySnapshotUpsertArgs<ExtArgs>>): Prisma__InventorySnapshotClient<$Result.GetResult<Prisma.$InventorySnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventorySnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventorySnapshotCountArgs} args - Arguments to filter InventorySnapshots to count.
     * @example
     * // Count the number of InventorySnapshots
     * const count = await prisma.inventorySnapshot.count({
     *   where: {
     *     // ... the filter for the InventorySnapshots we want to count
     *   }
     * })
    **/
    count<T extends InventorySnapshotCountArgs>(
      args?: Subset<T, InventorySnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventorySnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventorySnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventorySnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventorySnapshotAggregateArgs>(args: Subset<T, InventorySnapshotAggregateArgs>): Prisma.PrismaPromise<GetInventorySnapshotAggregateType<T>>

    /**
     * Group by InventorySnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventorySnapshotGroupByArgs} args - Group by arguments.
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
      T extends InventorySnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventorySnapshotGroupByArgs['orderBy'] }
        : { orderBy?: InventorySnapshotGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventorySnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventorySnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventorySnapshot model
   */
  readonly fields: InventorySnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventorySnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventorySnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventorySnapshot model
   */
  interface InventorySnapshotFieldRefs {
    readonly id: FieldRef<"InventorySnapshot", 'String'>
    readonly siteId: FieldRef<"InventorySnapshot", 'String'>
    readonly date: FieldRef<"InventorySnapshot", 'DateTime'>
    readonly materialId: FieldRef<"InventorySnapshot", 'String'>
    readonly openingTon: FieldRef<"InventorySnapshot", 'Decimal'>
    readonly producedTon: FieldRef<"InventorySnapshot", 'Decimal'>
    readonly receivedTon: FieldRef<"InventorySnapshot", 'Decimal'>
    readonly dispatchedTon: FieldRef<"InventorySnapshot", 'Decimal'>
    readonly adjustmentTon: FieldRef<"InventorySnapshot", 'Decimal'>
    readonly closingTon: FieldRef<"InventorySnapshot", 'Decimal'>
    readonly isCalculated: FieldRef<"InventorySnapshot", 'Boolean'>
    readonly createdAt: FieldRef<"InventorySnapshot", 'DateTime'>
    readonly updatedAt: FieldRef<"InventorySnapshot", 'DateTime'>
    readonly createdBy: FieldRef<"InventorySnapshot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InventorySnapshot findUnique
   */
  export type InventorySnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventorySnapshot
     */
    select?: InventorySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventorySnapshot
     */
    omit?: InventorySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorySnapshotInclude<ExtArgs> | null
    /**
     * Filter, which InventorySnapshot to fetch.
     */
    where: InventorySnapshotWhereUniqueInput
  }

  /**
   * InventorySnapshot findUniqueOrThrow
   */
  export type InventorySnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventorySnapshot
     */
    select?: InventorySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventorySnapshot
     */
    omit?: InventorySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorySnapshotInclude<ExtArgs> | null
    /**
     * Filter, which InventorySnapshot to fetch.
     */
    where: InventorySnapshotWhereUniqueInput
  }

  /**
   * InventorySnapshot findFirst
   */
  export type InventorySnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventorySnapshot
     */
    select?: InventorySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventorySnapshot
     */
    omit?: InventorySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorySnapshotInclude<ExtArgs> | null
    /**
     * Filter, which InventorySnapshot to fetch.
     */
    where?: InventorySnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventorySnapshots to fetch.
     */
    orderBy?: InventorySnapshotOrderByWithRelationInput | InventorySnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventorySnapshots.
     */
    cursor?: InventorySnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventorySnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventorySnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventorySnapshots.
     */
    distinct?: InventorySnapshotScalarFieldEnum | InventorySnapshotScalarFieldEnum[]
  }

  /**
   * InventorySnapshot findFirstOrThrow
   */
  export type InventorySnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventorySnapshot
     */
    select?: InventorySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventorySnapshot
     */
    omit?: InventorySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorySnapshotInclude<ExtArgs> | null
    /**
     * Filter, which InventorySnapshot to fetch.
     */
    where?: InventorySnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventorySnapshots to fetch.
     */
    orderBy?: InventorySnapshotOrderByWithRelationInput | InventorySnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventorySnapshots.
     */
    cursor?: InventorySnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventorySnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventorySnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventorySnapshots.
     */
    distinct?: InventorySnapshotScalarFieldEnum | InventorySnapshotScalarFieldEnum[]
  }

  /**
   * InventorySnapshot findMany
   */
  export type InventorySnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventorySnapshot
     */
    select?: InventorySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventorySnapshot
     */
    omit?: InventorySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorySnapshotInclude<ExtArgs> | null
    /**
     * Filter, which InventorySnapshots to fetch.
     */
    where?: InventorySnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventorySnapshots to fetch.
     */
    orderBy?: InventorySnapshotOrderByWithRelationInput | InventorySnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventorySnapshots.
     */
    cursor?: InventorySnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventorySnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventorySnapshots.
     */
    skip?: number
    distinct?: InventorySnapshotScalarFieldEnum | InventorySnapshotScalarFieldEnum[]
  }

  /**
   * InventorySnapshot create
   */
  export type InventorySnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventorySnapshot
     */
    select?: InventorySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventorySnapshot
     */
    omit?: InventorySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorySnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a InventorySnapshot.
     */
    data: XOR<InventorySnapshotCreateInput, InventorySnapshotUncheckedCreateInput>
  }

  /**
   * InventorySnapshot createMany
   */
  export type InventorySnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventorySnapshots.
     */
    data: InventorySnapshotCreateManyInput | InventorySnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventorySnapshot createManyAndReturn
   */
  export type InventorySnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventorySnapshot
     */
    select?: InventorySnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventorySnapshot
     */
    omit?: InventorySnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many InventorySnapshots.
     */
    data: InventorySnapshotCreateManyInput | InventorySnapshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorySnapshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventorySnapshot update
   */
  export type InventorySnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventorySnapshot
     */
    select?: InventorySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventorySnapshot
     */
    omit?: InventorySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorySnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a InventorySnapshot.
     */
    data: XOR<InventorySnapshotUpdateInput, InventorySnapshotUncheckedUpdateInput>
    /**
     * Choose, which InventorySnapshot to update.
     */
    where: InventorySnapshotWhereUniqueInput
  }

  /**
   * InventorySnapshot updateMany
   */
  export type InventorySnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventorySnapshots.
     */
    data: XOR<InventorySnapshotUpdateManyMutationInput, InventorySnapshotUncheckedUpdateManyInput>
    /**
     * Filter which InventorySnapshots to update
     */
    where?: InventorySnapshotWhereInput
    /**
     * Limit how many InventorySnapshots to update.
     */
    limit?: number
  }

  /**
   * InventorySnapshot updateManyAndReturn
   */
  export type InventorySnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventorySnapshot
     */
    select?: InventorySnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventorySnapshot
     */
    omit?: InventorySnapshotOmit<ExtArgs> | null
    /**
     * The data used to update InventorySnapshots.
     */
    data: XOR<InventorySnapshotUpdateManyMutationInput, InventorySnapshotUncheckedUpdateManyInput>
    /**
     * Filter which InventorySnapshots to update
     */
    where?: InventorySnapshotWhereInput
    /**
     * Limit how many InventorySnapshots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorySnapshotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventorySnapshot upsert
   */
  export type InventorySnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventorySnapshot
     */
    select?: InventorySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventorySnapshot
     */
    omit?: InventorySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorySnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the InventorySnapshot to update in case it exists.
     */
    where: InventorySnapshotWhereUniqueInput
    /**
     * In case the InventorySnapshot found by the `where` argument doesn't exist, create a new InventorySnapshot with this data.
     */
    create: XOR<InventorySnapshotCreateInput, InventorySnapshotUncheckedCreateInput>
    /**
     * In case the InventorySnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventorySnapshotUpdateInput, InventorySnapshotUncheckedUpdateInput>
  }

  /**
   * InventorySnapshot delete
   */
  export type InventorySnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventorySnapshot
     */
    select?: InventorySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventorySnapshot
     */
    omit?: InventorySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorySnapshotInclude<ExtArgs> | null
    /**
     * Filter which InventorySnapshot to delete.
     */
    where: InventorySnapshotWhereUniqueInput
  }

  /**
   * InventorySnapshot deleteMany
   */
  export type InventorySnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventorySnapshots to delete
     */
    where?: InventorySnapshotWhereInput
    /**
     * Limit how many InventorySnapshots to delete.
     */
    limit?: number
  }

  /**
   * InventorySnapshot without action
   */
  export type InventorySnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventorySnapshot
     */
    select?: InventorySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventorySnapshot
     */
    omit?: InventorySnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorySnapshotInclude<ExtArgs> | null
  }


  /**
   * Model ExportJob
   */

  export type AggregateExportJob = {
    _count: ExportJobCountAggregateOutputType | null
    _avg: ExportJobAvgAggregateOutputType | null
    _sum: ExportJobSumAggregateOutputType | null
    _min: ExportJobMinAggregateOutputType | null
    _max: ExportJobMaxAggregateOutputType | null
  }

  export type ExportJobAvgAggregateOutputType = {
    progress: number | null
    fileSize: number | null
  }

  export type ExportJobSumAggregateOutputType = {
    progress: number | null
    fileSize: number | null
  }

  export type ExportJobMinAggregateOutputType = {
    id: string | null
    siteId: string | null
    userId: string | null
    module: string | null
    dateFrom: Date | null
    dateTo: Date | null
    granularity: string | null
    format: string | null
    status: string | null
    progress: number | null
    filePath: string | null
    fileSize: number | null
    fileHash: string | null
    errorMessage: string | null
    downloadUrl: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExportJobMaxAggregateOutputType = {
    id: string | null
    siteId: string | null
    userId: string | null
    module: string | null
    dateFrom: Date | null
    dateTo: Date | null
    granularity: string | null
    format: string | null
    status: string | null
    progress: number | null
    filePath: string | null
    fileSize: number | null
    fileHash: string | null
    errorMessage: string | null
    downloadUrl: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExportJobCountAggregateOutputType = {
    id: number
    siteId: number
    userId: number
    module: number
    dateFrom: number
    dateTo: number
    granularity: number
    format: number
    status: number
    progress: number
    filePath: number
    fileSize: number
    fileHash: number
    errorMessage: number
    downloadUrl: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExportJobAvgAggregateInputType = {
    progress?: true
    fileSize?: true
  }

  export type ExportJobSumAggregateInputType = {
    progress?: true
    fileSize?: true
  }

  export type ExportJobMinAggregateInputType = {
    id?: true
    siteId?: true
    userId?: true
    module?: true
    dateFrom?: true
    dateTo?: true
    granularity?: true
    format?: true
    status?: true
    progress?: true
    filePath?: true
    fileSize?: true
    fileHash?: true
    errorMessage?: true
    downloadUrl?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExportJobMaxAggregateInputType = {
    id?: true
    siteId?: true
    userId?: true
    module?: true
    dateFrom?: true
    dateTo?: true
    granularity?: true
    format?: true
    status?: true
    progress?: true
    filePath?: true
    fileSize?: true
    fileHash?: true
    errorMessage?: true
    downloadUrl?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExportJobCountAggregateInputType = {
    id?: true
    siteId?: true
    userId?: true
    module?: true
    dateFrom?: true
    dateTo?: true
    granularity?: true
    format?: true
    status?: true
    progress?: true
    filePath?: true
    fileSize?: true
    fileHash?: true
    errorMessage?: true
    downloadUrl?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExportJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExportJob to aggregate.
     */
    where?: ExportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportJobs to fetch.
     */
    orderBy?: ExportJobOrderByWithRelationInput | ExportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExportJobs
    **/
    _count?: true | ExportJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExportJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExportJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExportJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExportJobMaxAggregateInputType
  }

  export type GetExportJobAggregateType<T extends ExportJobAggregateArgs> = {
        [P in keyof T & keyof AggregateExportJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExportJob[P]>
      : GetScalarType<T[P], AggregateExportJob[P]>
  }




  export type ExportJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExportJobWhereInput
    orderBy?: ExportJobOrderByWithAggregationInput | ExportJobOrderByWithAggregationInput[]
    by: ExportJobScalarFieldEnum[] | ExportJobScalarFieldEnum
    having?: ExportJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExportJobCountAggregateInputType | true
    _avg?: ExportJobAvgAggregateInputType
    _sum?: ExportJobSumAggregateInputType
    _min?: ExportJobMinAggregateInputType
    _max?: ExportJobMaxAggregateInputType
  }

  export type ExportJobGroupByOutputType = {
    id: string
    siteId: string
    userId: string
    module: string
    dateFrom: Date
    dateTo: Date
    granularity: string
    format: string
    status: string
    progress: number
    filePath: string | null
    fileSize: number | null
    fileHash: string | null
    errorMessage: string | null
    downloadUrl: string | null
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ExportJobCountAggregateOutputType | null
    _avg: ExportJobAvgAggregateOutputType | null
    _sum: ExportJobSumAggregateOutputType | null
    _min: ExportJobMinAggregateOutputType | null
    _max: ExportJobMaxAggregateOutputType | null
  }

  type GetExportJobGroupByPayload<T extends ExportJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExportJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExportJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExportJobGroupByOutputType[P]>
            : GetScalarType<T[P], ExportJobGroupByOutputType[P]>
        }
      >
    >


  export type ExportJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    userId?: boolean
    module?: boolean
    dateFrom?: boolean
    dateTo?: boolean
    granularity?: boolean
    format?: boolean
    status?: boolean
    progress?: boolean
    filePath?: boolean
    fileSize?: boolean
    fileHash?: boolean
    errorMessage?: boolean
    downloadUrl?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    exportAudit?: boolean | ExportJob$exportAuditArgs<ExtArgs>
  }, ExtArgs["result"]["exportJob"]>

  export type ExportJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    userId?: boolean
    module?: boolean
    dateFrom?: boolean
    dateTo?: boolean
    granularity?: boolean
    format?: boolean
    status?: boolean
    progress?: boolean
    filePath?: boolean
    fileSize?: boolean
    fileHash?: boolean
    errorMessage?: boolean
    downloadUrl?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exportJob"]>

  export type ExportJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    userId?: boolean
    module?: boolean
    dateFrom?: boolean
    dateTo?: boolean
    granularity?: boolean
    format?: boolean
    status?: boolean
    progress?: boolean
    filePath?: boolean
    fileSize?: boolean
    fileHash?: boolean
    errorMessage?: boolean
    downloadUrl?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exportJob"]>

  export type ExportJobSelectScalar = {
    id?: boolean
    siteId?: boolean
    userId?: boolean
    module?: boolean
    dateFrom?: boolean
    dateTo?: boolean
    granularity?: boolean
    format?: boolean
    status?: boolean
    progress?: boolean
    filePath?: boolean
    fileSize?: boolean
    fileHash?: boolean
    errorMessage?: boolean
    downloadUrl?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExportJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siteId" | "userId" | "module" | "dateFrom" | "dateTo" | "granularity" | "format" | "status" | "progress" | "filePath" | "fileSize" | "fileHash" | "errorMessage" | "downloadUrl" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["exportJob"]>
  export type ExportJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    exportAudit?: boolean | ExportJob$exportAuditArgs<ExtArgs>
  }
  export type ExportJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type ExportJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }

  export type $ExportJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExportJob"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      exportAudit: Prisma.$ExportAuditPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      siteId: string
      userId: string
      module: string
      dateFrom: Date
      dateTo: Date
      granularity: string
      format: string
      status: string
      progress: number
      filePath: string | null
      fileSize: number | null
      fileHash: string | null
      errorMessage: string | null
      downloadUrl: string | null
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exportJob"]>
    composites: {}
  }

  type ExportJobGetPayload<S extends boolean | null | undefined | ExportJobDefaultArgs> = $Result.GetResult<Prisma.$ExportJobPayload, S>

  type ExportJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExportJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExportJobCountAggregateInputType | true
    }

  export interface ExportJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExportJob'], meta: { name: 'ExportJob' } }
    /**
     * Find zero or one ExportJob that matches the filter.
     * @param {ExportJobFindUniqueArgs} args - Arguments to find a ExportJob
     * @example
     * // Get one ExportJob
     * const exportJob = await prisma.exportJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExportJobFindUniqueArgs>(args: SelectSubset<T, ExportJobFindUniqueArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExportJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExportJobFindUniqueOrThrowArgs} args - Arguments to find a ExportJob
     * @example
     * // Get one ExportJob
     * const exportJob = await prisma.exportJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExportJobFindUniqueOrThrowArgs>(args: SelectSubset<T, ExportJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExportJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobFindFirstArgs} args - Arguments to find a ExportJob
     * @example
     * // Get one ExportJob
     * const exportJob = await prisma.exportJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExportJobFindFirstArgs>(args?: SelectSubset<T, ExportJobFindFirstArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExportJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobFindFirstOrThrowArgs} args - Arguments to find a ExportJob
     * @example
     * // Get one ExportJob
     * const exportJob = await prisma.exportJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExportJobFindFirstOrThrowArgs>(args?: SelectSubset<T, ExportJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExportJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExportJobs
     * const exportJobs = await prisma.exportJob.findMany()
     * 
     * // Get first 10 ExportJobs
     * const exportJobs = await prisma.exportJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exportJobWithIdOnly = await prisma.exportJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExportJobFindManyArgs>(args?: SelectSubset<T, ExportJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExportJob.
     * @param {ExportJobCreateArgs} args - Arguments to create a ExportJob.
     * @example
     * // Create one ExportJob
     * const ExportJob = await prisma.exportJob.create({
     *   data: {
     *     // ... data to create a ExportJob
     *   }
     * })
     * 
     */
    create<T extends ExportJobCreateArgs>(args: SelectSubset<T, ExportJobCreateArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExportJobs.
     * @param {ExportJobCreateManyArgs} args - Arguments to create many ExportJobs.
     * @example
     * // Create many ExportJobs
     * const exportJob = await prisma.exportJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExportJobCreateManyArgs>(args?: SelectSubset<T, ExportJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExportJobs and returns the data saved in the database.
     * @param {ExportJobCreateManyAndReturnArgs} args - Arguments to create many ExportJobs.
     * @example
     * // Create many ExportJobs
     * const exportJob = await prisma.exportJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExportJobs and only return the `id`
     * const exportJobWithIdOnly = await prisma.exportJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExportJobCreateManyAndReturnArgs>(args?: SelectSubset<T, ExportJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExportJob.
     * @param {ExportJobDeleteArgs} args - Arguments to delete one ExportJob.
     * @example
     * // Delete one ExportJob
     * const ExportJob = await prisma.exportJob.delete({
     *   where: {
     *     // ... filter to delete one ExportJob
     *   }
     * })
     * 
     */
    delete<T extends ExportJobDeleteArgs>(args: SelectSubset<T, ExportJobDeleteArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExportJob.
     * @param {ExportJobUpdateArgs} args - Arguments to update one ExportJob.
     * @example
     * // Update one ExportJob
     * const exportJob = await prisma.exportJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExportJobUpdateArgs>(args: SelectSubset<T, ExportJobUpdateArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExportJobs.
     * @param {ExportJobDeleteManyArgs} args - Arguments to filter ExportJobs to delete.
     * @example
     * // Delete a few ExportJobs
     * const { count } = await prisma.exportJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExportJobDeleteManyArgs>(args?: SelectSubset<T, ExportJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExportJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExportJobs
     * const exportJob = await prisma.exportJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExportJobUpdateManyArgs>(args: SelectSubset<T, ExportJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExportJobs and returns the data updated in the database.
     * @param {ExportJobUpdateManyAndReturnArgs} args - Arguments to update many ExportJobs.
     * @example
     * // Update many ExportJobs
     * const exportJob = await prisma.exportJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExportJobs and only return the `id`
     * const exportJobWithIdOnly = await prisma.exportJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExportJobUpdateManyAndReturnArgs>(args: SelectSubset<T, ExportJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExportJob.
     * @param {ExportJobUpsertArgs} args - Arguments to update or create a ExportJob.
     * @example
     * // Update or create a ExportJob
     * const exportJob = await prisma.exportJob.upsert({
     *   create: {
     *     // ... data to create a ExportJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExportJob we want to update
     *   }
     * })
     */
    upsert<T extends ExportJobUpsertArgs>(args: SelectSubset<T, ExportJobUpsertArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExportJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobCountArgs} args - Arguments to filter ExportJobs to count.
     * @example
     * // Count the number of ExportJobs
     * const count = await prisma.exportJob.count({
     *   where: {
     *     // ... the filter for the ExportJobs we want to count
     *   }
     * })
    **/
    count<T extends ExportJobCountArgs>(
      args?: Subset<T, ExportJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExportJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExportJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExportJobAggregateArgs>(args: Subset<T, ExportJobAggregateArgs>): Prisma.PrismaPromise<GetExportJobAggregateType<T>>

    /**
     * Group by ExportJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportJobGroupByArgs} args - Group by arguments.
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
      T extends ExportJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExportJobGroupByArgs['orderBy'] }
        : { orderBy?: ExportJobGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExportJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExportJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExportJob model
   */
  readonly fields: ExportJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExportJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExportJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exportAudit<T extends ExportJob$exportAuditArgs<ExtArgs> = {}>(args?: Subset<T, ExportJob$exportAuditArgs<ExtArgs>>): Prisma__ExportAuditClient<$Result.GetResult<Prisma.$ExportAuditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExportJob model
   */
  interface ExportJobFieldRefs {
    readonly id: FieldRef<"ExportJob", 'String'>
    readonly siteId: FieldRef<"ExportJob", 'String'>
    readonly userId: FieldRef<"ExportJob", 'String'>
    readonly module: FieldRef<"ExportJob", 'String'>
    readonly dateFrom: FieldRef<"ExportJob", 'DateTime'>
    readonly dateTo: FieldRef<"ExportJob", 'DateTime'>
    readonly granularity: FieldRef<"ExportJob", 'String'>
    readonly format: FieldRef<"ExportJob", 'String'>
    readonly status: FieldRef<"ExportJob", 'String'>
    readonly progress: FieldRef<"ExportJob", 'Int'>
    readonly filePath: FieldRef<"ExportJob", 'String'>
    readonly fileSize: FieldRef<"ExportJob", 'Int'>
    readonly fileHash: FieldRef<"ExportJob", 'String'>
    readonly errorMessage: FieldRef<"ExportJob", 'String'>
    readonly downloadUrl: FieldRef<"ExportJob", 'String'>
    readonly expiresAt: FieldRef<"ExportJob", 'DateTime'>
    readonly createdAt: FieldRef<"ExportJob", 'DateTime'>
    readonly updatedAt: FieldRef<"ExportJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExportJob findUnique
   */
  export type ExportJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * Filter, which ExportJob to fetch.
     */
    where: ExportJobWhereUniqueInput
  }

  /**
   * ExportJob findUniqueOrThrow
   */
  export type ExportJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * Filter, which ExportJob to fetch.
     */
    where: ExportJobWhereUniqueInput
  }

  /**
   * ExportJob findFirst
   */
  export type ExportJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * Filter, which ExportJob to fetch.
     */
    where?: ExportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportJobs to fetch.
     */
    orderBy?: ExportJobOrderByWithRelationInput | ExportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExportJobs.
     */
    cursor?: ExportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExportJobs.
     */
    distinct?: ExportJobScalarFieldEnum | ExportJobScalarFieldEnum[]
  }

  /**
   * ExportJob findFirstOrThrow
   */
  export type ExportJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * Filter, which ExportJob to fetch.
     */
    where?: ExportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportJobs to fetch.
     */
    orderBy?: ExportJobOrderByWithRelationInput | ExportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExportJobs.
     */
    cursor?: ExportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExportJobs.
     */
    distinct?: ExportJobScalarFieldEnum | ExportJobScalarFieldEnum[]
  }

  /**
   * ExportJob findMany
   */
  export type ExportJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * Filter, which ExportJobs to fetch.
     */
    where?: ExportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportJobs to fetch.
     */
    orderBy?: ExportJobOrderByWithRelationInput | ExportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExportJobs.
     */
    cursor?: ExportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportJobs.
     */
    skip?: number
    distinct?: ExportJobScalarFieldEnum | ExportJobScalarFieldEnum[]
  }

  /**
   * ExportJob create
   */
  export type ExportJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * The data needed to create a ExportJob.
     */
    data: XOR<ExportJobCreateInput, ExportJobUncheckedCreateInput>
  }

  /**
   * ExportJob createMany
   */
  export type ExportJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExportJobs.
     */
    data: ExportJobCreateManyInput | ExportJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExportJob createManyAndReturn
   */
  export type ExportJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * The data used to create many ExportJobs.
     */
    data: ExportJobCreateManyInput | ExportJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExportJob update
   */
  export type ExportJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * The data needed to update a ExportJob.
     */
    data: XOR<ExportJobUpdateInput, ExportJobUncheckedUpdateInput>
    /**
     * Choose, which ExportJob to update.
     */
    where: ExportJobWhereUniqueInput
  }

  /**
   * ExportJob updateMany
   */
  export type ExportJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExportJobs.
     */
    data: XOR<ExportJobUpdateManyMutationInput, ExportJobUncheckedUpdateManyInput>
    /**
     * Filter which ExportJobs to update
     */
    where?: ExportJobWhereInput
    /**
     * Limit how many ExportJobs to update.
     */
    limit?: number
  }

  /**
   * ExportJob updateManyAndReturn
   */
  export type ExportJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * The data used to update ExportJobs.
     */
    data: XOR<ExportJobUpdateManyMutationInput, ExportJobUncheckedUpdateManyInput>
    /**
     * Filter which ExportJobs to update
     */
    where?: ExportJobWhereInput
    /**
     * Limit how many ExportJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExportJob upsert
   */
  export type ExportJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * The filter to search for the ExportJob to update in case it exists.
     */
    where: ExportJobWhereUniqueInput
    /**
     * In case the ExportJob found by the `where` argument doesn't exist, create a new ExportJob with this data.
     */
    create: XOR<ExportJobCreateInput, ExportJobUncheckedCreateInput>
    /**
     * In case the ExportJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExportJobUpdateInput, ExportJobUncheckedUpdateInput>
  }

  /**
   * ExportJob delete
   */
  export type ExportJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
    /**
     * Filter which ExportJob to delete.
     */
    where: ExportJobWhereUniqueInput
  }

  /**
   * ExportJob deleteMany
   */
  export type ExportJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExportJobs to delete
     */
    where?: ExportJobWhereInput
    /**
     * Limit how many ExportJobs to delete.
     */
    limit?: number
  }

  /**
   * ExportJob.exportAudit
   */
  export type ExportJob$exportAuditArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportAudit
     */
    select?: ExportAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportAudit
     */
    omit?: ExportAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportAuditInclude<ExtArgs> | null
    where?: ExportAuditWhereInput
  }

  /**
   * ExportJob without action
   */
  export type ExportJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportJob
     */
    select?: ExportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportJob
     */
    omit?: ExportJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportJobInclude<ExtArgs> | null
  }


  /**
   * Model ExportAudit
   */

  export type AggregateExportAudit = {
    _count: ExportAuditCountAggregateOutputType | null
    _avg: ExportAuditAvgAggregateOutputType | null
    _sum: ExportAuditSumAggregateOutputType | null
    _min: ExportAuditMinAggregateOutputType | null
    _max: ExportAuditMaxAggregateOutputType | null
  }

  export type ExportAuditAvgAggregateOutputType = {
    recordCount: number | null
    fileSize: number | null
    downloadCount: number | null
  }

  export type ExportAuditSumAggregateOutputType = {
    recordCount: number | null
    fileSize: number | null
    downloadCount: number | null
  }

  export type ExportAuditMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    siteId: string | null
    userId: string | null
    module: string | null
    filtersJson: string | null
    columnPreset: string | null
    recordCount: number | null
    fileSize: number | null
    fileHash: string | null
    downloadCount: number | null
    lastDownload: Date | null
    createdAt: Date | null
  }

  export type ExportAuditMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    siteId: string | null
    userId: string | null
    module: string | null
    filtersJson: string | null
    columnPreset: string | null
    recordCount: number | null
    fileSize: number | null
    fileHash: string | null
    downloadCount: number | null
    lastDownload: Date | null
    createdAt: Date | null
  }

  export type ExportAuditCountAggregateOutputType = {
    id: number
    jobId: number
    siteId: number
    userId: number
    module: number
    filtersJson: number
    columnPreset: number
    recordCount: number
    fileSize: number
    fileHash: number
    downloadCount: number
    lastDownload: number
    createdAt: number
    _all: number
  }


  export type ExportAuditAvgAggregateInputType = {
    recordCount?: true
    fileSize?: true
    downloadCount?: true
  }

  export type ExportAuditSumAggregateInputType = {
    recordCount?: true
    fileSize?: true
    downloadCount?: true
  }

  export type ExportAuditMinAggregateInputType = {
    id?: true
    jobId?: true
    siteId?: true
    userId?: true
    module?: true
    filtersJson?: true
    columnPreset?: true
    recordCount?: true
    fileSize?: true
    fileHash?: true
    downloadCount?: true
    lastDownload?: true
    createdAt?: true
  }

  export type ExportAuditMaxAggregateInputType = {
    id?: true
    jobId?: true
    siteId?: true
    userId?: true
    module?: true
    filtersJson?: true
    columnPreset?: true
    recordCount?: true
    fileSize?: true
    fileHash?: true
    downloadCount?: true
    lastDownload?: true
    createdAt?: true
  }

  export type ExportAuditCountAggregateInputType = {
    id?: true
    jobId?: true
    siteId?: true
    userId?: true
    module?: true
    filtersJson?: true
    columnPreset?: true
    recordCount?: true
    fileSize?: true
    fileHash?: true
    downloadCount?: true
    lastDownload?: true
    createdAt?: true
    _all?: true
  }

  export type ExportAuditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExportAudit to aggregate.
     */
    where?: ExportAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportAudits to fetch.
     */
    orderBy?: ExportAuditOrderByWithRelationInput | ExportAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExportAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExportAudits
    **/
    _count?: true | ExportAuditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExportAuditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExportAuditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExportAuditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExportAuditMaxAggregateInputType
  }

  export type GetExportAuditAggregateType<T extends ExportAuditAggregateArgs> = {
        [P in keyof T & keyof AggregateExportAudit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExportAudit[P]>
      : GetScalarType<T[P], AggregateExportAudit[P]>
  }




  export type ExportAuditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExportAuditWhereInput
    orderBy?: ExportAuditOrderByWithAggregationInput | ExportAuditOrderByWithAggregationInput[]
    by: ExportAuditScalarFieldEnum[] | ExportAuditScalarFieldEnum
    having?: ExportAuditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExportAuditCountAggregateInputType | true
    _avg?: ExportAuditAvgAggregateInputType
    _sum?: ExportAuditSumAggregateInputType
    _min?: ExportAuditMinAggregateInputType
    _max?: ExportAuditMaxAggregateInputType
  }

  export type ExportAuditGroupByOutputType = {
    id: string
    jobId: string
    siteId: string
    userId: string
    module: string
    filtersJson: string
    columnPreset: string | null
    recordCount: number
    fileSize: number
    fileHash: string
    downloadCount: number
    lastDownload: Date | null
    createdAt: Date
    _count: ExportAuditCountAggregateOutputType | null
    _avg: ExportAuditAvgAggregateOutputType | null
    _sum: ExportAuditSumAggregateOutputType | null
    _min: ExportAuditMinAggregateOutputType | null
    _max: ExportAuditMaxAggregateOutputType | null
  }

  type GetExportAuditGroupByPayload<T extends ExportAuditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExportAuditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExportAuditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExportAuditGroupByOutputType[P]>
            : GetScalarType<T[P], ExportAuditGroupByOutputType[P]>
        }
      >
    >


  export type ExportAuditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    siteId?: boolean
    userId?: boolean
    module?: boolean
    filtersJson?: boolean
    columnPreset?: boolean
    recordCount?: boolean
    fileSize?: boolean
    fileHash?: boolean
    downloadCount?: boolean
    lastDownload?: boolean
    createdAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    job?: boolean | ExportJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exportAudit"]>

  export type ExportAuditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    siteId?: boolean
    userId?: boolean
    module?: boolean
    filtersJson?: boolean
    columnPreset?: boolean
    recordCount?: boolean
    fileSize?: boolean
    fileHash?: boolean
    downloadCount?: boolean
    lastDownload?: boolean
    createdAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    job?: boolean | ExportJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exportAudit"]>

  export type ExportAuditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    siteId?: boolean
    userId?: boolean
    module?: boolean
    filtersJson?: boolean
    columnPreset?: boolean
    recordCount?: boolean
    fileSize?: boolean
    fileHash?: boolean
    downloadCount?: boolean
    lastDownload?: boolean
    createdAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    job?: boolean | ExportJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exportAudit"]>

  export type ExportAuditSelectScalar = {
    id?: boolean
    jobId?: boolean
    siteId?: boolean
    userId?: boolean
    module?: boolean
    filtersJson?: boolean
    columnPreset?: boolean
    recordCount?: boolean
    fileSize?: boolean
    fileHash?: boolean
    downloadCount?: boolean
    lastDownload?: boolean
    createdAt?: boolean
  }

  export type ExportAuditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "siteId" | "userId" | "module" | "filtersJson" | "columnPreset" | "recordCount" | "fileSize" | "fileHash" | "downloadCount" | "lastDownload" | "createdAt", ExtArgs["result"]["exportAudit"]>
  export type ExportAuditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    job?: boolean | ExportJobDefaultArgs<ExtArgs>
  }
  export type ExportAuditIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    job?: boolean | ExportJobDefaultArgs<ExtArgs>
  }
  export type ExportAuditIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    job?: boolean | ExportJobDefaultArgs<ExtArgs>
  }

  export type $ExportAuditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExportAudit"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      job: Prisma.$ExportJobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string
      siteId: string
      userId: string
      module: string
      filtersJson: string
      columnPreset: string | null
      recordCount: number
      fileSize: number
      fileHash: string
      downloadCount: number
      lastDownload: Date | null
      createdAt: Date
    }, ExtArgs["result"]["exportAudit"]>
    composites: {}
  }

  type ExportAuditGetPayload<S extends boolean | null | undefined | ExportAuditDefaultArgs> = $Result.GetResult<Prisma.$ExportAuditPayload, S>

  type ExportAuditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExportAuditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExportAuditCountAggregateInputType | true
    }

  export interface ExportAuditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExportAudit'], meta: { name: 'ExportAudit' } }
    /**
     * Find zero or one ExportAudit that matches the filter.
     * @param {ExportAuditFindUniqueArgs} args - Arguments to find a ExportAudit
     * @example
     * // Get one ExportAudit
     * const exportAudit = await prisma.exportAudit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExportAuditFindUniqueArgs>(args: SelectSubset<T, ExportAuditFindUniqueArgs<ExtArgs>>): Prisma__ExportAuditClient<$Result.GetResult<Prisma.$ExportAuditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExportAudit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExportAuditFindUniqueOrThrowArgs} args - Arguments to find a ExportAudit
     * @example
     * // Get one ExportAudit
     * const exportAudit = await prisma.exportAudit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExportAuditFindUniqueOrThrowArgs>(args: SelectSubset<T, ExportAuditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExportAuditClient<$Result.GetResult<Prisma.$ExportAuditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExportAudit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportAuditFindFirstArgs} args - Arguments to find a ExportAudit
     * @example
     * // Get one ExportAudit
     * const exportAudit = await prisma.exportAudit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExportAuditFindFirstArgs>(args?: SelectSubset<T, ExportAuditFindFirstArgs<ExtArgs>>): Prisma__ExportAuditClient<$Result.GetResult<Prisma.$ExportAuditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExportAudit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportAuditFindFirstOrThrowArgs} args - Arguments to find a ExportAudit
     * @example
     * // Get one ExportAudit
     * const exportAudit = await prisma.exportAudit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExportAuditFindFirstOrThrowArgs>(args?: SelectSubset<T, ExportAuditFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExportAuditClient<$Result.GetResult<Prisma.$ExportAuditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExportAudits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportAuditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExportAudits
     * const exportAudits = await prisma.exportAudit.findMany()
     * 
     * // Get first 10 ExportAudits
     * const exportAudits = await prisma.exportAudit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exportAuditWithIdOnly = await prisma.exportAudit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExportAuditFindManyArgs>(args?: SelectSubset<T, ExportAuditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportAuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExportAudit.
     * @param {ExportAuditCreateArgs} args - Arguments to create a ExportAudit.
     * @example
     * // Create one ExportAudit
     * const ExportAudit = await prisma.exportAudit.create({
     *   data: {
     *     // ... data to create a ExportAudit
     *   }
     * })
     * 
     */
    create<T extends ExportAuditCreateArgs>(args: SelectSubset<T, ExportAuditCreateArgs<ExtArgs>>): Prisma__ExportAuditClient<$Result.GetResult<Prisma.$ExportAuditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExportAudits.
     * @param {ExportAuditCreateManyArgs} args - Arguments to create many ExportAudits.
     * @example
     * // Create many ExportAudits
     * const exportAudit = await prisma.exportAudit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExportAuditCreateManyArgs>(args?: SelectSubset<T, ExportAuditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExportAudits and returns the data saved in the database.
     * @param {ExportAuditCreateManyAndReturnArgs} args - Arguments to create many ExportAudits.
     * @example
     * // Create many ExportAudits
     * const exportAudit = await prisma.exportAudit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExportAudits and only return the `id`
     * const exportAuditWithIdOnly = await prisma.exportAudit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExportAuditCreateManyAndReturnArgs>(args?: SelectSubset<T, ExportAuditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportAuditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExportAudit.
     * @param {ExportAuditDeleteArgs} args - Arguments to delete one ExportAudit.
     * @example
     * // Delete one ExportAudit
     * const ExportAudit = await prisma.exportAudit.delete({
     *   where: {
     *     // ... filter to delete one ExportAudit
     *   }
     * })
     * 
     */
    delete<T extends ExportAuditDeleteArgs>(args: SelectSubset<T, ExportAuditDeleteArgs<ExtArgs>>): Prisma__ExportAuditClient<$Result.GetResult<Prisma.$ExportAuditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExportAudit.
     * @param {ExportAuditUpdateArgs} args - Arguments to update one ExportAudit.
     * @example
     * // Update one ExportAudit
     * const exportAudit = await prisma.exportAudit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExportAuditUpdateArgs>(args: SelectSubset<T, ExportAuditUpdateArgs<ExtArgs>>): Prisma__ExportAuditClient<$Result.GetResult<Prisma.$ExportAuditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExportAudits.
     * @param {ExportAuditDeleteManyArgs} args - Arguments to filter ExportAudits to delete.
     * @example
     * // Delete a few ExportAudits
     * const { count } = await prisma.exportAudit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExportAuditDeleteManyArgs>(args?: SelectSubset<T, ExportAuditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExportAudits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportAuditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExportAudits
     * const exportAudit = await prisma.exportAudit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExportAuditUpdateManyArgs>(args: SelectSubset<T, ExportAuditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExportAudits and returns the data updated in the database.
     * @param {ExportAuditUpdateManyAndReturnArgs} args - Arguments to update many ExportAudits.
     * @example
     * // Update many ExportAudits
     * const exportAudit = await prisma.exportAudit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExportAudits and only return the `id`
     * const exportAuditWithIdOnly = await prisma.exportAudit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExportAuditUpdateManyAndReturnArgs>(args: SelectSubset<T, ExportAuditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportAuditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExportAudit.
     * @param {ExportAuditUpsertArgs} args - Arguments to update or create a ExportAudit.
     * @example
     * // Update or create a ExportAudit
     * const exportAudit = await prisma.exportAudit.upsert({
     *   create: {
     *     // ... data to create a ExportAudit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExportAudit we want to update
     *   }
     * })
     */
    upsert<T extends ExportAuditUpsertArgs>(args: SelectSubset<T, ExportAuditUpsertArgs<ExtArgs>>): Prisma__ExportAuditClient<$Result.GetResult<Prisma.$ExportAuditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExportAudits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportAuditCountArgs} args - Arguments to filter ExportAudits to count.
     * @example
     * // Count the number of ExportAudits
     * const count = await prisma.exportAudit.count({
     *   where: {
     *     // ... the filter for the ExportAudits we want to count
     *   }
     * })
    **/
    count<T extends ExportAuditCountArgs>(
      args?: Subset<T, ExportAuditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExportAuditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExportAudit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportAuditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExportAuditAggregateArgs>(args: Subset<T, ExportAuditAggregateArgs>): Prisma.PrismaPromise<GetExportAuditAggregateType<T>>

    /**
     * Group by ExportAudit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportAuditGroupByArgs} args - Group by arguments.
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
      T extends ExportAuditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExportAuditGroupByArgs['orderBy'] }
        : { orderBy?: ExportAuditGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExportAuditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExportAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExportAudit model
   */
  readonly fields: ExportAuditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExportAudit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExportAuditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    job<T extends ExportJobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExportJobDefaultArgs<ExtArgs>>): Prisma__ExportJobClient<$Result.GetResult<Prisma.$ExportJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExportAudit model
   */
  interface ExportAuditFieldRefs {
    readonly id: FieldRef<"ExportAudit", 'String'>
    readonly jobId: FieldRef<"ExportAudit", 'String'>
    readonly siteId: FieldRef<"ExportAudit", 'String'>
    readonly userId: FieldRef<"ExportAudit", 'String'>
    readonly module: FieldRef<"ExportAudit", 'String'>
    readonly filtersJson: FieldRef<"ExportAudit", 'String'>
    readonly columnPreset: FieldRef<"ExportAudit", 'String'>
    readonly recordCount: FieldRef<"ExportAudit", 'Int'>
    readonly fileSize: FieldRef<"ExportAudit", 'Int'>
    readonly fileHash: FieldRef<"ExportAudit", 'String'>
    readonly downloadCount: FieldRef<"ExportAudit", 'Int'>
    readonly lastDownload: FieldRef<"ExportAudit", 'DateTime'>
    readonly createdAt: FieldRef<"ExportAudit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExportAudit findUnique
   */
  export type ExportAuditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportAudit
     */
    select?: ExportAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportAudit
     */
    omit?: ExportAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportAuditInclude<ExtArgs> | null
    /**
     * Filter, which ExportAudit to fetch.
     */
    where: ExportAuditWhereUniqueInput
  }

  /**
   * ExportAudit findUniqueOrThrow
   */
  export type ExportAuditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportAudit
     */
    select?: ExportAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportAudit
     */
    omit?: ExportAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportAuditInclude<ExtArgs> | null
    /**
     * Filter, which ExportAudit to fetch.
     */
    where: ExportAuditWhereUniqueInput
  }

  /**
   * ExportAudit findFirst
   */
  export type ExportAuditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportAudit
     */
    select?: ExportAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportAudit
     */
    omit?: ExportAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportAuditInclude<ExtArgs> | null
    /**
     * Filter, which ExportAudit to fetch.
     */
    where?: ExportAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportAudits to fetch.
     */
    orderBy?: ExportAuditOrderByWithRelationInput | ExportAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExportAudits.
     */
    cursor?: ExportAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExportAudits.
     */
    distinct?: ExportAuditScalarFieldEnum | ExportAuditScalarFieldEnum[]
  }

  /**
   * ExportAudit findFirstOrThrow
   */
  export type ExportAuditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportAudit
     */
    select?: ExportAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportAudit
     */
    omit?: ExportAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportAuditInclude<ExtArgs> | null
    /**
     * Filter, which ExportAudit to fetch.
     */
    where?: ExportAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportAudits to fetch.
     */
    orderBy?: ExportAuditOrderByWithRelationInput | ExportAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExportAudits.
     */
    cursor?: ExportAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExportAudits.
     */
    distinct?: ExportAuditScalarFieldEnum | ExportAuditScalarFieldEnum[]
  }

  /**
   * ExportAudit findMany
   */
  export type ExportAuditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportAudit
     */
    select?: ExportAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportAudit
     */
    omit?: ExportAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportAuditInclude<ExtArgs> | null
    /**
     * Filter, which ExportAudits to fetch.
     */
    where?: ExportAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportAudits to fetch.
     */
    orderBy?: ExportAuditOrderByWithRelationInput | ExportAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExportAudits.
     */
    cursor?: ExportAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportAudits.
     */
    skip?: number
    distinct?: ExportAuditScalarFieldEnum | ExportAuditScalarFieldEnum[]
  }

  /**
   * ExportAudit create
   */
  export type ExportAuditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportAudit
     */
    select?: ExportAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportAudit
     */
    omit?: ExportAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportAuditInclude<ExtArgs> | null
    /**
     * The data needed to create a ExportAudit.
     */
    data: XOR<ExportAuditCreateInput, ExportAuditUncheckedCreateInput>
  }

  /**
   * ExportAudit createMany
   */
  export type ExportAuditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExportAudits.
     */
    data: ExportAuditCreateManyInput | ExportAuditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExportAudit createManyAndReturn
   */
  export type ExportAuditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportAudit
     */
    select?: ExportAuditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExportAudit
     */
    omit?: ExportAuditOmit<ExtArgs> | null
    /**
     * The data used to create many ExportAudits.
     */
    data: ExportAuditCreateManyInput | ExportAuditCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportAuditIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExportAudit update
   */
  export type ExportAuditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportAudit
     */
    select?: ExportAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportAudit
     */
    omit?: ExportAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportAuditInclude<ExtArgs> | null
    /**
     * The data needed to update a ExportAudit.
     */
    data: XOR<ExportAuditUpdateInput, ExportAuditUncheckedUpdateInput>
    /**
     * Choose, which ExportAudit to update.
     */
    where: ExportAuditWhereUniqueInput
  }

  /**
   * ExportAudit updateMany
   */
  export type ExportAuditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExportAudits.
     */
    data: XOR<ExportAuditUpdateManyMutationInput, ExportAuditUncheckedUpdateManyInput>
    /**
     * Filter which ExportAudits to update
     */
    where?: ExportAuditWhereInput
    /**
     * Limit how many ExportAudits to update.
     */
    limit?: number
  }

  /**
   * ExportAudit updateManyAndReturn
   */
  export type ExportAuditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportAudit
     */
    select?: ExportAuditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExportAudit
     */
    omit?: ExportAuditOmit<ExtArgs> | null
    /**
     * The data used to update ExportAudits.
     */
    data: XOR<ExportAuditUpdateManyMutationInput, ExportAuditUncheckedUpdateManyInput>
    /**
     * Filter which ExportAudits to update
     */
    where?: ExportAuditWhereInput
    /**
     * Limit how many ExportAudits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportAuditIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExportAudit upsert
   */
  export type ExportAuditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportAudit
     */
    select?: ExportAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportAudit
     */
    omit?: ExportAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportAuditInclude<ExtArgs> | null
    /**
     * The filter to search for the ExportAudit to update in case it exists.
     */
    where: ExportAuditWhereUniqueInput
    /**
     * In case the ExportAudit found by the `where` argument doesn't exist, create a new ExportAudit with this data.
     */
    create: XOR<ExportAuditCreateInput, ExportAuditUncheckedCreateInput>
    /**
     * In case the ExportAudit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExportAuditUpdateInput, ExportAuditUncheckedUpdateInput>
  }

  /**
   * ExportAudit delete
   */
  export type ExportAuditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportAudit
     */
    select?: ExportAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportAudit
     */
    omit?: ExportAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportAuditInclude<ExtArgs> | null
    /**
     * Filter which ExportAudit to delete.
     */
    where: ExportAuditWhereUniqueInput
  }

  /**
   * ExportAudit deleteMany
   */
  export type ExportAuditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExportAudits to delete
     */
    where?: ExportAuditWhereInput
    /**
     * Limit how many ExportAudits to delete.
     */
    limit?: number
  }

  /**
   * ExportAudit without action
   */
  export type ExportAuditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportAudit
     */
    select?: ExportAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportAudit
     */
    omit?: ExportAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExportAuditInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SiteScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    location: 'location',
    timezone: 'timezone',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    code: 'code',
    type: 'type',
    name: 'name',
    category: 'category',
    uom: 'uom',
    isFinal: 'isFinal',
    notes: 'notes',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    type: 'type',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const ManpowerRoleScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ManpowerRoleScalarFieldEnum = (typeof ManpowerRoleScalarFieldEnum)[keyof typeof ManpowerRoleScalarFieldEnum]


  export const ProductionScalarFieldEnum: {
    id: 'id',
    siteId: 'siteId',
    date: 'date',
    shift: 'shift',
    materialId: 'materialId',
    qtyTon: 'qtyTon',
    operation: 'operation',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy'
  };

  export type ProductionScalarFieldEnum = (typeof ProductionScalarFieldEnum)[keyof typeof ProductionScalarFieldEnum]


  export const DispatchScalarFieldEnum: {
    id: 'id',
    siteId: 'siteId',
    date: 'date',
    materialId: 'materialId',
    qtyTon: 'qtyTon',
    trips: 'trips',
    owner: 'owner',
    reference: 'reference',
    operation: 'operation',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy'
  };

  export type DispatchScalarFieldEnum = (typeof DispatchScalarFieldEnum)[keyof typeof DispatchScalarFieldEnum]


  export const ReceivedMaterialScalarFieldEnum: {
    id: 'id',
    siteId: 'siteId',
    date: 'date',
    materialId: 'materialId',
    qtyTon: 'qtyTon',
    source: 'source',
    vehicleRef: 'vehicleRef',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy'
  };

  export type ReceivedMaterialScalarFieldEnum = (typeof ReceivedMaterialScalarFieldEnum)[keyof typeof ReceivedMaterialScalarFieldEnum]


  export const EquipmentLogScalarFieldEnum: {
    id: 'id',
    siteId: 'siteId',
    date: 'date',
    equipmentId: 'equipmentId',
    hours: 'hours',
    count: 'count',
    shift: 'shift',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy'
  };

  export type EquipmentLogScalarFieldEnum = (typeof EquipmentLogScalarFieldEnum)[keyof typeof EquipmentLogScalarFieldEnum]


  export const ManpowerLogScalarFieldEnum: {
    id: 'id',
    siteId: 'siteId',
    date: 'date',
    roleId: 'roleId',
    headcount: 'headcount',
    hours: 'hours',
    shift: 'shift',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy'
  };

  export type ManpowerLogScalarFieldEnum = (typeof ManpowerLogScalarFieldEnum)[keyof typeof ManpowerLogScalarFieldEnum]


  export const InventorySnapshotScalarFieldEnum: {
    id: 'id',
    siteId: 'siteId',
    date: 'date',
    materialId: 'materialId',
    openingTon: 'openingTon',
    producedTon: 'producedTon',
    receivedTon: 'receivedTon',
    dispatchedTon: 'dispatchedTon',
    adjustmentTon: 'adjustmentTon',
    closingTon: 'closingTon',
    isCalculated: 'isCalculated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy'
  };

  export type InventorySnapshotScalarFieldEnum = (typeof InventorySnapshotScalarFieldEnum)[keyof typeof InventorySnapshotScalarFieldEnum]


  export const ExportJobScalarFieldEnum: {
    id: 'id',
    siteId: 'siteId',
    userId: 'userId',
    module: 'module',
    dateFrom: 'dateFrom',
    dateTo: 'dateTo',
    granularity: 'granularity',
    format: 'format',
    status: 'status',
    progress: 'progress',
    filePath: 'filePath',
    fileSize: 'fileSize',
    fileHash: 'fileHash',
    errorMessage: 'errorMessage',
    downloadUrl: 'downloadUrl',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExportJobScalarFieldEnum = (typeof ExportJobScalarFieldEnum)[keyof typeof ExportJobScalarFieldEnum]


  export const ExportAuditScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    siteId: 'siteId',
    userId: 'userId',
    module: 'module',
    filtersJson: 'filtersJson',
    columnPreset: 'columnPreset',
    recordCount: 'recordCount',
    fileSize: 'fileSize',
    fileHash: 'fileHash',
    downloadCount: 'downloadCount',
    lastDownload: 'lastDownload',
    createdAt: 'createdAt'
  };

  export type ExportAuditScalarFieldEnum = (typeof ExportAuditScalarFieldEnum)[keyof typeof ExportAuditScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SiteWhereInput = {
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    id?: StringFilter<"Site"> | string
    code?: StringFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    location?: StringNullableFilter<"Site"> | string | null
    timezone?: StringFilter<"Site"> | string
    isActive?: BoolFilter<"Site"> | boolean
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    productions?: ProductionListRelationFilter
    dispatches?: DispatchListRelationFilter
    receivedMaterials?: ReceivedMaterialListRelationFilter
    equipmentLogs?: EquipmentLogListRelationFilter
    manpowerLogs?: ManpowerLogListRelationFilter
    inventorySnapshots?: InventorySnapshotListRelationFilter
    exportJobs?: ExportJobListRelationFilter
    exportAudits?: ExportAuditListRelationFilter
  }

  export type SiteOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    timezone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productions?: ProductionOrderByRelationAggregateInput
    dispatches?: DispatchOrderByRelationAggregateInput
    receivedMaterials?: ReceivedMaterialOrderByRelationAggregateInput
    equipmentLogs?: EquipmentLogOrderByRelationAggregateInput
    manpowerLogs?: ManpowerLogOrderByRelationAggregateInput
    inventorySnapshots?: InventorySnapshotOrderByRelationAggregateInput
    exportJobs?: ExportJobOrderByRelationAggregateInput
    exportAudits?: ExportAuditOrderByRelationAggregateInput
  }

  export type SiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    name?: StringFilter<"Site"> | string
    location?: StringNullableFilter<"Site"> | string | null
    timezone?: StringFilter<"Site"> | string
    isActive?: BoolFilter<"Site"> | boolean
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    productions?: ProductionListRelationFilter
    dispatches?: DispatchListRelationFilter
    receivedMaterials?: ReceivedMaterialListRelationFilter
    equipmentLogs?: EquipmentLogListRelationFilter
    manpowerLogs?: ManpowerLogListRelationFilter
    inventorySnapshots?: InventorySnapshotListRelationFilter
    exportJobs?: ExportJobListRelationFilter
    exportAudits?: ExportAuditListRelationFilter
  }, "id" | "code">

  export type SiteOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    timezone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteCountOrderByAggregateInput
    _max?: SiteMaxOrderByAggregateInput
    _min?: SiteMinOrderByAggregateInput
  }

  export type SiteScalarWhereWithAggregatesInput = {
    AND?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    OR?: SiteScalarWhereWithAggregatesInput[]
    NOT?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Site"> | string
    code?: StringWithAggregatesFilter<"Site"> | string
    name?: StringWithAggregatesFilter<"Site"> | string
    location?: StringNullableWithAggregatesFilter<"Site"> | string | null
    timezone?: StringWithAggregatesFilter<"Site"> | string
    isActive?: BoolWithAggregatesFilter<"Site"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: StringFilter<"Material"> | string
    code?: StringFilter<"Material"> | string
    type?: StringFilter<"Material"> | string
    name?: StringFilter<"Material"> | string
    category?: StringFilter<"Material"> | string
    uom?: StringFilter<"Material"> | string
    isFinal?: BoolFilter<"Material"> | boolean
    notes?: StringNullableFilter<"Material"> | string | null
    isActive?: BoolFilter<"Material"> | boolean
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
    productions?: ProductionListRelationFilter
    dispatches?: DispatchListRelationFilter
    receivedMaterials?: ReceivedMaterialListRelationFilter
    inventorySnapshots?: InventorySnapshotListRelationFilter
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    name?: SortOrder
    category?: SortOrder
    uom?: SortOrder
    isFinal?: SortOrder
    notes?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productions?: ProductionOrderByRelationAggregateInput
    dispatches?: DispatchOrderByRelationAggregateInput
    receivedMaterials?: ReceivedMaterialOrderByRelationAggregateInput
    inventorySnapshots?: InventorySnapshotOrderByRelationAggregateInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    type?: StringFilter<"Material"> | string
    name?: StringFilter<"Material"> | string
    category?: StringFilter<"Material"> | string
    uom?: StringFilter<"Material"> | string
    isFinal?: BoolFilter<"Material"> | boolean
    notes?: StringNullableFilter<"Material"> | string | null
    isActive?: BoolFilter<"Material"> | boolean
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
    productions?: ProductionListRelationFilter
    dispatches?: DispatchListRelationFilter
    receivedMaterials?: ReceivedMaterialListRelationFilter
    inventorySnapshots?: InventorySnapshotListRelationFilter
  }, "id" | "code">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    name?: SortOrder
    category?: SortOrder
    uom?: SortOrder
    isFinal?: SortOrder
    notes?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Material"> | string
    code?: StringWithAggregatesFilter<"Material"> | string
    type?: StringWithAggregatesFilter<"Material"> | string
    name?: StringWithAggregatesFilter<"Material"> | string
    category?: StringWithAggregatesFilter<"Material"> | string
    uom?: StringWithAggregatesFilter<"Material"> | string
    isFinal?: BoolWithAggregatesFilter<"Material"> | boolean
    notes?: StringNullableWithAggregatesFilter<"Material"> | string | null
    isActive?: BoolWithAggregatesFilter<"Material"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
  }

  export type EquipmentWhereInput = {
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    id?: StringFilter<"Equipment"> | string
    code?: StringFilter<"Equipment"> | string
    name?: StringFilter<"Equipment"> | string
    type?: StringFilter<"Equipment"> | string
    isActive?: BoolFilter<"Equipment"> | boolean
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
    equipmentLogs?: EquipmentLogListRelationFilter
  }

  export type EquipmentOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    equipmentLogs?: EquipmentLogOrderByRelationAggregateInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    name?: StringFilter<"Equipment"> | string
    type?: StringFilter<"Equipment"> | string
    isActive?: BoolFilter<"Equipment"> | boolean
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
    equipmentLogs?: EquipmentLogListRelationFilter
  }, "id" | "code">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    OR?: EquipmentScalarWhereWithAggregatesInput[]
    NOT?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Equipment"> | string
    code?: StringWithAggregatesFilter<"Equipment"> | string
    name?: StringWithAggregatesFilter<"Equipment"> | string
    type?: StringWithAggregatesFilter<"Equipment"> | string
    isActive?: BoolWithAggregatesFilter<"Equipment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
  }

  export type ManpowerRoleWhereInput = {
    AND?: ManpowerRoleWhereInput | ManpowerRoleWhereInput[]
    OR?: ManpowerRoleWhereInput[]
    NOT?: ManpowerRoleWhereInput | ManpowerRoleWhereInput[]
    id?: StringFilter<"ManpowerRole"> | string
    code?: StringFilter<"ManpowerRole"> | string
    name?: StringFilter<"ManpowerRole"> | string
    isActive?: BoolFilter<"ManpowerRole"> | boolean
    createdAt?: DateTimeFilter<"ManpowerRole"> | Date | string
    updatedAt?: DateTimeFilter<"ManpowerRole"> | Date | string
    manpowerLogs?: ManpowerLogListRelationFilter
  }

  export type ManpowerRoleOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    manpowerLogs?: ManpowerLogOrderByRelationAggregateInput
  }

  export type ManpowerRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ManpowerRoleWhereInput | ManpowerRoleWhereInput[]
    OR?: ManpowerRoleWhereInput[]
    NOT?: ManpowerRoleWhereInput | ManpowerRoleWhereInput[]
    name?: StringFilter<"ManpowerRole"> | string
    isActive?: BoolFilter<"ManpowerRole"> | boolean
    createdAt?: DateTimeFilter<"ManpowerRole"> | Date | string
    updatedAt?: DateTimeFilter<"ManpowerRole"> | Date | string
    manpowerLogs?: ManpowerLogListRelationFilter
  }, "id" | "code">

  export type ManpowerRoleOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ManpowerRoleCountOrderByAggregateInput
    _max?: ManpowerRoleMaxOrderByAggregateInput
    _min?: ManpowerRoleMinOrderByAggregateInput
  }

  export type ManpowerRoleScalarWhereWithAggregatesInput = {
    AND?: ManpowerRoleScalarWhereWithAggregatesInput | ManpowerRoleScalarWhereWithAggregatesInput[]
    OR?: ManpowerRoleScalarWhereWithAggregatesInput[]
    NOT?: ManpowerRoleScalarWhereWithAggregatesInput | ManpowerRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ManpowerRole"> | string
    code?: StringWithAggregatesFilter<"ManpowerRole"> | string
    name?: StringWithAggregatesFilter<"ManpowerRole"> | string
    isActive?: BoolWithAggregatesFilter<"ManpowerRole"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ManpowerRole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ManpowerRole"> | Date | string
  }

  export type ProductionWhereInput = {
    AND?: ProductionWhereInput | ProductionWhereInput[]
    OR?: ProductionWhereInput[]
    NOT?: ProductionWhereInput | ProductionWhereInput[]
    id?: StringFilter<"Production"> | string
    siteId?: StringFilter<"Production"> | string
    date?: DateTimeFilter<"Production"> | Date | string
    shift?: StringNullableFilter<"Production"> | string | null
    materialId?: StringFilter<"Production"> | string
    qtyTon?: DecimalFilter<"Production"> | Decimal | DecimalJsLike | number | string
    operation?: StringFilter<"Production"> | string
    notes?: StringNullableFilter<"Production"> | string | null
    createdAt?: DateTimeFilter<"Production"> | Date | string
    updatedAt?: DateTimeFilter<"Production"> | Date | string
    createdBy?: StringNullableFilter<"Production"> | string | null
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }

  export type ProductionOrderByWithRelationInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    shift?: SortOrderInput | SortOrder
    materialId?: SortOrder
    qtyTon?: SortOrder
    operation?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    site?: SiteOrderByWithRelationInput
    material?: MaterialOrderByWithRelationInput
  }

  export type ProductionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    siteId_date_materialId_operation?: ProductionSiteIdDateMaterialIdOperationCompoundUniqueInput
    AND?: ProductionWhereInput | ProductionWhereInput[]
    OR?: ProductionWhereInput[]
    NOT?: ProductionWhereInput | ProductionWhereInput[]
    siteId?: StringFilter<"Production"> | string
    date?: DateTimeFilter<"Production"> | Date | string
    shift?: StringNullableFilter<"Production"> | string | null
    materialId?: StringFilter<"Production"> | string
    qtyTon?: DecimalFilter<"Production"> | Decimal | DecimalJsLike | number | string
    operation?: StringFilter<"Production"> | string
    notes?: StringNullableFilter<"Production"> | string | null
    createdAt?: DateTimeFilter<"Production"> | Date | string
    updatedAt?: DateTimeFilter<"Production"> | Date | string
    createdBy?: StringNullableFilter<"Production"> | string | null
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }, "id" | "siteId_date_materialId_operation">

  export type ProductionOrderByWithAggregationInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    shift?: SortOrderInput | SortOrder
    materialId?: SortOrder
    qtyTon?: SortOrder
    operation?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: ProductionCountOrderByAggregateInput
    _avg?: ProductionAvgOrderByAggregateInput
    _max?: ProductionMaxOrderByAggregateInput
    _min?: ProductionMinOrderByAggregateInput
    _sum?: ProductionSumOrderByAggregateInput
  }

  export type ProductionScalarWhereWithAggregatesInput = {
    AND?: ProductionScalarWhereWithAggregatesInput | ProductionScalarWhereWithAggregatesInput[]
    OR?: ProductionScalarWhereWithAggregatesInput[]
    NOT?: ProductionScalarWhereWithAggregatesInput | ProductionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Production"> | string
    siteId?: StringWithAggregatesFilter<"Production"> | string
    date?: DateTimeWithAggregatesFilter<"Production"> | Date | string
    shift?: StringNullableWithAggregatesFilter<"Production"> | string | null
    materialId?: StringWithAggregatesFilter<"Production"> | string
    qtyTon?: DecimalWithAggregatesFilter<"Production"> | Decimal | DecimalJsLike | number | string
    operation?: StringWithAggregatesFilter<"Production"> | string
    notes?: StringNullableWithAggregatesFilter<"Production"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Production"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Production"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"Production"> | string | null
  }

  export type DispatchWhereInput = {
    AND?: DispatchWhereInput | DispatchWhereInput[]
    OR?: DispatchWhereInput[]
    NOT?: DispatchWhereInput | DispatchWhereInput[]
    id?: StringFilter<"Dispatch"> | string
    siteId?: StringFilter<"Dispatch"> | string
    date?: DateTimeFilter<"Dispatch"> | Date | string
    materialId?: StringFilter<"Dispatch"> | string
    qtyTon?: DecimalFilter<"Dispatch"> | Decimal | DecimalJsLike | number | string
    trips?: IntNullableFilter<"Dispatch"> | number | null
    owner?: StringNullableFilter<"Dispatch"> | string | null
    reference?: StringNullableFilter<"Dispatch"> | string | null
    operation?: StringFilter<"Dispatch"> | string
    notes?: StringNullableFilter<"Dispatch"> | string | null
    createdAt?: DateTimeFilter<"Dispatch"> | Date | string
    updatedAt?: DateTimeFilter<"Dispatch"> | Date | string
    createdBy?: StringNullableFilter<"Dispatch"> | string | null
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }

  export type DispatchOrderByWithRelationInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    materialId?: SortOrder
    qtyTon?: SortOrder
    trips?: SortOrderInput | SortOrder
    owner?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    operation?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    site?: SiteOrderByWithRelationInput
    material?: MaterialOrderByWithRelationInput
  }

  export type DispatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DispatchWhereInput | DispatchWhereInput[]
    OR?: DispatchWhereInput[]
    NOT?: DispatchWhereInput | DispatchWhereInput[]
    siteId?: StringFilter<"Dispatch"> | string
    date?: DateTimeFilter<"Dispatch"> | Date | string
    materialId?: StringFilter<"Dispatch"> | string
    qtyTon?: DecimalFilter<"Dispatch"> | Decimal | DecimalJsLike | number | string
    trips?: IntNullableFilter<"Dispatch"> | number | null
    owner?: StringNullableFilter<"Dispatch"> | string | null
    reference?: StringNullableFilter<"Dispatch"> | string | null
    operation?: StringFilter<"Dispatch"> | string
    notes?: StringNullableFilter<"Dispatch"> | string | null
    createdAt?: DateTimeFilter<"Dispatch"> | Date | string
    updatedAt?: DateTimeFilter<"Dispatch"> | Date | string
    createdBy?: StringNullableFilter<"Dispatch"> | string | null
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }, "id">

  export type DispatchOrderByWithAggregationInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    materialId?: SortOrder
    qtyTon?: SortOrder
    trips?: SortOrderInput | SortOrder
    owner?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    operation?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: DispatchCountOrderByAggregateInput
    _avg?: DispatchAvgOrderByAggregateInput
    _max?: DispatchMaxOrderByAggregateInput
    _min?: DispatchMinOrderByAggregateInput
    _sum?: DispatchSumOrderByAggregateInput
  }

  export type DispatchScalarWhereWithAggregatesInput = {
    AND?: DispatchScalarWhereWithAggregatesInput | DispatchScalarWhereWithAggregatesInput[]
    OR?: DispatchScalarWhereWithAggregatesInput[]
    NOT?: DispatchScalarWhereWithAggregatesInput | DispatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dispatch"> | string
    siteId?: StringWithAggregatesFilter<"Dispatch"> | string
    date?: DateTimeWithAggregatesFilter<"Dispatch"> | Date | string
    materialId?: StringWithAggregatesFilter<"Dispatch"> | string
    qtyTon?: DecimalWithAggregatesFilter<"Dispatch"> | Decimal | DecimalJsLike | number | string
    trips?: IntNullableWithAggregatesFilter<"Dispatch"> | number | null
    owner?: StringNullableWithAggregatesFilter<"Dispatch"> | string | null
    reference?: StringNullableWithAggregatesFilter<"Dispatch"> | string | null
    operation?: StringWithAggregatesFilter<"Dispatch"> | string
    notes?: StringNullableWithAggregatesFilter<"Dispatch"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dispatch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dispatch"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"Dispatch"> | string | null
  }

  export type ReceivedMaterialWhereInput = {
    AND?: ReceivedMaterialWhereInput | ReceivedMaterialWhereInput[]
    OR?: ReceivedMaterialWhereInput[]
    NOT?: ReceivedMaterialWhereInput | ReceivedMaterialWhereInput[]
    id?: StringFilter<"ReceivedMaterial"> | string
    siteId?: StringFilter<"ReceivedMaterial"> | string
    date?: DateTimeFilter<"ReceivedMaterial"> | Date | string
    materialId?: StringFilter<"ReceivedMaterial"> | string
    qtyTon?: DecimalFilter<"ReceivedMaterial"> | Decimal | DecimalJsLike | number | string
    source?: StringNullableFilter<"ReceivedMaterial"> | string | null
    vehicleRef?: StringNullableFilter<"ReceivedMaterial"> | string | null
    notes?: StringNullableFilter<"ReceivedMaterial"> | string | null
    createdAt?: DateTimeFilter<"ReceivedMaterial"> | Date | string
    updatedAt?: DateTimeFilter<"ReceivedMaterial"> | Date | string
    createdBy?: StringNullableFilter<"ReceivedMaterial"> | string | null
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }

  export type ReceivedMaterialOrderByWithRelationInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    materialId?: SortOrder
    qtyTon?: SortOrder
    source?: SortOrderInput | SortOrder
    vehicleRef?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    site?: SiteOrderByWithRelationInput
    material?: MaterialOrderByWithRelationInput
  }

  export type ReceivedMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReceivedMaterialWhereInput | ReceivedMaterialWhereInput[]
    OR?: ReceivedMaterialWhereInput[]
    NOT?: ReceivedMaterialWhereInput | ReceivedMaterialWhereInput[]
    siteId?: StringFilter<"ReceivedMaterial"> | string
    date?: DateTimeFilter<"ReceivedMaterial"> | Date | string
    materialId?: StringFilter<"ReceivedMaterial"> | string
    qtyTon?: DecimalFilter<"ReceivedMaterial"> | Decimal | DecimalJsLike | number | string
    source?: StringNullableFilter<"ReceivedMaterial"> | string | null
    vehicleRef?: StringNullableFilter<"ReceivedMaterial"> | string | null
    notes?: StringNullableFilter<"ReceivedMaterial"> | string | null
    createdAt?: DateTimeFilter<"ReceivedMaterial"> | Date | string
    updatedAt?: DateTimeFilter<"ReceivedMaterial"> | Date | string
    createdBy?: StringNullableFilter<"ReceivedMaterial"> | string | null
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }, "id">

  export type ReceivedMaterialOrderByWithAggregationInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    materialId?: SortOrder
    qtyTon?: SortOrder
    source?: SortOrderInput | SortOrder
    vehicleRef?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: ReceivedMaterialCountOrderByAggregateInput
    _avg?: ReceivedMaterialAvgOrderByAggregateInput
    _max?: ReceivedMaterialMaxOrderByAggregateInput
    _min?: ReceivedMaterialMinOrderByAggregateInput
    _sum?: ReceivedMaterialSumOrderByAggregateInput
  }

  export type ReceivedMaterialScalarWhereWithAggregatesInput = {
    AND?: ReceivedMaterialScalarWhereWithAggregatesInput | ReceivedMaterialScalarWhereWithAggregatesInput[]
    OR?: ReceivedMaterialScalarWhereWithAggregatesInput[]
    NOT?: ReceivedMaterialScalarWhereWithAggregatesInput | ReceivedMaterialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReceivedMaterial"> | string
    siteId?: StringWithAggregatesFilter<"ReceivedMaterial"> | string
    date?: DateTimeWithAggregatesFilter<"ReceivedMaterial"> | Date | string
    materialId?: StringWithAggregatesFilter<"ReceivedMaterial"> | string
    qtyTon?: DecimalWithAggregatesFilter<"ReceivedMaterial"> | Decimal | DecimalJsLike | number | string
    source?: StringNullableWithAggregatesFilter<"ReceivedMaterial"> | string | null
    vehicleRef?: StringNullableWithAggregatesFilter<"ReceivedMaterial"> | string | null
    notes?: StringNullableWithAggregatesFilter<"ReceivedMaterial"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReceivedMaterial"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReceivedMaterial"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"ReceivedMaterial"> | string | null
  }

  export type EquipmentLogWhereInput = {
    AND?: EquipmentLogWhereInput | EquipmentLogWhereInput[]
    OR?: EquipmentLogWhereInput[]
    NOT?: EquipmentLogWhereInput | EquipmentLogWhereInput[]
    id?: StringFilter<"EquipmentLog"> | string
    siteId?: StringFilter<"EquipmentLog"> | string
    date?: DateTimeFilter<"EquipmentLog"> | Date | string
    equipmentId?: StringFilter<"EquipmentLog"> | string
    hours?: DecimalFilter<"EquipmentLog"> | Decimal | DecimalJsLike | number | string
    count?: IntFilter<"EquipmentLog"> | number
    shift?: StringNullableFilter<"EquipmentLog"> | string | null
    status?: StringNullableFilter<"EquipmentLog"> | string | null
    notes?: StringNullableFilter<"EquipmentLog"> | string | null
    createdAt?: DateTimeFilter<"EquipmentLog"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentLog"> | Date | string
    createdBy?: StringNullableFilter<"EquipmentLog"> | string | null
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
  }

  export type EquipmentLogOrderByWithRelationInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    equipmentId?: SortOrder
    hours?: SortOrder
    count?: SortOrder
    shift?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    site?: SiteOrderByWithRelationInput
    equipment?: EquipmentOrderByWithRelationInput
  }

  export type EquipmentLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    siteId_date_equipmentId_shift?: EquipmentLogSiteIdDateEquipmentIdShiftCompoundUniqueInput
    AND?: EquipmentLogWhereInput | EquipmentLogWhereInput[]
    OR?: EquipmentLogWhereInput[]
    NOT?: EquipmentLogWhereInput | EquipmentLogWhereInput[]
    siteId?: StringFilter<"EquipmentLog"> | string
    date?: DateTimeFilter<"EquipmentLog"> | Date | string
    equipmentId?: StringFilter<"EquipmentLog"> | string
    hours?: DecimalFilter<"EquipmentLog"> | Decimal | DecimalJsLike | number | string
    count?: IntFilter<"EquipmentLog"> | number
    shift?: StringNullableFilter<"EquipmentLog"> | string | null
    status?: StringNullableFilter<"EquipmentLog"> | string | null
    notes?: StringNullableFilter<"EquipmentLog"> | string | null
    createdAt?: DateTimeFilter<"EquipmentLog"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentLog"> | Date | string
    createdBy?: StringNullableFilter<"EquipmentLog"> | string | null
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
  }, "id" | "siteId_date_equipmentId_shift">

  export type EquipmentLogOrderByWithAggregationInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    equipmentId?: SortOrder
    hours?: SortOrder
    count?: SortOrder
    shift?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: EquipmentLogCountOrderByAggregateInput
    _avg?: EquipmentLogAvgOrderByAggregateInput
    _max?: EquipmentLogMaxOrderByAggregateInput
    _min?: EquipmentLogMinOrderByAggregateInput
    _sum?: EquipmentLogSumOrderByAggregateInput
  }

  export type EquipmentLogScalarWhereWithAggregatesInput = {
    AND?: EquipmentLogScalarWhereWithAggregatesInput | EquipmentLogScalarWhereWithAggregatesInput[]
    OR?: EquipmentLogScalarWhereWithAggregatesInput[]
    NOT?: EquipmentLogScalarWhereWithAggregatesInput | EquipmentLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EquipmentLog"> | string
    siteId?: StringWithAggregatesFilter<"EquipmentLog"> | string
    date?: DateTimeWithAggregatesFilter<"EquipmentLog"> | Date | string
    equipmentId?: StringWithAggregatesFilter<"EquipmentLog"> | string
    hours?: DecimalWithAggregatesFilter<"EquipmentLog"> | Decimal | DecimalJsLike | number | string
    count?: IntWithAggregatesFilter<"EquipmentLog"> | number
    shift?: StringNullableWithAggregatesFilter<"EquipmentLog"> | string | null
    status?: StringNullableWithAggregatesFilter<"EquipmentLog"> | string | null
    notes?: StringNullableWithAggregatesFilter<"EquipmentLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EquipmentLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EquipmentLog"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"EquipmentLog"> | string | null
  }

  export type ManpowerLogWhereInput = {
    AND?: ManpowerLogWhereInput | ManpowerLogWhereInput[]
    OR?: ManpowerLogWhereInput[]
    NOT?: ManpowerLogWhereInput | ManpowerLogWhereInput[]
    id?: StringFilter<"ManpowerLog"> | string
    siteId?: StringFilter<"ManpowerLog"> | string
    date?: DateTimeFilter<"ManpowerLog"> | Date | string
    roleId?: StringFilter<"ManpowerLog"> | string
    headcount?: IntFilter<"ManpowerLog"> | number
    hours?: DecimalFilter<"ManpowerLog"> | Decimal | DecimalJsLike | number | string
    shift?: StringNullableFilter<"ManpowerLog"> | string | null
    notes?: StringNullableFilter<"ManpowerLog"> | string | null
    createdAt?: DateTimeFilter<"ManpowerLog"> | Date | string
    updatedAt?: DateTimeFilter<"ManpowerLog"> | Date | string
    createdBy?: StringNullableFilter<"ManpowerLog"> | string | null
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    role?: XOR<ManpowerRoleScalarRelationFilter, ManpowerRoleWhereInput>
  }

  export type ManpowerLogOrderByWithRelationInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    roleId?: SortOrder
    headcount?: SortOrder
    hours?: SortOrder
    shift?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    site?: SiteOrderByWithRelationInput
    role?: ManpowerRoleOrderByWithRelationInput
  }

  export type ManpowerLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    siteId_date_roleId_shift?: ManpowerLogSiteIdDateRoleIdShiftCompoundUniqueInput
    AND?: ManpowerLogWhereInput | ManpowerLogWhereInput[]
    OR?: ManpowerLogWhereInput[]
    NOT?: ManpowerLogWhereInput | ManpowerLogWhereInput[]
    siteId?: StringFilter<"ManpowerLog"> | string
    date?: DateTimeFilter<"ManpowerLog"> | Date | string
    roleId?: StringFilter<"ManpowerLog"> | string
    headcount?: IntFilter<"ManpowerLog"> | number
    hours?: DecimalFilter<"ManpowerLog"> | Decimal | DecimalJsLike | number | string
    shift?: StringNullableFilter<"ManpowerLog"> | string | null
    notes?: StringNullableFilter<"ManpowerLog"> | string | null
    createdAt?: DateTimeFilter<"ManpowerLog"> | Date | string
    updatedAt?: DateTimeFilter<"ManpowerLog"> | Date | string
    createdBy?: StringNullableFilter<"ManpowerLog"> | string | null
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    role?: XOR<ManpowerRoleScalarRelationFilter, ManpowerRoleWhereInput>
  }, "id" | "siteId_date_roleId_shift">

  export type ManpowerLogOrderByWithAggregationInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    roleId?: SortOrder
    headcount?: SortOrder
    hours?: SortOrder
    shift?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: ManpowerLogCountOrderByAggregateInput
    _avg?: ManpowerLogAvgOrderByAggregateInput
    _max?: ManpowerLogMaxOrderByAggregateInput
    _min?: ManpowerLogMinOrderByAggregateInput
    _sum?: ManpowerLogSumOrderByAggregateInput
  }

  export type ManpowerLogScalarWhereWithAggregatesInput = {
    AND?: ManpowerLogScalarWhereWithAggregatesInput | ManpowerLogScalarWhereWithAggregatesInput[]
    OR?: ManpowerLogScalarWhereWithAggregatesInput[]
    NOT?: ManpowerLogScalarWhereWithAggregatesInput | ManpowerLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ManpowerLog"> | string
    siteId?: StringWithAggregatesFilter<"ManpowerLog"> | string
    date?: DateTimeWithAggregatesFilter<"ManpowerLog"> | Date | string
    roleId?: StringWithAggregatesFilter<"ManpowerLog"> | string
    headcount?: IntWithAggregatesFilter<"ManpowerLog"> | number
    hours?: DecimalWithAggregatesFilter<"ManpowerLog"> | Decimal | DecimalJsLike | number | string
    shift?: StringNullableWithAggregatesFilter<"ManpowerLog"> | string | null
    notes?: StringNullableWithAggregatesFilter<"ManpowerLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ManpowerLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ManpowerLog"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"ManpowerLog"> | string | null
  }

  export type InventorySnapshotWhereInput = {
    AND?: InventorySnapshotWhereInput | InventorySnapshotWhereInput[]
    OR?: InventorySnapshotWhereInput[]
    NOT?: InventorySnapshotWhereInput | InventorySnapshotWhereInput[]
    id?: StringFilter<"InventorySnapshot"> | string
    siteId?: StringFilter<"InventorySnapshot"> | string
    date?: DateTimeFilter<"InventorySnapshot"> | Date | string
    materialId?: StringFilter<"InventorySnapshot"> | string
    openingTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    producedTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    receivedTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    dispatchedTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    adjustmentTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    closingTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    isCalculated?: BoolFilter<"InventorySnapshot"> | boolean
    createdAt?: DateTimeFilter<"InventorySnapshot"> | Date | string
    updatedAt?: DateTimeFilter<"InventorySnapshot"> | Date | string
    createdBy?: StringNullableFilter<"InventorySnapshot"> | string | null
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }

  export type InventorySnapshotOrderByWithRelationInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    materialId?: SortOrder
    openingTon?: SortOrder
    producedTon?: SortOrder
    receivedTon?: SortOrder
    dispatchedTon?: SortOrder
    adjustmentTon?: SortOrder
    closingTon?: SortOrder
    isCalculated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    site?: SiteOrderByWithRelationInput
    material?: MaterialOrderByWithRelationInput
  }

  export type InventorySnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    siteId_date_materialId?: InventorySnapshotSiteIdDateMaterialIdCompoundUniqueInput
    AND?: InventorySnapshotWhereInput | InventorySnapshotWhereInput[]
    OR?: InventorySnapshotWhereInput[]
    NOT?: InventorySnapshotWhereInput | InventorySnapshotWhereInput[]
    siteId?: StringFilter<"InventorySnapshot"> | string
    date?: DateTimeFilter<"InventorySnapshot"> | Date | string
    materialId?: StringFilter<"InventorySnapshot"> | string
    openingTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    producedTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    receivedTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    dispatchedTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    adjustmentTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    closingTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    isCalculated?: BoolFilter<"InventorySnapshot"> | boolean
    createdAt?: DateTimeFilter<"InventorySnapshot"> | Date | string
    updatedAt?: DateTimeFilter<"InventorySnapshot"> | Date | string
    createdBy?: StringNullableFilter<"InventorySnapshot"> | string | null
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }, "id" | "siteId_date_materialId">

  export type InventorySnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    materialId?: SortOrder
    openingTon?: SortOrder
    producedTon?: SortOrder
    receivedTon?: SortOrder
    dispatchedTon?: SortOrder
    adjustmentTon?: SortOrder
    closingTon?: SortOrder
    isCalculated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: InventorySnapshotCountOrderByAggregateInput
    _avg?: InventorySnapshotAvgOrderByAggregateInput
    _max?: InventorySnapshotMaxOrderByAggregateInput
    _min?: InventorySnapshotMinOrderByAggregateInput
    _sum?: InventorySnapshotSumOrderByAggregateInput
  }

  export type InventorySnapshotScalarWhereWithAggregatesInput = {
    AND?: InventorySnapshotScalarWhereWithAggregatesInput | InventorySnapshotScalarWhereWithAggregatesInput[]
    OR?: InventorySnapshotScalarWhereWithAggregatesInput[]
    NOT?: InventorySnapshotScalarWhereWithAggregatesInput | InventorySnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventorySnapshot"> | string
    siteId?: StringWithAggregatesFilter<"InventorySnapshot"> | string
    date?: DateTimeWithAggregatesFilter<"InventorySnapshot"> | Date | string
    materialId?: StringWithAggregatesFilter<"InventorySnapshot"> | string
    openingTon?: DecimalWithAggregatesFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    producedTon?: DecimalWithAggregatesFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    receivedTon?: DecimalWithAggregatesFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    dispatchedTon?: DecimalWithAggregatesFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    adjustmentTon?: DecimalWithAggregatesFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    closingTon?: DecimalWithAggregatesFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    isCalculated?: BoolWithAggregatesFilter<"InventorySnapshot"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"InventorySnapshot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InventorySnapshot"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"InventorySnapshot"> | string | null
  }

  export type ExportJobWhereInput = {
    AND?: ExportJobWhereInput | ExportJobWhereInput[]
    OR?: ExportJobWhereInput[]
    NOT?: ExportJobWhereInput | ExportJobWhereInput[]
    id?: StringFilter<"ExportJob"> | string
    siteId?: StringFilter<"ExportJob"> | string
    userId?: StringFilter<"ExportJob"> | string
    module?: StringFilter<"ExportJob"> | string
    dateFrom?: DateTimeFilter<"ExportJob"> | Date | string
    dateTo?: DateTimeFilter<"ExportJob"> | Date | string
    granularity?: StringFilter<"ExportJob"> | string
    format?: StringFilter<"ExportJob"> | string
    status?: StringFilter<"ExportJob"> | string
    progress?: IntFilter<"ExportJob"> | number
    filePath?: StringNullableFilter<"ExportJob"> | string | null
    fileSize?: IntNullableFilter<"ExportJob"> | number | null
    fileHash?: StringNullableFilter<"ExportJob"> | string | null
    errorMessage?: StringNullableFilter<"ExportJob"> | string | null
    downloadUrl?: StringNullableFilter<"ExportJob"> | string | null
    expiresAt?: DateTimeNullableFilter<"ExportJob"> | Date | string | null
    createdAt?: DateTimeFilter<"ExportJob"> | Date | string
    updatedAt?: DateTimeFilter<"ExportJob"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    exportAudit?: XOR<ExportAuditNullableScalarRelationFilter, ExportAuditWhereInput> | null
  }

  export type ExportJobOrderByWithRelationInput = {
    id?: SortOrder
    siteId?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    granularity?: SortOrder
    format?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    filePath?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    fileHash?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    downloadUrl?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    site?: SiteOrderByWithRelationInput
    exportAudit?: ExportAuditOrderByWithRelationInput
  }

  export type ExportJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExportJobWhereInput | ExportJobWhereInput[]
    OR?: ExportJobWhereInput[]
    NOT?: ExportJobWhereInput | ExportJobWhereInput[]
    siteId?: StringFilter<"ExportJob"> | string
    userId?: StringFilter<"ExportJob"> | string
    module?: StringFilter<"ExportJob"> | string
    dateFrom?: DateTimeFilter<"ExportJob"> | Date | string
    dateTo?: DateTimeFilter<"ExportJob"> | Date | string
    granularity?: StringFilter<"ExportJob"> | string
    format?: StringFilter<"ExportJob"> | string
    status?: StringFilter<"ExportJob"> | string
    progress?: IntFilter<"ExportJob"> | number
    filePath?: StringNullableFilter<"ExportJob"> | string | null
    fileSize?: IntNullableFilter<"ExportJob"> | number | null
    fileHash?: StringNullableFilter<"ExportJob"> | string | null
    errorMessage?: StringNullableFilter<"ExportJob"> | string | null
    downloadUrl?: StringNullableFilter<"ExportJob"> | string | null
    expiresAt?: DateTimeNullableFilter<"ExportJob"> | Date | string | null
    createdAt?: DateTimeFilter<"ExportJob"> | Date | string
    updatedAt?: DateTimeFilter<"ExportJob"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    exportAudit?: XOR<ExportAuditNullableScalarRelationFilter, ExportAuditWhereInput> | null
  }, "id">

  export type ExportJobOrderByWithAggregationInput = {
    id?: SortOrder
    siteId?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    granularity?: SortOrder
    format?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    filePath?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    fileHash?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    downloadUrl?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExportJobCountOrderByAggregateInput
    _avg?: ExportJobAvgOrderByAggregateInput
    _max?: ExportJobMaxOrderByAggregateInput
    _min?: ExportJobMinOrderByAggregateInput
    _sum?: ExportJobSumOrderByAggregateInput
  }

  export type ExportJobScalarWhereWithAggregatesInput = {
    AND?: ExportJobScalarWhereWithAggregatesInput | ExportJobScalarWhereWithAggregatesInput[]
    OR?: ExportJobScalarWhereWithAggregatesInput[]
    NOT?: ExportJobScalarWhereWithAggregatesInput | ExportJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExportJob"> | string
    siteId?: StringWithAggregatesFilter<"ExportJob"> | string
    userId?: StringWithAggregatesFilter<"ExportJob"> | string
    module?: StringWithAggregatesFilter<"ExportJob"> | string
    dateFrom?: DateTimeWithAggregatesFilter<"ExportJob"> | Date | string
    dateTo?: DateTimeWithAggregatesFilter<"ExportJob"> | Date | string
    granularity?: StringWithAggregatesFilter<"ExportJob"> | string
    format?: StringWithAggregatesFilter<"ExportJob"> | string
    status?: StringWithAggregatesFilter<"ExportJob"> | string
    progress?: IntWithAggregatesFilter<"ExportJob"> | number
    filePath?: StringNullableWithAggregatesFilter<"ExportJob"> | string | null
    fileSize?: IntNullableWithAggregatesFilter<"ExportJob"> | number | null
    fileHash?: StringNullableWithAggregatesFilter<"ExportJob"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"ExportJob"> | string | null
    downloadUrl?: StringNullableWithAggregatesFilter<"ExportJob"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ExportJob"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ExportJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExportJob"> | Date | string
  }

  export type ExportAuditWhereInput = {
    AND?: ExportAuditWhereInput | ExportAuditWhereInput[]
    OR?: ExportAuditWhereInput[]
    NOT?: ExportAuditWhereInput | ExportAuditWhereInput[]
    id?: StringFilter<"ExportAudit"> | string
    jobId?: StringFilter<"ExportAudit"> | string
    siteId?: StringFilter<"ExportAudit"> | string
    userId?: StringFilter<"ExportAudit"> | string
    module?: StringFilter<"ExportAudit"> | string
    filtersJson?: StringFilter<"ExportAudit"> | string
    columnPreset?: StringNullableFilter<"ExportAudit"> | string | null
    recordCount?: IntFilter<"ExportAudit"> | number
    fileSize?: IntFilter<"ExportAudit"> | number
    fileHash?: StringFilter<"ExportAudit"> | string
    downloadCount?: IntFilter<"ExportAudit"> | number
    lastDownload?: DateTimeNullableFilter<"ExportAudit"> | Date | string | null
    createdAt?: DateTimeFilter<"ExportAudit"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    job?: XOR<ExportJobScalarRelationFilter, ExportJobWhereInput>
  }

  export type ExportAuditOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    siteId?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    filtersJson?: SortOrder
    columnPreset?: SortOrderInput | SortOrder
    recordCount?: SortOrder
    fileSize?: SortOrder
    fileHash?: SortOrder
    downloadCount?: SortOrder
    lastDownload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    site?: SiteOrderByWithRelationInput
    job?: ExportJobOrderByWithRelationInput
  }

  export type ExportAuditWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobId?: string
    AND?: ExportAuditWhereInput | ExportAuditWhereInput[]
    OR?: ExportAuditWhereInput[]
    NOT?: ExportAuditWhereInput | ExportAuditWhereInput[]
    siteId?: StringFilter<"ExportAudit"> | string
    userId?: StringFilter<"ExportAudit"> | string
    module?: StringFilter<"ExportAudit"> | string
    filtersJson?: StringFilter<"ExportAudit"> | string
    columnPreset?: StringNullableFilter<"ExportAudit"> | string | null
    recordCount?: IntFilter<"ExportAudit"> | number
    fileSize?: IntFilter<"ExportAudit"> | number
    fileHash?: StringFilter<"ExportAudit"> | string
    downloadCount?: IntFilter<"ExportAudit"> | number
    lastDownload?: DateTimeNullableFilter<"ExportAudit"> | Date | string | null
    createdAt?: DateTimeFilter<"ExportAudit"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    job?: XOR<ExportJobScalarRelationFilter, ExportJobWhereInput>
  }, "id" | "jobId">

  export type ExportAuditOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    siteId?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    filtersJson?: SortOrder
    columnPreset?: SortOrderInput | SortOrder
    recordCount?: SortOrder
    fileSize?: SortOrder
    fileHash?: SortOrder
    downloadCount?: SortOrder
    lastDownload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ExportAuditCountOrderByAggregateInput
    _avg?: ExportAuditAvgOrderByAggregateInput
    _max?: ExportAuditMaxOrderByAggregateInput
    _min?: ExportAuditMinOrderByAggregateInput
    _sum?: ExportAuditSumOrderByAggregateInput
  }

  export type ExportAuditScalarWhereWithAggregatesInput = {
    AND?: ExportAuditScalarWhereWithAggregatesInput | ExportAuditScalarWhereWithAggregatesInput[]
    OR?: ExportAuditScalarWhereWithAggregatesInput[]
    NOT?: ExportAuditScalarWhereWithAggregatesInput | ExportAuditScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExportAudit"> | string
    jobId?: StringWithAggregatesFilter<"ExportAudit"> | string
    siteId?: StringWithAggregatesFilter<"ExportAudit"> | string
    userId?: StringWithAggregatesFilter<"ExportAudit"> | string
    module?: StringWithAggregatesFilter<"ExportAudit"> | string
    filtersJson?: StringWithAggregatesFilter<"ExportAudit"> | string
    columnPreset?: StringNullableWithAggregatesFilter<"ExportAudit"> | string | null
    recordCount?: IntWithAggregatesFilter<"ExportAudit"> | number
    fileSize?: IntWithAggregatesFilter<"ExportAudit"> | number
    fileHash?: StringWithAggregatesFilter<"ExportAudit"> | string
    downloadCount?: IntWithAggregatesFilter<"ExportAudit"> | number
    lastDownload?: DateTimeNullableWithAggregatesFilter<"ExportAudit"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ExportAudit"> | Date | string
  }

  export type SiteCreateInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionCreateNestedManyWithoutSiteInput
    dispatches?: DispatchCreateNestedManyWithoutSiteInput
    receivedMaterials?: ReceivedMaterialCreateNestedManyWithoutSiteInput
    equipmentLogs?: EquipmentLogCreateNestedManyWithoutSiteInput
    manpowerLogs?: ManpowerLogCreateNestedManyWithoutSiteInput
    inventorySnapshots?: InventorySnapshotCreateNestedManyWithoutSiteInput
    exportJobs?: ExportJobCreateNestedManyWithoutSiteInput
    exportAudits?: ExportAuditCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionUncheckedCreateNestedManyWithoutSiteInput
    dispatches?: DispatchUncheckedCreateNestedManyWithoutSiteInput
    receivedMaterials?: ReceivedMaterialUncheckedCreateNestedManyWithoutSiteInput
    equipmentLogs?: EquipmentLogUncheckedCreateNestedManyWithoutSiteInput
    manpowerLogs?: ManpowerLogUncheckedCreateNestedManyWithoutSiteInput
    inventorySnapshots?: InventorySnapshotUncheckedCreateNestedManyWithoutSiteInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutSiteInput
    exportAudits?: ExportAuditUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUpdateManyWithoutSiteNestedInput
    dispatches?: DispatchUpdateManyWithoutSiteNestedInput
    receivedMaterials?: ReceivedMaterialUpdateManyWithoutSiteNestedInput
    equipmentLogs?: EquipmentLogUpdateManyWithoutSiteNestedInput
    manpowerLogs?: ManpowerLogUpdateManyWithoutSiteNestedInput
    inventorySnapshots?: InventorySnapshotUpdateManyWithoutSiteNestedInput
    exportJobs?: ExportJobUpdateManyWithoutSiteNestedInput
    exportAudits?: ExportAuditUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUncheckedUpdateManyWithoutSiteNestedInput
    dispatches?: DispatchUncheckedUpdateManyWithoutSiteNestedInput
    receivedMaterials?: ReceivedMaterialUncheckedUpdateManyWithoutSiteNestedInput
    equipmentLogs?: EquipmentLogUncheckedUpdateManyWithoutSiteNestedInput
    manpowerLogs?: ManpowerLogUncheckedUpdateManyWithoutSiteNestedInput
    inventorySnapshots?: InventorySnapshotUncheckedUpdateManyWithoutSiteNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutSiteNestedInput
    exportAudits?: ExportAuditUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteCreateManyInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateInput = {
    id: string
    code: string
    type: string
    name: string
    category: string
    uom: string
    isFinal: boolean
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionCreateNestedManyWithoutMaterialInput
    dispatches?: DispatchCreateNestedManyWithoutMaterialInput
    receivedMaterials?: ReceivedMaterialCreateNestedManyWithoutMaterialInput
    inventorySnapshots?: InventorySnapshotCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateInput = {
    id: string
    code: string
    type: string
    name: string
    category: string
    uom: string
    isFinal: boolean
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionUncheckedCreateNestedManyWithoutMaterialInput
    dispatches?: DispatchUncheckedCreateNestedManyWithoutMaterialInput
    receivedMaterials?: ReceivedMaterialUncheckedCreateNestedManyWithoutMaterialInput
    inventorySnapshots?: InventorySnapshotUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUpdateManyWithoutMaterialNestedInput
    dispatches?: DispatchUpdateManyWithoutMaterialNestedInput
    receivedMaterials?: ReceivedMaterialUpdateManyWithoutMaterialNestedInput
    inventorySnapshots?: InventorySnapshotUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUncheckedUpdateManyWithoutMaterialNestedInput
    dispatches?: DispatchUncheckedUpdateManyWithoutMaterialNestedInput
    receivedMaterials?: ReceivedMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    inventorySnapshots?: InventorySnapshotUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialCreateManyInput = {
    id: string
    code: string
    type: string
    name: string
    category: string
    uom: string
    isFinal: boolean
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentCreateInput = {
    id: string
    code: string
    name: string
    type: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    equipmentLogs?: EquipmentLogCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateInput = {
    id: string
    code: string
    name: string
    type: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    equipmentLogs?: EquipmentLogUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentLogs?: EquipmentLogUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentLogs?: EquipmentLogUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentCreateManyInput = {
    id: string
    code: string
    name: string
    type: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManpowerRoleCreateInput = {
    id: string
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    manpowerLogs?: ManpowerLogCreateNestedManyWithoutRoleInput
  }

  export type ManpowerRoleUncheckedCreateInput = {
    id: string
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    manpowerLogs?: ManpowerLogUncheckedCreateNestedManyWithoutRoleInput
  }

  export type ManpowerRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manpowerLogs?: ManpowerLogUpdateManyWithoutRoleNestedInput
  }

  export type ManpowerRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manpowerLogs?: ManpowerLogUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type ManpowerRoleCreateManyInput = {
    id: string
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManpowerRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManpowerRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionCreateInput = {
    id?: string
    date: Date | string
    shift?: string | null
    qtyTon: Decimal | DecimalJsLike | number | string
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    site: SiteCreateNestedOneWithoutProductionsInput
    material: MaterialCreateNestedOneWithoutProductionsInput
  }

  export type ProductionUncheckedCreateInput = {
    id?: string
    siteId: string
    date: Date | string
    shift?: string | null
    materialId: string
    qtyTon: Decimal | DecimalJsLike | number | string
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ProductionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    site?: SiteUpdateOneRequiredWithoutProductionsNestedInput
    material?: MaterialUpdateOneRequiredWithoutProductionsNestedInput
  }

  export type ProductionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    materialId?: StringFieldUpdateOperationsInput | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductionCreateManyInput = {
    id?: string
    siteId: string
    date: Date | string
    shift?: string | null
    materialId: string
    qtyTon: Decimal | DecimalJsLike | number | string
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ProductionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    materialId?: StringFieldUpdateOperationsInput | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispatchCreateInput = {
    id?: string
    date: Date | string
    qtyTon: Decimal | DecimalJsLike | number | string
    trips?: number | null
    owner?: string | null
    reference?: string | null
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    site: SiteCreateNestedOneWithoutDispatchesInput
    material: MaterialCreateNestedOneWithoutDispatchesInput
  }

  export type DispatchUncheckedCreateInput = {
    id?: string
    siteId: string
    date: Date | string
    materialId: string
    qtyTon: Decimal | DecimalJsLike | number | string
    trips?: number | null
    owner?: string | null
    reference?: string | null
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type DispatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trips?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    site?: SiteUpdateOneRequiredWithoutDispatchesNestedInput
    material?: MaterialUpdateOneRequiredWithoutDispatchesNestedInput
  }

  export type DispatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    materialId?: StringFieldUpdateOperationsInput | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trips?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispatchCreateManyInput = {
    id?: string
    siteId: string
    date: Date | string
    materialId: string
    qtyTon: Decimal | DecimalJsLike | number | string
    trips?: number | null
    owner?: string | null
    reference?: string | null
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type DispatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trips?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    materialId?: StringFieldUpdateOperationsInput | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trips?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceivedMaterialCreateInput = {
    id?: string
    date: Date | string
    qtyTon: Decimal | DecimalJsLike | number | string
    source?: string | null
    vehicleRef?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    site: SiteCreateNestedOneWithoutReceivedMaterialsInput
    material: MaterialCreateNestedOneWithoutReceivedMaterialsInput
  }

  export type ReceivedMaterialUncheckedCreateInput = {
    id?: string
    siteId: string
    date: Date | string
    materialId: string
    qtyTon: Decimal | DecimalJsLike | number | string
    source?: string | null
    vehicleRef?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ReceivedMaterialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    site?: SiteUpdateOneRequiredWithoutReceivedMaterialsNestedInput
    material?: MaterialUpdateOneRequiredWithoutReceivedMaterialsNestedInput
  }

  export type ReceivedMaterialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    materialId?: StringFieldUpdateOperationsInput | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceivedMaterialCreateManyInput = {
    id?: string
    siteId: string
    date: Date | string
    materialId: string
    qtyTon: Decimal | DecimalJsLike | number | string
    source?: string | null
    vehicleRef?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ReceivedMaterialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceivedMaterialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    materialId?: StringFieldUpdateOperationsInput | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentLogCreateInput = {
    id?: string
    date: Date | string
    hours: Decimal | DecimalJsLike | number | string
    count?: number
    shift?: string | null
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    site: SiteCreateNestedOneWithoutEquipmentLogsInput
    equipment: EquipmentCreateNestedOneWithoutEquipmentLogsInput
  }

  export type EquipmentLogUncheckedCreateInput = {
    id?: string
    siteId: string
    date: Date | string
    equipmentId: string
    hours: Decimal | DecimalJsLike | number | string
    count?: number
    shift?: string | null
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type EquipmentLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: IntFieldUpdateOperationsInput | number
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    site?: SiteUpdateOneRequiredWithoutEquipmentLogsNestedInput
    equipment?: EquipmentUpdateOneRequiredWithoutEquipmentLogsNestedInput
  }

  export type EquipmentLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: IntFieldUpdateOperationsInput | number
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentLogCreateManyInput = {
    id?: string
    siteId: string
    date: Date | string
    equipmentId: string
    hours: Decimal | DecimalJsLike | number | string
    count?: number
    shift?: string | null
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type EquipmentLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: IntFieldUpdateOperationsInput | number
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: IntFieldUpdateOperationsInput | number
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManpowerLogCreateInput = {
    id?: string
    date: Date | string
    headcount: number
    hours: Decimal | DecimalJsLike | number | string
    shift?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    site: SiteCreateNestedOneWithoutManpowerLogsInput
    role: ManpowerRoleCreateNestedOneWithoutManpowerLogsInput
  }

  export type ManpowerLogUncheckedCreateInput = {
    id?: string
    siteId: string
    date: Date | string
    roleId: string
    headcount: number
    hours: Decimal | DecimalJsLike | number | string
    shift?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ManpowerLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    headcount?: IntFieldUpdateOperationsInput | number
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    site?: SiteUpdateOneRequiredWithoutManpowerLogsNestedInput
    role?: ManpowerRoleUpdateOneRequiredWithoutManpowerLogsNestedInput
  }

  export type ManpowerLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: StringFieldUpdateOperationsInput | string
    headcount?: IntFieldUpdateOperationsInput | number
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManpowerLogCreateManyInput = {
    id?: string
    siteId: string
    date: Date | string
    roleId: string
    headcount: number
    hours: Decimal | DecimalJsLike | number | string
    shift?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ManpowerLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    headcount?: IntFieldUpdateOperationsInput | number
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManpowerLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: StringFieldUpdateOperationsInput | string
    headcount?: IntFieldUpdateOperationsInput | number
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventorySnapshotCreateInput = {
    id?: string
    date: Date | string
    openingTon: Decimal | DecimalJsLike | number | string
    producedTon: Decimal | DecimalJsLike | number | string
    receivedTon: Decimal | DecimalJsLike | number | string
    dispatchedTon: Decimal | DecimalJsLike | number | string
    adjustmentTon?: Decimal | DecimalJsLike | number | string
    closingTon: Decimal | DecimalJsLike | number | string
    isCalculated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    site: SiteCreateNestedOneWithoutInventorySnapshotsInput
    material: MaterialCreateNestedOneWithoutInventorySnapshotsInput
  }

  export type InventorySnapshotUncheckedCreateInput = {
    id?: string
    siteId: string
    date: Date | string
    materialId: string
    openingTon: Decimal | DecimalJsLike | number | string
    producedTon: Decimal | DecimalJsLike | number | string
    receivedTon: Decimal | DecimalJsLike | number | string
    dispatchedTon: Decimal | DecimalJsLike | number | string
    adjustmentTon?: Decimal | DecimalJsLike | number | string
    closingTon: Decimal | DecimalJsLike | number | string
    isCalculated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type InventorySnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    openingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receivedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dispatchedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adjustmentTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isCalculated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    site?: SiteUpdateOneRequiredWithoutInventorySnapshotsNestedInput
    material?: MaterialUpdateOneRequiredWithoutInventorySnapshotsNestedInput
  }

  export type InventorySnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    materialId?: StringFieldUpdateOperationsInput | string
    openingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receivedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dispatchedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adjustmentTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isCalculated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventorySnapshotCreateManyInput = {
    id?: string
    siteId: string
    date: Date | string
    materialId: string
    openingTon: Decimal | DecimalJsLike | number | string
    producedTon: Decimal | DecimalJsLike | number | string
    receivedTon: Decimal | DecimalJsLike | number | string
    dispatchedTon: Decimal | DecimalJsLike | number | string
    adjustmentTon?: Decimal | DecimalJsLike | number | string
    closingTon: Decimal | DecimalJsLike | number | string
    isCalculated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type InventorySnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    openingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receivedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dispatchedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adjustmentTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isCalculated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventorySnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    materialId?: StringFieldUpdateOperationsInput | string
    openingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receivedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dispatchedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adjustmentTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isCalculated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExportJobCreateInput = {
    id?: string
    userId: string
    module: string
    dateFrom: Date | string
    dateTo: Date | string
    granularity?: string
    format: string
    status?: string
    progress?: number
    filePath?: string | null
    fileSize?: number | null
    fileHash?: string | null
    errorMessage?: string | null
    downloadUrl?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutExportJobsInput
    exportAudit?: ExportAuditCreateNestedOneWithoutJobInput
  }

  export type ExportJobUncheckedCreateInput = {
    id?: string
    siteId: string
    userId: string
    module: string
    dateFrom: Date | string
    dateTo: Date | string
    granularity?: string
    format: string
    status?: string
    progress?: number
    filePath?: string | null
    fileSize?: number | null
    fileHash?: string | null
    errorMessage?: string | null
    downloadUrl?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exportAudit?: ExportAuditUncheckedCreateNestedOneWithoutJobInput
  }

  export type ExportJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    granularity?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutExportJobsNestedInput
    exportAudit?: ExportAuditUpdateOneWithoutJobNestedInput
  }

  export type ExportJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    granularity?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exportAudit?: ExportAuditUncheckedUpdateOneWithoutJobNestedInput
  }

  export type ExportJobCreateManyInput = {
    id?: string
    siteId: string
    userId: string
    module: string
    dateFrom: Date | string
    dateTo: Date | string
    granularity?: string
    format: string
    status?: string
    progress?: number
    filePath?: string | null
    fileSize?: number | null
    fileHash?: string | null
    errorMessage?: string | null
    downloadUrl?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExportJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    granularity?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    granularity?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportAuditCreateInput = {
    id?: string
    userId: string
    module: string
    filtersJson: string
    columnPreset?: string | null
    recordCount: number
    fileSize: number
    fileHash: string
    downloadCount?: number
    lastDownload?: Date | string | null
    createdAt?: Date | string
    site: SiteCreateNestedOneWithoutExportAuditsInput
    job: ExportJobCreateNestedOneWithoutExportAuditInput
  }

  export type ExportAuditUncheckedCreateInput = {
    id?: string
    jobId: string
    siteId: string
    userId: string
    module: string
    filtersJson: string
    columnPreset?: string | null
    recordCount: number
    fileSize: number
    fileHash: string
    downloadCount?: number
    lastDownload?: Date | string | null
    createdAt?: Date | string
  }

  export type ExportAuditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    filtersJson?: StringFieldUpdateOperationsInput | string
    columnPreset?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    fileSize?: IntFieldUpdateOperationsInput | number
    fileHash?: StringFieldUpdateOperationsInput | string
    downloadCount?: IntFieldUpdateOperationsInput | number
    lastDownload?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutExportAuditsNestedInput
    job?: ExportJobUpdateOneRequiredWithoutExportAuditNestedInput
  }

  export type ExportAuditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    filtersJson?: StringFieldUpdateOperationsInput | string
    columnPreset?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    fileSize?: IntFieldUpdateOperationsInput | number
    fileHash?: StringFieldUpdateOperationsInput | string
    downloadCount?: IntFieldUpdateOperationsInput | number
    lastDownload?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportAuditCreateManyInput = {
    id?: string
    jobId: string
    siteId: string
    userId: string
    module: string
    filtersJson: string
    columnPreset?: string | null
    recordCount: number
    fileSize: number
    fileHash: string
    downloadCount?: number
    lastDownload?: Date | string | null
    createdAt?: Date | string
  }

  export type ExportAuditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    filtersJson?: StringFieldUpdateOperationsInput | string
    columnPreset?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    fileSize?: IntFieldUpdateOperationsInput | number
    fileHash?: StringFieldUpdateOperationsInput | string
    downloadCount?: IntFieldUpdateOperationsInput | number
    lastDownload?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportAuditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    filtersJson?: StringFieldUpdateOperationsInput | string
    columnPreset?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    fileSize?: IntFieldUpdateOperationsInput | number
    fileHash?: StringFieldUpdateOperationsInput | string
    downloadCount?: IntFieldUpdateOperationsInput | number
    lastDownload?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductionListRelationFilter = {
    every?: ProductionWhereInput
    some?: ProductionWhereInput
    none?: ProductionWhereInput
  }

  export type DispatchListRelationFilter = {
    every?: DispatchWhereInput
    some?: DispatchWhereInput
    none?: DispatchWhereInput
  }

  export type ReceivedMaterialListRelationFilter = {
    every?: ReceivedMaterialWhereInput
    some?: ReceivedMaterialWhereInput
    none?: ReceivedMaterialWhereInput
  }

  export type EquipmentLogListRelationFilter = {
    every?: EquipmentLogWhereInput
    some?: EquipmentLogWhereInput
    none?: EquipmentLogWhereInput
  }

  export type ManpowerLogListRelationFilter = {
    every?: ManpowerLogWhereInput
    some?: ManpowerLogWhereInput
    none?: ManpowerLogWhereInput
  }

  export type InventorySnapshotListRelationFilter = {
    every?: InventorySnapshotWhereInput
    some?: InventorySnapshotWhereInput
    none?: InventorySnapshotWhereInput
  }

  export type ExportJobListRelationFilter = {
    every?: ExportJobWhereInput
    some?: ExportJobWhereInput
    none?: ExportJobWhereInput
  }

  export type ExportAuditListRelationFilter = {
    every?: ExportAuditWhereInput
    some?: ExportAuditWhereInput
    none?: ExportAuditWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DispatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReceivedMaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipmentLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManpowerLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventorySnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExportJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExportAuditOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SiteCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    location?: SortOrder
    timezone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    location?: SortOrder
    timezone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    location?: SortOrder
    timezone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    name?: SortOrder
    category?: SortOrder
    uom?: SortOrder
    isFinal?: SortOrder
    notes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    name?: SortOrder
    category?: SortOrder
    uom?: SortOrder
    isFinal?: SortOrder
    notes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    name?: SortOrder
    category?: SortOrder
    uom?: SortOrder
    isFinal?: SortOrder
    notes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManpowerRoleCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManpowerRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManpowerRoleMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type SiteScalarRelationFilter = {
    is?: SiteWhereInput
    isNot?: SiteWhereInput
  }

  export type MaterialScalarRelationFilter = {
    is?: MaterialWhereInput
    isNot?: MaterialWhereInput
  }

  export type ProductionSiteIdDateMaterialIdOperationCompoundUniqueInput = {
    siteId: string
    date: Date | string
    materialId: string
    operation: string
  }

  export type ProductionCountOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    shift?: SortOrder
    materialId?: SortOrder
    qtyTon?: SortOrder
    operation?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ProductionAvgOrderByAggregateInput = {
    qtyTon?: SortOrder
  }

  export type ProductionMaxOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    shift?: SortOrder
    materialId?: SortOrder
    qtyTon?: SortOrder
    operation?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ProductionMinOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    shift?: SortOrder
    materialId?: SortOrder
    qtyTon?: SortOrder
    operation?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ProductionSumOrderByAggregateInput = {
    qtyTon?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DispatchCountOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    materialId?: SortOrder
    qtyTon?: SortOrder
    trips?: SortOrder
    owner?: SortOrder
    reference?: SortOrder
    operation?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type DispatchAvgOrderByAggregateInput = {
    qtyTon?: SortOrder
    trips?: SortOrder
  }

  export type DispatchMaxOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    materialId?: SortOrder
    qtyTon?: SortOrder
    trips?: SortOrder
    owner?: SortOrder
    reference?: SortOrder
    operation?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type DispatchMinOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    materialId?: SortOrder
    qtyTon?: SortOrder
    trips?: SortOrder
    owner?: SortOrder
    reference?: SortOrder
    operation?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type DispatchSumOrderByAggregateInput = {
    qtyTon?: SortOrder
    trips?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ReceivedMaterialCountOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    materialId?: SortOrder
    qtyTon?: SortOrder
    source?: SortOrder
    vehicleRef?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ReceivedMaterialAvgOrderByAggregateInput = {
    qtyTon?: SortOrder
  }

  export type ReceivedMaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    materialId?: SortOrder
    qtyTon?: SortOrder
    source?: SortOrder
    vehicleRef?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ReceivedMaterialMinOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    materialId?: SortOrder
    qtyTon?: SortOrder
    source?: SortOrder
    vehicleRef?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ReceivedMaterialSumOrderByAggregateInput = {
    qtyTon?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EquipmentScalarRelationFilter = {
    is?: EquipmentWhereInput
    isNot?: EquipmentWhereInput
  }

  export type EquipmentLogSiteIdDateEquipmentIdShiftCompoundUniqueInput = {
    siteId: string
    date: Date | string
    equipmentId: string
    shift: string
  }

  export type EquipmentLogCountOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    equipmentId?: SortOrder
    hours?: SortOrder
    count?: SortOrder
    shift?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type EquipmentLogAvgOrderByAggregateInput = {
    hours?: SortOrder
    count?: SortOrder
  }

  export type EquipmentLogMaxOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    equipmentId?: SortOrder
    hours?: SortOrder
    count?: SortOrder
    shift?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type EquipmentLogMinOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    equipmentId?: SortOrder
    hours?: SortOrder
    count?: SortOrder
    shift?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type EquipmentLogSumOrderByAggregateInput = {
    hours?: SortOrder
    count?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ManpowerRoleScalarRelationFilter = {
    is?: ManpowerRoleWhereInput
    isNot?: ManpowerRoleWhereInput
  }

  export type ManpowerLogSiteIdDateRoleIdShiftCompoundUniqueInput = {
    siteId: string
    date: Date | string
    roleId: string
    shift: string
  }

  export type ManpowerLogCountOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    roleId?: SortOrder
    headcount?: SortOrder
    hours?: SortOrder
    shift?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ManpowerLogAvgOrderByAggregateInput = {
    headcount?: SortOrder
    hours?: SortOrder
  }

  export type ManpowerLogMaxOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    roleId?: SortOrder
    headcount?: SortOrder
    hours?: SortOrder
    shift?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ManpowerLogMinOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    roleId?: SortOrder
    headcount?: SortOrder
    hours?: SortOrder
    shift?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ManpowerLogSumOrderByAggregateInput = {
    headcount?: SortOrder
    hours?: SortOrder
  }

  export type InventorySnapshotSiteIdDateMaterialIdCompoundUniqueInput = {
    siteId: string
    date: Date | string
    materialId: string
  }

  export type InventorySnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    materialId?: SortOrder
    openingTon?: SortOrder
    producedTon?: SortOrder
    receivedTon?: SortOrder
    dispatchedTon?: SortOrder
    adjustmentTon?: SortOrder
    closingTon?: SortOrder
    isCalculated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type InventorySnapshotAvgOrderByAggregateInput = {
    openingTon?: SortOrder
    producedTon?: SortOrder
    receivedTon?: SortOrder
    dispatchedTon?: SortOrder
    adjustmentTon?: SortOrder
    closingTon?: SortOrder
  }

  export type InventorySnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    materialId?: SortOrder
    openingTon?: SortOrder
    producedTon?: SortOrder
    receivedTon?: SortOrder
    dispatchedTon?: SortOrder
    adjustmentTon?: SortOrder
    closingTon?: SortOrder
    isCalculated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type InventorySnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    date?: SortOrder
    materialId?: SortOrder
    openingTon?: SortOrder
    producedTon?: SortOrder
    receivedTon?: SortOrder
    dispatchedTon?: SortOrder
    adjustmentTon?: SortOrder
    closingTon?: SortOrder
    isCalculated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type InventorySnapshotSumOrderByAggregateInput = {
    openingTon?: SortOrder
    producedTon?: SortOrder
    receivedTon?: SortOrder
    dispatchedTon?: SortOrder
    adjustmentTon?: SortOrder
    closingTon?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ExportAuditNullableScalarRelationFilter = {
    is?: ExportAuditWhereInput | null
    isNot?: ExportAuditWhereInput | null
  }

  export type ExportJobCountOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    granularity?: SortOrder
    format?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    fileHash?: SortOrder
    errorMessage?: SortOrder
    downloadUrl?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExportJobAvgOrderByAggregateInput = {
    progress?: SortOrder
    fileSize?: SortOrder
  }

  export type ExportJobMaxOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    granularity?: SortOrder
    format?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    fileHash?: SortOrder
    errorMessage?: SortOrder
    downloadUrl?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExportJobMinOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    granularity?: SortOrder
    format?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    fileHash?: SortOrder
    errorMessage?: SortOrder
    downloadUrl?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExportJobSumOrderByAggregateInput = {
    progress?: SortOrder
    fileSize?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ExportJobScalarRelationFilter = {
    is?: ExportJobWhereInput
    isNot?: ExportJobWhereInput
  }

  export type ExportAuditCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    siteId?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    filtersJson?: SortOrder
    columnPreset?: SortOrder
    recordCount?: SortOrder
    fileSize?: SortOrder
    fileHash?: SortOrder
    downloadCount?: SortOrder
    lastDownload?: SortOrder
    createdAt?: SortOrder
  }

  export type ExportAuditAvgOrderByAggregateInput = {
    recordCount?: SortOrder
    fileSize?: SortOrder
    downloadCount?: SortOrder
  }

  export type ExportAuditMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    siteId?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    filtersJson?: SortOrder
    columnPreset?: SortOrder
    recordCount?: SortOrder
    fileSize?: SortOrder
    fileHash?: SortOrder
    downloadCount?: SortOrder
    lastDownload?: SortOrder
    createdAt?: SortOrder
  }

  export type ExportAuditMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    siteId?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    filtersJson?: SortOrder
    columnPreset?: SortOrder
    recordCount?: SortOrder
    fileSize?: SortOrder
    fileHash?: SortOrder
    downloadCount?: SortOrder
    lastDownload?: SortOrder
    createdAt?: SortOrder
  }

  export type ExportAuditSumOrderByAggregateInput = {
    recordCount?: SortOrder
    fileSize?: SortOrder
    downloadCount?: SortOrder
  }

  export type ProductionCreateNestedManyWithoutSiteInput = {
    create?: XOR<ProductionCreateWithoutSiteInput, ProductionUncheckedCreateWithoutSiteInput> | ProductionCreateWithoutSiteInput[] | ProductionUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutSiteInput | ProductionCreateOrConnectWithoutSiteInput[]
    createMany?: ProductionCreateManySiteInputEnvelope
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
  }

  export type DispatchCreateNestedManyWithoutSiteInput = {
    create?: XOR<DispatchCreateWithoutSiteInput, DispatchUncheckedCreateWithoutSiteInput> | DispatchCreateWithoutSiteInput[] | DispatchUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: DispatchCreateOrConnectWithoutSiteInput | DispatchCreateOrConnectWithoutSiteInput[]
    createMany?: DispatchCreateManySiteInputEnvelope
    connect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
  }

  export type ReceivedMaterialCreateNestedManyWithoutSiteInput = {
    create?: XOR<ReceivedMaterialCreateWithoutSiteInput, ReceivedMaterialUncheckedCreateWithoutSiteInput> | ReceivedMaterialCreateWithoutSiteInput[] | ReceivedMaterialUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ReceivedMaterialCreateOrConnectWithoutSiteInput | ReceivedMaterialCreateOrConnectWithoutSiteInput[]
    createMany?: ReceivedMaterialCreateManySiteInputEnvelope
    connect?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
  }

  export type EquipmentLogCreateNestedManyWithoutSiteInput = {
    create?: XOR<EquipmentLogCreateWithoutSiteInput, EquipmentLogUncheckedCreateWithoutSiteInput> | EquipmentLogCreateWithoutSiteInput[] | EquipmentLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: EquipmentLogCreateOrConnectWithoutSiteInput | EquipmentLogCreateOrConnectWithoutSiteInput[]
    createMany?: EquipmentLogCreateManySiteInputEnvelope
    connect?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
  }

  export type ManpowerLogCreateNestedManyWithoutSiteInput = {
    create?: XOR<ManpowerLogCreateWithoutSiteInput, ManpowerLogUncheckedCreateWithoutSiteInput> | ManpowerLogCreateWithoutSiteInput[] | ManpowerLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ManpowerLogCreateOrConnectWithoutSiteInput | ManpowerLogCreateOrConnectWithoutSiteInput[]
    createMany?: ManpowerLogCreateManySiteInputEnvelope
    connect?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
  }

  export type InventorySnapshotCreateNestedManyWithoutSiteInput = {
    create?: XOR<InventorySnapshotCreateWithoutSiteInput, InventorySnapshotUncheckedCreateWithoutSiteInput> | InventorySnapshotCreateWithoutSiteInput[] | InventorySnapshotUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: InventorySnapshotCreateOrConnectWithoutSiteInput | InventorySnapshotCreateOrConnectWithoutSiteInput[]
    createMany?: InventorySnapshotCreateManySiteInputEnvelope
    connect?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
  }

  export type ExportJobCreateNestedManyWithoutSiteInput = {
    create?: XOR<ExportJobCreateWithoutSiteInput, ExportJobUncheckedCreateWithoutSiteInput> | ExportJobCreateWithoutSiteInput[] | ExportJobUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ExportJobCreateOrConnectWithoutSiteInput | ExportJobCreateOrConnectWithoutSiteInput[]
    createMany?: ExportJobCreateManySiteInputEnvelope
    connect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
  }

  export type ExportAuditCreateNestedManyWithoutSiteInput = {
    create?: XOR<ExportAuditCreateWithoutSiteInput, ExportAuditUncheckedCreateWithoutSiteInput> | ExportAuditCreateWithoutSiteInput[] | ExportAuditUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ExportAuditCreateOrConnectWithoutSiteInput | ExportAuditCreateOrConnectWithoutSiteInput[]
    createMany?: ExportAuditCreateManySiteInputEnvelope
    connect?: ExportAuditWhereUniqueInput | ExportAuditWhereUniqueInput[]
  }

  export type ProductionUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<ProductionCreateWithoutSiteInput, ProductionUncheckedCreateWithoutSiteInput> | ProductionCreateWithoutSiteInput[] | ProductionUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutSiteInput | ProductionCreateOrConnectWithoutSiteInput[]
    createMany?: ProductionCreateManySiteInputEnvelope
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
  }

  export type DispatchUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<DispatchCreateWithoutSiteInput, DispatchUncheckedCreateWithoutSiteInput> | DispatchCreateWithoutSiteInput[] | DispatchUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: DispatchCreateOrConnectWithoutSiteInput | DispatchCreateOrConnectWithoutSiteInput[]
    createMany?: DispatchCreateManySiteInputEnvelope
    connect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
  }

  export type ReceivedMaterialUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<ReceivedMaterialCreateWithoutSiteInput, ReceivedMaterialUncheckedCreateWithoutSiteInput> | ReceivedMaterialCreateWithoutSiteInput[] | ReceivedMaterialUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ReceivedMaterialCreateOrConnectWithoutSiteInput | ReceivedMaterialCreateOrConnectWithoutSiteInput[]
    createMany?: ReceivedMaterialCreateManySiteInputEnvelope
    connect?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
  }

  export type EquipmentLogUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<EquipmentLogCreateWithoutSiteInput, EquipmentLogUncheckedCreateWithoutSiteInput> | EquipmentLogCreateWithoutSiteInput[] | EquipmentLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: EquipmentLogCreateOrConnectWithoutSiteInput | EquipmentLogCreateOrConnectWithoutSiteInput[]
    createMany?: EquipmentLogCreateManySiteInputEnvelope
    connect?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
  }

  export type ManpowerLogUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<ManpowerLogCreateWithoutSiteInput, ManpowerLogUncheckedCreateWithoutSiteInput> | ManpowerLogCreateWithoutSiteInput[] | ManpowerLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ManpowerLogCreateOrConnectWithoutSiteInput | ManpowerLogCreateOrConnectWithoutSiteInput[]
    createMany?: ManpowerLogCreateManySiteInputEnvelope
    connect?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
  }

  export type InventorySnapshotUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<InventorySnapshotCreateWithoutSiteInput, InventorySnapshotUncheckedCreateWithoutSiteInput> | InventorySnapshotCreateWithoutSiteInput[] | InventorySnapshotUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: InventorySnapshotCreateOrConnectWithoutSiteInput | InventorySnapshotCreateOrConnectWithoutSiteInput[]
    createMany?: InventorySnapshotCreateManySiteInputEnvelope
    connect?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
  }

  export type ExportJobUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<ExportJobCreateWithoutSiteInput, ExportJobUncheckedCreateWithoutSiteInput> | ExportJobCreateWithoutSiteInput[] | ExportJobUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ExportJobCreateOrConnectWithoutSiteInput | ExportJobCreateOrConnectWithoutSiteInput[]
    createMany?: ExportJobCreateManySiteInputEnvelope
    connect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
  }

  export type ExportAuditUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<ExportAuditCreateWithoutSiteInput, ExportAuditUncheckedCreateWithoutSiteInput> | ExportAuditCreateWithoutSiteInput[] | ExportAuditUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ExportAuditCreateOrConnectWithoutSiteInput | ExportAuditCreateOrConnectWithoutSiteInput[]
    createMany?: ExportAuditCreateManySiteInputEnvelope
    connect?: ExportAuditWhereUniqueInput | ExportAuditWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductionUpdateManyWithoutSiteNestedInput = {
    create?: XOR<ProductionCreateWithoutSiteInput, ProductionUncheckedCreateWithoutSiteInput> | ProductionCreateWithoutSiteInput[] | ProductionUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutSiteInput | ProductionCreateOrConnectWithoutSiteInput[]
    upsert?: ProductionUpsertWithWhereUniqueWithoutSiteInput | ProductionUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: ProductionCreateManySiteInputEnvelope
    set?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    disconnect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    delete?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    update?: ProductionUpdateWithWhereUniqueWithoutSiteInput | ProductionUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: ProductionUpdateManyWithWhereWithoutSiteInput | ProductionUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: ProductionScalarWhereInput | ProductionScalarWhereInput[]
  }

  export type DispatchUpdateManyWithoutSiteNestedInput = {
    create?: XOR<DispatchCreateWithoutSiteInput, DispatchUncheckedCreateWithoutSiteInput> | DispatchCreateWithoutSiteInput[] | DispatchUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: DispatchCreateOrConnectWithoutSiteInput | DispatchCreateOrConnectWithoutSiteInput[]
    upsert?: DispatchUpsertWithWhereUniqueWithoutSiteInput | DispatchUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: DispatchCreateManySiteInputEnvelope
    set?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    disconnect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    delete?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    connect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    update?: DispatchUpdateWithWhereUniqueWithoutSiteInput | DispatchUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: DispatchUpdateManyWithWhereWithoutSiteInput | DispatchUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: DispatchScalarWhereInput | DispatchScalarWhereInput[]
  }

  export type ReceivedMaterialUpdateManyWithoutSiteNestedInput = {
    create?: XOR<ReceivedMaterialCreateWithoutSiteInput, ReceivedMaterialUncheckedCreateWithoutSiteInput> | ReceivedMaterialCreateWithoutSiteInput[] | ReceivedMaterialUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ReceivedMaterialCreateOrConnectWithoutSiteInput | ReceivedMaterialCreateOrConnectWithoutSiteInput[]
    upsert?: ReceivedMaterialUpsertWithWhereUniqueWithoutSiteInput | ReceivedMaterialUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: ReceivedMaterialCreateManySiteInputEnvelope
    set?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
    disconnect?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
    delete?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
    connect?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
    update?: ReceivedMaterialUpdateWithWhereUniqueWithoutSiteInput | ReceivedMaterialUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: ReceivedMaterialUpdateManyWithWhereWithoutSiteInput | ReceivedMaterialUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: ReceivedMaterialScalarWhereInput | ReceivedMaterialScalarWhereInput[]
  }

  export type EquipmentLogUpdateManyWithoutSiteNestedInput = {
    create?: XOR<EquipmentLogCreateWithoutSiteInput, EquipmentLogUncheckedCreateWithoutSiteInput> | EquipmentLogCreateWithoutSiteInput[] | EquipmentLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: EquipmentLogCreateOrConnectWithoutSiteInput | EquipmentLogCreateOrConnectWithoutSiteInput[]
    upsert?: EquipmentLogUpsertWithWhereUniqueWithoutSiteInput | EquipmentLogUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: EquipmentLogCreateManySiteInputEnvelope
    set?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
    disconnect?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
    delete?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
    connect?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
    update?: EquipmentLogUpdateWithWhereUniqueWithoutSiteInput | EquipmentLogUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: EquipmentLogUpdateManyWithWhereWithoutSiteInput | EquipmentLogUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: EquipmentLogScalarWhereInput | EquipmentLogScalarWhereInput[]
  }

  export type ManpowerLogUpdateManyWithoutSiteNestedInput = {
    create?: XOR<ManpowerLogCreateWithoutSiteInput, ManpowerLogUncheckedCreateWithoutSiteInput> | ManpowerLogCreateWithoutSiteInput[] | ManpowerLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ManpowerLogCreateOrConnectWithoutSiteInput | ManpowerLogCreateOrConnectWithoutSiteInput[]
    upsert?: ManpowerLogUpsertWithWhereUniqueWithoutSiteInput | ManpowerLogUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: ManpowerLogCreateManySiteInputEnvelope
    set?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
    disconnect?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
    delete?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
    connect?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
    update?: ManpowerLogUpdateWithWhereUniqueWithoutSiteInput | ManpowerLogUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: ManpowerLogUpdateManyWithWhereWithoutSiteInput | ManpowerLogUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: ManpowerLogScalarWhereInput | ManpowerLogScalarWhereInput[]
  }

  export type InventorySnapshotUpdateManyWithoutSiteNestedInput = {
    create?: XOR<InventorySnapshotCreateWithoutSiteInput, InventorySnapshotUncheckedCreateWithoutSiteInput> | InventorySnapshotCreateWithoutSiteInput[] | InventorySnapshotUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: InventorySnapshotCreateOrConnectWithoutSiteInput | InventorySnapshotCreateOrConnectWithoutSiteInput[]
    upsert?: InventorySnapshotUpsertWithWhereUniqueWithoutSiteInput | InventorySnapshotUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: InventorySnapshotCreateManySiteInputEnvelope
    set?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
    disconnect?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
    delete?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
    connect?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
    update?: InventorySnapshotUpdateWithWhereUniqueWithoutSiteInput | InventorySnapshotUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: InventorySnapshotUpdateManyWithWhereWithoutSiteInput | InventorySnapshotUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: InventorySnapshotScalarWhereInput | InventorySnapshotScalarWhereInput[]
  }

  export type ExportJobUpdateManyWithoutSiteNestedInput = {
    create?: XOR<ExportJobCreateWithoutSiteInput, ExportJobUncheckedCreateWithoutSiteInput> | ExportJobCreateWithoutSiteInput[] | ExportJobUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ExportJobCreateOrConnectWithoutSiteInput | ExportJobCreateOrConnectWithoutSiteInput[]
    upsert?: ExportJobUpsertWithWhereUniqueWithoutSiteInput | ExportJobUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: ExportJobCreateManySiteInputEnvelope
    set?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    disconnect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    delete?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    connect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    update?: ExportJobUpdateWithWhereUniqueWithoutSiteInput | ExportJobUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: ExportJobUpdateManyWithWhereWithoutSiteInput | ExportJobUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: ExportJobScalarWhereInput | ExportJobScalarWhereInput[]
  }

  export type ExportAuditUpdateManyWithoutSiteNestedInput = {
    create?: XOR<ExportAuditCreateWithoutSiteInput, ExportAuditUncheckedCreateWithoutSiteInput> | ExportAuditCreateWithoutSiteInput[] | ExportAuditUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ExportAuditCreateOrConnectWithoutSiteInput | ExportAuditCreateOrConnectWithoutSiteInput[]
    upsert?: ExportAuditUpsertWithWhereUniqueWithoutSiteInput | ExportAuditUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: ExportAuditCreateManySiteInputEnvelope
    set?: ExportAuditWhereUniqueInput | ExportAuditWhereUniqueInput[]
    disconnect?: ExportAuditWhereUniqueInput | ExportAuditWhereUniqueInput[]
    delete?: ExportAuditWhereUniqueInput | ExportAuditWhereUniqueInput[]
    connect?: ExportAuditWhereUniqueInput | ExportAuditWhereUniqueInput[]
    update?: ExportAuditUpdateWithWhereUniqueWithoutSiteInput | ExportAuditUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: ExportAuditUpdateManyWithWhereWithoutSiteInput | ExportAuditUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: ExportAuditScalarWhereInput | ExportAuditScalarWhereInput[]
  }

  export type ProductionUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<ProductionCreateWithoutSiteInput, ProductionUncheckedCreateWithoutSiteInput> | ProductionCreateWithoutSiteInput[] | ProductionUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutSiteInput | ProductionCreateOrConnectWithoutSiteInput[]
    upsert?: ProductionUpsertWithWhereUniqueWithoutSiteInput | ProductionUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: ProductionCreateManySiteInputEnvelope
    set?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    disconnect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    delete?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    update?: ProductionUpdateWithWhereUniqueWithoutSiteInput | ProductionUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: ProductionUpdateManyWithWhereWithoutSiteInput | ProductionUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: ProductionScalarWhereInput | ProductionScalarWhereInput[]
  }

  export type DispatchUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<DispatchCreateWithoutSiteInput, DispatchUncheckedCreateWithoutSiteInput> | DispatchCreateWithoutSiteInput[] | DispatchUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: DispatchCreateOrConnectWithoutSiteInput | DispatchCreateOrConnectWithoutSiteInput[]
    upsert?: DispatchUpsertWithWhereUniqueWithoutSiteInput | DispatchUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: DispatchCreateManySiteInputEnvelope
    set?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    disconnect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    delete?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    connect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    update?: DispatchUpdateWithWhereUniqueWithoutSiteInput | DispatchUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: DispatchUpdateManyWithWhereWithoutSiteInput | DispatchUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: DispatchScalarWhereInput | DispatchScalarWhereInput[]
  }

  export type ReceivedMaterialUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<ReceivedMaterialCreateWithoutSiteInput, ReceivedMaterialUncheckedCreateWithoutSiteInput> | ReceivedMaterialCreateWithoutSiteInput[] | ReceivedMaterialUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ReceivedMaterialCreateOrConnectWithoutSiteInput | ReceivedMaterialCreateOrConnectWithoutSiteInput[]
    upsert?: ReceivedMaterialUpsertWithWhereUniqueWithoutSiteInput | ReceivedMaterialUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: ReceivedMaterialCreateManySiteInputEnvelope
    set?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
    disconnect?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
    delete?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
    connect?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
    update?: ReceivedMaterialUpdateWithWhereUniqueWithoutSiteInput | ReceivedMaterialUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: ReceivedMaterialUpdateManyWithWhereWithoutSiteInput | ReceivedMaterialUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: ReceivedMaterialScalarWhereInput | ReceivedMaterialScalarWhereInput[]
  }

  export type EquipmentLogUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<EquipmentLogCreateWithoutSiteInput, EquipmentLogUncheckedCreateWithoutSiteInput> | EquipmentLogCreateWithoutSiteInput[] | EquipmentLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: EquipmentLogCreateOrConnectWithoutSiteInput | EquipmentLogCreateOrConnectWithoutSiteInput[]
    upsert?: EquipmentLogUpsertWithWhereUniqueWithoutSiteInput | EquipmentLogUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: EquipmentLogCreateManySiteInputEnvelope
    set?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
    disconnect?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
    delete?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
    connect?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
    update?: EquipmentLogUpdateWithWhereUniqueWithoutSiteInput | EquipmentLogUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: EquipmentLogUpdateManyWithWhereWithoutSiteInput | EquipmentLogUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: EquipmentLogScalarWhereInput | EquipmentLogScalarWhereInput[]
  }

  export type ManpowerLogUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<ManpowerLogCreateWithoutSiteInput, ManpowerLogUncheckedCreateWithoutSiteInput> | ManpowerLogCreateWithoutSiteInput[] | ManpowerLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ManpowerLogCreateOrConnectWithoutSiteInput | ManpowerLogCreateOrConnectWithoutSiteInput[]
    upsert?: ManpowerLogUpsertWithWhereUniqueWithoutSiteInput | ManpowerLogUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: ManpowerLogCreateManySiteInputEnvelope
    set?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
    disconnect?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
    delete?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
    connect?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
    update?: ManpowerLogUpdateWithWhereUniqueWithoutSiteInput | ManpowerLogUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: ManpowerLogUpdateManyWithWhereWithoutSiteInput | ManpowerLogUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: ManpowerLogScalarWhereInput | ManpowerLogScalarWhereInput[]
  }

  export type InventorySnapshotUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<InventorySnapshotCreateWithoutSiteInput, InventorySnapshotUncheckedCreateWithoutSiteInput> | InventorySnapshotCreateWithoutSiteInput[] | InventorySnapshotUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: InventorySnapshotCreateOrConnectWithoutSiteInput | InventorySnapshotCreateOrConnectWithoutSiteInput[]
    upsert?: InventorySnapshotUpsertWithWhereUniqueWithoutSiteInput | InventorySnapshotUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: InventorySnapshotCreateManySiteInputEnvelope
    set?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
    disconnect?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
    delete?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
    connect?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
    update?: InventorySnapshotUpdateWithWhereUniqueWithoutSiteInput | InventorySnapshotUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: InventorySnapshotUpdateManyWithWhereWithoutSiteInput | InventorySnapshotUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: InventorySnapshotScalarWhereInput | InventorySnapshotScalarWhereInput[]
  }

  export type ExportJobUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<ExportJobCreateWithoutSiteInput, ExportJobUncheckedCreateWithoutSiteInput> | ExportJobCreateWithoutSiteInput[] | ExportJobUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ExportJobCreateOrConnectWithoutSiteInput | ExportJobCreateOrConnectWithoutSiteInput[]
    upsert?: ExportJobUpsertWithWhereUniqueWithoutSiteInput | ExportJobUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: ExportJobCreateManySiteInputEnvelope
    set?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    disconnect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    delete?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    connect?: ExportJobWhereUniqueInput | ExportJobWhereUniqueInput[]
    update?: ExportJobUpdateWithWhereUniqueWithoutSiteInput | ExportJobUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: ExportJobUpdateManyWithWhereWithoutSiteInput | ExportJobUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: ExportJobScalarWhereInput | ExportJobScalarWhereInput[]
  }

  export type ExportAuditUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<ExportAuditCreateWithoutSiteInput, ExportAuditUncheckedCreateWithoutSiteInput> | ExportAuditCreateWithoutSiteInput[] | ExportAuditUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ExportAuditCreateOrConnectWithoutSiteInput | ExportAuditCreateOrConnectWithoutSiteInput[]
    upsert?: ExportAuditUpsertWithWhereUniqueWithoutSiteInput | ExportAuditUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: ExportAuditCreateManySiteInputEnvelope
    set?: ExportAuditWhereUniqueInput | ExportAuditWhereUniqueInput[]
    disconnect?: ExportAuditWhereUniqueInput | ExportAuditWhereUniqueInput[]
    delete?: ExportAuditWhereUniqueInput | ExportAuditWhereUniqueInput[]
    connect?: ExportAuditWhereUniqueInput | ExportAuditWhereUniqueInput[]
    update?: ExportAuditUpdateWithWhereUniqueWithoutSiteInput | ExportAuditUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: ExportAuditUpdateManyWithWhereWithoutSiteInput | ExportAuditUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: ExportAuditScalarWhereInput | ExportAuditScalarWhereInput[]
  }

  export type ProductionCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ProductionCreateWithoutMaterialInput, ProductionUncheckedCreateWithoutMaterialInput> | ProductionCreateWithoutMaterialInput[] | ProductionUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutMaterialInput | ProductionCreateOrConnectWithoutMaterialInput[]
    createMany?: ProductionCreateManyMaterialInputEnvelope
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
  }

  export type DispatchCreateNestedManyWithoutMaterialInput = {
    create?: XOR<DispatchCreateWithoutMaterialInput, DispatchUncheckedCreateWithoutMaterialInput> | DispatchCreateWithoutMaterialInput[] | DispatchUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: DispatchCreateOrConnectWithoutMaterialInput | DispatchCreateOrConnectWithoutMaterialInput[]
    createMany?: DispatchCreateManyMaterialInputEnvelope
    connect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
  }

  export type ReceivedMaterialCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ReceivedMaterialCreateWithoutMaterialInput, ReceivedMaterialUncheckedCreateWithoutMaterialInput> | ReceivedMaterialCreateWithoutMaterialInput[] | ReceivedMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ReceivedMaterialCreateOrConnectWithoutMaterialInput | ReceivedMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: ReceivedMaterialCreateManyMaterialInputEnvelope
    connect?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
  }

  export type InventorySnapshotCreateNestedManyWithoutMaterialInput = {
    create?: XOR<InventorySnapshotCreateWithoutMaterialInput, InventorySnapshotUncheckedCreateWithoutMaterialInput> | InventorySnapshotCreateWithoutMaterialInput[] | InventorySnapshotUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: InventorySnapshotCreateOrConnectWithoutMaterialInput | InventorySnapshotCreateOrConnectWithoutMaterialInput[]
    createMany?: InventorySnapshotCreateManyMaterialInputEnvelope
    connect?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
  }

  export type ProductionUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ProductionCreateWithoutMaterialInput, ProductionUncheckedCreateWithoutMaterialInput> | ProductionCreateWithoutMaterialInput[] | ProductionUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutMaterialInput | ProductionCreateOrConnectWithoutMaterialInput[]
    createMany?: ProductionCreateManyMaterialInputEnvelope
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
  }

  export type DispatchUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<DispatchCreateWithoutMaterialInput, DispatchUncheckedCreateWithoutMaterialInput> | DispatchCreateWithoutMaterialInput[] | DispatchUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: DispatchCreateOrConnectWithoutMaterialInput | DispatchCreateOrConnectWithoutMaterialInput[]
    createMany?: DispatchCreateManyMaterialInputEnvelope
    connect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
  }

  export type ReceivedMaterialUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ReceivedMaterialCreateWithoutMaterialInput, ReceivedMaterialUncheckedCreateWithoutMaterialInput> | ReceivedMaterialCreateWithoutMaterialInput[] | ReceivedMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ReceivedMaterialCreateOrConnectWithoutMaterialInput | ReceivedMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: ReceivedMaterialCreateManyMaterialInputEnvelope
    connect?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
  }

  export type InventorySnapshotUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<InventorySnapshotCreateWithoutMaterialInput, InventorySnapshotUncheckedCreateWithoutMaterialInput> | InventorySnapshotCreateWithoutMaterialInput[] | InventorySnapshotUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: InventorySnapshotCreateOrConnectWithoutMaterialInput | InventorySnapshotCreateOrConnectWithoutMaterialInput[]
    createMany?: InventorySnapshotCreateManyMaterialInputEnvelope
    connect?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
  }

  export type ProductionUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ProductionCreateWithoutMaterialInput, ProductionUncheckedCreateWithoutMaterialInput> | ProductionCreateWithoutMaterialInput[] | ProductionUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutMaterialInput | ProductionCreateOrConnectWithoutMaterialInput[]
    upsert?: ProductionUpsertWithWhereUniqueWithoutMaterialInput | ProductionUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ProductionCreateManyMaterialInputEnvelope
    set?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    disconnect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    delete?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    update?: ProductionUpdateWithWhereUniqueWithoutMaterialInput | ProductionUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ProductionUpdateManyWithWhereWithoutMaterialInput | ProductionUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ProductionScalarWhereInput | ProductionScalarWhereInput[]
  }

  export type DispatchUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<DispatchCreateWithoutMaterialInput, DispatchUncheckedCreateWithoutMaterialInput> | DispatchCreateWithoutMaterialInput[] | DispatchUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: DispatchCreateOrConnectWithoutMaterialInput | DispatchCreateOrConnectWithoutMaterialInput[]
    upsert?: DispatchUpsertWithWhereUniqueWithoutMaterialInput | DispatchUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: DispatchCreateManyMaterialInputEnvelope
    set?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    disconnect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    delete?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    connect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    update?: DispatchUpdateWithWhereUniqueWithoutMaterialInput | DispatchUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: DispatchUpdateManyWithWhereWithoutMaterialInput | DispatchUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: DispatchScalarWhereInput | DispatchScalarWhereInput[]
  }

  export type ReceivedMaterialUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ReceivedMaterialCreateWithoutMaterialInput, ReceivedMaterialUncheckedCreateWithoutMaterialInput> | ReceivedMaterialCreateWithoutMaterialInput[] | ReceivedMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ReceivedMaterialCreateOrConnectWithoutMaterialInput | ReceivedMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: ReceivedMaterialUpsertWithWhereUniqueWithoutMaterialInput | ReceivedMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ReceivedMaterialCreateManyMaterialInputEnvelope
    set?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
    disconnect?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
    delete?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
    connect?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
    update?: ReceivedMaterialUpdateWithWhereUniqueWithoutMaterialInput | ReceivedMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ReceivedMaterialUpdateManyWithWhereWithoutMaterialInput | ReceivedMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ReceivedMaterialScalarWhereInput | ReceivedMaterialScalarWhereInput[]
  }

  export type InventorySnapshotUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<InventorySnapshotCreateWithoutMaterialInput, InventorySnapshotUncheckedCreateWithoutMaterialInput> | InventorySnapshotCreateWithoutMaterialInput[] | InventorySnapshotUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: InventorySnapshotCreateOrConnectWithoutMaterialInput | InventorySnapshotCreateOrConnectWithoutMaterialInput[]
    upsert?: InventorySnapshotUpsertWithWhereUniqueWithoutMaterialInput | InventorySnapshotUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: InventorySnapshotCreateManyMaterialInputEnvelope
    set?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
    disconnect?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
    delete?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
    connect?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
    update?: InventorySnapshotUpdateWithWhereUniqueWithoutMaterialInput | InventorySnapshotUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: InventorySnapshotUpdateManyWithWhereWithoutMaterialInput | InventorySnapshotUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: InventorySnapshotScalarWhereInput | InventorySnapshotScalarWhereInput[]
  }

  export type ProductionUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ProductionCreateWithoutMaterialInput, ProductionUncheckedCreateWithoutMaterialInput> | ProductionCreateWithoutMaterialInput[] | ProductionUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductionCreateOrConnectWithoutMaterialInput | ProductionCreateOrConnectWithoutMaterialInput[]
    upsert?: ProductionUpsertWithWhereUniqueWithoutMaterialInput | ProductionUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ProductionCreateManyMaterialInputEnvelope
    set?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    disconnect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    delete?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    connect?: ProductionWhereUniqueInput | ProductionWhereUniqueInput[]
    update?: ProductionUpdateWithWhereUniqueWithoutMaterialInput | ProductionUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ProductionUpdateManyWithWhereWithoutMaterialInput | ProductionUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ProductionScalarWhereInput | ProductionScalarWhereInput[]
  }

  export type DispatchUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<DispatchCreateWithoutMaterialInput, DispatchUncheckedCreateWithoutMaterialInput> | DispatchCreateWithoutMaterialInput[] | DispatchUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: DispatchCreateOrConnectWithoutMaterialInput | DispatchCreateOrConnectWithoutMaterialInput[]
    upsert?: DispatchUpsertWithWhereUniqueWithoutMaterialInput | DispatchUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: DispatchCreateManyMaterialInputEnvelope
    set?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    disconnect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    delete?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    connect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    update?: DispatchUpdateWithWhereUniqueWithoutMaterialInput | DispatchUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: DispatchUpdateManyWithWhereWithoutMaterialInput | DispatchUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: DispatchScalarWhereInput | DispatchScalarWhereInput[]
  }

  export type ReceivedMaterialUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ReceivedMaterialCreateWithoutMaterialInput, ReceivedMaterialUncheckedCreateWithoutMaterialInput> | ReceivedMaterialCreateWithoutMaterialInput[] | ReceivedMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ReceivedMaterialCreateOrConnectWithoutMaterialInput | ReceivedMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: ReceivedMaterialUpsertWithWhereUniqueWithoutMaterialInput | ReceivedMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ReceivedMaterialCreateManyMaterialInputEnvelope
    set?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
    disconnect?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
    delete?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
    connect?: ReceivedMaterialWhereUniqueInput | ReceivedMaterialWhereUniqueInput[]
    update?: ReceivedMaterialUpdateWithWhereUniqueWithoutMaterialInput | ReceivedMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ReceivedMaterialUpdateManyWithWhereWithoutMaterialInput | ReceivedMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ReceivedMaterialScalarWhereInput | ReceivedMaterialScalarWhereInput[]
  }

  export type InventorySnapshotUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<InventorySnapshotCreateWithoutMaterialInput, InventorySnapshotUncheckedCreateWithoutMaterialInput> | InventorySnapshotCreateWithoutMaterialInput[] | InventorySnapshotUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: InventorySnapshotCreateOrConnectWithoutMaterialInput | InventorySnapshotCreateOrConnectWithoutMaterialInput[]
    upsert?: InventorySnapshotUpsertWithWhereUniqueWithoutMaterialInput | InventorySnapshotUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: InventorySnapshotCreateManyMaterialInputEnvelope
    set?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
    disconnect?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
    delete?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
    connect?: InventorySnapshotWhereUniqueInput | InventorySnapshotWhereUniqueInput[]
    update?: InventorySnapshotUpdateWithWhereUniqueWithoutMaterialInput | InventorySnapshotUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: InventorySnapshotUpdateManyWithWhereWithoutMaterialInput | InventorySnapshotUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: InventorySnapshotScalarWhereInput | InventorySnapshotScalarWhereInput[]
  }

  export type EquipmentLogCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<EquipmentLogCreateWithoutEquipmentInput, EquipmentLogUncheckedCreateWithoutEquipmentInput> | EquipmentLogCreateWithoutEquipmentInput[] | EquipmentLogUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: EquipmentLogCreateOrConnectWithoutEquipmentInput | EquipmentLogCreateOrConnectWithoutEquipmentInput[]
    createMany?: EquipmentLogCreateManyEquipmentInputEnvelope
    connect?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
  }

  export type EquipmentLogUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<EquipmentLogCreateWithoutEquipmentInput, EquipmentLogUncheckedCreateWithoutEquipmentInput> | EquipmentLogCreateWithoutEquipmentInput[] | EquipmentLogUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: EquipmentLogCreateOrConnectWithoutEquipmentInput | EquipmentLogCreateOrConnectWithoutEquipmentInput[]
    createMany?: EquipmentLogCreateManyEquipmentInputEnvelope
    connect?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
  }

  export type EquipmentLogUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<EquipmentLogCreateWithoutEquipmentInput, EquipmentLogUncheckedCreateWithoutEquipmentInput> | EquipmentLogCreateWithoutEquipmentInput[] | EquipmentLogUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: EquipmentLogCreateOrConnectWithoutEquipmentInput | EquipmentLogCreateOrConnectWithoutEquipmentInput[]
    upsert?: EquipmentLogUpsertWithWhereUniqueWithoutEquipmentInput | EquipmentLogUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: EquipmentLogCreateManyEquipmentInputEnvelope
    set?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
    disconnect?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
    delete?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
    connect?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
    update?: EquipmentLogUpdateWithWhereUniqueWithoutEquipmentInput | EquipmentLogUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: EquipmentLogUpdateManyWithWhereWithoutEquipmentInput | EquipmentLogUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: EquipmentLogScalarWhereInput | EquipmentLogScalarWhereInput[]
  }

  export type EquipmentLogUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<EquipmentLogCreateWithoutEquipmentInput, EquipmentLogUncheckedCreateWithoutEquipmentInput> | EquipmentLogCreateWithoutEquipmentInput[] | EquipmentLogUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: EquipmentLogCreateOrConnectWithoutEquipmentInput | EquipmentLogCreateOrConnectWithoutEquipmentInput[]
    upsert?: EquipmentLogUpsertWithWhereUniqueWithoutEquipmentInput | EquipmentLogUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: EquipmentLogCreateManyEquipmentInputEnvelope
    set?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
    disconnect?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
    delete?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
    connect?: EquipmentLogWhereUniqueInput | EquipmentLogWhereUniqueInput[]
    update?: EquipmentLogUpdateWithWhereUniqueWithoutEquipmentInput | EquipmentLogUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: EquipmentLogUpdateManyWithWhereWithoutEquipmentInput | EquipmentLogUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: EquipmentLogScalarWhereInput | EquipmentLogScalarWhereInput[]
  }

  export type ManpowerLogCreateNestedManyWithoutRoleInput = {
    create?: XOR<ManpowerLogCreateWithoutRoleInput, ManpowerLogUncheckedCreateWithoutRoleInput> | ManpowerLogCreateWithoutRoleInput[] | ManpowerLogUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ManpowerLogCreateOrConnectWithoutRoleInput | ManpowerLogCreateOrConnectWithoutRoleInput[]
    createMany?: ManpowerLogCreateManyRoleInputEnvelope
    connect?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
  }

  export type ManpowerLogUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<ManpowerLogCreateWithoutRoleInput, ManpowerLogUncheckedCreateWithoutRoleInput> | ManpowerLogCreateWithoutRoleInput[] | ManpowerLogUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ManpowerLogCreateOrConnectWithoutRoleInput | ManpowerLogCreateOrConnectWithoutRoleInput[]
    createMany?: ManpowerLogCreateManyRoleInputEnvelope
    connect?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
  }

  export type ManpowerLogUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ManpowerLogCreateWithoutRoleInput, ManpowerLogUncheckedCreateWithoutRoleInput> | ManpowerLogCreateWithoutRoleInput[] | ManpowerLogUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ManpowerLogCreateOrConnectWithoutRoleInput | ManpowerLogCreateOrConnectWithoutRoleInput[]
    upsert?: ManpowerLogUpsertWithWhereUniqueWithoutRoleInput | ManpowerLogUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ManpowerLogCreateManyRoleInputEnvelope
    set?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
    disconnect?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
    delete?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
    connect?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
    update?: ManpowerLogUpdateWithWhereUniqueWithoutRoleInput | ManpowerLogUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ManpowerLogUpdateManyWithWhereWithoutRoleInput | ManpowerLogUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ManpowerLogScalarWhereInput | ManpowerLogScalarWhereInput[]
  }

  export type ManpowerLogUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ManpowerLogCreateWithoutRoleInput, ManpowerLogUncheckedCreateWithoutRoleInput> | ManpowerLogCreateWithoutRoleInput[] | ManpowerLogUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ManpowerLogCreateOrConnectWithoutRoleInput | ManpowerLogCreateOrConnectWithoutRoleInput[]
    upsert?: ManpowerLogUpsertWithWhereUniqueWithoutRoleInput | ManpowerLogUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ManpowerLogCreateManyRoleInputEnvelope
    set?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
    disconnect?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
    delete?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
    connect?: ManpowerLogWhereUniqueInput | ManpowerLogWhereUniqueInput[]
    update?: ManpowerLogUpdateWithWhereUniqueWithoutRoleInput | ManpowerLogUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ManpowerLogUpdateManyWithWhereWithoutRoleInput | ManpowerLogUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ManpowerLogScalarWhereInput | ManpowerLogScalarWhereInput[]
  }

  export type SiteCreateNestedOneWithoutProductionsInput = {
    create?: XOR<SiteCreateWithoutProductionsInput, SiteUncheckedCreateWithoutProductionsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutProductionsInput
    connect?: SiteWhereUniqueInput
  }

  export type MaterialCreateNestedOneWithoutProductionsInput = {
    create?: XOR<MaterialCreateWithoutProductionsInput, MaterialUncheckedCreateWithoutProductionsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutProductionsInput
    connect?: MaterialWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SiteUpdateOneRequiredWithoutProductionsNestedInput = {
    create?: XOR<SiteCreateWithoutProductionsInput, SiteUncheckedCreateWithoutProductionsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutProductionsInput
    upsert?: SiteUpsertWithoutProductionsInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutProductionsInput, SiteUpdateWithoutProductionsInput>, SiteUncheckedUpdateWithoutProductionsInput>
  }

  export type MaterialUpdateOneRequiredWithoutProductionsNestedInput = {
    create?: XOR<MaterialCreateWithoutProductionsInput, MaterialUncheckedCreateWithoutProductionsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutProductionsInput
    upsert?: MaterialUpsertWithoutProductionsInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutProductionsInput, MaterialUpdateWithoutProductionsInput>, MaterialUncheckedUpdateWithoutProductionsInput>
  }

  export type SiteCreateNestedOneWithoutDispatchesInput = {
    create?: XOR<SiteCreateWithoutDispatchesInput, SiteUncheckedCreateWithoutDispatchesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutDispatchesInput
    connect?: SiteWhereUniqueInput
  }

  export type MaterialCreateNestedOneWithoutDispatchesInput = {
    create?: XOR<MaterialCreateWithoutDispatchesInput, MaterialUncheckedCreateWithoutDispatchesInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutDispatchesInput
    connect?: MaterialWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SiteUpdateOneRequiredWithoutDispatchesNestedInput = {
    create?: XOR<SiteCreateWithoutDispatchesInput, SiteUncheckedCreateWithoutDispatchesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutDispatchesInput
    upsert?: SiteUpsertWithoutDispatchesInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutDispatchesInput, SiteUpdateWithoutDispatchesInput>, SiteUncheckedUpdateWithoutDispatchesInput>
  }

  export type MaterialUpdateOneRequiredWithoutDispatchesNestedInput = {
    create?: XOR<MaterialCreateWithoutDispatchesInput, MaterialUncheckedCreateWithoutDispatchesInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutDispatchesInput
    upsert?: MaterialUpsertWithoutDispatchesInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutDispatchesInput, MaterialUpdateWithoutDispatchesInput>, MaterialUncheckedUpdateWithoutDispatchesInput>
  }

  export type SiteCreateNestedOneWithoutReceivedMaterialsInput = {
    create?: XOR<SiteCreateWithoutReceivedMaterialsInput, SiteUncheckedCreateWithoutReceivedMaterialsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutReceivedMaterialsInput
    connect?: SiteWhereUniqueInput
  }

  export type MaterialCreateNestedOneWithoutReceivedMaterialsInput = {
    create?: XOR<MaterialCreateWithoutReceivedMaterialsInput, MaterialUncheckedCreateWithoutReceivedMaterialsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutReceivedMaterialsInput
    connect?: MaterialWhereUniqueInput
  }

  export type SiteUpdateOneRequiredWithoutReceivedMaterialsNestedInput = {
    create?: XOR<SiteCreateWithoutReceivedMaterialsInput, SiteUncheckedCreateWithoutReceivedMaterialsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutReceivedMaterialsInput
    upsert?: SiteUpsertWithoutReceivedMaterialsInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutReceivedMaterialsInput, SiteUpdateWithoutReceivedMaterialsInput>, SiteUncheckedUpdateWithoutReceivedMaterialsInput>
  }

  export type MaterialUpdateOneRequiredWithoutReceivedMaterialsNestedInput = {
    create?: XOR<MaterialCreateWithoutReceivedMaterialsInput, MaterialUncheckedCreateWithoutReceivedMaterialsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutReceivedMaterialsInput
    upsert?: MaterialUpsertWithoutReceivedMaterialsInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutReceivedMaterialsInput, MaterialUpdateWithoutReceivedMaterialsInput>, MaterialUncheckedUpdateWithoutReceivedMaterialsInput>
  }

  export type SiteCreateNestedOneWithoutEquipmentLogsInput = {
    create?: XOR<SiteCreateWithoutEquipmentLogsInput, SiteUncheckedCreateWithoutEquipmentLogsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutEquipmentLogsInput
    connect?: SiteWhereUniqueInput
  }

  export type EquipmentCreateNestedOneWithoutEquipmentLogsInput = {
    create?: XOR<EquipmentCreateWithoutEquipmentLogsInput, EquipmentUncheckedCreateWithoutEquipmentLogsInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutEquipmentLogsInput
    connect?: EquipmentWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SiteUpdateOneRequiredWithoutEquipmentLogsNestedInput = {
    create?: XOR<SiteCreateWithoutEquipmentLogsInput, SiteUncheckedCreateWithoutEquipmentLogsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutEquipmentLogsInput
    upsert?: SiteUpsertWithoutEquipmentLogsInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutEquipmentLogsInput, SiteUpdateWithoutEquipmentLogsInput>, SiteUncheckedUpdateWithoutEquipmentLogsInput>
  }

  export type EquipmentUpdateOneRequiredWithoutEquipmentLogsNestedInput = {
    create?: XOR<EquipmentCreateWithoutEquipmentLogsInput, EquipmentUncheckedCreateWithoutEquipmentLogsInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutEquipmentLogsInput
    upsert?: EquipmentUpsertWithoutEquipmentLogsInput
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutEquipmentLogsInput, EquipmentUpdateWithoutEquipmentLogsInput>, EquipmentUncheckedUpdateWithoutEquipmentLogsInput>
  }

  export type SiteCreateNestedOneWithoutManpowerLogsInput = {
    create?: XOR<SiteCreateWithoutManpowerLogsInput, SiteUncheckedCreateWithoutManpowerLogsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutManpowerLogsInput
    connect?: SiteWhereUniqueInput
  }

  export type ManpowerRoleCreateNestedOneWithoutManpowerLogsInput = {
    create?: XOR<ManpowerRoleCreateWithoutManpowerLogsInput, ManpowerRoleUncheckedCreateWithoutManpowerLogsInput>
    connectOrCreate?: ManpowerRoleCreateOrConnectWithoutManpowerLogsInput
    connect?: ManpowerRoleWhereUniqueInput
  }

  export type SiteUpdateOneRequiredWithoutManpowerLogsNestedInput = {
    create?: XOR<SiteCreateWithoutManpowerLogsInput, SiteUncheckedCreateWithoutManpowerLogsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutManpowerLogsInput
    upsert?: SiteUpsertWithoutManpowerLogsInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutManpowerLogsInput, SiteUpdateWithoutManpowerLogsInput>, SiteUncheckedUpdateWithoutManpowerLogsInput>
  }

  export type ManpowerRoleUpdateOneRequiredWithoutManpowerLogsNestedInput = {
    create?: XOR<ManpowerRoleCreateWithoutManpowerLogsInput, ManpowerRoleUncheckedCreateWithoutManpowerLogsInput>
    connectOrCreate?: ManpowerRoleCreateOrConnectWithoutManpowerLogsInput
    upsert?: ManpowerRoleUpsertWithoutManpowerLogsInput
    connect?: ManpowerRoleWhereUniqueInput
    update?: XOR<XOR<ManpowerRoleUpdateToOneWithWhereWithoutManpowerLogsInput, ManpowerRoleUpdateWithoutManpowerLogsInput>, ManpowerRoleUncheckedUpdateWithoutManpowerLogsInput>
  }

  export type SiteCreateNestedOneWithoutInventorySnapshotsInput = {
    create?: XOR<SiteCreateWithoutInventorySnapshotsInput, SiteUncheckedCreateWithoutInventorySnapshotsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutInventorySnapshotsInput
    connect?: SiteWhereUniqueInput
  }

  export type MaterialCreateNestedOneWithoutInventorySnapshotsInput = {
    create?: XOR<MaterialCreateWithoutInventorySnapshotsInput, MaterialUncheckedCreateWithoutInventorySnapshotsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutInventorySnapshotsInput
    connect?: MaterialWhereUniqueInput
  }

  export type SiteUpdateOneRequiredWithoutInventorySnapshotsNestedInput = {
    create?: XOR<SiteCreateWithoutInventorySnapshotsInput, SiteUncheckedCreateWithoutInventorySnapshotsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutInventorySnapshotsInput
    upsert?: SiteUpsertWithoutInventorySnapshotsInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutInventorySnapshotsInput, SiteUpdateWithoutInventorySnapshotsInput>, SiteUncheckedUpdateWithoutInventorySnapshotsInput>
  }

  export type MaterialUpdateOneRequiredWithoutInventorySnapshotsNestedInput = {
    create?: XOR<MaterialCreateWithoutInventorySnapshotsInput, MaterialUncheckedCreateWithoutInventorySnapshotsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutInventorySnapshotsInput
    upsert?: MaterialUpsertWithoutInventorySnapshotsInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutInventorySnapshotsInput, MaterialUpdateWithoutInventorySnapshotsInput>, MaterialUncheckedUpdateWithoutInventorySnapshotsInput>
  }

  export type SiteCreateNestedOneWithoutExportJobsInput = {
    create?: XOR<SiteCreateWithoutExportJobsInput, SiteUncheckedCreateWithoutExportJobsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutExportJobsInput
    connect?: SiteWhereUniqueInput
  }

  export type ExportAuditCreateNestedOneWithoutJobInput = {
    create?: XOR<ExportAuditCreateWithoutJobInput, ExportAuditUncheckedCreateWithoutJobInput>
    connectOrCreate?: ExportAuditCreateOrConnectWithoutJobInput
    connect?: ExportAuditWhereUniqueInput
  }

  export type ExportAuditUncheckedCreateNestedOneWithoutJobInput = {
    create?: XOR<ExportAuditCreateWithoutJobInput, ExportAuditUncheckedCreateWithoutJobInput>
    connectOrCreate?: ExportAuditCreateOrConnectWithoutJobInput
    connect?: ExportAuditWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SiteUpdateOneRequiredWithoutExportJobsNestedInput = {
    create?: XOR<SiteCreateWithoutExportJobsInput, SiteUncheckedCreateWithoutExportJobsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutExportJobsInput
    upsert?: SiteUpsertWithoutExportJobsInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutExportJobsInput, SiteUpdateWithoutExportJobsInput>, SiteUncheckedUpdateWithoutExportJobsInput>
  }

  export type ExportAuditUpdateOneWithoutJobNestedInput = {
    create?: XOR<ExportAuditCreateWithoutJobInput, ExportAuditUncheckedCreateWithoutJobInput>
    connectOrCreate?: ExportAuditCreateOrConnectWithoutJobInput
    upsert?: ExportAuditUpsertWithoutJobInput
    disconnect?: ExportAuditWhereInput | boolean
    delete?: ExportAuditWhereInput | boolean
    connect?: ExportAuditWhereUniqueInput
    update?: XOR<XOR<ExportAuditUpdateToOneWithWhereWithoutJobInput, ExportAuditUpdateWithoutJobInput>, ExportAuditUncheckedUpdateWithoutJobInput>
  }

  export type ExportAuditUncheckedUpdateOneWithoutJobNestedInput = {
    create?: XOR<ExportAuditCreateWithoutJobInput, ExportAuditUncheckedCreateWithoutJobInput>
    connectOrCreate?: ExportAuditCreateOrConnectWithoutJobInput
    upsert?: ExportAuditUpsertWithoutJobInput
    disconnect?: ExportAuditWhereInput | boolean
    delete?: ExportAuditWhereInput | boolean
    connect?: ExportAuditWhereUniqueInput
    update?: XOR<XOR<ExportAuditUpdateToOneWithWhereWithoutJobInput, ExportAuditUpdateWithoutJobInput>, ExportAuditUncheckedUpdateWithoutJobInput>
  }

  export type SiteCreateNestedOneWithoutExportAuditsInput = {
    create?: XOR<SiteCreateWithoutExportAuditsInput, SiteUncheckedCreateWithoutExportAuditsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutExportAuditsInput
    connect?: SiteWhereUniqueInput
  }

  export type ExportJobCreateNestedOneWithoutExportAuditInput = {
    create?: XOR<ExportJobCreateWithoutExportAuditInput, ExportJobUncheckedCreateWithoutExportAuditInput>
    connectOrCreate?: ExportJobCreateOrConnectWithoutExportAuditInput
    connect?: ExportJobWhereUniqueInput
  }

  export type SiteUpdateOneRequiredWithoutExportAuditsNestedInput = {
    create?: XOR<SiteCreateWithoutExportAuditsInput, SiteUncheckedCreateWithoutExportAuditsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutExportAuditsInput
    upsert?: SiteUpsertWithoutExportAuditsInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutExportAuditsInput, SiteUpdateWithoutExportAuditsInput>, SiteUncheckedUpdateWithoutExportAuditsInput>
  }

  export type ExportJobUpdateOneRequiredWithoutExportAuditNestedInput = {
    create?: XOR<ExportJobCreateWithoutExportAuditInput, ExportJobUncheckedCreateWithoutExportAuditInput>
    connectOrCreate?: ExportJobCreateOrConnectWithoutExportAuditInput
    upsert?: ExportJobUpsertWithoutExportAuditInput
    connect?: ExportJobWhereUniqueInput
    update?: XOR<XOR<ExportJobUpdateToOneWithWhereWithoutExportAuditInput, ExportJobUpdateWithoutExportAuditInput>, ExportJobUncheckedUpdateWithoutExportAuditInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProductionCreateWithoutSiteInput = {
    id?: string
    date: Date | string
    shift?: string | null
    qtyTon: Decimal | DecimalJsLike | number | string
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    material: MaterialCreateNestedOneWithoutProductionsInput
  }

  export type ProductionUncheckedCreateWithoutSiteInput = {
    id?: string
    date: Date | string
    shift?: string | null
    materialId: string
    qtyTon: Decimal | DecimalJsLike | number | string
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ProductionCreateOrConnectWithoutSiteInput = {
    where: ProductionWhereUniqueInput
    create: XOR<ProductionCreateWithoutSiteInput, ProductionUncheckedCreateWithoutSiteInput>
  }

  export type ProductionCreateManySiteInputEnvelope = {
    data: ProductionCreateManySiteInput | ProductionCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type DispatchCreateWithoutSiteInput = {
    id?: string
    date: Date | string
    qtyTon: Decimal | DecimalJsLike | number | string
    trips?: number | null
    owner?: string | null
    reference?: string | null
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    material: MaterialCreateNestedOneWithoutDispatchesInput
  }

  export type DispatchUncheckedCreateWithoutSiteInput = {
    id?: string
    date: Date | string
    materialId: string
    qtyTon: Decimal | DecimalJsLike | number | string
    trips?: number | null
    owner?: string | null
    reference?: string | null
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type DispatchCreateOrConnectWithoutSiteInput = {
    where: DispatchWhereUniqueInput
    create: XOR<DispatchCreateWithoutSiteInput, DispatchUncheckedCreateWithoutSiteInput>
  }

  export type DispatchCreateManySiteInputEnvelope = {
    data: DispatchCreateManySiteInput | DispatchCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type ReceivedMaterialCreateWithoutSiteInput = {
    id?: string
    date: Date | string
    qtyTon: Decimal | DecimalJsLike | number | string
    source?: string | null
    vehicleRef?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    material: MaterialCreateNestedOneWithoutReceivedMaterialsInput
  }

  export type ReceivedMaterialUncheckedCreateWithoutSiteInput = {
    id?: string
    date: Date | string
    materialId: string
    qtyTon: Decimal | DecimalJsLike | number | string
    source?: string | null
    vehicleRef?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ReceivedMaterialCreateOrConnectWithoutSiteInput = {
    where: ReceivedMaterialWhereUniqueInput
    create: XOR<ReceivedMaterialCreateWithoutSiteInput, ReceivedMaterialUncheckedCreateWithoutSiteInput>
  }

  export type ReceivedMaterialCreateManySiteInputEnvelope = {
    data: ReceivedMaterialCreateManySiteInput | ReceivedMaterialCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentLogCreateWithoutSiteInput = {
    id?: string
    date: Date | string
    hours: Decimal | DecimalJsLike | number | string
    count?: number
    shift?: string | null
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    equipment: EquipmentCreateNestedOneWithoutEquipmentLogsInput
  }

  export type EquipmentLogUncheckedCreateWithoutSiteInput = {
    id?: string
    date: Date | string
    equipmentId: string
    hours: Decimal | DecimalJsLike | number | string
    count?: number
    shift?: string | null
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type EquipmentLogCreateOrConnectWithoutSiteInput = {
    where: EquipmentLogWhereUniqueInput
    create: XOR<EquipmentLogCreateWithoutSiteInput, EquipmentLogUncheckedCreateWithoutSiteInput>
  }

  export type EquipmentLogCreateManySiteInputEnvelope = {
    data: EquipmentLogCreateManySiteInput | EquipmentLogCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type ManpowerLogCreateWithoutSiteInput = {
    id?: string
    date: Date | string
    headcount: number
    hours: Decimal | DecimalJsLike | number | string
    shift?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    role: ManpowerRoleCreateNestedOneWithoutManpowerLogsInput
  }

  export type ManpowerLogUncheckedCreateWithoutSiteInput = {
    id?: string
    date: Date | string
    roleId: string
    headcount: number
    hours: Decimal | DecimalJsLike | number | string
    shift?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ManpowerLogCreateOrConnectWithoutSiteInput = {
    where: ManpowerLogWhereUniqueInput
    create: XOR<ManpowerLogCreateWithoutSiteInput, ManpowerLogUncheckedCreateWithoutSiteInput>
  }

  export type ManpowerLogCreateManySiteInputEnvelope = {
    data: ManpowerLogCreateManySiteInput | ManpowerLogCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type InventorySnapshotCreateWithoutSiteInput = {
    id?: string
    date: Date | string
    openingTon: Decimal | DecimalJsLike | number | string
    producedTon: Decimal | DecimalJsLike | number | string
    receivedTon: Decimal | DecimalJsLike | number | string
    dispatchedTon: Decimal | DecimalJsLike | number | string
    adjustmentTon?: Decimal | DecimalJsLike | number | string
    closingTon: Decimal | DecimalJsLike | number | string
    isCalculated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    material: MaterialCreateNestedOneWithoutInventorySnapshotsInput
  }

  export type InventorySnapshotUncheckedCreateWithoutSiteInput = {
    id?: string
    date: Date | string
    materialId: string
    openingTon: Decimal | DecimalJsLike | number | string
    producedTon: Decimal | DecimalJsLike | number | string
    receivedTon: Decimal | DecimalJsLike | number | string
    dispatchedTon: Decimal | DecimalJsLike | number | string
    adjustmentTon?: Decimal | DecimalJsLike | number | string
    closingTon: Decimal | DecimalJsLike | number | string
    isCalculated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type InventorySnapshotCreateOrConnectWithoutSiteInput = {
    where: InventorySnapshotWhereUniqueInput
    create: XOR<InventorySnapshotCreateWithoutSiteInput, InventorySnapshotUncheckedCreateWithoutSiteInput>
  }

  export type InventorySnapshotCreateManySiteInputEnvelope = {
    data: InventorySnapshotCreateManySiteInput | InventorySnapshotCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type ExportJobCreateWithoutSiteInput = {
    id?: string
    userId: string
    module: string
    dateFrom: Date | string
    dateTo: Date | string
    granularity?: string
    format: string
    status?: string
    progress?: number
    filePath?: string | null
    fileSize?: number | null
    fileHash?: string | null
    errorMessage?: string | null
    downloadUrl?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exportAudit?: ExportAuditCreateNestedOneWithoutJobInput
  }

  export type ExportJobUncheckedCreateWithoutSiteInput = {
    id?: string
    userId: string
    module: string
    dateFrom: Date | string
    dateTo: Date | string
    granularity?: string
    format: string
    status?: string
    progress?: number
    filePath?: string | null
    fileSize?: number | null
    fileHash?: string | null
    errorMessage?: string | null
    downloadUrl?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exportAudit?: ExportAuditUncheckedCreateNestedOneWithoutJobInput
  }

  export type ExportJobCreateOrConnectWithoutSiteInput = {
    where: ExportJobWhereUniqueInput
    create: XOR<ExportJobCreateWithoutSiteInput, ExportJobUncheckedCreateWithoutSiteInput>
  }

  export type ExportJobCreateManySiteInputEnvelope = {
    data: ExportJobCreateManySiteInput | ExportJobCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type ExportAuditCreateWithoutSiteInput = {
    id?: string
    userId: string
    module: string
    filtersJson: string
    columnPreset?: string | null
    recordCount: number
    fileSize: number
    fileHash: string
    downloadCount?: number
    lastDownload?: Date | string | null
    createdAt?: Date | string
    job: ExportJobCreateNestedOneWithoutExportAuditInput
  }

  export type ExportAuditUncheckedCreateWithoutSiteInput = {
    id?: string
    jobId: string
    userId: string
    module: string
    filtersJson: string
    columnPreset?: string | null
    recordCount: number
    fileSize: number
    fileHash: string
    downloadCount?: number
    lastDownload?: Date | string | null
    createdAt?: Date | string
  }

  export type ExportAuditCreateOrConnectWithoutSiteInput = {
    where: ExportAuditWhereUniqueInput
    create: XOR<ExportAuditCreateWithoutSiteInput, ExportAuditUncheckedCreateWithoutSiteInput>
  }

  export type ExportAuditCreateManySiteInputEnvelope = {
    data: ExportAuditCreateManySiteInput | ExportAuditCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type ProductionUpsertWithWhereUniqueWithoutSiteInput = {
    where: ProductionWhereUniqueInput
    update: XOR<ProductionUpdateWithoutSiteInput, ProductionUncheckedUpdateWithoutSiteInput>
    create: XOR<ProductionCreateWithoutSiteInput, ProductionUncheckedCreateWithoutSiteInput>
  }

  export type ProductionUpdateWithWhereUniqueWithoutSiteInput = {
    where: ProductionWhereUniqueInput
    data: XOR<ProductionUpdateWithoutSiteInput, ProductionUncheckedUpdateWithoutSiteInput>
  }

  export type ProductionUpdateManyWithWhereWithoutSiteInput = {
    where: ProductionScalarWhereInput
    data: XOR<ProductionUpdateManyMutationInput, ProductionUncheckedUpdateManyWithoutSiteInput>
  }

  export type ProductionScalarWhereInput = {
    AND?: ProductionScalarWhereInput | ProductionScalarWhereInput[]
    OR?: ProductionScalarWhereInput[]
    NOT?: ProductionScalarWhereInput | ProductionScalarWhereInput[]
    id?: StringFilter<"Production"> | string
    siteId?: StringFilter<"Production"> | string
    date?: DateTimeFilter<"Production"> | Date | string
    shift?: StringNullableFilter<"Production"> | string | null
    materialId?: StringFilter<"Production"> | string
    qtyTon?: DecimalFilter<"Production"> | Decimal | DecimalJsLike | number | string
    operation?: StringFilter<"Production"> | string
    notes?: StringNullableFilter<"Production"> | string | null
    createdAt?: DateTimeFilter<"Production"> | Date | string
    updatedAt?: DateTimeFilter<"Production"> | Date | string
    createdBy?: StringNullableFilter<"Production"> | string | null
  }

  export type DispatchUpsertWithWhereUniqueWithoutSiteInput = {
    where: DispatchWhereUniqueInput
    update: XOR<DispatchUpdateWithoutSiteInput, DispatchUncheckedUpdateWithoutSiteInput>
    create: XOR<DispatchCreateWithoutSiteInput, DispatchUncheckedCreateWithoutSiteInput>
  }

  export type DispatchUpdateWithWhereUniqueWithoutSiteInput = {
    where: DispatchWhereUniqueInput
    data: XOR<DispatchUpdateWithoutSiteInput, DispatchUncheckedUpdateWithoutSiteInput>
  }

  export type DispatchUpdateManyWithWhereWithoutSiteInput = {
    where: DispatchScalarWhereInput
    data: XOR<DispatchUpdateManyMutationInput, DispatchUncheckedUpdateManyWithoutSiteInput>
  }

  export type DispatchScalarWhereInput = {
    AND?: DispatchScalarWhereInput | DispatchScalarWhereInput[]
    OR?: DispatchScalarWhereInput[]
    NOT?: DispatchScalarWhereInput | DispatchScalarWhereInput[]
    id?: StringFilter<"Dispatch"> | string
    siteId?: StringFilter<"Dispatch"> | string
    date?: DateTimeFilter<"Dispatch"> | Date | string
    materialId?: StringFilter<"Dispatch"> | string
    qtyTon?: DecimalFilter<"Dispatch"> | Decimal | DecimalJsLike | number | string
    trips?: IntNullableFilter<"Dispatch"> | number | null
    owner?: StringNullableFilter<"Dispatch"> | string | null
    reference?: StringNullableFilter<"Dispatch"> | string | null
    operation?: StringFilter<"Dispatch"> | string
    notes?: StringNullableFilter<"Dispatch"> | string | null
    createdAt?: DateTimeFilter<"Dispatch"> | Date | string
    updatedAt?: DateTimeFilter<"Dispatch"> | Date | string
    createdBy?: StringNullableFilter<"Dispatch"> | string | null
  }

  export type ReceivedMaterialUpsertWithWhereUniqueWithoutSiteInput = {
    where: ReceivedMaterialWhereUniqueInput
    update: XOR<ReceivedMaterialUpdateWithoutSiteInput, ReceivedMaterialUncheckedUpdateWithoutSiteInput>
    create: XOR<ReceivedMaterialCreateWithoutSiteInput, ReceivedMaterialUncheckedCreateWithoutSiteInput>
  }

  export type ReceivedMaterialUpdateWithWhereUniqueWithoutSiteInput = {
    where: ReceivedMaterialWhereUniqueInput
    data: XOR<ReceivedMaterialUpdateWithoutSiteInput, ReceivedMaterialUncheckedUpdateWithoutSiteInput>
  }

  export type ReceivedMaterialUpdateManyWithWhereWithoutSiteInput = {
    where: ReceivedMaterialScalarWhereInput
    data: XOR<ReceivedMaterialUpdateManyMutationInput, ReceivedMaterialUncheckedUpdateManyWithoutSiteInput>
  }

  export type ReceivedMaterialScalarWhereInput = {
    AND?: ReceivedMaterialScalarWhereInput | ReceivedMaterialScalarWhereInput[]
    OR?: ReceivedMaterialScalarWhereInput[]
    NOT?: ReceivedMaterialScalarWhereInput | ReceivedMaterialScalarWhereInput[]
    id?: StringFilter<"ReceivedMaterial"> | string
    siteId?: StringFilter<"ReceivedMaterial"> | string
    date?: DateTimeFilter<"ReceivedMaterial"> | Date | string
    materialId?: StringFilter<"ReceivedMaterial"> | string
    qtyTon?: DecimalFilter<"ReceivedMaterial"> | Decimal | DecimalJsLike | number | string
    source?: StringNullableFilter<"ReceivedMaterial"> | string | null
    vehicleRef?: StringNullableFilter<"ReceivedMaterial"> | string | null
    notes?: StringNullableFilter<"ReceivedMaterial"> | string | null
    createdAt?: DateTimeFilter<"ReceivedMaterial"> | Date | string
    updatedAt?: DateTimeFilter<"ReceivedMaterial"> | Date | string
    createdBy?: StringNullableFilter<"ReceivedMaterial"> | string | null
  }

  export type EquipmentLogUpsertWithWhereUniqueWithoutSiteInput = {
    where: EquipmentLogWhereUniqueInput
    update: XOR<EquipmentLogUpdateWithoutSiteInput, EquipmentLogUncheckedUpdateWithoutSiteInput>
    create: XOR<EquipmentLogCreateWithoutSiteInput, EquipmentLogUncheckedCreateWithoutSiteInput>
  }

  export type EquipmentLogUpdateWithWhereUniqueWithoutSiteInput = {
    where: EquipmentLogWhereUniqueInput
    data: XOR<EquipmentLogUpdateWithoutSiteInput, EquipmentLogUncheckedUpdateWithoutSiteInput>
  }

  export type EquipmentLogUpdateManyWithWhereWithoutSiteInput = {
    where: EquipmentLogScalarWhereInput
    data: XOR<EquipmentLogUpdateManyMutationInput, EquipmentLogUncheckedUpdateManyWithoutSiteInput>
  }

  export type EquipmentLogScalarWhereInput = {
    AND?: EquipmentLogScalarWhereInput | EquipmentLogScalarWhereInput[]
    OR?: EquipmentLogScalarWhereInput[]
    NOT?: EquipmentLogScalarWhereInput | EquipmentLogScalarWhereInput[]
    id?: StringFilter<"EquipmentLog"> | string
    siteId?: StringFilter<"EquipmentLog"> | string
    date?: DateTimeFilter<"EquipmentLog"> | Date | string
    equipmentId?: StringFilter<"EquipmentLog"> | string
    hours?: DecimalFilter<"EquipmentLog"> | Decimal | DecimalJsLike | number | string
    count?: IntFilter<"EquipmentLog"> | number
    shift?: StringNullableFilter<"EquipmentLog"> | string | null
    status?: StringNullableFilter<"EquipmentLog"> | string | null
    notes?: StringNullableFilter<"EquipmentLog"> | string | null
    createdAt?: DateTimeFilter<"EquipmentLog"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentLog"> | Date | string
    createdBy?: StringNullableFilter<"EquipmentLog"> | string | null
  }

  export type ManpowerLogUpsertWithWhereUniqueWithoutSiteInput = {
    where: ManpowerLogWhereUniqueInput
    update: XOR<ManpowerLogUpdateWithoutSiteInput, ManpowerLogUncheckedUpdateWithoutSiteInput>
    create: XOR<ManpowerLogCreateWithoutSiteInput, ManpowerLogUncheckedCreateWithoutSiteInput>
  }

  export type ManpowerLogUpdateWithWhereUniqueWithoutSiteInput = {
    where: ManpowerLogWhereUniqueInput
    data: XOR<ManpowerLogUpdateWithoutSiteInput, ManpowerLogUncheckedUpdateWithoutSiteInput>
  }

  export type ManpowerLogUpdateManyWithWhereWithoutSiteInput = {
    where: ManpowerLogScalarWhereInput
    data: XOR<ManpowerLogUpdateManyMutationInput, ManpowerLogUncheckedUpdateManyWithoutSiteInput>
  }

  export type ManpowerLogScalarWhereInput = {
    AND?: ManpowerLogScalarWhereInput | ManpowerLogScalarWhereInput[]
    OR?: ManpowerLogScalarWhereInput[]
    NOT?: ManpowerLogScalarWhereInput | ManpowerLogScalarWhereInput[]
    id?: StringFilter<"ManpowerLog"> | string
    siteId?: StringFilter<"ManpowerLog"> | string
    date?: DateTimeFilter<"ManpowerLog"> | Date | string
    roleId?: StringFilter<"ManpowerLog"> | string
    headcount?: IntFilter<"ManpowerLog"> | number
    hours?: DecimalFilter<"ManpowerLog"> | Decimal | DecimalJsLike | number | string
    shift?: StringNullableFilter<"ManpowerLog"> | string | null
    notes?: StringNullableFilter<"ManpowerLog"> | string | null
    createdAt?: DateTimeFilter<"ManpowerLog"> | Date | string
    updatedAt?: DateTimeFilter<"ManpowerLog"> | Date | string
    createdBy?: StringNullableFilter<"ManpowerLog"> | string | null
  }

  export type InventorySnapshotUpsertWithWhereUniqueWithoutSiteInput = {
    where: InventorySnapshotWhereUniqueInput
    update: XOR<InventorySnapshotUpdateWithoutSiteInput, InventorySnapshotUncheckedUpdateWithoutSiteInput>
    create: XOR<InventorySnapshotCreateWithoutSiteInput, InventorySnapshotUncheckedCreateWithoutSiteInput>
  }

  export type InventorySnapshotUpdateWithWhereUniqueWithoutSiteInput = {
    where: InventorySnapshotWhereUniqueInput
    data: XOR<InventorySnapshotUpdateWithoutSiteInput, InventorySnapshotUncheckedUpdateWithoutSiteInput>
  }

  export type InventorySnapshotUpdateManyWithWhereWithoutSiteInput = {
    where: InventorySnapshotScalarWhereInput
    data: XOR<InventorySnapshotUpdateManyMutationInput, InventorySnapshotUncheckedUpdateManyWithoutSiteInput>
  }

  export type InventorySnapshotScalarWhereInput = {
    AND?: InventorySnapshotScalarWhereInput | InventorySnapshotScalarWhereInput[]
    OR?: InventorySnapshotScalarWhereInput[]
    NOT?: InventorySnapshotScalarWhereInput | InventorySnapshotScalarWhereInput[]
    id?: StringFilter<"InventorySnapshot"> | string
    siteId?: StringFilter<"InventorySnapshot"> | string
    date?: DateTimeFilter<"InventorySnapshot"> | Date | string
    materialId?: StringFilter<"InventorySnapshot"> | string
    openingTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    producedTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    receivedTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    dispatchedTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    adjustmentTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    closingTon?: DecimalFilter<"InventorySnapshot"> | Decimal | DecimalJsLike | number | string
    isCalculated?: BoolFilter<"InventorySnapshot"> | boolean
    createdAt?: DateTimeFilter<"InventorySnapshot"> | Date | string
    updatedAt?: DateTimeFilter<"InventorySnapshot"> | Date | string
    createdBy?: StringNullableFilter<"InventorySnapshot"> | string | null
  }

  export type ExportJobUpsertWithWhereUniqueWithoutSiteInput = {
    where: ExportJobWhereUniqueInput
    update: XOR<ExportJobUpdateWithoutSiteInput, ExportJobUncheckedUpdateWithoutSiteInput>
    create: XOR<ExportJobCreateWithoutSiteInput, ExportJobUncheckedCreateWithoutSiteInput>
  }

  export type ExportJobUpdateWithWhereUniqueWithoutSiteInput = {
    where: ExportJobWhereUniqueInput
    data: XOR<ExportJobUpdateWithoutSiteInput, ExportJobUncheckedUpdateWithoutSiteInput>
  }

  export type ExportJobUpdateManyWithWhereWithoutSiteInput = {
    where: ExportJobScalarWhereInput
    data: XOR<ExportJobUpdateManyMutationInput, ExportJobUncheckedUpdateManyWithoutSiteInput>
  }

  export type ExportJobScalarWhereInput = {
    AND?: ExportJobScalarWhereInput | ExportJobScalarWhereInput[]
    OR?: ExportJobScalarWhereInput[]
    NOT?: ExportJobScalarWhereInput | ExportJobScalarWhereInput[]
    id?: StringFilter<"ExportJob"> | string
    siteId?: StringFilter<"ExportJob"> | string
    userId?: StringFilter<"ExportJob"> | string
    module?: StringFilter<"ExportJob"> | string
    dateFrom?: DateTimeFilter<"ExportJob"> | Date | string
    dateTo?: DateTimeFilter<"ExportJob"> | Date | string
    granularity?: StringFilter<"ExportJob"> | string
    format?: StringFilter<"ExportJob"> | string
    status?: StringFilter<"ExportJob"> | string
    progress?: IntFilter<"ExportJob"> | number
    filePath?: StringNullableFilter<"ExportJob"> | string | null
    fileSize?: IntNullableFilter<"ExportJob"> | number | null
    fileHash?: StringNullableFilter<"ExportJob"> | string | null
    errorMessage?: StringNullableFilter<"ExportJob"> | string | null
    downloadUrl?: StringNullableFilter<"ExportJob"> | string | null
    expiresAt?: DateTimeNullableFilter<"ExportJob"> | Date | string | null
    createdAt?: DateTimeFilter<"ExportJob"> | Date | string
    updatedAt?: DateTimeFilter<"ExportJob"> | Date | string
  }

  export type ExportAuditUpsertWithWhereUniqueWithoutSiteInput = {
    where: ExportAuditWhereUniqueInput
    update: XOR<ExportAuditUpdateWithoutSiteInput, ExportAuditUncheckedUpdateWithoutSiteInput>
    create: XOR<ExportAuditCreateWithoutSiteInput, ExportAuditUncheckedCreateWithoutSiteInput>
  }

  export type ExportAuditUpdateWithWhereUniqueWithoutSiteInput = {
    where: ExportAuditWhereUniqueInput
    data: XOR<ExportAuditUpdateWithoutSiteInput, ExportAuditUncheckedUpdateWithoutSiteInput>
  }

  export type ExportAuditUpdateManyWithWhereWithoutSiteInput = {
    where: ExportAuditScalarWhereInput
    data: XOR<ExportAuditUpdateManyMutationInput, ExportAuditUncheckedUpdateManyWithoutSiteInput>
  }

  export type ExportAuditScalarWhereInput = {
    AND?: ExportAuditScalarWhereInput | ExportAuditScalarWhereInput[]
    OR?: ExportAuditScalarWhereInput[]
    NOT?: ExportAuditScalarWhereInput | ExportAuditScalarWhereInput[]
    id?: StringFilter<"ExportAudit"> | string
    jobId?: StringFilter<"ExportAudit"> | string
    siteId?: StringFilter<"ExportAudit"> | string
    userId?: StringFilter<"ExportAudit"> | string
    module?: StringFilter<"ExportAudit"> | string
    filtersJson?: StringFilter<"ExportAudit"> | string
    columnPreset?: StringNullableFilter<"ExportAudit"> | string | null
    recordCount?: IntFilter<"ExportAudit"> | number
    fileSize?: IntFilter<"ExportAudit"> | number
    fileHash?: StringFilter<"ExportAudit"> | string
    downloadCount?: IntFilter<"ExportAudit"> | number
    lastDownload?: DateTimeNullableFilter<"ExportAudit"> | Date | string | null
    createdAt?: DateTimeFilter<"ExportAudit"> | Date | string
  }

  export type ProductionCreateWithoutMaterialInput = {
    id?: string
    date: Date | string
    shift?: string | null
    qtyTon: Decimal | DecimalJsLike | number | string
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    site: SiteCreateNestedOneWithoutProductionsInput
  }

  export type ProductionUncheckedCreateWithoutMaterialInput = {
    id?: string
    siteId: string
    date: Date | string
    shift?: string | null
    qtyTon: Decimal | DecimalJsLike | number | string
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ProductionCreateOrConnectWithoutMaterialInput = {
    where: ProductionWhereUniqueInput
    create: XOR<ProductionCreateWithoutMaterialInput, ProductionUncheckedCreateWithoutMaterialInput>
  }

  export type ProductionCreateManyMaterialInputEnvelope = {
    data: ProductionCreateManyMaterialInput | ProductionCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type DispatchCreateWithoutMaterialInput = {
    id?: string
    date: Date | string
    qtyTon: Decimal | DecimalJsLike | number | string
    trips?: number | null
    owner?: string | null
    reference?: string | null
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    site: SiteCreateNestedOneWithoutDispatchesInput
  }

  export type DispatchUncheckedCreateWithoutMaterialInput = {
    id?: string
    siteId: string
    date: Date | string
    qtyTon: Decimal | DecimalJsLike | number | string
    trips?: number | null
    owner?: string | null
    reference?: string | null
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type DispatchCreateOrConnectWithoutMaterialInput = {
    where: DispatchWhereUniqueInput
    create: XOR<DispatchCreateWithoutMaterialInput, DispatchUncheckedCreateWithoutMaterialInput>
  }

  export type DispatchCreateManyMaterialInputEnvelope = {
    data: DispatchCreateManyMaterialInput | DispatchCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type ReceivedMaterialCreateWithoutMaterialInput = {
    id?: string
    date: Date | string
    qtyTon: Decimal | DecimalJsLike | number | string
    source?: string | null
    vehicleRef?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    site: SiteCreateNestedOneWithoutReceivedMaterialsInput
  }

  export type ReceivedMaterialUncheckedCreateWithoutMaterialInput = {
    id?: string
    siteId: string
    date: Date | string
    qtyTon: Decimal | DecimalJsLike | number | string
    source?: string | null
    vehicleRef?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ReceivedMaterialCreateOrConnectWithoutMaterialInput = {
    where: ReceivedMaterialWhereUniqueInput
    create: XOR<ReceivedMaterialCreateWithoutMaterialInput, ReceivedMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type ReceivedMaterialCreateManyMaterialInputEnvelope = {
    data: ReceivedMaterialCreateManyMaterialInput | ReceivedMaterialCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type InventorySnapshotCreateWithoutMaterialInput = {
    id?: string
    date: Date | string
    openingTon: Decimal | DecimalJsLike | number | string
    producedTon: Decimal | DecimalJsLike | number | string
    receivedTon: Decimal | DecimalJsLike | number | string
    dispatchedTon: Decimal | DecimalJsLike | number | string
    adjustmentTon?: Decimal | DecimalJsLike | number | string
    closingTon: Decimal | DecimalJsLike | number | string
    isCalculated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    site: SiteCreateNestedOneWithoutInventorySnapshotsInput
  }

  export type InventorySnapshotUncheckedCreateWithoutMaterialInput = {
    id?: string
    siteId: string
    date: Date | string
    openingTon: Decimal | DecimalJsLike | number | string
    producedTon: Decimal | DecimalJsLike | number | string
    receivedTon: Decimal | DecimalJsLike | number | string
    dispatchedTon: Decimal | DecimalJsLike | number | string
    adjustmentTon?: Decimal | DecimalJsLike | number | string
    closingTon: Decimal | DecimalJsLike | number | string
    isCalculated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type InventorySnapshotCreateOrConnectWithoutMaterialInput = {
    where: InventorySnapshotWhereUniqueInput
    create: XOR<InventorySnapshotCreateWithoutMaterialInput, InventorySnapshotUncheckedCreateWithoutMaterialInput>
  }

  export type InventorySnapshotCreateManyMaterialInputEnvelope = {
    data: InventorySnapshotCreateManyMaterialInput | InventorySnapshotCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type ProductionUpsertWithWhereUniqueWithoutMaterialInput = {
    where: ProductionWhereUniqueInput
    update: XOR<ProductionUpdateWithoutMaterialInput, ProductionUncheckedUpdateWithoutMaterialInput>
    create: XOR<ProductionCreateWithoutMaterialInput, ProductionUncheckedCreateWithoutMaterialInput>
  }

  export type ProductionUpdateWithWhereUniqueWithoutMaterialInput = {
    where: ProductionWhereUniqueInput
    data: XOR<ProductionUpdateWithoutMaterialInput, ProductionUncheckedUpdateWithoutMaterialInput>
  }

  export type ProductionUpdateManyWithWhereWithoutMaterialInput = {
    where: ProductionScalarWhereInput
    data: XOR<ProductionUpdateManyMutationInput, ProductionUncheckedUpdateManyWithoutMaterialInput>
  }

  export type DispatchUpsertWithWhereUniqueWithoutMaterialInput = {
    where: DispatchWhereUniqueInput
    update: XOR<DispatchUpdateWithoutMaterialInput, DispatchUncheckedUpdateWithoutMaterialInput>
    create: XOR<DispatchCreateWithoutMaterialInput, DispatchUncheckedCreateWithoutMaterialInput>
  }

  export type DispatchUpdateWithWhereUniqueWithoutMaterialInput = {
    where: DispatchWhereUniqueInput
    data: XOR<DispatchUpdateWithoutMaterialInput, DispatchUncheckedUpdateWithoutMaterialInput>
  }

  export type DispatchUpdateManyWithWhereWithoutMaterialInput = {
    where: DispatchScalarWhereInput
    data: XOR<DispatchUpdateManyMutationInput, DispatchUncheckedUpdateManyWithoutMaterialInput>
  }

  export type ReceivedMaterialUpsertWithWhereUniqueWithoutMaterialInput = {
    where: ReceivedMaterialWhereUniqueInput
    update: XOR<ReceivedMaterialUpdateWithoutMaterialInput, ReceivedMaterialUncheckedUpdateWithoutMaterialInput>
    create: XOR<ReceivedMaterialCreateWithoutMaterialInput, ReceivedMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type ReceivedMaterialUpdateWithWhereUniqueWithoutMaterialInput = {
    where: ReceivedMaterialWhereUniqueInput
    data: XOR<ReceivedMaterialUpdateWithoutMaterialInput, ReceivedMaterialUncheckedUpdateWithoutMaterialInput>
  }

  export type ReceivedMaterialUpdateManyWithWhereWithoutMaterialInput = {
    where: ReceivedMaterialScalarWhereInput
    data: XOR<ReceivedMaterialUpdateManyMutationInput, ReceivedMaterialUncheckedUpdateManyWithoutMaterialInput>
  }

  export type InventorySnapshotUpsertWithWhereUniqueWithoutMaterialInput = {
    where: InventorySnapshotWhereUniqueInput
    update: XOR<InventorySnapshotUpdateWithoutMaterialInput, InventorySnapshotUncheckedUpdateWithoutMaterialInput>
    create: XOR<InventorySnapshotCreateWithoutMaterialInput, InventorySnapshotUncheckedCreateWithoutMaterialInput>
  }

  export type InventorySnapshotUpdateWithWhereUniqueWithoutMaterialInput = {
    where: InventorySnapshotWhereUniqueInput
    data: XOR<InventorySnapshotUpdateWithoutMaterialInput, InventorySnapshotUncheckedUpdateWithoutMaterialInput>
  }

  export type InventorySnapshotUpdateManyWithWhereWithoutMaterialInput = {
    where: InventorySnapshotScalarWhereInput
    data: XOR<InventorySnapshotUpdateManyMutationInput, InventorySnapshotUncheckedUpdateManyWithoutMaterialInput>
  }

  export type EquipmentLogCreateWithoutEquipmentInput = {
    id?: string
    date: Date | string
    hours: Decimal | DecimalJsLike | number | string
    count?: number
    shift?: string | null
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    site: SiteCreateNestedOneWithoutEquipmentLogsInput
  }

  export type EquipmentLogUncheckedCreateWithoutEquipmentInput = {
    id?: string
    siteId: string
    date: Date | string
    hours: Decimal | DecimalJsLike | number | string
    count?: number
    shift?: string | null
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type EquipmentLogCreateOrConnectWithoutEquipmentInput = {
    where: EquipmentLogWhereUniqueInput
    create: XOR<EquipmentLogCreateWithoutEquipmentInput, EquipmentLogUncheckedCreateWithoutEquipmentInput>
  }

  export type EquipmentLogCreateManyEquipmentInputEnvelope = {
    data: EquipmentLogCreateManyEquipmentInput | EquipmentLogCreateManyEquipmentInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentLogUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: EquipmentLogWhereUniqueInput
    update: XOR<EquipmentLogUpdateWithoutEquipmentInput, EquipmentLogUncheckedUpdateWithoutEquipmentInput>
    create: XOR<EquipmentLogCreateWithoutEquipmentInput, EquipmentLogUncheckedCreateWithoutEquipmentInput>
  }

  export type EquipmentLogUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: EquipmentLogWhereUniqueInput
    data: XOR<EquipmentLogUpdateWithoutEquipmentInput, EquipmentLogUncheckedUpdateWithoutEquipmentInput>
  }

  export type EquipmentLogUpdateManyWithWhereWithoutEquipmentInput = {
    where: EquipmentLogScalarWhereInput
    data: XOR<EquipmentLogUpdateManyMutationInput, EquipmentLogUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type ManpowerLogCreateWithoutRoleInput = {
    id?: string
    date: Date | string
    headcount: number
    hours: Decimal | DecimalJsLike | number | string
    shift?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    site: SiteCreateNestedOneWithoutManpowerLogsInput
  }

  export type ManpowerLogUncheckedCreateWithoutRoleInput = {
    id?: string
    siteId: string
    date: Date | string
    headcount: number
    hours: Decimal | DecimalJsLike | number | string
    shift?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ManpowerLogCreateOrConnectWithoutRoleInput = {
    where: ManpowerLogWhereUniqueInput
    create: XOR<ManpowerLogCreateWithoutRoleInput, ManpowerLogUncheckedCreateWithoutRoleInput>
  }

  export type ManpowerLogCreateManyRoleInputEnvelope = {
    data: ManpowerLogCreateManyRoleInput | ManpowerLogCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type ManpowerLogUpsertWithWhereUniqueWithoutRoleInput = {
    where: ManpowerLogWhereUniqueInput
    update: XOR<ManpowerLogUpdateWithoutRoleInput, ManpowerLogUncheckedUpdateWithoutRoleInput>
    create: XOR<ManpowerLogCreateWithoutRoleInput, ManpowerLogUncheckedCreateWithoutRoleInput>
  }

  export type ManpowerLogUpdateWithWhereUniqueWithoutRoleInput = {
    where: ManpowerLogWhereUniqueInput
    data: XOR<ManpowerLogUpdateWithoutRoleInput, ManpowerLogUncheckedUpdateWithoutRoleInput>
  }

  export type ManpowerLogUpdateManyWithWhereWithoutRoleInput = {
    where: ManpowerLogScalarWhereInput
    data: XOR<ManpowerLogUpdateManyMutationInput, ManpowerLogUncheckedUpdateManyWithoutRoleInput>
  }

  export type SiteCreateWithoutProductionsInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dispatches?: DispatchCreateNestedManyWithoutSiteInput
    receivedMaterials?: ReceivedMaterialCreateNestedManyWithoutSiteInput
    equipmentLogs?: EquipmentLogCreateNestedManyWithoutSiteInput
    manpowerLogs?: ManpowerLogCreateNestedManyWithoutSiteInput
    inventorySnapshots?: InventorySnapshotCreateNestedManyWithoutSiteInput
    exportJobs?: ExportJobCreateNestedManyWithoutSiteInput
    exportAudits?: ExportAuditCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutProductionsInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dispatches?: DispatchUncheckedCreateNestedManyWithoutSiteInput
    receivedMaterials?: ReceivedMaterialUncheckedCreateNestedManyWithoutSiteInput
    equipmentLogs?: EquipmentLogUncheckedCreateNestedManyWithoutSiteInput
    manpowerLogs?: ManpowerLogUncheckedCreateNestedManyWithoutSiteInput
    inventorySnapshots?: InventorySnapshotUncheckedCreateNestedManyWithoutSiteInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutSiteInput
    exportAudits?: ExportAuditUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutProductionsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutProductionsInput, SiteUncheckedCreateWithoutProductionsInput>
  }

  export type MaterialCreateWithoutProductionsInput = {
    id: string
    code: string
    type: string
    name: string
    category: string
    uom: string
    isFinal: boolean
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dispatches?: DispatchCreateNestedManyWithoutMaterialInput
    receivedMaterials?: ReceivedMaterialCreateNestedManyWithoutMaterialInput
    inventorySnapshots?: InventorySnapshotCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutProductionsInput = {
    id: string
    code: string
    type: string
    name: string
    category: string
    uom: string
    isFinal: boolean
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dispatches?: DispatchUncheckedCreateNestedManyWithoutMaterialInput
    receivedMaterials?: ReceivedMaterialUncheckedCreateNestedManyWithoutMaterialInput
    inventorySnapshots?: InventorySnapshotUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutProductionsInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutProductionsInput, MaterialUncheckedCreateWithoutProductionsInput>
  }

  export type SiteUpsertWithoutProductionsInput = {
    update: XOR<SiteUpdateWithoutProductionsInput, SiteUncheckedUpdateWithoutProductionsInput>
    create: XOR<SiteCreateWithoutProductionsInput, SiteUncheckedCreateWithoutProductionsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutProductionsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutProductionsInput, SiteUncheckedUpdateWithoutProductionsInput>
  }

  export type SiteUpdateWithoutProductionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatches?: DispatchUpdateManyWithoutSiteNestedInput
    receivedMaterials?: ReceivedMaterialUpdateManyWithoutSiteNestedInput
    equipmentLogs?: EquipmentLogUpdateManyWithoutSiteNestedInput
    manpowerLogs?: ManpowerLogUpdateManyWithoutSiteNestedInput
    inventorySnapshots?: InventorySnapshotUpdateManyWithoutSiteNestedInput
    exportJobs?: ExportJobUpdateManyWithoutSiteNestedInput
    exportAudits?: ExportAuditUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutProductionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatches?: DispatchUncheckedUpdateManyWithoutSiteNestedInput
    receivedMaterials?: ReceivedMaterialUncheckedUpdateManyWithoutSiteNestedInput
    equipmentLogs?: EquipmentLogUncheckedUpdateManyWithoutSiteNestedInput
    manpowerLogs?: ManpowerLogUncheckedUpdateManyWithoutSiteNestedInput
    inventorySnapshots?: InventorySnapshotUncheckedUpdateManyWithoutSiteNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutSiteNestedInput
    exportAudits?: ExportAuditUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type MaterialUpsertWithoutProductionsInput = {
    update: XOR<MaterialUpdateWithoutProductionsInput, MaterialUncheckedUpdateWithoutProductionsInput>
    create: XOR<MaterialCreateWithoutProductionsInput, MaterialUncheckedCreateWithoutProductionsInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutProductionsInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutProductionsInput, MaterialUncheckedUpdateWithoutProductionsInput>
  }

  export type MaterialUpdateWithoutProductionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatches?: DispatchUpdateManyWithoutMaterialNestedInput
    receivedMaterials?: ReceivedMaterialUpdateManyWithoutMaterialNestedInput
    inventorySnapshots?: InventorySnapshotUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutProductionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispatches?: DispatchUncheckedUpdateManyWithoutMaterialNestedInput
    receivedMaterials?: ReceivedMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    inventorySnapshots?: InventorySnapshotUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type SiteCreateWithoutDispatchesInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionCreateNestedManyWithoutSiteInput
    receivedMaterials?: ReceivedMaterialCreateNestedManyWithoutSiteInput
    equipmentLogs?: EquipmentLogCreateNestedManyWithoutSiteInput
    manpowerLogs?: ManpowerLogCreateNestedManyWithoutSiteInput
    inventorySnapshots?: InventorySnapshotCreateNestedManyWithoutSiteInput
    exportJobs?: ExportJobCreateNestedManyWithoutSiteInput
    exportAudits?: ExportAuditCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutDispatchesInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionUncheckedCreateNestedManyWithoutSiteInput
    receivedMaterials?: ReceivedMaterialUncheckedCreateNestedManyWithoutSiteInput
    equipmentLogs?: EquipmentLogUncheckedCreateNestedManyWithoutSiteInput
    manpowerLogs?: ManpowerLogUncheckedCreateNestedManyWithoutSiteInput
    inventorySnapshots?: InventorySnapshotUncheckedCreateNestedManyWithoutSiteInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutSiteInput
    exportAudits?: ExportAuditUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutDispatchesInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutDispatchesInput, SiteUncheckedCreateWithoutDispatchesInput>
  }

  export type MaterialCreateWithoutDispatchesInput = {
    id: string
    code: string
    type: string
    name: string
    category: string
    uom: string
    isFinal: boolean
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionCreateNestedManyWithoutMaterialInput
    receivedMaterials?: ReceivedMaterialCreateNestedManyWithoutMaterialInput
    inventorySnapshots?: InventorySnapshotCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutDispatchesInput = {
    id: string
    code: string
    type: string
    name: string
    category: string
    uom: string
    isFinal: boolean
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionUncheckedCreateNestedManyWithoutMaterialInput
    receivedMaterials?: ReceivedMaterialUncheckedCreateNestedManyWithoutMaterialInput
    inventorySnapshots?: InventorySnapshotUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutDispatchesInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutDispatchesInput, MaterialUncheckedCreateWithoutDispatchesInput>
  }

  export type SiteUpsertWithoutDispatchesInput = {
    update: XOR<SiteUpdateWithoutDispatchesInput, SiteUncheckedUpdateWithoutDispatchesInput>
    create: XOR<SiteCreateWithoutDispatchesInput, SiteUncheckedCreateWithoutDispatchesInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutDispatchesInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutDispatchesInput, SiteUncheckedUpdateWithoutDispatchesInput>
  }

  export type SiteUpdateWithoutDispatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUpdateManyWithoutSiteNestedInput
    receivedMaterials?: ReceivedMaterialUpdateManyWithoutSiteNestedInput
    equipmentLogs?: EquipmentLogUpdateManyWithoutSiteNestedInput
    manpowerLogs?: ManpowerLogUpdateManyWithoutSiteNestedInput
    inventorySnapshots?: InventorySnapshotUpdateManyWithoutSiteNestedInput
    exportJobs?: ExportJobUpdateManyWithoutSiteNestedInput
    exportAudits?: ExportAuditUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutDispatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUncheckedUpdateManyWithoutSiteNestedInput
    receivedMaterials?: ReceivedMaterialUncheckedUpdateManyWithoutSiteNestedInput
    equipmentLogs?: EquipmentLogUncheckedUpdateManyWithoutSiteNestedInput
    manpowerLogs?: ManpowerLogUncheckedUpdateManyWithoutSiteNestedInput
    inventorySnapshots?: InventorySnapshotUncheckedUpdateManyWithoutSiteNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutSiteNestedInput
    exportAudits?: ExportAuditUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type MaterialUpsertWithoutDispatchesInput = {
    update: XOR<MaterialUpdateWithoutDispatchesInput, MaterialUncheckedUpdateWithoutDispatchesInput>
    create: XOR<MaterialCreateWithoutDispatchesInput, MaterialUncheckedCreateWithoutDispatchesInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutDispatchesInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutDispatchesInput, MaterialUncheckedUpdateWithoutDispatchesInput>
  }

  export type MaterialUpdateWithoutDispatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUpdateManyWithoutMaterialNestedInput
    receivedMaterials?: ReceivedMaterialUpdateManyWithoutMaterialNestedInput
    inventorySnapshots?: InventorySnapshotUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutDispatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUncheckedUpdateManyWithoutMaterialNestedInput
    receivedMaterials?: ReceivedMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    inventorySnapshots?: InventorySnapshotUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type SiteCreateWithoutReceivedMaterialsInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionCreateNestedManyWithoutSiteInput
    dispatches?: DispatchCreateNestedManyWithoutSiteInput
    equipmentLogs?: EquipmentLogCreateNestedManyWithoutSiteInput
    manpowerLogs?: ManpowerLogCreateNestedManyWithoutSiteInput
    inventorySnapshots?: InventorySnapshotCreateNestedManyWithoutSiteInput
    exportJobs?: ExportJobCreateNestedManyWithoutSiteInput
    exportAudits?: ExportAuditCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutReceivedMaterialsInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionUncheckedCreateNestedManyWithoutSiteInput
    dispatches?: DispatchUncheckedCreateNestedManyWithoutSiteInput
    equipmentLogs?: EquipmentLogUncheckedCreateNestedManyWithoutSiteInput
    manpowerLogs?: ManpowerLogUncheckedCreateNestedManyWithoutSiteInput
    inventorySnapshots?: InventorySnapshotUncheckedCreateNestedManyWithoutSiteInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutSiteInput
    exportAudits?: ExportAuditUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutReceivedMaterialsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutReceivedMaterialsInput, SiteUncheckedCreateWithoutReceivedMaterialsInput>
  }

  export type MaterialCreateWithoutReceivedMaterialsInput = {
    id: string
    code: string
    type: string
    name: string
    category: string
    uom: string
    isFinal: boolean
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionCreateNestedManyWithoutMaterialInput
    dispatches?: DispatchCreateNestedManyWithoutMaterialInput
    inventorySnapshots?: InventorySnapshotCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutReceivedMaterialsInput = {
    id: string
    code: string
    type: string
    name: string
    category: string
    uom: string
    isFinal: boolean
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionUncheckedCreateNestedManyWithoutMaterialInput
    dispatches?: DispatchUncheckedCreateNestedManyWithoutMaterialInput
    inventorySnapshots?: InventorySnapshotUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutReceivedMaterialsInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutReceivedMaterialsInput, MaterialUncheckedCreateWithoutReceivedMaterialsInput>
  }

  export type SiteUpsertWithoutReceivedMaterialsInput = {
    update: XOR<SiteUpdateWithoutReceivedMaterialsInput, SiteUncheckedUpdateWithoutReceivedMaterialsInput>
    create: XOR<SiteCreateWithoutReceivedMaterialsInput, SiteUncheckedCreateWithoutReceivedMaterialsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutReceivedMaterialsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutReceivedMaterialsInput, SiteUncheckedUpdateWithoutReceivedMaterialsInput>
  }

  export type SiteUpdateWithoutReceivedMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUpdateManyWithoutSiteNestedInput
    dispatches?: DispatchUpdateManyWithoutSiteNestedInput
    equipmentLogs?: EquipmentLogUpdateManyWithoutSiteNestedInput
    manpowerLogs?: ManpowerLogUpdateManyWithoutSiteNestedInput
    inventorySnapshots?: InventorySnapshotUpdateManyWithoutSiteNestedInput
    exportJobs?: ExportJobUpdateManyWithoutSiteNestedInput
    exportAudits?: ExportAuditUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutReceivedMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUncheckedUpdateManyWithoutSiteNestedInput
    dispatches?: DispatchUncheckedUpdateManyWithoutSiteNestedInput
    equipmentLogs?: EquipmentLogUncheckedUpdateManyWithoutSiteNestedInput
    manpowerLogs?: ManpowerLogUncheckedUpdateManyWithoutSiteNestedInput
    inventorySnapshots?: InventorySnapshotUncheckedUpdateManyWithoutSiteNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutSiteNestedInput
    exportAudits?: ExportAuditUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type MaterialUpsertWithoutReceivedMaterialsInput = {
    update: XOR<MaterialUpdateWithoutReceivedMaterialsInput, MaterialUncheckedUpdateWithoutReceivedMaterialsInput>
    create: XOR<MaterialCreateWithoutReceivedMaterialsInput, MaterialUncheckedCreateWithoutReceivedMaterialsInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutReceivedMaterialsInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutReceivedMaterialsInput, MaterialUncheckedUpdateWithoutReceivedMaterialsInput>
  }

  export type MaterialUpdateWithoutReceivedMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUpdateManyWithoutMaterialNestedInput
    dispatches?: DispatchUpdateManyWithoutMaterialNestedInput
    inventorySnapshots?: InventorySnapshotUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutReceivedMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUncheckedUpdateManyWithoutMaterialNestedInput
    dispatches?: DispatchUncheckedUpdateManyWithoutMaterialNestedInput
    inventorySnapshots?: InventorySnapshotUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type SiteCreateWithoutEquipmentLogsInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionCreateNestedManyWithoutSiteInput
    dispatches?: DispatchCreateNestedManyWithoutSiteInput
    receivedMaterials?: ReceivedMaterialCreateNestedManyWithoutSiteInput
    manpowerLogs?: ManpowerLogCreateNestedManyWithoutSiteInput
    inventorySnapshots?: InventorySnapshotCreateNestedManyWithoutSiteInput
    exportJobs?: ExportJobCreateNestedManyWithoutSiteInput
    exportAudits?: ExportAuditCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutEquipmentLogsInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionUncheckedCreateNestedManyWithoutSiteInput
    dispatches?: DispatchUncheckedCreateNestedManyWithoutSiteInput
    receivedMaterials?: ReceivedMaterialUncheckedCreateNestedManyWithoutSiteInput
    manpowerLogs?: ManpowerLogUncheckedCreateNestedManyWithoutSiteInput
    inventorySnapshots?: InventorySnapshotUncheckedCreateNestedManyWithoutSiteInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutSiteInput
    exportAudits?: ExportAuditUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutEquipmentLogsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutEquipmentLogsInput, SiteUncheckedCreateWithoutEquipmentLogsInput>
  }

  export type EquipmentCreateWithoutEquipmentLogsInput = {
    id: string
    code: string
    name: string
    type: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUncheckedCreateWithoutEquipmentLogsInput = {
    id: string
    code: string
    name: string
    type: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentCreateOrConnectWithoutEquipmentLogsInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutEquipmentLogsInput, EquipmentUncheckedCreateWithoutEquipmentLogsInput>
  }

  export type SiteUpsertWithoutEquipmentLogsInput = {
    update: XOR<SiteUpdateWithoutEquipmentLogsInput, SiteUncheckedUpdateWithoutEquipmentLogsInput>
    create: XOR<SiteCreateWithoutEquipmentLogsInput, SiteUncheckedCreateWithoutEquipmentLogsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutEquipmentLogsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutEquipmentLogsInput, SiteUncheckedUpdateWithoutEquipmentLogsInput>
  }

  export type SiteUpdateWithoutEquipmentLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUpdateManyWithoutSiteNestedInput
    dispatches?: DispatchUpdateManyWithoutSiteNestedInput
    receivedMaterials?: ReceivedMaterialUpdateManyWithoutSiteNestedInput
    manpowerLogs?: ManpowerLogUpdateManyWithoutSiteNestedInput
    inventorySnapshots?: InventorySnapshotUpdateManyWithoutSiteNestedInput
    exportJobs?: ExportJobUpdateManyWithoutSiteNestedInput
    exportAudits?: ExportAuditUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutEquipmentLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUncheckedUpdateManyWithoutSiteNestedInput
    dispatches?: DispatchUncheckedUpdateManyWithoutSiteNestedInput
    receivedMaterials?: ReceivedMaterialUncheckedUpdateManyWithoutSiteNestedInput
    manpowerLogs?: ManpowerLogUncheckedUpdateManyWithoutSiteNestedInput
    inventorySnapshots?: InventorySnapshotUncheckedUpdateManyWithoutSiteNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutSiteNestedInput
    exportAudits?: ExportAuditUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type EquipmentUpsertWithoutEquipmentLogsInput = {
    update: XOR<EquipmentUpdateWithoutEquipmentLogsInput, EquipmentUncheckedUpdateWithoutEquipmentLogsInput>
    create: XOR<EquipmentCreateWithoutEquipmentLogsInput, EquipmentUncheckedCreateWithoutEquipmentLogsInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutEquipmentLogsInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutEquipmentLogsInput, EquipmentUncheckedUpdateWithoutEquipmentLogsInput>
  }

  export type EquipmentUpdateWithoutEquipmentLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateWithoutEquipmentLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteCreateWithoutManpowerLogsInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionCreateNestedManyWithoutSiteInput
    dispatches?: DispatchCreateNestedManyWithoutSiteInput
    receivedMaterials?: ReceivedMaterialCreateNestedManyWithoutSiteInput
    equipmentLogs?: EquipmentLogCreateNestedManyWithoutSiteInput
    inventorySnapshots?: InventorySnapshotCreateNestedManyWithoutSiteInput
    exportJobs?: ExportJobCreateNestedManyWithoutSiteInput
    exportAudits?: ExportAuditCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutManpowerLogsInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionUncheckedCreateNestedManyWithoutSiteInput
    dispatches?: DispatchUncheckedCreateNestedManyWithoutSiteInput
    receivedMaterials?: ReceivedMaterialUncheckedCreateNestedManyWithoutSiteInput
    equipmentLogs?: EquipmentLogUncheckedCreateNestedManyWithoutSiteInput
    inventorySnapshots?: InventorySnapshotUncheckedCreateNestedManyWithoutSiteInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutSiteInput
    exportAudits?: ExportAuditUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutManpowerLogsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutManpowerLogsInput, SiteUncheckedCreateWithoutManpowerLogsInput>
  }

  export type ManpowerRoleCreateWithoutManpowerLogsInput = {
    id: string
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManpowerRoleUncheckedCreateWithoutManpowerLogsInput = {
    id: string
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManpowerRoleCreateOrConnectWithoutManpowerLogsInput = {
    where: ManpowerRoleWhereUniqueInput
    create: XOR<ManpowerRoleCreateWithoutManpowerLogsInput, ManpowerRoleUncheckedCreateWithoutManpowerLogsInput>
  }

  export type SiteUpsertWithoutManpowerLogsInput = {
    update: XOR<SiteUpdateWithoutManpowerLogsInput, SiteUncheckedUpdateWithoutManpowerLogsInput>
    create: XOR<SiteCreateWithoutManpowerLogsInput, SiteUncheckedCreateWithoutManpowerLogsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutManpowerLogsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutManpowerLogsInput, SiteUncheckedUpdateWithoutManpowerLogsInput>
  }

  export type SiteUpdateWithoutManpowerLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUpdateManyWithoutSiteNestedInput
    dispatches?: DispatchUpdateManyWithoutSiteNestedInput
    receivedMaterials?: ReceivedMaterialUpdateManyWithoutSiteNestedInput
    equipmentLogs?: EquipmentLogUpdateManyWithoutSiteNestedInput
    inventorySnapshots?: InventorySnapshotUpdateManyWithoutSiteNestedInput
    exportJobs?: ExportJobUpdateManyWithoutSiteNestedInput
    exportAudits?: ExportAuditUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutManpowerLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUncheckedUpdateManyWithoutSiteNestedInput
    dispatches?: DispatchUncheckedUpdateManyWithoutSiteNestedInput
    receivedMaterials?: ReceivedMaterialUncheckedUpdateManyWithoutSiteNestedInput
    equipmentLogs?: EquipmentLogUncheckedUpdateManyWithoutSiteNestedInput
    inventorySnapshots?: InventorySnapshotUncheckedUpdateManyWithoutSiteNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutSiteNestedInput
    exportAudits?: ExportAuditUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type ManpowerRoleUpsertWithoutManpowerLogsInput = {
    update: XOR<ManpowerRoleUpdateWithoutManpowerLogsInput, ManpowerRoleUncheckedUpdateWithoutManpowerLogsInput>
    create: XOR<ManpowerRoleCreateWithoutManpowerLogsInput, ManpowerRoleUncheckedCreateWithoutManpowerLogsInput>
    where?: ManpowerRoleWhereInput
  }

  export type ManpowerRoleUpdateToOneWithWhereWithoutManpowerLogsInput = {
    where?: ManpowerRoleWhereInput
    data: XOR<ManpowerRoleUpdateWithoutManpowerLogsInput, ManpowerRoleUncheckedUpdateWithoutManpowerLogsInput>
  }

  export type ManpowerRoleUpdateWithoutManpowerLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManpowerRoleUncheckedUpdateWithoutManpowerLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteCreateWithoutInventorySnapshotsInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionCreateNestedManyWithoutSiteInput
    dispatches?: DispatchCreateNestedManyWithoutSiteInput
    receivedMaterials?: ReceivedMaterialCreateNestedManyWithoutSiteInput
    equipmentLogs?: EquipmentLogCreateNestedManyWithoutSiteInput
    manpowerLogs?: ManpowerLogCreateNestedManyWithoutSiteInput
    exportJobs?: ExportJobCreateNestedManyWithoutSiteInput
    exportAudits?: ExportAuditCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutInventorySnapshotsInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionUncheckedCreateNestedManyWithoutSiteInput
    dispatches?: DispatchUncheckedCreateNestedManyWithoutSiteInput
    receivedMaterials?: ReceivedMaterialUncheckedCreateNestedManyWithoutSiteInput
    equipmentLogs?: EquipmentLogUncheckedCreateNestedManyWithoutSiteInput
    manpowerLogs?: ManpowerLogUncheckedCreateNestedManyWithoutSiteInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutSiteInput
    exportAudits?: ExportAuditUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutInventorySnapshotsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutInventorySnapshotsInput, SiteUncheckedCreateWithoutInventorySnapshotsInput>
  }

  export type MaterialCreateWithoutInventorySnapshotsInput = {
    id: string
    code: string
    type: string
    name: string
    category: string
    uom: string
    isFinal: boolean
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionCreateNestedManyWithoutMaterialInput
    dispatches?: DispatchCreateNestedManyWithoutMaterialInput
    receivedMaterials?: ReceivedMaterialCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutInventorySnapshotsInput = {
    id: string
    code: string
    type: string
    name: string
    category: string
    uom: string
    isFinal: boolean
    notes?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionUncheckedCreateNestedManyWithoutMaterialInput
    dispatches?: DispatchUncheckedCreateNestedManyWithoutMaterialInput
    receivedMaterials?: ReceivedMaterialUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutInventorySnapshotsInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutInventorySnapshotsInput, MaterialUncheckedCreateWithoutInventorySnapshotsInput>
  }

  export type SiteUpsertWithoutInventorySnapshotsInput = {
    update: XOR<SiteUpdateWithoutInventorySnapshotsInput, SiteUncheckedUpdateWithoutInventorySnapshotsInput>
    create: XOR<SiteCreateWithoutInventorySnapshotsInput, SiteUncheckedCreateWithoutInventorySnapshotsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutInventorySnapshotsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutInventorySnapshotsInput, SiteUncheckedUpdateWithoutInventorySnapshotsInput>
  }

  export type SiteUpdateWithoutInventorySnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUpdateManyWithoutSiteNestedInput
    dispatches?: DispatchUpdateManyWithoutSiteNestedInput
    receivedMaterials?: ReceivedMaterialUpdateManyWithoutSiteNestedInput
    equipmentLogs?: EquipmentLogUpdateManyWithoutSiteNestedInput
    manpowerLogs?: ManpowerLogUpdateManyWithoutSiteNestedInput
    exportJobs?: ExportJobUpdateManyWithoutSiteNestedInput
    exportAudits?: ExportAuditUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutInventorySnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUncheckedUpdateManyWithoutSiteNestedInput
    dispatches?: DispatchUncheckedUpdateManyWithoutSiteNestedInput
    receivedMaterials?: ReceivedMaterialUncheckedUpdateManyWithoutSiteNestedInput
    equipmentLogs?: EquipmentLogUncheckedUpdateManyWithoutSiteNestedInput
    manpowerLogs?: ManpowerLogUncheckedUpdateManyWithoutSiteNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutSiteNestedInput
    exportAudits?: ExportAuditUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type MaterialUpsertWithoutInventorySnapshotsInput = {
    update: XOR<MaterialUpdateWithoutInventorySnapshotsInput, MaterialUncheckedUpdateWithoutInventorySnapshotsInput>
    create: XOR<MaterialCreateWithoutInventorySnapshotsInput, MaterialUncheckedCreateWithoutInventorySnapshotsInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutInventorySnapshotsInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutInventorySnapshotsInput, MaterialUncheckedUpdateWithoutInventorySnapshotsInput>
  }

  export type MaterialUpdateWithoutInventorySnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUpdateManyWithoutMaterialNestedInput
    dispatches?: DispatchUpdateManyWithoutMaterialNestedInput
    receivedMaterials?: ReceivedMaterialUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutInventorySnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
    isFinal?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUncheckedUpdateManyWithoutMaterialNestedInput
    dispatches?: DispatchUncheckedUpdateManyWithoutMaterialNestedInput
    receivedMaterials?: ReceivedMaterialUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type SiteCreateWithoutExportJobsInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionCreateNestedManyWithoutSiteInput
    dispatches?: DispatchCreateNestedManyWithoutSiteInput
    receivedMaterials?: ReceivedMaterialCreateNestedManyWithoutSiteInput
    equipmentLogs?: EquipmentLogCreateNestedManyWithoutSiteInput
    manpowerLogs?: ManpowerLogCreateNestedManyWithoutSiteInput
    inventorySnapshots?: InventorySnapshotCreateNestedManyWithoutSiteInput
    exportAudits?: ExportAuditCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutExportJobsInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionUncheckedCreateNestedManyWithoutSiteInput
    dispatches?: DispatchUncheckedCreateNestedManyWithoutSiteInput
    receivedMaterials?: ReceivedMaterialUncheckedCreateNestedManyWithoutSiteInput
    equipmentLogs?: EquipmentLogUncheckedCreateNestedManyWithoutSiteInput
    manpowerLogs?: ManpowerLogUncheckedCreateNestedManyWithoutSiteInput
    inventorySnapshots?: InventorySnapshotUncheckedCreateNestedManyWithoutSiteInput
    exportAudits?: ExportAuditUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutExportJobsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutExportJobsInput, SiteUncheckedCreateWithoutExportJobsInput>
  }

  export type ExportAuditCreateWithoutJobInput = {
    id?: string
    userId: string
    module: string
    filtersJson: string
    columnPreset?: string | null
    recordCount: number
    fileSize: number
    fileHash: string
    downloadCount?: number
    lastDownload?: Date | string | null
    createdAt?: Date | string
    site: SiteCreateNestedOneWithoutExportAuditsInput
  }

  export type ExportAuditUncheckedCreateWithoutJobInput = {
    id?: string
    siteId: string
    userId: string
    module: string
    filtersJson: string
    columnPreset?: string | null
    recordCount: number
    fileSize: number
    fileHash: string
    downloadCount?: number
    lastDownload?: Date | string | null
    createdAt?: Date | string
  }

  export type ExportAuditCreateOrConnectWithoutJobInput = {
    where: ExportAuditWhereUniqueInput
    create: XOR<ExportAuditCreateWithoutJobInput, ExportAuditUncheckedCreateWithoutJobInput>
  }

  export type SiteUpsertWithoutExportJobsInput = {
    update: XOR<SiteUpdateWithoutExportJobsInput, SiteUncheckedUpdateWithoutExportJobsInput>
    create: XOR<SiteCreateWithoutExportJobsInput, SiteUncheckedCreateWithoutExportJobsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutExportJobsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutExportJobsInput, SiteUncheckedUpdateWithoutExportJobsInput>
  }

  export type SiteUpdateWithoutExportJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUpdateManyWithoutSiteNestedInput
    dispatches?: DispatchUpdateManyWithoutSiteNestedInput
    receivedMaterials?: ReceivedMaterialUpdateManyWithoutSiteNestedInput
    equipmentLogs?: EquipmentLogUpdateManyWithoutSiteNestedInput
    manpowerLogs?: ManpowerLogUpdateManyWithoutSiteNestedInput
    inventorySnapshots?: InventorySnapshotUpdateManyWithoutSiteNestedInput
    exportAudits?: ExportAuditUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutExportJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUncheckedUpdateManyWithoutSiteNestedInput
    dispatches?: DispatchUncheckedUpdateManyWithoutSiteNestedInput
    receivedMaterials?: ReceivedMaterialUncheckedUpdateManyWithoutSiteNestedInput
    equipmentLogs?: EquipmentLogUncheckedUpdateManyWithoutSiteNestedInput
    manpowerLogs?: ManpowerLogUncheckedUpdateManyWithoutSiteNestedInput
    inventorySnapshots?: InventorySnapshotUncheckedUpdateManyWithoutSiteNestedInput
    exportAudits?: ExportAuditUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type ExportAuditUpsertWithoutJobInput = {
    update: XOR<ExportAuditUpdateWithoutJobInput, ExportAuditUncheckedUpdateWithoutJobInput>
    create: XOR<ExportAuditCreateWithoutJobInput, ExportAuditUncheckedCreateWithoutJobInput>
    where?: ExportAuditWhereInput
  }

  export type ExportAuditUpdateToOneWithWhereWithoutJobInput = {
    where?: ExportAuditWhereInput
    data: XOR<ExportAuditUpdateWithoutJobInput, ExportAuditUncheckedUpdateWithoutJobInput>
  }

  export type ExportAuditUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    filtersJson?: StringFieldUpdateOperationsInput | string
    columnPreset?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    fileSize?: IntFieldUpdateOperationsInput | number
    fileHash?: StringFieldUpdateOperationsInput | string
    downloadCount?: IntFieldUpdateOperationsInput | number
    lastDownload?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutExportAuditsNestedInput
  }

  export type ExportAuditUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    filtersJson?: StringFieldUpdateOperationsInput | string
    columnPreset?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    fileSize?: IntFieldUpdateOperationsInput | number
    fileHash?: StringFieldUpdateOperationsInput | string
    downloadCount?: IntFieldUpdateOperationsInput | number
    lastDownload?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteCreateWithoutExportAuditsInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionCreateNestedManyWithoutSiteInput
    dispatches?: DispatchCreateNestedManyWithoutSiteInput
    receivedMaterials?: ReceivedMaterialCreateNestedManyWithoutSiteInput
    equipmentLogs?: EquipmentLogCreateNestedManyWithoutSiteInput
    manpowerLogs?: ManpowerLogCreateNestedManyWithoutSiteInput
    inventorySnapshots?: InventorySnapshotCreateNestedManyWithoutSiteInput
    exportJobs?: ExportJobCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutExportAuditsInput = {
    id?: string
    code: string
    name: string
    location?: string | null
    timezone?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productions?: ProductionUncheckedCreateNestedManyWithoutSiteInput
    dispatches?: DispatchUncheckedCreateNestedManyWithoutSiteInput
    receivedMaterials?: ReceivedMaterialUncheckedCreateNestedManyWithoutSiteInput
    equipmentLogs?: EquipmentLogUncheckedCreateNestedManyWithoutSiteInput
    manpowerLogs?: ManpowerLogUncheckedCreateNestedManyWithoutSiteInput
    inventorySnapshots?: InventorySnapshotUncheckedCreateNestedManyWithoutSiteInput
    exportJobs?: ExportJobUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutExportAuditsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutExportAuditsInput, SiteUncheckedCreateWithoutExportAuditsInput>
  }

  export type ExportJobCreateWithoutExportAuditInput = {
    id?: string
    userId: string
    module: string
    dateFrom: Date | string
    dateTo: Date | string
    granularity?: string
    format: string
    status?: string
    progress?: number
    filePath?: string | null
    fileSize?: number | null
    fileHash?: string | null
    errorMessage?: string | null
    downloadUrl?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutExportJobsInput
  }

  export type ExportJobUncheckedCreateWithoutExportAuditInput = {
    id?: string
    siteId: string
    userId: string
    module: string
    dateFrom: Date | string
    dateTo: Date | string
    granularity?: string
    format: string
    status?: string
    progress?: number
    filePath?: string | null
    fileSize?: number | null
    fileHash?: string | null
    errorMessage?: string | null
    downloadUrl?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExportJobCreateOrConnectWithoutExportAuditInput = {
    where: ExportJobWhereUniqueInput
    create: XOR<ExportJobCreateWithoutExportAuditInput, ExportJobUncheckedCreateWithoutExportAuditInput>
  }

  export type SiteUpsertWithoutExportAuditsInput = {
    update: XOR<SiteUpdateWithoutExportAuditsInput, SiteUncheckedUpdateWithoutExportAuditsInput>
    create: XOR<SiteCreateWithoutExportAuditsInput, SiteUncheckedCreateWithoutExportAuditsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutExportAuditsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutExportAuditsInput, SiteUncheckedUpdateWithoutExportAuditsInput>
  }

  export type SiteUpdateWithoutExportAuditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUpdateManyWithoutSiteNestedInput
    dispatches?: DispatchUpdateManyWithoutSiteNestedInput
    receivedMaterials?: ReceivedMaterialUpdateManyWithoutSiteNestedInput
    equipmentLogs?: EquipmentLogUpdateManyWithoutSiteNestedInput
    manpowerLogs?: ManpowerLogUpdateManyWithoutSiteNestedInput
    inventorySnapshots?: InventorySnapshotUpdateManyWithoutSiteNestedInput
    exportJobs?: ExportJobUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutExportAuditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productions?: ProductionUncheckedUpdateManyWithoutSiteNestedInput
    dispatches?: DispatchUncheckedUpdateManyWithoutSiteNestedInput
    receivedMaterials?: ReceivedMaterialUncheckedUpdateManyWithoutSiteNestedInput
    equipmentLogs?: EquipmentLogUncheckedUpdateManyWithoutSiteNestedInput
    manpowerLogs?: ManpowerLogUncheckedUpdateManyWithoutSiteNestedInput
    inventorySnapshots?: InventorySnapshotUncheckedUpdateManyWithoutSiteNestedInput
    exportJobs?: ExportJobUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type ExportJobUpsertWithoutExportAuditInput = {
    update: XOR<ExportJobUpdateWithoutExportAuditInput, ExportJobUncheckedUpdateWithoutExportAuditInput>
    create: XOR<ExportJobCreateWithoutExportAuditInput, ExportJobUncheckedCreateWithoutExportAuditInput>
    where?: ExportJobWhereInput
  }

  export type ExportJobUpdateToOneWithWhereWithoutExportAuditInput = {
    where?: ExportJobWhereInput
    data: XOR<ExportJobUpdateWithoutExportAuditInput, ExportJobUncheckedUpdateWithoutExportAuditInput>
  }

  export type ExportJobUpdateWithoutExportAuditInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    granularity?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutExportJobsNestedInput
  }

  export type ExportJobUncheckedUpdateWithoutExportAuditInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    granularity?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionCreateManySiteInput = {
    id?: string
    date: Date | string
    shift?: string | null
    materialId: string
    qtyTon: Decimal | DecimalJsLike | number | string
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type DispatchCreateManySiteInput = {
    id?: string
    date: Date | string
    materialId: string
    qtyTon: Decimal | DecimalJsLike | number | string
    trips?: number | null
    owner?: string | null
    reference?: string | null
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ReceivedMaterialCreateManySiteInput = {
    id?: string
    date: Date | string
    materialId: string
    qtyTon: Decimal | DecimalJsLike | number | string
    source?: string | null
    vehicleRef?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type EquipmentLogCreateManySiteInput = {
    id?: string
    date: Date | string
    equipmentId: string
    hours: Decimal | DecimalJsLike | number | string
    count?: number
    shift?: string | null
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ManpowerLogCreateManySiteInput = {
    id?: string
    date: Date | string
    roleId: string
    headcount: number
    hours: Decimal | DecimalJsLike | number | string
    shift?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type InventorySnapshotCreateManySiteInput = {
    id?: string
    date: Date | string
    materialId: string
    openingTon: Decimal | DecimalJsLike | number | string
    producedTon: Decimal | DecimalJsLike | number | string
    receivedTon: Decimal | DecimalJsLike | number | string
    dispatchedTon: Decimal | DecimalJsLike | number | string
    adjustmentTon?: Decimal | DecimalJsLike | number | string
    closingTon: Decimal | DecimalJsLike | number | string
    isCalculated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ExportJobCreateManySiteInput = {
    id?: string
    userId: string
    module: string
    dateFrom: Date | string
    dateTo: Date | string
    granularity?: string
    format: string
    status?: string
    progress?: number
    filePath?: string | null
    fileSize?: number | null
    fileHash?: string | null
    errorMessage?: string | null
    downloadUrl?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExportAuditCreateManySiteInput = {
    id?: string
    jobId: string
    userId: string
    module: string
    filtersJson: string
    columnPreset?: string | null
    recordCount: number
    fileSize: number
    fileHash: string
    downloadCount?: number
    lastDownload?: Date | string | null
    createdAt?: Date | string
  }

  export type ProductionUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    material?: MaterialUpdateOneRequiredWithoutProductionsNestedInput
  }

  export type ProductionUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    materialId?: StringFieldUpdateOperationsInput | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductionUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    materialId?: StringFieldUpdateOperationsInput | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispatchUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trips?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    material?: MaterialUpdateOneRequiredWithoutDispatchesNestedInput
  }

  export type DispatchUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    materialId?: StringFieldUpdateOperationsInput | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trips?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispatchUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    materialId?: StringFieldUpdateOperationsInput | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trips?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceivedMaterialUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    material?: MaterialUpdateOneRequiredWithoutReceivedMaterialsNestedInput
  }

  export type ReceivedMaterialUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    materialId?: StringFieldUpdateOperationsInput | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceivedMaterialUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    materialId?: StringFieldUpdateOperationsInput | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentLogUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: IntFieldUpdateOperationsInput | number
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: EquipmentUpdateOneRequiredWithoutEquipmentLogsNestedInput
  }

  export type EquipmentLogUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: IntFieldUpdateOperationsInput | number
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentLogUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: IntFieldUpdateOperationsInput | number
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManpowerLogUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    headcount?: IntFieldUpdateOperationsInput | number
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    role?: ManpowerRoleUpdateOneRequiredWithoutManpowerLogsNestedInput
  }

  export type ManpowerLogUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: StringFieldUpdateOperationsInput | string
    headcount?: IntFieldUpdateOperationsInput | number
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManpowerLogUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: StringFieldUpdateOperationsInput | string
    headcount?: IntFieldUpdateOperationsInput | number
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventorySnapshotUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    openingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receivedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dispatchedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adjustmentTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isCalculated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    material?: MaterialUpdateOneRequiredWithoutInventorySnapshotsNestedInput
  }

  export type InventorySnapshotUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    materialId?: StringFieldUpdateOperationsInput | string
    openingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receivedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dispatchedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adjustmentTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isCalculated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventorySnapshotUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    materialId?: StringFieldUpdateOperationsInput | string
    openingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receivedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dispatchedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adjustmentTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isCalculated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExportJobUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    granularity?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exportAudit?: ExportAuditUpdateOneWithoutJobNestedInput
  }

  export type ExportJobUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    granularity?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exportAudit?: ExportAuditUncheckedUpdateOneWithoutJobNestedInput
  }

  export type ExportJobUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    granularity?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportAuditUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    filtersJson?: StringFieldUpdateOperationsInput | string
    columnPreset?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    fileSize?: IntFieldUpdateOperationsInput | number
    fileHash?: StringFieldUpdateOperationsInput | string
    downloadCount?: IntFieldUpdateOperationsInput | number
    lastDownload?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: ExportJobUpdateOneRequiredWithoutExportAuditNestedInput
  }

  export type ExportAuditUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    filtersJson?: StringFieldUpdateOperationsInput | string
    columnPreset?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    fileSize?: IntFieldUpdateOperationsInput | number
    fileHash?: StringFieldUpdateOperationsInput | string
    downloadCount?: IntFieldUpdateOperationsInput | number
    lastDownload?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportAuditUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    filtersJson?: StringFieldUpdateOperationsInput | string
    columnPreset?: NullableStringFieldUpdateOperationsInput | string | null
    recordCount?: IntFieldUpdateOperationsInput | number
    fileSize?: IntFieldUpdateOperationsInput | number
    fileHash?: StringFieldUpdateOperationsInput | string
    downloadCount?: IntFieldUpdateOperationsInput | number
    lastDownload?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionCreateManyMaterialInput = {
    id?: string
    siteId: string
    date: Date | string
    shift?: string | null
    qtyTon: Decimal | DecimalJsLike | number | string
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type DispatchCreateManyMaterialInput = {
    id?: string
    siteId: string
    date: Date | string
    qtyTon: Decimal | DecimalJsLike | number | string
    trips?: number | null
    owner?: string | null
    reference?: string | null
    operation: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ReceivedMaterialCreateManyMaterialInput = {
    id?: string
    siteId: string
    date: Date | string
    qtyTon: Decimal | DecimalJsLike | number | string
    source?: string | null
    vehicleRef?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type InventorySnapshotCreateManyMaterialInput = {
    id?: string
    siteId: string
    date: Date | string
    openingTon: Decimal | DecimalJsLike | number | string
    producedTon: Decimal | DecimalJsLike | number | string
    receivedTon: Decimal | DecimalJsLike | number | string
    dispatchedTon: Decimal | DecimalJsLike | number | string
    adjustmentTon?: Decimal | DecimalJsLike | number | string
    closingTon: Decimal | DecimalJsLike | number | string
    isCalculated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ProductionUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    site?: SiteUpdateOneRequiredWithoutProductionsNestedInput
  }

  export type ProductionUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductionUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispatchUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trips?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    site?: SiteUpdateOneRequiredWithoutDispatchesNestedInput
  }

  export type DispatchUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trips?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispatchUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trips?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    operation?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceivedMaterialUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    site?: SiteUpdateOneRequiredWithoutReceivedMaterialsNestedInput
  }

  export type ReceivedMaterialUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceivedMaterialUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qtyTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventorySnapshotUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    openingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receivedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dispatchedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adjustmentTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isCalculated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    site?: SiteUpdateOneRequiredWithoutInventorySnapshotsNestedInput
  }

  export type InventorySnapshotUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    openingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receivedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dispatchedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adjustmentTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isCalculated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventorySnapshotUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    openingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    receivedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dispatchedTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adjustmentTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingTon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isCalculated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentLogCreateManyEquipmentInput = {
    id?: string
    siteId: string
    date: Date | string
    hours: Decimal | DecimalJsLike | number | string
    count?: number
    shift?: string | null
    status?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type EquipmentLogUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: IntFieldUpdateOperationsInput | number
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    site?: SiteUpdateOneRequiredWithoutEquipmentLogsNestedInput
  }

  export type EquipmentLogUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: IntFieldUpdateOperationsInput | number
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentLogUncheckedUpdateManyWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    count?: IntFieldUpdateOperationsInput | number
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManpowerLogCreateManyRoleInput = {
    id?: string
    siteId: string
    date: Date | string
    headcount: number
    hours: Decimal | DecimalJsLike | number | string
    shift?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
  }

  export type ManpowerLogUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    headcount?: IntFieldUpdateOperationsInput | number
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    site?: SiteUpdateOneRequiredWithoutManpowerLogsNestedInput
  }

  export type ManpowerLogUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    headcount?: IntFieldUpdateOperationsInput | number
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManpowerLogUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    headcount?: IntFieldUpdateOperationsInput | number
    hours?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shift?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}