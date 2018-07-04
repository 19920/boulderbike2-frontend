import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {Row} from 'reactstrap';
import axios from 'axios';
import queryString from 'query-string';

import Images from './Images';

export default class Gallery extends Component {
    constructor(props) {
        super(props)
        this.flickrURL = this.flickrURL.bind(this)
        this.getImages = this.getImages.bind(this)
        this.state = {
                images: [],
                hasMorePhotos: true,
                loadMore: true,
                page: 1
            }
    }

    flickrURL(page) {
        const address = "https://api.flickr.com/services/rest/?"
        return address + queryString.stringify({
            page: page,
            tags: "boulderbiketour,bikerace",
            api_key: '8558b3df1302774444965b20db591e74',
            format: 'json',
            method: "flickr.photos.search",
            nojsoncallback: 1,
            per_page: 1
        })
    }

    imageURL(photo) {
        return 'http://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg'
    }

    getImages(page) {
        axios.get(this.flickrURL(page))
            .then(response => {
                    var images = this.state.images
                    response.data.photos.photo.map((image) => {
                    images.push(image)
                    })
            this.setState({images: images})
            this.setState((prevState, props) => ({
                page: prevState.page + 1
            }));
            })
        .catch(error => console.log(error))
    }


render(){
    const loader = <div className="loader">Loading ...</div>;
    var photos = [];
    this.state.images.map( (data, I) => {
        photos.push(
        <Images url={this.imageURL(data)} key={I} />
        )
    })

    return (
            <Row className="photoGrid container text-center">
            <InfiniteScroll
            pageStart={0}
            initialLoad={true}
            loadMore={this.getImages}
            hasMore={this.state.hasMorePhotos}
            loader={loader}>
            <h4 className="text-center">Photos</h4>
            <div className="container-fluid">{photos}</div>
            </InfiniteScroll>
            </Row>
           )
}
}
