import { Database } from './database.types';
export type { Tables as BrightTable } from './database.types.ts';
// Utility types to infer Args and Returns from the Database's Functions type
type FunctionArgs<F extends keyof Database['public']['Functions']> = Database['public']['Functions'][F]['Args'];

// Helper type to generate the FunctionsType
export type GenerateFunctionsType<T extends Record<keyof Database['public']['Functions'], unknown>> = {
  [K in keyof Database['public']['Functions']]: {
    args: FunctionArgs<K>;
    returns: T[K];
  }
}

export interface RealtimeEvents {
  [event: string]: { [key: string]: unknown }
}

export type EventCallback<K extends RealtimeEvents, T extends keyof K> = (payload: K[T]) => void;
