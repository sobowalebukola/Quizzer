import React from 'react';

const QUESTION_DATA = [

  {
    question: <span>Which of the following methods can be used to organize/encapsulate code?</span>,
    answers: [
      <span>The module pattern in ES5 or Module Import Export in ES6.</span>,
      <span>An Immediately Invoked Function Expression.</span>,
      <span>OO or Objects Linked to Other Objects</span>,
      <span>All of the above.</span>
    ],
    correct: 3
  },
  {
    question: <span>What's an example of a practical use case for recursion?</span>,
    answers: [
      <span>Traversing a tree (e.g., Walking the DOM).</span>,
      <span>Flattening a deeply nested array.</span>,
      <span>Deep freezing a deeply nested object.</span>,
      <span>All of the above.</span>
    ],
    correct: 3
  },
  {
    question: <span>What's the difference between <code>=</code>, <code>==</code>, and <code>===</code>?</span>,
    answers: [
      <span><code>=</code> is the basic assignment operator. It assigns the value of its right operand to its left operand.</span>,
      <span><code>==</code> compares two values for equality AFTER converting both values to a common type.</span>,
      <span><code>===</code> is used for strict equality. It checks for equality of both value AND type.</span>,
      <span>All of the above.</span>
    ],
    correct: 3
  },
  {
    question: <span>Which of the following is true about passing by value vs reference?</span>,
    answers: [
      <span>Objects, arrays, and functions are passed by reference.</span>,
      <span>string, number, boolean, symbol, null and undefined are passed by value.</span>,
      <span>Primitive types are passed by value and non-primitive types are passed by reference.</span>,
      <span>All of the above.</span>
    ],
    correct: 3
  },
  {
    question: <span>What is a <code>static</code> method?</span>,
    answers: [
      <span>A function that exists on an instance, not a class.</span>,
      <span>A method that only takes one argument.</span>,
      <span>A function that exists on a class, not an instance.</span>,
      <span>None of the above.</span>
    ],
    correct: 2
  },
  {
    question: <span>Which of the following is TRUE about the difference between <code>undefined</code> and <code>null</code>.</span>,
    answers: [
      <span>A variable is <code>undefined</code> when it's been declared but hasn't been assigned a value.</span>,
      <span><code>null</code> is purposely assigned as a representation of "no value."</span>,
      <span><code>undefined</code> is returned when trying to access a non-existant property of an object.</span>,
      <span>All of the above.</span>
    ],
    correct: 3
  },
  {
    question: <span>In React, which of the following is TRUE about the difference between an element and a component?</span>,
    answers: [
      <span>A React element is an object representation of a DOM node.</span>, 
      <span>A component is a <code>class</code> or a <code>function</code>.</span>,
      <span>A component accepts props and returns a React element.</span>,
      <span>All of the above.</span>
    ],
    correct: 3
  },
  {
    question: <span>In React, which is TRUE about the difference between controlled components and uncontrolled components?</span>,
    answers: [
      <span>With controlled components, form data is handled by React.</span>, 
      <span>A controlled input accepts its current value as a prop, and a callback to change that value.</span>,
      <span>With uncontrolled components, form data is handled by the DOM, and input values can be accessed using refs.</span>,
      <span>All of the above.</span>
    ],
    correct: 3
  },
  {
    question: <span>In React, what's the execution order for methods and lifecycle hooks on initial render?</span>,
    answers: [
      <span><code>componentDidMount()</code> → <code>render()</code> → <code>getDerivedStateFromProps()</code> → <code>constructor()</code></span>, 
      <span><code>render()</code> → <code>componentDidMount()</code> → <code>constructor()</code> → <code>getDerivedStateFromProps()</code></span>,
      <span><code>constructor()</code> → <code>getDerivedStateFromProps()</code> → <code>render()</code> → <code>componentDidMount()</code></span>,
      <span>None of the above.</span>
    ],
    correct: 2
  },
  {
    question: <span>In React, which is TRUE about the difference between a class component, a PureComponent, and a functional component?</span>,
    answers: [
      <span>Standard class components have state, lifecycle hooks, and refs.</span>, 
      <span>A PureComponent is just like a class component, but handles shouldComponentUpdate for you, with a shallow check for changes in props or state. This allows for a performance boost by preventing unnecessary rerenders.</span>,
      <span>Functional components are presentational; they don't have access to state or lifecycle hooks, and can't use refs.</span>,
      <span>All of the above.</span>
    ],
    correct: 3
  }
];

export default QUESTION_DATA;
