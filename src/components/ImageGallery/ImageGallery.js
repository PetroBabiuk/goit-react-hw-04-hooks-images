import { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Button from 'components/Button';
import ImageGalleryItem from '../ImageGalleryItem';
import picturesApi from '../../servises/picturesApi';

// const ImageGallery = ({ query, onClick, onChangeQuery }) => {
//     // const [images, setImages] = useState([]);
//     // const [searchQuery, setSearchQuery] = useState('');
//     // const [error, setError] = useState(null);
//     // const [pages, setPages] = useState(0);
//     // const [currentPage, setCurrentPage] = useState(1);
//     // const [status, setStatus] = useState('idle');



//     // const hendleChangeQuery = query => {
//     //     setSearchQuery(onChangeQuery());
//     //     setCurrentPage(1);
//     //     setImages([]);
//     // }

//     // useEffect(() => {
//     //     setStatus('pending');
//     //     picturesApi({searchQuery})
//     //         .then(images => {
//     //             setImages(prevImages => {
//     //                 setStatus('resolved');
//     //                 return [...prevImages, ...images.hits];
//     //             });
//     //             setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
//     //             setPages(images.totalHits / 12);
//     //         });
//     //     autoScroll();
//     // },[searchQuery])

//     // useEffect(() => {
//     //     if (searchQuery !== query) {
//     //         setStatus('idle');
//     //         setImages([]);
//     //         // setPage(1);
//     //         setSearchQuery(query);
//     //     }
//     // }, [query, searchQuery]);

//     // useEffect(() => {
//     //     if (query.trim() === '') {
//     //         setStatus('idle');
//     //     } else {
//     //         if (query ===)
//     //     }
//     // }, [query]);

//     // if ( page === 1 && searchQuery === query) {
//     //             setStatus('pending');
//     //             setPage(1);
//     //             picturesApi(query, page).then((images) => {
//     //                 if (images.totalHits === 0) {
//     //                     throw new Error(`Nothing with name ${query} was not found`);
//     //                 }
//     //                 console.log(images.hits);
//     //                 setImages(images.hits);
//     //                 setStatus('resolved');
//     //                 setPages(images.totalHits / 12);
//     //             })
//     //                 .catch(error => {
//     //                     setError(error);
//     //                     setStatus('rejected');
//     //                 });
//     //             autoScroll();
//     //         } else {
//     //             setStatus('another-pending');
//     //             picturesApi(query, page)
//     //                 .then(images => {
//     //                     setImages(prevState => [...prevState, ...images.hits]);
//     //                     setStatus('resolved');
//     //                 })
//     //                 .catch(error => {
//     //                     setError(error);
//     //                     setStatus('rejected');
//     //                 });
//     //             autoScroll();
//     //         }

//     // useEffect(() => {
//     //     if (query) {
//     //         resetPage();
//     //         setStatus('pending');
//     //         setPage(1);
//     //         picturesApi(query, 1)
//     //             .then(images => {
//     //                 if (images.totalHits === 0) {
//     //                     throw new Error(`Nothing with name ${query} was not found`);
//     //                 }
//     //                 setImages([...images.hits]);
//                     // setStatus('resolved');
//                     // setPages(images.totalHits / 12);
//     //             })
//     //             .catch(error => {
//     //                 setError(error);
//     //                 setStatus('rejected');
//     //             });
//     //         autoScroll();
//     //     }

//     //     if (page && page > 1) {
//             // setStatus('another-pending');
//             // picturesApi(query, page)
//             //     .then(images => {
//             //         setImages(prevState => [...prevState, ...images.hits]);
//             //         setStatus('resolved');
//             //     })
//             //     .catch(error => {
//             //         setError(error);
//             //         setStatus('rejected');
//             //     });
//             // autoScroll();
//     //     }
//     // }, [page, query]);

//     const autoScroll = () => {
//         window.scrollTo({
//             top: document.documentElement.scrollHeight,
//             behavior: 'smooth',
//         });
//     };

//     const handleLoadMore = () => {
//         setCurrentPage(page => page + 1);
//     };

//     // const resetPage = () => {
//     //     setPage(1);
//     // }

    
// if (status === 'idle') {
//             return (
//                 <h1>Please, enter something</h1>
//             );
//         }

//         if (status === 'pending') {
//             return (
//                 <Loader
//                     type="ThreeDots"
//                     color="#3f51b5"
//                     height={280}
//                     width={280}
//                 />
//             );
//         }

//         if (status === 'another-pending') {
//             return (
//                 <>
//                     <ul className="ImageGallery">
//                         <ImageGalleryItem images={images} onClick={onClick} />
//                     </ul>
//                     <Loader
//                         type="ThreeDots"
//                         color="#3f51b5"
//                         height={280}
//                         width={280}
//                     />
//                 </>
//             );
//         }

//         if (status === 'rejected') {
//             return (
//                 <h1>{error.message}</h1>
//             )
//         }

//         if (status === 'resolved') {
//             return (
//                 <>
//                     <ul className="ImageGallery">
//                         <ImageGalleryItem images={images} onClick={onClick} />
//                     </ul>
//                     {pages > currentPage ? <Button onClick={handleLoadMore} /> : <></>}
//                 </>
//             );
//     }
// }

class ImageGallery extends Component {
    static propTypes = {
    query: PropTypes.string,
    onClick: PropTypes.func,
  };

    state = {
        images: [],
        error: null,
        pages: 0,
        page: 1,
        status: 'idle',
    };

    async componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevProps.query;
        const prevPage = prevState.page;
        const nextQuery = this.props.query;
        const nextPage = this.state.page;

        if (prevQuery !== nextQuery) {
            this.resetPage();
            this.setState({ status: 'pending', page: 1 })
            await picturesApi(nextQuery, 1)
                .then(images => {
                    if (images.totalHits === 0) {
                        throw new Error(`Nothing with name ${nextQuery} was not found`);
                    }
                    this.setState((prevState) => ({
                        images: [...images.hits],
                        status: 'resolved',
                        pages: images.totalHits/12,
                    }));
                })
                .catch(error => this.setState({ error, status: 'rejected' }));
            this.autoScroll();
        }

        if (prevPage !== nextPage && nextPage > 1) {
            this.setState({ status: 'another-pending'})
            await picturesApi(nextQuery, nextPage)
                .then(images => {
                    this.setState((prevState) => ({ images: [...prevState.images, ...images.hits], status: 'resolved', }));
                })
                .catch(error => this.setState({ error, status: 'rejected' }));
             this.autoScroll();
        }
    }

    autoScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

    handleLoadMore = () => {
        this.setState((prevState) => {
            return { page: prevState.page + 1 }
        })
    };
    
    resetPage = () => {
        this.setState({page: 1})
    }

    render() {
        const { images, error, status, pages, page} = this.state;

        if (status === 'idle') {
            return (
                <h1>Please, enter something</h1>
            );
        }

        if (status === 'pending') {
            return (
                <Loader
                    type="ThreeDots"
                    color="#3f51b5"
                    height={280}
                    width={280}
                />
            );
        }

        if (status === 'another-pending') {
            return (
                <>
                    <ul className="ImageGallery">
                        <ImageGalleryItem images={images} onClick={this.props.onClick} />
                    </ul>
                    <Loader
                        type="ThreeDots"
                        color="#3f51b5"
                        height={280}
                        width={280}
                    />
                </>
            );
        }

        if (status === 'rejected') {
            return (
                <h1>{error.message}</h1>
            )
        }

        if (status === 'resolved') {
            return (
                <>
                    <ul className="ImageGallery">
                        <ImageGalleryItem images={images} onClick={this.props.onClick} />
                    </ul>
                    {pages >= page ? <Button onClick={this.handleLoadMore} /> : <></>}
                </>
            );
        }
    }
}

ImageGallery.propTypes = {
    query: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ImageGallery;