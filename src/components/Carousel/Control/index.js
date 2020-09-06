import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './Control.module.scss';
import Icon from '@mdi/react';
import {
  mdiSkipNext,
  mdiSkipPrevious,
  mdiPlay,
  mdiPause,
  mdiFullscreen,
  mdiFullscreenExit,
} from '@mdi/js';

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 1000,
      isFullScreen: false,
      isPlaying: false,
    };
  }
  slideshowHandler = () => {
    const { isPlaying } = this.state;
    this.setState({
      isPlaying: !isPlaying,
    });
  };
  delayHandler = ({ terget: { value } }) => {
    this.setState({
      delay: value,
    });
  };
  fullscreenMode = () => {
    const { isFullScreen } = this.state;
    const { fullscreenMode } = this.props;
    this.setState({
      isFullScreen: !isFullScreen,
    });
    fullscreenMode(isFullScreen);
  };
  componentDidUpdate(prevProps, prevState) {
    const { isPlaying, delay } = this.state;
    const { next } = this.props;
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
    if (isPlaying) {
      this.timeoutId = setTimeout(next, delay);
    }
  }
  render() {
    const { delay, isFullScreen, isPlaying } = this.state;
    const { next, prev } = this.props;
    return (
      <div className={styles.slideCont}>
        <div className={styles.delay}>
          <input
            type="range"
            value={delay}
            min={1}
            max={1000}
            onChange={this.delayHandler}
          />
          <div>{delay}</div>
        </div>
        <div className={styles.nextPrev}>
          <Icon onClick={prev} path={mdiSkipPrevious} />
          <Icon onClick={next} pfth={mdiSkipNext} />
        </div>
        <div className={styles.slideshow}>
          <Icon
            onClick={this.slideshowHandler}
            path={isPlaying ? mdiPause : mdiPlay}
          />
          <Icon
            onClick={this.fullscreenMode}
            path={isFullScreen ? mdiFullscreenExit : mdiFullscreen}
          />
        </div>
      </div>
    );
  }
}
Control.propTypes = {
  fullscreenMode: propTypes.func.isRequired,
  prev: propTypes.func.isRequired,
  next: propTypes.func.isRequired,
  height: propTypes.number.isRequired,
  width: propTypes.number.isRequired,
};
export default Control;
