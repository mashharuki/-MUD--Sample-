import { mudConfig } from "@latticexyz/world/register";

/**
 * MUDの設定ファイル
 */
export default mudConfig({
  tables: {
    // Counter table
    Counter: {
      keySchema: {},
      schema: "uint32",
    },
    // Balance Table
    BalanceTable: {
      keySchema: {
        owner: "address",
        item: "uint32"
      },
      schema: "uint32"
    }
  },
});
