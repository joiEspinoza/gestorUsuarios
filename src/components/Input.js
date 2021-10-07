import "../styles/input.css";

const Input = ({ label, ...rest }) => 
{

    return (
        
        <div className="field">
        
            <label><small>{ label }</small></label>
            <br/>
            <input { ...rest }/>

        </div>

    )
}

export default Input
