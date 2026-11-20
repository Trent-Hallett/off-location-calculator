type resultBoxProps = {
    result : string;
    id : string;
    label : string;
};



export const ResultBox = ({result, id, label} : resultBoxProps) => {

    return (
        <div
            className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
            <label 
                htmlFor={id}
                className="block px-3 py-2 bg-gray-200 dark:bg-gray-700 text-sm font-semibold border-b"
            >
                {label}
            </label>
            <input className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 border-none focus:outline-none" 
                value={result} 
                readOnly 
                onFocus={(e) => e.target.select()} 
            />
        </div>
    );
};
