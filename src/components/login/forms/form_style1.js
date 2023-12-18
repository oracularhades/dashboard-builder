import './css/form_style1.css';
import './../../global.css';

export default function FormStyle_1(props) {
    return (
        <div className='FormStyle_1 shade'>
            {!props.logo && <h1 className='FormStyle_1_header'>Login</h1>}
            {props.logo && <div className='FormStyle_1_logo'>{props.logo}</div>}

            {props.children}
        </div>
    )
}