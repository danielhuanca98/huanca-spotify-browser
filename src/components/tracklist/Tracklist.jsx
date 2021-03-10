import React, { useEffect, useState } from "react";
import { tracklist } from "../../api/request";
import { millisToMinutesAndSeconds as mil, parseDate } from "./utils";
import Play from "./play";
import ToSpotfy from "./toSpotify";
import Title from "../header/title";
import Navigator from "../nav/navigator";
import Spinners from '../spinner/Spinner'
import "./tracklist.sass";

export default function Tracklist(props) {
    const [trackArray, setTrackArray] = useState([]);
    const [info, setInfo] = useState({});
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (props.match === undefined) return;
        tracklist(props.match.params.id, props.token).then((res) => {
            setTrackArray(res.data.tracks.items);
            setInfo({
                external: res.data.external_urls.spotify,
                name: res.data.name,
                description: res.data.description,
                image: res.data.images[0].url,
                followers: res.data.followers.total,
                total: res.data.tracks.total,
            });
            setName(res.data.name)
            setIsLoading(false)
        });
    }, [props]);

    return (
        <>
            <div className="navigation-container">
                <Title title="Playlist: " name={name} />
                <Navigator />
            </div>
            <div className="tracklist-container">
                {isLoading && <Spinners></Spinners>}
                {!isLoading && (
                    <>
                        <div className="left">
                            {info.image && (
                                <img
                                    className="tracklist-img"
                                    src={info.image}
                                    alt={info.name}
                                />
                            )}
                            <div className="button-container">
                                <ToSpotfy url={info.external} />
                            </div>
                        </div>
                        <div className="info-container">
                            <div className="description">
                                {info.description}
                            </div>
                            <div className="followers-container">
                                seguidores:
                                <div className="followers">
                                    {info.followers}
                                </div>
                            </div>
                            <div className="followers-container">
                                músicas:{" "}
                                <div className="followers">{info.total}</div>
                            </div>

                            {trackArray.length > 0 && (
                                <div className="list">
                                    {trackArray.map((track) => {
                                        return (
                                            <div
                                                key={track.track.id}
                                                className="track-container"
                                            >
                                                <Play
                                                    token={props.token}
                                                    id={track.track.id}
                                                />
                                                <p className="track-name">
                                                    {track.track.name}
                                                </p>
                                                {track.track.explicit ? (
                                                    <div className="track-explicit">
                                                        EXPLICIT
                                                    </div>
                                                ) : (
                                                    <div></div>
                                                )}
                                                <div className="track-artist">
                                                    {
                                                        track.track.artists[0]
                                                            .name
                                                    }
                                                </div>
                                                <div className="track-added">
                                                    {parseDate(track.added_at)}
                                                </div>
                                                <div className="track-duration">
                                                    {mil(
                                                        track.track.duration_ms
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}