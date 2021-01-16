import React, { Component } from 'react'

export default class Posts extends Component {

    state = {
        posts: []
    }

    // Because the fetching of the data is asynchronous we must use async await
    async componentDidMount() {
        const res = await fetch("http://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        console.log(data)
        this.setState({
            posts: data
        })
    }
    
    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map( post => {
                        return <div key = { post.id } >
                            <h2>{ post.title }</h2>
                            <p>{ post.body } - User: { post.userId } </p>
                        </div>
                    })
                }
            </div>
        )
    }
}
