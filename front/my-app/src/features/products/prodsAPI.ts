import { SERVER } from "../../setting";
import axios from "axios";
import { Product } from "../../models/Product";

export function getProducts(catId: number) {
  return new Promise<{ data: Product[] }>((resolve) =>
    axios.get(SERVER + "products/" + catId + "/").then((res) => resolve(res))
  );
}
