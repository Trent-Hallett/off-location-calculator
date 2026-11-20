
type numInputProps = {
    id : string;
    label : string;
    value : string;
    onChange : (value: string) => void;
}; 

export const NumberBox = ({id, label, value, onChange} : numInputProps) => { 
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const numVal = e.target.value.replace(/\D/g, "");
        onChange(numVal);
    }

    return (
        <div
            className="rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden shadow-sm"
        >
            <label 
                htmlFor={id}
                className="block px-3 py-2 bg-gray-100 dark:bg-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-200 border-b border-gray-300 dark:border-gray-600"
            >
                {label}
            </label>

            <input 
                className="w-full px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                id={id}
                type="text" 
                inputMode="numeric"
                value ={value}
                onChange={handleChange}

            >

            </input>
        </div>
    );


};



