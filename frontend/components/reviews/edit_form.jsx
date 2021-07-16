import React from 'recact';


class EditForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            description: props.review.description,
            star_rating: props.review.star_rating
        }
    }

    

}

export default EditForm