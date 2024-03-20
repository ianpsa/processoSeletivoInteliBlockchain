export default function input(props) {
    return(
        <div className="flex flex-col items-start">
            <label className="text-white px">{props.label}</label>
            <span className="text-sm text-gray-200">{props.description}</span>
            <input className="text-black rounded-md w-full py-1" style={{padding: '10px'}} placeholder={props.placeholder} />
        </div>
    )
}