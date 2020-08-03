import React, { Component } from 'react';
import './Metronome.css';
import click1 from './click1.wav'
import click2 from './click2.wav'

class Metronome extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            count: 0,
            bpm: 120,
            beatsPerMeasure: 4
        }
        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);

    }

    startStop = () => {
        if (this.state.playing) {
            clearInterval(this.timer);
            this.setState({ playing: false });
        }
        else {
            this.timer = setInterval(
                this.playClick,
                (60 / this.state.bpm) * 1000
            );
            this.setState({
                playing: true,
                count: 0,
            },
                this.playClick
            );
        }
    }

    playClick = () => {
        const { count, beatsPerMeasure } = this.state;

        if (count % beatsPerMeasure === 0) {
            this.click2.play();
        } else {
            this.click1.play();
        }

        this.setState(state => ({
            count: (state.count + 1) % state.beatsPerMeasure
        }));
    }

    handleBpmChange = event => {
        const bpm = event.target.value;
        if (this.state.playing) {
            clearInterval(this.timer);
            this.timer = setInterval(this.playClick, (60 / bpm) * 1000);

            this.setState({
                count: 0,
                bpm
            })
        }
        else {
            this.setState({ bpm });
        }
    }

    changeMeasure = event => {
        const beatsPerMeasure = event.target.value
        this.setState({ beatsPerMeasure })
    }

    render() {
        const { playing, bpm } = this.state;

        return (
            <div className="metronome">
                <div>

                    <div className="title">Metronome</div>
                    <div className="bpm-slider">
                        <div>{bpm} BPM</div>
                        <input
                            type="range"
                            min="50"
                            max="300"
                            value={bpm}
                            onChange={this.handleBpmChange} />
                    </div>

                    <button onClick={this.startStop}>{playing ? 'Stop' : 'Start'}</button>

                    <select
                        className="select-beat"
                        value={this.state.beatsPerMeasure}
                        onChange={this.changeMeasure}>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                </div>


            </div>
        )
    }
}

export default Metronome;