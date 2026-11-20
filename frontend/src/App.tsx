import { useState } from "react";
import { NumberBox } from "./textBox";
import { ResultBox } from "./resultBox";
import { offLocationRequest, min, max, totalSpace } from "./calculations";

const App = () => {
    const [shelfSpace, setShelfSpace] = useState("");
    const [offLocationSpace, setOffLocationSpace] = useState("");
    const [forcast4wk, setForcast4wk] = useState("");
    const [mpq, setMPQ] = useState("");

    const totalSpaceVal = totalSpace(shelfSpace, offLocationSpace);
    const offLocationReqVal = offLocationRequest(totalSpaceVal, forcast4wk, mpq);
    const minVal = min(offLocationReqVal, mpq);
    const maxVal = max(minVal, forcast4wk);

    return (
        <div className="min-h-screen flex flex-col justify-center bg-gray-100 dark:bg-gray-900 dark:text-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
                <div>
                    <h1 className="text-3xl font-bold text-center mb-6 px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-inner">
                        Off Location Calculator
                    </h1>
                </div>
                <div

                    className="space-y-4"
                >
                    <NumberBox
                        id="shlfspace"
                        label="Shelf Space"
                        value={shelfSpace}
                        onChange={setShelfSpace}
                    />
                    <NumberBox
                        id="offLocSpace"
                        label="Off Location Space"
                        value={offLocationSpace}
                        onChange={setOffLocationSpace}
                    />
                    <NumberBox
                        id="forcast"
                        label="4 week forecast"
                        value={forcast4wk}
                        onChange={setForcast4wk}
                    />
                    <NumberBox id="mpq" label="MPQ" value={mpq} onChange={setMPQ} />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-12">
                    <ResultBox result={totalSpaceVal} label="Total Space" id="TSpace" />
                    <ResultBox
                        result={offLocationReqVal}
                        label="Off Location Request"
                        id="OffLocReq"
                    />
                    <ResultBox result={minVal} label="Min stock" id="min" />
                    <ResultBox result={maxVal} label="Max stock" id="max" />
                </div>
            </div>
        </div>
    );
};

export default App;
