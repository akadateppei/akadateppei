import React from "react"

type Props = {
    name: string,
    description: string,
    image: string,
    url: string
}

const AppLink: React.FC<Props> = (props) => {
    return (
        <a href={props.url} className="card">
            <div className="left">
                <img src={props.image} width="100" height="100" />
            </div>
            <div className="right">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            </div>
            <style jsx>{`
                .card {
                    margin: 0.4rem;
                    flex-basis: 100%;
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    text-decoration: none;
                    border: 1px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                    display: flex;
                    align-items: center;
            justify-content: center;
                }

                .card h3 {
                    margin: 0 0 0.5rem 0;
                    font-size: 1.2rem;
                }

                .card p {
                    margin: 0;
                    font-size: 1rem;
                    line-height: 1.5;
                    color: gray;
                }

                .right {
                    margin-left: 1rem;
                }

                .appstoreLink {
                    bottom: 0px;
                }
            `}</style>
        </a>
    );
}

export default AppLink;