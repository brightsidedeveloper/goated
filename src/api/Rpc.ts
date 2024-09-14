import { GenerateFunctionsType } from '@/types/bright.types';
import { BrightBaseFunctions } from 'bsdweb';

const Functions: (keyof FunctionsType)[] = ['execute_sql', 'get_todos', 'search_todos_by_embedding'];

type Returns = {
  execute_sql: unknown // Define the return type of the function
  get_todos: unknown // Define the return type of the function
  search_todos_by_embedding: unknown // Define the return type of the function
};

type FunctionsType = GenerateFunctionsType<Returns>;

const functions = new BrightBaseFunctions<FunctionsType>(Functions).functions;

export default functions;
