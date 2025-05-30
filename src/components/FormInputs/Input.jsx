export default function Input({label, invalid, ...props}) {
    const labelColour = invalid ? "text-red-400" : "text-stone-300";
    const inputColour = invalid ? "text-red-500 bg-red-100 border-red-300" : "text-gray-700 bg-stone-300";

    return (
        <>
            <label className={`block mb-2 text-xs font-bold tracking-wide uppercase ${labelColour}`}>{label}</label>
            <input className={`w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow ${inputColour}`} {...props} />
        </>
    )
};