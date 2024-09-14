import { GenerateFunctionsType } from '@/types/bright.types';
import { BrightBaseFunctions } from 'bsdweb';

const Functions: (keyof FunctionsType)[] = ['execute_sql', 'get_posts_with_like_count', 'get_todos', 'search_todos_by_embedding'];

type FunctionsType = GenerateFunctionsType;

const functions = new BrightBaseFunctions<FunctionsType>(Functions).functions;

export default functions;
