import Button from './Button';

const Form = ({ type, setType }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Button 
                buttonText="users"
                type={type}
                setType={setType}
            />
            <Button 
                buttonText="posts"
                type={type}
                setType={setType}
            />
            <Button 
                buttonText="comments"
                type={type}
                setType={setType}
            />
        </form>
    )
}

export default Form