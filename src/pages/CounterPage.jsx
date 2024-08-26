import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const CounterPage = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    dispatch({ type: "INCREMENT_COUNT" });
  };
  const decrementCounter = () => {
    dispatch({ type: "DECREMENT_COUNT" });
  };

  const setCounterWithInput = () => {
    dispatch({
        type: "SET_COUNT",
        payload:{
          newCount: count  
        } 
    })
  }
  return (
    <main className="min-h-[80vh] flex flex-col gap-4 items-center justify-center max-w-screen-md mx-auto px-4 mt-8">
      <p className="text-3xl font-bold">Count: {counter.count}</p>
      <div className="flex gap-x-3">
        <Button onClick={decrementCounter}>
          <Minus />
        </Button>
        <Button onClick={incrementCounter}>
          <Plus />
        </Button>
      </div>
      <div className="flex gap-2 mt-8">
        <Input placeholder="input count" type="number" onChange={(e) => setCount(e.target.value)}/>
        <Button onClick={setCounterWithInput}>Submit</Button>
      </div>
    </main>
  );
};

export default CounterPage;
