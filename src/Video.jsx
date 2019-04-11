import React, { useRef, useEffect, useState } from "react";
import sample from "./sample.mp4";
// import multiTrack from "./multiTrack.mp4";

export const Video = () => {
  const vRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(1);
  const [audioCtx, setAudioCtx] = useState(
    new (window.AudioContext || window.webkitAudioContext)()
  );
  const [volumeGainNode, setVolumeGainNode] = useState(audioCtx.createGain());
  const [channelGainNodes, setChannelGainNodes] = useState(
    Array(6)
      .fill()
      .map(_ => audioCtx.createGain())
  );
  const [toggleMap, setToggleMap] = useState(Array(6).fill(true));

  useEffect(() => {
    const vid = vRef.current;
    volumeGainNode.gain.value = sliderValue;
    const splitter = audioCtx.createChannelSplitter(6);
    const merger = audioCtx.createChannelMerger(6);

    if (vid) {
      console.log(vid.audioTracks);

      const source = audioCtx.createMediaElementSource(vid);
      source.connect(volumeGainNode);
      volumeGainNode.connect(splitter);

      // Connect 6 splitter output to Channels Gain Node
      splitter.connect(channelGainNodes[0], 0);
      splitter.connect(channelGainNodes[1], 1);
      splitter.connect(channelGainNodes[2], 2);
      splitter.connect(channelGainNodes[3], 3);
      splitter.connect(channelGainNodes[4], 4);
      splitter.connect(channelGainNodes[5], 5);

      // Merge the 6 channels gain node back to single merger
      channelGainNodes[0].connect(merger, 0, 0);
      channelGainNodes[1].connect(merger, 0, 1);
      channelGainNodes[2].connect(merger, 0, 2);
      channelGainNodes[3].connect(merger, 0, 3);
      channelGainNodes[4].connect(merger, 0, 4);
      channelGainNodes[5].connect(merger, 0, 5);

      // Connecter merger to destination (speaker)
      merger.connect(audioCtx.destination);

      // vid.ontimeupdate = () => {
      //   console.log(vid.currentTime, audioCtx.currentTime);
      // };
    }
  }, []);

  useEffect(() => {
    volumeGainNode.gain.value = sliderValue;
  }, [sliderValue]);

  const handleToggle = (i, value) => {
    const map = [...toggleMap];
    map[i] = value;
    channelGainNodes[i].gain.value = value ? 1 : 0;
    setToggleMap(map);
  };

  return (
    <div>
      <video ref={vRef} src={sample} width="1000" controls />
      <input
        style={{ display: "block" }}
        type="range"
        step="0.01"
        min="0"
        max="1"
        onChange={e => setSliderValue(e.target.value)}
        value={sliderValue}
      />
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <Toggle key={i} idx={i} onChange={handleToggle} />
        ))}
      <div>1 - Left</div>
      <div>2 - Right</div>
      <div>3 - Center</div>
      <div>4 - LFE</div>
      <div>5 - Surround Left</div>
      <div>6 - Surround Right</div>
    </div>
  );
};

const Toggle = ({ idx, onChange }) => {
  const [isToggle, setIsToggle] = useState(true);

  const handleClick = () => {
    const value = !isToggle;
    setIsToggle(value);
    onChange(idx, value);
  };

  return (
    <button style={{ width: "9rem", display: "block" }} onClick={handleClick}>
      {isToggle ? `Channel ${idx + 1} ON` : `Channel ${idx + 1} OFF`}
    </button>
  );
};

export default Video;
