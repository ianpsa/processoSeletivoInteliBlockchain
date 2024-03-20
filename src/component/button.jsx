export default function Button(props){
    return(
        <Button className="text-xl mt-4 p-2 text-white rounded-md shadow-md  disabled:bg-gray-300 disabled:cursos-not-allowed" bg-blue-500 type={props.type}>
            {props.name}
        </Button>
    )
}