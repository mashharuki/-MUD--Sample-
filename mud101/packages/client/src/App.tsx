import { useRow } from "@latticexyz/react";
import { useMUD } from "./MUDContext";

export const App = () => {
  const {
    systemCalls: { increment, mint },
    network: { storeCache },
  } = useMUD();

  const counter = useRow(storeCache, {
    table: "Counter",
    key: {}
  });

  return (
    <>
      <div>
        Counter: <span>{counter?.value.value ?? "??"}</span>
      </div>
      <button
        type="button"
        onClick={async (event) => {
          event.preventDefault();
          console.log("new counter value:", await increment());
        }}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={async (event) => {
          event.preventDefault();
          console.log("new counter value:", await mint());
        }}
      >
        Mint
      </button>
    </>
  );
};
