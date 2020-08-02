import React from 'react';
import Button from 'react-bootstrap/Button';
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './sortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 0.75;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 300;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'violet';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
  

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 730));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {

  }

  heapSort() {

  }

  bubbleSort() {

  }



  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        <div><br/></div>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}

        <div className="array-buttons">
        <Button variant="outline-primary" onClick={() => this.resetArray()}>Generate New Array</Button>{' '}
        <Button variant="outline-light" onClick={() => this.mergeSort()}>Merge Sort</Button>{' '}
        <Button variant="outline-light" onClick={() => this.quickSort()}>Quick Sort</Button>{' '}
        <Button variant="outline-light" onClick={() => this.heapSort()}>Heap Sort</Button>{' '}
        <Button variant="outline-light" onClick={() => this.bubbleSort()}>Bubble Sort</Button>{' '}
      </div>
      </div>
    );
  }
}
