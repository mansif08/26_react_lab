/*
1st part :just write text and css external
import React from 'react';
import './app1.css'; // Assuming you have a file named MyComponent.css


function App() {
  return (
    <div className="myStyledComponent">
      <h1>Hello, JSX with External Stylesheet!</h1>
      <p>This is an example of using an external stylesheet in JSX.</p>
    </div>
  );
}


export default App;
*/

/*
import React from 'react';


1st part :just write text and css internal
function App() {
  const myStyles = {
    color: 'blue',
    fontSize: '18px',
    backgroundColor: 'lightgray',
    padding: '10px'
  };


  return (
    <div style={myStyles}>
      <h1>Hello, JSX with Inline Styles!</h1>
      <p>This is an example of inline styles in JSX.</p>
    </div>
  );
}


export default App;
*/
/*

add bg image and button
import React from 'react';
import './app1.css';


const App = () => (
  <div className="myStyledComponent">
    <h1>Welcome to Ginzan Onsen</h1>
    <p>Enthralled by the beauty of the most picturesque place that exists!</p>
   
    <button className="button">Explore More</button>
  </div>
);


export default App;

*/

/*
import React from 'react';
import './app1.css';
import logo from './logo.svg';
import './App.css';
import './app1.css';

const App = () => (
  <div className="myStyledComponent">
    <h1>Welcome to Ginzan Onsen</h1>
    <p>Enthralled by the beauty of the most picturesque place that exists!</p>




    <div className="detailedContent">
      <h2>About Ginzan Onsen</h2>
      <p className="smallerFont">
        Nestled in the mountains of Yamagata Prefecture, Japan, Ginzan Onsen is a charming hot spring town
        that transports you back in time. The streets are lined with traditional ryokans (Japanese inns) with
        their wooden facades beautifully illuminated by lantern light in the evenings.
      </p>
      <p className="smallerFont">
        The soothing hot springs, cobblestone pathways, and the nostalgic atmosphere make Ginzan Onsen a
        magical destination for those seeking tranquility and a glimpse into Japan's rich cultural heritage.
      </p>
      <p className="smallerFont">
        Explore the historic ryokans, indulge in delicious local cuisine, and take a stroll along the
        picturesque Ginzan River. Each season brings its own charm, from cherry blossoms in spring to the
        enchanting snowfall in winter.
      </p>
      <p className="smallerFont">
        Ginzan Onsen invites you to unwind, relax, and experience the beauty of this timeless onsen town.
        Plan your visit and immerse yourself in the serenity of Ginzan Onsen.
      </p>


      <h2>Things to Do</h2>
      <p className="smallerFont">


      <ul>
        <li>Relax in the outdoor hot springs surrounded by nature.</li>
        <li>Take a leisurely stroll along the historic streets.</li>
        <li>Visit the local shops and try traditional Japanese snacks.</li>
        <li>Stay in a ryokan for an authentic onsen experience.</li>
        <li>Enjoy seasonal festivals and events.</li>
      </ul>
            </p>




      <h2>How to Get There</h2>
      <p className="smallerFont">
        Ginzan Onsen is accessible by train and bus. The nearest station is Oishida Station in Yamagata Prefecture.
        From there, take a bus to Ginzan Onsen. The journey itself offers scenic views of the Japanese countryside.
      </p>


      <h2>Plan Your Visit</h2>
      <p className="smallerFont">
        To fully experience Ginzan Onsen, consider staying overnight in one of the ryokans. Make reservations
        in advance, especially during peak seasons. Don't forget to bring a camera to capture the beauty of
        Ginzan Onsen throughout the day.
      </p>


      <button className="button">Explore More</button>
    </div>






  </div>
);


export default App;
*/
/*
import React from 'react';
import './app1.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import NewPage from './NewPAGE.js';

const Home = () => {
  return (
    <div className="myStyledComponent">
      <h1>Welcome to Ginzan Onsen</h1>
      <p>Enthralled by the beauty of the most picturesque place that exists!</p>


      <div className="detailedContent">
        <h2>About Ginzan Onsen</h2>
        <p className="smallerFont">
          Nestled in the mountains of Yamagata Prefecture, Japan, Ginzan Onsen is a charming hot spring town
          that transports you back in time. The streets are lined with traditional ryokans (Japanese inns) with
          their wooden facades beautifully illuminated by lantern light in the evenings.
        </p>
        <p className="smallerFont">
          The soothing hot springs, cobblestone pathways, and the nostalgic atmosphere make Ginzan Onsen a
          magical destination for those seeking tranquility and a glimpse into Japan's rich cultural heritage.
        </p>
        <p className="smallerFont">
          Explore the historic ryokans, indulge in delicious local cuisine, and take a stroll along the
          picturesque Ginzan River. Each season brings its own charm, from cherry blossoms in spring to the
          enchanting snowfall in winter.
        </p>
        <p className="smallerFont">
          Ginzan Onsen invites you to unwind, relax, and experience the beauty of this timeless onsen town.
          Plan your visit and immerse yourself in the serenity of Ginzan Onsen.
        </p>


        <h2>Things to Do</h2>
        <p className="smallerFont">
          <ul>
            <li>Relax in the outdoor hot springs surrounded by nature.</li>
            <li>Take a leisurely stroll along the historic streets.</li>
            <li>Visit the local shops and try traditional Japanese snacks.</li>
            <li>Stay in a ryokan for an authentic onsen experience.</li>
            <li>Enjoy seasonal festivals and events.</li>
          </ul>
        </p>


        <h2>How to Get There</h2>
        <p className="smallerFont">
          Ginzan Onsen is accessible by train and bus. The nearest station is Oishida Station in Yamagata Prefecture.
          From there, take a bus to Ginzan Onsen. The journey itself offers scenic views of the Japanese countryside.
        </p>


        <h2>Plan Your Visit</h2>
        <p className="smallerFont">
          To fully experience Ginzan Onsen, consider staying overnight in one of the ryokans. Make reservations
          in advance, especially during peak seasons. Don't forget to bring a camera to capture the beauty of
          Ginzan Onsen throughout the day.
        </p>


        <Link to="/NewPage" className="button">
          Explore More
        </Link>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NewPage" element={<NewPage />} />
      </Routes>
    </Router>
  );
};


export default App;
*/
/*
import React, { useState } from 'react';
import './app1.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import NewPage from './NewPage.js';

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const Home = () => {
  return (
    <div className="myStyledComponent">
      <h1>Welcome to Ginzan Onsen</h1>
      <p>Enthralled by the beauty of the most picturesque place that exists!</p>
    <div className="detailedContent">
      </div>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Simulate login logic (e.g., check credentials)
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route
            path="/"
            element={<LoginPage handleLogin={handleLogin} />}
          />
        )}
        <Route path="/newpage" element={<NewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
*/
/*
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'; // Import Navigate
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the entered credentials are correct
    if (username === 'user' && password === 'password') {
      setLoginSuccess(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <UsernameInput value={username} onChange={setUsername} />
        <PasswordInput value={password} onChange={setPassword} />
        <SubmitButton />
      </form>
    </div>
  );
};

export default LoginForm;
*/
/*
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Router
import LoginPage from './LoginForm.js';
import RegisterPage from './RegisterForm.js';
import NewPage from './NewPage.js';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Simulate login logic (e.g., check credentials)
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
    } else {
      alert('Invalid username or password');
    }
  };

  return (
      <Routes>
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/NewPage" element={<NewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
*/
/*
import React, { useState } from 'react';

function App() {
  const [textBoxes, setTextBoxes] = useState([{ id: 1, value: 0 }]);

  const handleAddTextBox = () => {
    const newTextBoxes = [...textBoxes];
    newTextBoxes.push({ id: Date.now(), value: 0 });
    setTextBoxes(newTextBoxes);
  };

  const handleDeleteTextBox = (id) => {
    const newTextBoxes = textBoxes.filter((textBox) => textBox.id !== id);
    setTextBoxes(newTextBoxes);
  };

  const handleTextBoxChange = (id, event) => {
    const newValue = parseInt(event.target.value);
    const newTextBoxes = textBoxes.map((textBox) => {
      if (textBox.id === id) {
        return { ...textBox, value: isNaN(newValue) ? 0 : newValue };
      }
      return textBox;
    });
    setTextBoxes(newTextBoxes);
  };

  return (
    <div>
      {textBoxes.map((textBox) => (
        <div key={textBox.id}>
          <input
            type="text"
            value={textBox.value}
            onChange={(event) => handleTextBoxChange(textBox.id, event)}
          />
          <button onClick={() =>
handleDeleteTextBox(textBox.id)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddTextBox}>Add</button>
      <div>Total textboxes: {textBoxes.length}</div>
    </div>
  );
}

export default App;
*/
/*
import React, { useState } from 'react';

function App() {
  const [textBoxes, setTextBoxes] = useState([{ id: 1, value: 0 }]);

  const handleAddTextBox = () => {
    const newTextBoxes = [...textBoxes];
    newTextBoxes.push({ id: Date.now(), value: 0 });
    setTextBoxes(newTextBoxes);
  };

  const handleDeleteTextBox = (id) => {
    const newTextBoxes = textBoxes.filter((textBox) => textBox.id !== id);
    setTextBoxes(newTextBoxes);
  };

  const handleTextBoxChange = (id, event) => {
    const newValue = parseInt(event.target.value);
    const newTextBoxes = textBoxes.map((textBox) => {
      if (textBox.id === id) {
        return { ...textBox, value: isNaN(newValue) ? 0 : newValue };
      }
      return textBox;
    });
    setTextBoxes(newTextBoxes);
  };

  // Calculate the sum of all values in textboxes
  const sum = textBoxes.reduce((total, textBox) => total + textBox.value, 0);

  return (
    <div>
      {textBoxes.map((textBox) => (
        <div key={textBox.id}>
          <input
            type="text"
            value={textBox.value}
            onChange={(event) => handleTextBoxChange(textBox.id, event)}
          />
          <button onClick={() =>
handleDeleteTextBox(textBox.id)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddTextBox}>Add</button>
      <div>Total number of text boxes: {textBoxes.length}</div>
      <div>Summation: {sum}</div>
    </div>
  );
}

export default App;

*/
/*
import React, { useState } from 'react';

function App() {
  const [textBoxes, setTextBoxes] = useState([{ id: 1, value: 0, warning: '' }]);

  const handleAddTextBox = () => {
    const newTextBoxes = [...textBoxes];
    newTextBoxes.push({ id: Date.now(), value: 0, warning: '' });
    setTextBoxes(newTextBoxes);
  };

  const handleDeleteTextBox = (id) => {
    const newTextBoxes = textBoxes.filter((textBox) => textBox.id !== id);
    setTextBoxes(newTextBoxes);
  };

  const handleTextBoxChange = (id, event) => {
    const newValue = parseInt(event.target.value);
    const newTextBoxes = textBoxes.map((textBox) => {
      if (textBox.id === id) {
        if (isNaN(newValue)) {
          return { ...textBox, value: 0, warning: 'Please enter a number' };
        } else {
          return { ...textBox, value: newValue, warning: '' };
        }
      }
      return textBox;
    });
    setTextBoxes(newTextBoxes);
  };

  // Calculate the sum of all values in textboxes
  const sum = textBoxes.reduce((total, textBox) => total + textBox.value, 0);

  return (
    <div>
      {textBoxes.map((textBox) => (
        <div key={textBox.id}>
          <input
            type="text"
            value={textBox.value}
            onChange={(event) => handleTextBoxChange(textBox.id, event)}
          />
          <button onClick={() => handleDeleteTextBox(textBox.id)}>Delete</button>
          <div style={{ color: 'red' }}>{textBox.warning}</div>
        </div>
      ))}
      <button onClick={handleAddTextBox}>Add</button>
      <div>Total number of text boxes: {textBoxes.length}</div>
      <div>Summation: {sum}</div>
    </div>
  );
}

export default App;
*/
/*
import React, { useState } from 'react';

function App() {
  const [textBoxes, setTextBoxes] = useState([{ id: 1, value: '', warning: '' }]);

  const handleAddTextBox = () => {
    const newTextBoxes = [...textBoxes];
    newTextBoxes.push({ id: Date.now(), value: '', warning: '' });
    setTextBoxes(newTextBoxes);
  };

  const handleDeleteTextBox = (id) => {
    const newTextBoxes = textBoxes.filter((textBox) => textBox.id !== id);
    setTextBoxes(newTextBoxes);
  };

  const handleTextBoxChange = (id, event) => {
    const newValue = event.target.value;
    const newTextBoxes = textBoxes.map((textBox) => {
      if (textBox.id === id) {
        if (!/^\d*$/.test(newValue)) {
          return { ...textBox, value: newValue, warning: 'Please enter digits only' };
        } else {
          return { ...textBox, value: newValue, warning: '' };
        }
      }
      return textBox;
    });
    setTextBoxes(newTextBoxes);
  };

  // Calculate the sum of all values in textboxes
  const sum = textBoxes.reduce((total, textBox) => total + parseInt(textBox.value), 0);

  return (
    <div>
      {textBoxes.map((textBox) => (
        <div key={textBox.id}>
          <input
            type="text"
            value={textBox.value}
            onChange={(event) => handleTextBoxChange(textBox.id, event)}
          />
          <button onClick={() => handleDeleteTextBox(textBox.id)}>Delete</button>
          <div style={{ color: 'red' }}>{textBox.warning}</div>
        </div>
      ))}
      <button onClick={handleAddTextBox}>Add</button>
      <div>Total number of text boxes: {textBoxes.length}</div>
      <div>Summation: {sum}</div>
    </div>
  );
}

export default App;
*/
/*
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center mb-4">Task Manager</h1>
          <Form onSubmit={(e) => { e.preventDefault(); addTask(); }}>
            <Form.Group controlId="taskInput">
              <Form.Control
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-3">
              Add Task
            </Button>
          </Form>
          <ListGroup>
            {tasks.map((task, index) => (
              <ListGroup.Item key={index}>
                {task}
                <span
                  className="float-right text-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={() => deleteTask(index)}
                >
                  &times;
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
*/
/*
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center mb-4">Task Manager</h1>
          <Form onSubmit={(e) => { e.preventDefault(); addTask(); }}>
            <Form.Group controlId="taskInput">
              <Form.Control
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-3">
              Add Task
            </Button>
          </Form>
          <ListGroup>
            {tasks.map((task, index) => (
              <ListGroup.Item key={index}>
                {task}
                <span
                  className="float-right text-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={() => deleteTask(index)}
                >
                  &times;
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
*/
/*
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editedTask, setEditedTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = editedTask;
    setTasks(updatedTasks);
    setShowEditModal(false);
  };

  const handleEditModalShow = (index, task) => {
    setEditIndex(index);
    setEditedTask(task);
    setShowEditModal(true);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center mb-4">Task Manager</h1>
          <Form onSubmit={(e) => { e.preventDefault(); addTask(); }}>
            <Form.Group controlId="taskInput">
              <Form.Control
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-3">
              Add Task
            </Button>
          </Form>
          <ListGroup>
            {tasks.map((task, index) => (
              <ListGroup.Item key={index}>
                {task}
                <span className="float-right">
                  <Button
                    variant="info"
                    className="mx-2"
                    onClick={() => handleEditModalShow(index, task)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </Button>
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={editTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
*/
/*
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editedTask, setEditedTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = editedTask;
    setTasks(updatedTasks);
    setShowEditModal(false);
  };

  const handleEditModalShow = (index, task) => {
    setEditIndex(index);
    setEditedTask(task);
    setShowEditModal(true);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center mb-4">Task Manager</h1>
          <Form onSubmit={(e) => { e.preventDefault(); addTask(); }}>
            <Form.Group controlId="taskInput">
              <Form.Control
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-3">
              Add Task
            </Button>
          </Form>
          <ListGroup>
            {tasks.map((task, index) => (
              <ListGroup.Item key={index}>
                {task}
                <span className="float-right">
                  <Button
                    variant="primary" // Set variant to primary
                    className="mx-2"
                    onClick={() => handleEditModalShow(index, task)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </Button>
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={editTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
*/
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Part2() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [editedTask, setEditedTask] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, { title: task, description }]);
    setTask("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = {
      title: editedTask,
      description: editedDescription,
    };
    setTasks(updatedTasks);
    setShowEditModal(false);
  };

  const handleEditModalShow = (index, task, description) => {
    setEditIndex(index);
    setEditedTask(task);
    setEditedDescription(description);
    setShowEditModal(true);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center mb-4">Task Manager</h1>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addTask();
            }}
          >
            <Form.Group controlId="taskInput">
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="descriptionInput">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-3">
              Add Task
            </Button>
          </Form>
          <ListGroup>
            {tasks.map((task, index) => (
              <ListGroup.Item key={index}>
                <div>
                  <h5>{task.title}</h5>
                  <p className="text-muted">{task.description}</p>
                </div>
                <span className="float-right">
                  <Button
                    variant="primary"
                    className="mx-2"
                    onClick={() =>
                      handleEditModalShow(index, task.title, task.description)
                    }
                  >
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => deleteTask(index)}>
                    Delete
                  </Button>
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <Form.Control
            as="textarea"
            rows={3}
            className="mt-3"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={editTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Part2;
