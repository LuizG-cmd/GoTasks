export function FormGroup( {type, id, placeholder, value, onChange, description, label} ){
    return (
        <div className="form-group">

           <label htmlFor={id}>

            { label }

            </label> 


           <input 
           type={type}
           id={id}
           placeholder={placeholder}
           value={onChange}
           />

        </div>
    )
}