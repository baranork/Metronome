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

    onValueChange = event => {
        const beatsPerMeasure = event.target.value
        this.setState({
            beatsPerMeasure
        })
        console.log(this.state.beatsPerMeasure)
    }

    render() {
        const { playing, bpm, beatsPerMeasure } = this.state;

        return (
            <div className="metronome">
                <div className="ad-App">

                    <div className="title">Metronome</div>
                    <div className="ad-Controls">
                        <div className="bpm-slider">
                            <div>{bpm} BPM</div>
                            <input
                                className="bpm-slider-input"
                                type="range"
                                min="50"
                                max="300"
                                value={bpm}
                                onChange={this.handleBpmChange} />
                        </div>
                    </div>

                    <button onClick={this.startStop}>{playing ? 'Stop' : 'Start'}</button>

                    <div className="choices">
                        <label className="choice">
                            <input
                                className="choice-input"
                                type="radio"
                                value={2}
                                checked={Number(beatsPerMeasure) === 2}
                                onChange={this.onValueChange} />
                            <div className="choice-fake">
                                2
                            </div>
                        </label>
                        <label className="choice">
                            <input
                                className="choice-input"
                                type="radio"
                                value={3}
                                checked={Number(beatsPerMeasure) === 3}
                                onChange={this.onValueChange} />
                            <div className="choice-fake">
                                3
                            </div>
                        </label>
                        <label className="choice">
                            <input
                                className="choice-input"
                                type="radio"
                                value={4}
                                checked={Number(beatsPerMeasure) === 4}
                                onChange={this.onValueChange} />
                            <div className="choice-fake">
                                4
                            </div>
                        </label>
                        <label className="choice">
                            <input
                                className="choice-input"
                                type="radio"
                                value={5}
                                checked={Number(beatsPerMeasure) === 5}
                                onChange={this.onValueChange} />
                            <div className="choice-fake">
                                5
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Metronome;