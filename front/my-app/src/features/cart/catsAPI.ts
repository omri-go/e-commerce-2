import { SERVER } from "../../setting";
import axios from "axios";
import { Category } from "../../models/Category";

export function getAllCategories() {
  return new Promise<{ data: Category[] }>((resolve) =>
    axios.get(SERVER + "categories/").then((res) => resolve(res))
  );
}
