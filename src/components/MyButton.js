//components/MyButton.js
import 'bootstrap/dist/css/bootstrap.css';
const MyButton = ({ to }) => {

    return (
        <a href={`/${to}`}>
            <button className="my-button">
                Take me to {to === '' ? "home" : to}
            </button>
        </a>
    )
}

export default MyButton;
