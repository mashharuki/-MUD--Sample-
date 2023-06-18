import { getComponentValue } from "@latticexyz/recs";
import { awaitStreamValue } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

/**
 * MUD コントラクトの機能を呼び出すコンポーネントファイル
 * @param param0 
 * @param param1 
 * @returns 
 */
export function createSystemCalls(
  { worldSend, txReduced$, singletonEntity }: SetupNetworkResult,
  { Counter }: ClientComponents
) {
  /**
   * increment function
   * @returns 
   */
  const increment = async () => {
    const tx = await worldSend("increment", []);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Counter, singletonEntity);
  };

  /**
   * mint function
   */
  const mint = async () => {
    await worldSend("mint", [1]);
  }

  return {
    increment,
    mint
  };
}
