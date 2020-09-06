import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './Slide.module.scss';

class Slide extends Component {
  constructor(props) {
    super(props);
    const img = new Image();
    img.addEventListener('load', this.handleLoad);
    this.state = {
      img,
      isLoaded: false,
    };
  }
  handleLoad = () => {
    /*
    this.ListeningStateChangeEvent({
      isLoaded: true,
    });
    */
    this.setState({
      isLoaded: true,
    });
  };
  load = () => {
    const { img } = this.state;
    const {
      currentSlide: { src },
    } = this.props;
    img.src = src;
  };
  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    const { isLoaded } = this.state;
    const {
      currentSlide: { src },
    } = this.props;
    if (src !== prevProps.currentSlide && isLoaded) {
      this.load();
    }
  }
  render() {
    const { img, isLoaded } = this.state;
    const { currentSlide, contRatio } = this.props;
    const imageRatio = img.width / img.height;
    const imageSize = {
      [imageRatio > contRatio ? 'width' : 'height']: 'inherit',
    };
    return (
      <>
        {isLoaded && (
          <figure className={styles.container} title={currentSlide.title}>
            <img
              src={currentSlide.src}
              alt={currentSlide.title}
              style={imageSize}
            />
            <figcaption className={styles.caption}>
              <h3>{currentSlide.title}</h3>
              <p>{currentSlide.description}</p>
            </figcaption>
          </figure>
        )}
      </>
    );
  }
}
Slide.propTypes = {
  contRatio: propTypes.number.isRequired,
  currentSlide: propTypes.shape({
    src: propTypes.string,
    title: propTypes.string,
    description: propTypes.string,
  }).isRequired,
};
export default Slide;
