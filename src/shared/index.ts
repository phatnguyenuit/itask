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
  isCompleted: Scalars['Boolean'];
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
  getTodo: Todo;
  searchTodos?: Maybe<SearchTodoResponse>;
};

export type QueryGetTodoArgs = {
  id: Scalars['Int'];
};

export type QuerySearchTodosArgs = {
  searchParams?: InputMaybe<SearchTodoParams>;
  userId: Scalars['Int'];
};

export type SearchTodoParams = {
  id?: InputMaybe<Scalars['Int']>;
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type SearchTodoResponse = {
  __typename?: 'SearchTodoResponse';
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  todos: Array<Todo>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['Int'];
  isCompleted: Scalars['Boolean'];
  title: Scalars['String'];
  userId: Scalars['Int'];
};

export type UpdateTodoPayload = {
  isCompleted?: InputMaybe<Scalars['Boolean']>;
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
  SearchTodoResponse: ResolverTypeWrapper<SearchTodoResponse>;
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
  SearchTodoResponse: SearchTodoResponse;
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
  getTodo?: Resolver<
    ResolversTypes['Todo'],
    ParentType,
    ContextType,
    RequireFields<QueryGetTodoArgs, 'id'>
  >;
  searchTodos?: Resolver<
    Maybe<ResolversTypes['SearchTodoResponse']>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchTodosArgs, 'userId'>
  >;
};

export type SearchTodoResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchTodoResponse'] = ResolversParentTypes['SearchTodoResponse'],
> = {
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  todos?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo'],
> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isCompleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SearchTodoResponse?: SearchTodoResponseResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
};

export type SearchTodosQueryVariables = Exact<{
  userId: Scalars['Int'];
  searchParams?: InputMaybe<SearchTodoParams>;
}>;

export type SearchTodosQuery = {
  __typename?: 'Query';
  searchTodos?:
    | {
        __typename?: 'SearchTodoResponse';
        page: number;
        pageSize: number;
        total: number;
        totalPages: number;
        todos: Array<{
          __typename?: 'Todo';
          id: number;
          userId: number;
          title: string;
          isCompleted: boolean;
        }>;
      }
    | null
    | undefined;
};

export type GetTodoQueryVariables = Exact<{
  getTodoId: Scalars['Int'];
}>;

export type GetTodoQuery = {
  __typename?: 'Query';
  getTodo: {
    __typename?: 'Todo';
    id: number;
    userId: number;
    title: string;
    isCompleted: boolean;
  };
};

export type CreateTodoMutationVariables = Exact<{
  payload: CreateTodoPayload;
}>;

export type CreateTodoMutation = {
  __typename?: 'Mutation';
  createTodo: {
    __typename?: 'Todo';
    id: number;
    userId: number;
    title: string;
    isCompleted: boolean;
  };
};

export type UpdateTodoMutationVariables = Exact<{
  updateTodoId: Scalars['Int'];
  payload: UpdateTodoPayload;
}>;

export type UpdateTodoMutation = {
  __typename?: 'Mutation';
  updateTodo: {
    __typename?: 'Todo';
    id: number;
    userId: number;
    title: string;
    isCompleted: boolean;
  };
};

export type DeleteTodoMutationVariables = Exact<{
  deleteTodoId: Scalars['Int'];
}>;

export type DeleteTodoMutation = {
  __typename?: 'Mutation';
  deleteTodo: boolean;
};

export const SearchTodosDocument = gql`
  query searchTodos($userId: Int!, $searchParams: SearchTodoParams) {
    searchTodos(userId: $userId, searchParams: $searchParams) {
      page
      pageSize
      total
      totalPages
      todos {
        id
        userId
        title
        isCompleted
      }
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
export const GetTodoDocument = gql`
  query getTodo($getTodoId: Int!) {
    getTodo(id: $getTodoId) {
      id
      userId
      title
      isCompleted
    }
  }
`;

/**
 * __useGetTodoQuery__
 *
 * To run a query within a React component, call `useGetTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoQuery({
 *   variables: {
 *      getTodoId: // value for 'getTodoId'
 *   },
 * });
 */
export function useGetTodoQuery(
  baseOptions: Apollo.QueryHookOptions<GetTodoQuery, GetTodoQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTodoQuery, GetTodoQueryVariables>(
    GetTodoDocument,
    options,
  );
}
export function useGetTodoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTodoQuery,
    GetTodoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTodoQuery, GetTodoQueryVariables>(
    GetTodoDocument,
    options,
  );
}
export type GetTodoQueryHookResult = ReturnType<typeof useGetTodoQuery>;
export type GetTodoLazyQueryHookResult = ReturnType<typeof useGetTodoLazyQuery>;
export type GetTodoQueryResult = Apollo.QueryResult<
  GetTodoQuery,
  GetTodoQueryVariables
>;
export const CreateTodoDocument = gql`
  mutation createTodo($payload: CreateTodoPayload!) {
    createTodo(payload: $payload) {
      id
      userId
      title
      isCompleted
    }
  }
`;
export type CreateTodoMutationFn = Apollo.MutationFunction<
  CreateTodoMutation,
  CreateTodoMutationVariables
>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useCreateTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTodoMutation,
    CreateTodoMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(
    CreateTodoDocument,
    options,
  );
}
export type CreateTodoMutationHookResult = ReturnType<
  typeof useCreateTodoMutation
>;
export type CreateTodoMutationResult =
  Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<
  CreateTodoMutation,
  CreateTodoMutationVariables
>;
export const UpdateTodoDocument = gql`
  mutation updateTodo($updateTodoId: Int!, $payload: UpdateTodoPayload!) {
    updateTodo(id: $updateTodoId, payload: $payload) {
      id
      userId
      title
      isCompleted
    }
  }
`;
export type UpdateTodoMutationFn = Apollo.MutationFunction<
  UpdateTodoMutation,
  UpdateTodoMutationVariables
>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      updateTodoId: // value for 'updateTodoId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdateTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTodoMutation,
    UpdateTodoMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(
    UpdateTodoDocument,
    options,
  );
}
export type UpdateTodoMutationHookResult = ReturnType<
  typeof useUpdateTodoMutation
>;
export type UpdateTodoMutationResult =
  Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<
  UpdateTodoMutation,
  UpdateTodoMutationVariables
>;
export const DeleteTodoDocument = gql`
  mutation deleteTodo($deleteTodoId: Int!) {
    deleteTodo(id: $deleteTodoId)
  }
`;
export type DeleteTodoMutationFn = Apollo.MutationFunction<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      deleteTodoId: // value for 'deleteTodoId'
 *   },
 * });
 */
export function useDeleteTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTodoMutation,
    DeleteTodoMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(
    DeleteTodoDocument,
    options,
  );
}
export type DeleteTodoMutationHookResult = ReturnType<
  typeof useDeleteTodoMutation
>;
export type DeleteTodoMutationResult =
  Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
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

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetTodoQuery((req, res, ctx) => {
 *   const { getTodoId } = req.variables;
 *   return res(
 *     ctx.data({ getTodo })
 *   )
 * })
 */
export const mockGetTodoQuery = (
  resolver: ResponseResolver<
    GraphQLRequest<GetTodoQueryVariables>,
    GraphQLContext<GetTodoQuery>,
    any
  >,
) => graphql.query<GetTodoQuery, GetTodoQueryVariables>('getTodo', resolver);

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateTodoMutation((req, res, ctx) => {
 *   const { payload } = req.variables;
 *   return res(
 *     ctx.data({ createTodo })
 *   )
 * })
 */
export const mockCreateTodoMutation = (
  resolver: ResponseResolver<
    GraphQLRequest<CreateTodoMutationVariables>,
    GraphQLContext<CreateTodoMutation>,
    any
  >,
) =>
  graphql.mutation<CreateTodoMutation, CreateTodoMutationVariables>(
    'createTodo',
    resolver,
  );

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateTodoMutation((req, res, ctx) => {
 *   const { updateTodoId, payload } = req.variables;
 *   return res(
 *     ctx.data({ updateTodo })
 *   )
 * })
 */
export const mockUpdateTodoMutation = (
  resolver: ResponseResolver<
    GraphQLRequest<UpdateTodoMutationVariables>,
    GraphQLContext<UpdateTodoMutation>,
    any
  >,
) =>
  graphql.mutation<UpdateTodoMutation, UpdateTodoMutationVariables>(
    'updateTodo',
    resolver,
  );

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteTodoMutation((req, res, ctx) => {
 *   const { deleteTodoId } = req.variables;
 *   return res(
 *     ctx.data({ deleteTodo })
 *   )
 * })
 */
export const mockDeleteTodoMutation = (
  resolver: ResponseResolver<
    GraphQLRequest<DeleteTodoMutationVariables>,
    GraphQLContext<DeleteTodoMutation>,
    any
  >,
) =>
  graphql.mutation<DeleteTodoMutation, DeleteTodoMutationVariables>(
    'deleteTodo',
    resolver,
  );
