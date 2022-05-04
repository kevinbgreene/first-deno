import { add } from "./add.ts";
import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";

Deno.test({
  name: "add",
  fn() {
    assertEquals(add(2, 3), 5);
  },
});
