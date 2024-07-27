// This hasn't been fully ported to dashboard-builder. I have put it up so someone else could see it.

import Link from "next/link";
import "./css/message_inject.css";

function UrlThroughParser(rawurl) {
    try {
        const urlData = new URL(rawurl);
        const params = new URLSearchParams(urlData.search);
        const queryString = params.toString();

        let queryStringOutput = "";
        if (queryString.length > 0) {
            queryStringOutput = "?"+queryString;
        }

        return `https://${urlData.host}${urlData.pathname}${queryStringOutput}`;
    } catch (error) {
        return null;
    }
}

export default function Message_inject(props) {
    if (!props.text) {
        return;
    }

    let style = {
        ...props.style
    }

    let arrays = [];
    let run_count = -1;

    const message = props.text.split("\n").map((line) => {
        return <div className="message_inject_line_div">{line.split(" ").map((data) => {
            run_count++;

            let useMentions = false;
            if (/[^A-Za-z0-9]/g.test(data) == false) {
                useMentions = true;
            } else {
                useMentions = false;
            }

            if (data.startsWith("@") && data.replaceAll("@").length > 0) {
                let output = data;
                let end = "";
                const before = data.substr(0, data.replace("@", "").search(/[^a-zA-Z0-9!#$%^&*_]/)+1);
                if (before.replace("@", "").length < data.replace("@", "").length && before.length > 0) {
                    output = before;
                    end = data.substr(output.length, data.length);
                }

                output = output.replaceAll(/[^a-zA-Z0-9!#$%^&*_]/g, ""); // use this for safety.

                return <p id="donot"><Link id="donot" href={`/@${output}`} className="hoverUnderline greyA">@{output}</Link>{end}&nbsp;</p>
            } else if (data.startsWith(":") && data.endsWith(":") && data.replaceAll(":", "").length > 0) {
                let data0 = data.replaceAll(":", "");
                const username = data0.slice(0, data0.indexOf("_"));
                const emoteName = data0.slice(data0.indexOf("_")+1, data.length);

                const params = new URLSearchParams({
                    type: "emote",
                    username: username,
                    alias: emoteName,
                });
                
                return <img id="donot" className='emoteImgImg disable-select' alt={`${username}_${emoteName}`} src={`https://media.infosec.exchange/infosec.exchange/cache/accounts/avatars/109/751/923/963/316/074/original/1c9adfa77baa01fe.jpg`}/>
            } else if (props.showLinks == true && /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(data) == true && data.startsWith("https")) {
                if (props.hideThoughtLinks == true && data.startsWith("https://example.com/thought/") && /[^a-zA-Z0-9/:.]/g.test(data.content) == false && /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(data) == true) {
                    return;
                }
                if (props.hideGifLinks && data.startsWith("https://media.tenor.com/")) {
                    return;
                }

                const urlData = UrlThroughParser(data);

                return <Link href={urlData} id="donot" className={``} target="_blank" rel="noreferrer" to={urlData}>{urlData}&nbsp;</Link>
            } else {
                if (typeof arrays[arrays.length] === 'string' || arrays[arrays.length] instanceof String) {
                    arrays[arrays.length] = `${arrays[arrays.length]} ${data}`;
                } else {
                    arrays.push(data);
                }
                
                return <span>{data}&nbsp;</span>
            }
        })}
        </div>
    });
    
    if (props.link) {
        return <Link href={props.link} onClick={props.onClick} key={props.tkey} id={props.div_id} style={style} className={`messageInject ${props.className}`}>{message}</Link>
    } else {
        return <div onClick={props.onClick} key={props.tkey} id={props.div_id} style={style} className={`messageInject ${props.className}`}>{message}</div>
    }
}