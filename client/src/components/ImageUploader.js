import React from 'react';
import ImageUploader from 'react-images-upload';

class App extends React.Component {
    // continue this
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        console.log(picture);
        this.setState({
            pictures: this.state.pictures.concat(picture)
        });
    }

    render() {
        return (
            <ImageUploader
                buttonText="Choose album cover"
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
            />
        );
    }
}

export default App;
