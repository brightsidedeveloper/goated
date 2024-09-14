import { BrightBaseCRUD } from 'bsdweb'
import { BrightTable } from '../types/bright.types'


const Tables = {
  category: new BrightBaseCRUD<Category, CategoryCreateOptions>('category'),
  iphone_messages: new BrightBaseCRUD<IphoneMessages, IphoneMessagesCreateOptions>('iphone_messages'),
  iphone_post_likes: new BrightBaseCRUD<IphonePostLikes, IphonePostLikesCreateOptions>('iphone_post_likes'),
  iphone_posts: new BrightBaseCRUD<IphonePosts, IphonePostsCreateOptions>('iphone_posts'),
  sql_query_log: new BrightBaseCRUD<SqlQueryLog, SqlQueryLogCreateOptions>('sql_query_log'),
  todo: new BrightBaseCRUD<Todo, TodoCreateOptions>('todo')
}


export type Category = BrightTable<'category'>
export interface CategoryCreateOptions {
  OmitOnCreate: 'id' | 'created_at' // Add or Remove fields that are omitted on create
  OptionalOnCreate: never // Add fields that are optional on create
}
export type CategoryReadOptions = Parameters<typeof Tables.category.read>

export type CategoryInfiniteReadOptions = [
  Parameters<typeof Tables.category.read>[0],
  Omit<Parameters<typeof Tables.category.read>[1], 'limit' | 'offset'>,
]
      

export type IphoneMessages = BrightTable<'iphone_messages'>
export interface IphoneMessagesCreateOptions {
  OmitOnCreate: 'id' | 'created_at' // Add or Remove fields that are omitted on create
  OptionalOnCreate: never // Add fields that are optional on create
}
export type IphoneMessagesReadOptions = Parameters<typeof Tables.iphone_messages.read>

export type IphoneMessagesInfiniteReadOptions = [
  Parameters<typeof Tables.iphone_messages.read>[0],
  Omit<Parameters<typeof Tables.iphone_messages.read>[1], 'limit' | 'offset'>,
]
      

export type IphonePostLikes = BrightTable<'iphone_post_likes'>
export interface IphonePostLikesCreateOptions {
  OmitOnCreate: 'id' | 'created_at' // Add or Remove fields that are omitted on create
  OptionalOnCreate: never // Add fields that are optional on create
}
export type IphonePostLikesReadOptions = Parameters<typeof Tables.iphone_post_likes.read>

export type IphonePostLikesInfiniteReadOptions = [
  Parameters<typeof Tables.iphone_post_likes.read>[0],
  Omit<Parameters<typeof Tables.iphone_post_likes.read>[1], 'limit' | 'offset'>,
]
      

export type IphonePosts = BrightTable<'iphone_posts'>
export interface IphonePostsCreateOptions {
  OmitOnCreate: 'id' | 'created_at' // Add or Remove fields that are omitted on create
  OptionalOnCreate: never // Add fields that are optional on create
}
export type IphonePostsReadOptions = Parameters<typeof Tables.iphone_posts.read>

export type IphonePostsInfiniteReadOptions = [
  Parameters<typeof Tables.iphone_posts.read>[0],
  Omit<Parameters<typeof Tables.iphone_posts.read>[1], 'limit' | 'offset'>,
]
      

export type SqlQueryLog = BrightTable<'sql_query_log'>
export interface SqlQueryLogCreateOptions {
  OmitOnCreate: 'id' | 'created_at' // Add or Remove fields that are omitted on create
  OptionalOnCreate: never // Add fields that are optional on create
}
export type SqlQueryLogReadOptions = Parameters<typeof Tables.sql_query_log.read>

export type SqlQueryLogInfiniteReadOptions = [
  Parameters<typeof Tables.sql_query_log.read>[0],
  Omit<Parameters<typeof Tables.sql_query_log.read>[1], 'limit' | 'offset'>,
]
      

export type Todo = BrightTable<'todo'>
export interface TodoCreateOptions {
  OmitOnCreate: 'id' | 'created_at' // Add or Remove fields that are omitted on create
  OptionalOnCreate: never // Add fields that are optional on create
}
export type TodoReadOptions = Parameters<typeof Tables.todo.read>

export type TodoInfiniteReadOptions = [
  Parameters<typeof Tables.todo.read>[0],
  Omit<Parameters<typeof Tables.todo.read>[1], 'limit' | 'offset'>,
]
      
export default Tables
