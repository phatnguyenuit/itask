// THIS FILE IS GENERATED, DO NOT EDIT!!!
import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateTodoPayload = {
  completed: Scalars['Boolean'];
  title: Scalars['String'];
  userId: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  createTodo: Todo;
  deleteTodo: Scalars['Boolean'];
  updateTodo: Todo;
};

export type MutationCreateTodoArgs = {
  payload: CreateTodoPayload;
};

export type MutationDeleteTodoArgs = {
  id: Scalars['Int'];
};

export type MutationUpdateTodoArgs = {
  id: Scalars['Int'];
  payload: UpdateTodoPayload;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  searchTodos: Array<Todo>;
};

export type QuerySearchTodosArgs = {
  searchParams?: InputMaybe<SearchTodoParams>;
  userId: Scalars['Int'];
};

export type SearchTodoParams = {
  completed?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Todo = {
  __typename?: 'Todo';
  completed: Scalars['Boolean'];
  id: Scalars['Int'];
  title: Scalars['String'];
  userId: Scalars['Int'];
};

export type UpdateTodoPayload = {
  completed?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateTodoPayload: CreateTodoPayload;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SearchTodoParams: SearchTodoParams;
  String: ResolverTypeWrapper<Scalars['String']>;
  Todo: ResolverTypeWrapper<Todo>;
  UpdateTodoPayload: UpdateTodoPayload;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CreateTodoPayload: CreateTodoPayload;
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  SearchTodoParams: SearchTodoParams;
  String: Scalars['String'];
  Todo: Todo;
  UpdateTodoPayload: UpdateTodoPayload;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createTodo?: Resolver<
    ResolversTypes['Todo'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateTodoArgs, 'payload'>
  >;
  deleteTodo?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteTodoArgs, 'id'>
  >;
  updateTodo?: Resolver<
    ResolversTypes['Todo'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTodoArgs, 'id' | 'payload'>
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchTodos?: Resolver<
    Array<ResolversTypes['Todo']>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchTodosArgs, 'userId'>
  >;
};

export type TodoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo'],
> = {
  completed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
};

export type SearchTodosQueryVariables = Exact<{
  userId: Scalars['Int'];
  searchParams?: InputMaybe<SearchTodoParams>;
}>;

export type SearchTodosQuery = {
  __typename?: 'Query';
  searchTodos: Array<{
    __typename?: 'Todo';
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  }>;
};

export const SearchTodosDocument = gql`
  query searchTodos($userId: Int!, $searchParams: SearchTodoParams) {
    searchTodos(userId: $userId, searchParams: $searchParams) {
      id
      userId
      title
      completed
    }
  }
`;

/**
 * __useSearchTodosQuery__
 *
 * To run a query within a React component, call `useSearchTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchTodosQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      searchParams: // value for 'searchParams'
 *   },
 * });
 */
export function useSearchTodosQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchTodosQuery,
    SearchTodosQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchTodosQuery, SearchTodosQueryVariables>(
    SearchTodosDocument,
    options,
  );
}
export function useSearchTodosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchTodosQuery,
    SearchTodosQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchTodosQuery, SearchTodosQueryVariables>(
    SearchTodosDocument,
    options,
  );
}
export type SearchTodosQueryHookResult = ReturnType<typeof useSearchTodosQuery>;
export type SearchTodosLazyQueryHookResult = ReturnType<
  typeof useSearchTodosLazyQuery
>;
export type SearchTodosQueryResult = Apollo.QueryResult<
  SearchTodosQuery,
  SearchTodosQueryVariables
>;

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockSearchTodosQuery((req, res, ctx) => {
 *   const { userId, searchParams } = req.variables;
 *   return res(
 *     ctx.data({ searchTodos })
 *   )
 * })
 */
export const mockSearchTodosQuery = (
  resolver: ResponseResolver<
    GraphQLRequest<SearchTodosQueryVariables>,
    GraphQLContext<SearchTodosQuery>,
    any
  >,
) =>
  graphql.query<SearchTodosQuery, SearchTodosQueryVariables>(
    'searchTodos',
    resolver,
  );
