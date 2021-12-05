function ImputText(props){

    return(

        <div>


<label>{props.label}</label>
<input
    type={props.type}
    name={props.name}
    onChange={props.onChange}
    value={props.value}
/>
        </div>
    )
}


export default ImputText