import React from "react";
import { useState, useRef, useCallback, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

import "./App.css";

function App() {
    const [showModal, setShowModal] = useState(false);
    //const [imgSrc, setImgSrc] = useState(null);
    const [caption, setCaption] = useState(null);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [posts, setPosts] = useState([]);
    const [reload, setReload] = useState(false);
    const [clubName, setClubName] = useState(null);


    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleShowModal = () => setShowModal(true);

    //const webcamRef = useRef(null);
    /*const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);*/

    const uploadPost = () => {
        const body = {
            username: username,
            caption: caption,
           // image: imgSrc.replace("data:image/webp;base64", ""),
            clubName: clubName,
            email: email
        };

        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const oururl = "http://localhost:9000/testAPI";
        const finalurl = proxyurl+oururl;
        fetch(
            oururl,
            {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
            .then((response) => response.json())
            .then((data) => {
               console.log(data);
                //setImgSrc(null);
                setCaption(null);
                setShowModal(false);
                setReload(!reload);
                //setEmail(null);
                //setClubName(null);
            });
    };

    useEffect(() => {
        // Update the document title using the browser API
        fetch("https://9wr63b62h3.execute-api.us-east-1.amazonaws.com/default/wicstagram")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data.Items);
            });
    }, [reload]);

    const Post = (post) => {
        const date = new Date(post.timestamp * 1000);
        const dateStr = date.toLocaleDateString('en-US', {
            weekday: 'long', hour: 'numeric', minute: 'numeric'
        })
        return (
            <Card style={{ width: '60vw', marginTop: '20px', marginBottom: '20px', textAlign: 'left' }}>
                <Card.Header>Review of {post.clubName}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {post.caption}
                        <br></br>
                        {post.username}
                        <br></br>
                        <small>{dateStr}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    };

    return (
        <div className="App">
            <h1>Wicstagram</h1>

            <Button variant="primary" onClick={handleShowModal}>
                Post a Review
      </Button>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {posts.map(Post)}
            </div>

            <Modal
                show={showModal}
                onHide={handleCloseModal}
                dialogClassName="create-post-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create post</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group>
                            <Form.Label>Your Name (Optional) </Form.Label>
                            <Form.Control
                                onChange={(x) => setUsername(x.target.value)}
                                value={username}
                                placeholder="Enter username"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Club Name</Form.Label>
                            <Form.Control
                                onChange={(x) => setClubName(x.target.value)}
                                value={clubName}
                                placeholder="Enter the name of the club you're reviewing here."
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                onChange={(x) => setEmail(x.target.value)}
                                value={email}
                                placeholder="Enter your @virginia.edu email"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Review Text</Form.Label>
                            <Form.Control
                                onChange={(x) => setCaption(x.target.value)}
                                value={caption}
                                placeholder="Enter caption"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        onClick={uploadPost}
                       // disabled={caption == null || caption === '' || username == null || username === ''}
                    >
                        Post
          </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default App;
