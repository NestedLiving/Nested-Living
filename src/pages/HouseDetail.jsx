import { useCallback, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getHouseDetail } from "../services/HouseService";
import Map from "../components/Map";
import ReservationForm from "../components/ReservetionForm";
import { createComment, getComments } from "../services/CommentService";
import "../components/HouseDetail.css";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { getCurrentUser } from "../services/UserService";
import { deleteHouse } from "../services/HouseService";


const HouseDetail = ({ refetch }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [commentText, setCommentText] = useState(''); 
    const [comments, setComments] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    const [house, setHouse] = useState({});
    const [loading, setLoading] = useState(true);
    

    const myDateFunction = (date) => {
        const newDate = new Date(date);
        const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return newDate.toLocaleDateString(undefined, options);
    }

    const images = house.images && house.images.map((image, index) => ({
        original: image,
        thumbnail: image,
        description: `House ${index}`
    }));

    const fetchUser = useCallback(() => {
        getCurrentUser()
            .then((user) => {
                setCurrentUser(user);
            })
            .catch((error) => console.error(error));
    }, []);


    const fetchHouseData = useCallback(() => {
        getHouseDetail(id)
            .then((house) => {
                setHouse(house);
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, [id]);

    const fetchComments = useCallback(() => {
        if (!loading) {
            getComments(id)
                .then((comments) => {
                    setComments(comments);
                })
                .catch((error) => console.error(error));
        }
    }, [id, loading]);

    useEffect(() => {
        fetchHouseData();
        fetchComments();
        fetchUser();
    }, [fetchHouseData, fetchComments, fetchUser]);

    const handleCreateComment = () => {
        createComment(id, commentText)
            .then(response => {
                console.log('Comment created', response);
                setCommentText(''); 
                refetch && refetch();
                fetchComments(); 
            })
            .catch(error => {
                console.error('Error creating comment', error);
            });
    }
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        console.log(house.startDate, house.endDate)
        const day = date.getDate();
        const month = date.getMonth() + 1; // Sumamos 1 porque los meses van de 0 a 11
        const year = date.getFullYear();
        return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    };

    const onDelete = () => {
        
        if (window.confirm('Are you sure you want to delete this house?')) {
            deleteHouse(id)
                .then(() => {
                    navigate('/');
                })
                .catch((error) => console.error(error));
        }
    }

    return (
        <div className="container mt-5">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bg-light p-3 rounded">
                                <ImageGallery items={images} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bg-light p-3 rounded">
                                <h2>{house.title}</h2>
                                <p><strong>Description:</strong> {house.description}</p>
                                <p><strong>Amenities:</strong> {house.amenities}</p>
                                <p><strong>Price:</strong> €{house.price}</p>
                                <p><strong>Location:</strong> {house.location}</p>
                                <p>
                                    <strong>Available from:</strong> {formatDate(house.startDate)} to {formatDate(house.endDate)}
                                </p>
                            </div>
                        </div>
                    </div>
                        {currentUser && house.owner === currentUser.id && (
                            <Link to={`/houses/${id}/edit`} className="btn btn-success">Edit</Link>
                        )}
                        {currentUser && house.owner === currentUser.id && (
                            <Link to={`/houses/${id}/delete`} onClick={onDelete} className="btn btn-success">delete</Link>
                        )}
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="bg-light p-3 rounded">
                                <h3>Location</h3>
                                <div style={{ width: '100%', height: '100%' }}>
                                    <Map location={house.location} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bg-light p-3 rounded">
                                <h3>Reservation</h3>
                                <ReservationForm houseId={id} />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <div className="bg-light p-3 rounded">
                                <h3>Comments</h3>
                                <div className="comment-container">
                                    {comments.map((comment, index) => (
                                        <div className="comment mb-3" key={index}>
                                            <div className="d-flex align-items-center">
                                                <img src={comment.writer.avatar} alt="Avatar" className="avatar-small" />
                                                <Link to={`/users/${comment.writer._id}`} className="username">
                                                    {comment.writer.username}
                                                </Link>
                                                <span className="timestamp">
                                                    {myDateFunction(comment.createdAt)}
                                                </span>
                                            </div>
                                            <p className="comment-text">{comment.text}</p>
                                        </div>
                                    ))}
                                </div>
                                    {!currentUser || (currentUser && house.owner !== currentUser.id) && (
                                        <div className="bg-white p-3 rounded mb-3">
                                            <h4>Add a comment</h4>
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control"
                                                    value={commentText}
                                                    onChange={(event) => setCommentText(event.target.value)}
                                                    placeholder="Add your comment here..."
                                                ></textarea>
                                            </div>
                                            <button className="btn btn-primary" onClick={handleCreateComment}>
                                                Add comment
                                            </button>
                                        </div>
                                    )}

                            </div>

                        </div>
                    </div>
                </div>
            )}

        </div>

    );
}


export default HouseDetail;
