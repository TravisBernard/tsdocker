import "tsconfig-paths/register";
import { greeting } from "@travbern/mylib";

export const greet = () => console.log(greeting);

greet();
