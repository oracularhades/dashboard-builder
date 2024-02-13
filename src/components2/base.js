import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Base(props) {
    return (
        <div className={`${props.className} ${inter.className}`} style={props.style}>
            {props.children}
        </div>
    )
}